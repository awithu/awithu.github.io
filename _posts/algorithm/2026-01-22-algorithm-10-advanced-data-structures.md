---
layout: post
title:  "고급 자료구조와 알고리즘: 실전 시스템 구현"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 자료구조, 해시테이블, 힙, B트리, 고급정렬]
description: "실전 시스템에서 사용되는 고급 자료구조와 알고리즘들을 배웁니다."
---

# 고급 자료구조와 알고리즘: 실전 시스템 구현

지금까지 기본적인 알고리즘들을 배웠습니다. 이제 실전 시스템에서 실제로 사용되는 고급 자료구조와 알고리즘들을 알아보겠습니다. 데이터베이스, 파일 시스템, 검색 엔진 등에서 핵심적으로 사용되는 기술들입니다.

## 1. 해시 테이블 (Hash Table)

### 해시 함수의 원리
키를 고정된 크기의 값으로 매핑하는 함수입니다.

```python
def simple_hash(key, table_size):
    """간단한 해시 함수 예시"""
    return sum(ord(char) for char in str(key)) % table_size

print(simple_hash("hello", 10))  # 2
print(simple_hash("world", 10))  # 1
```

### 충돌 해결 기법

#### 1. 체이닝 (Chaining)
```python
class HashTableChaining:
    """체이닝 방식 해시 테이블"""

    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]  # 리스트의 리스트

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        # 기존 키가 있으면 업데이트
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        # 새 키면 추가
        self.table[index].append((key, value))

    def get(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return True
        return False

# 테스트
ht = HashTableChaining(10)
ht.insert("apple", 5)
ht.insert("banana", 7)
print(ht.get("apple"))   # 5
print(ht.get("banana"))  # 7
```

#### 2. 개방 주소법 (Open Addressing)
```python
class HashTableOpenAddressing:
    """선형 탐사 방식 해시 테이블"""

    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        self.deleted = object()  # 삭제 표시용

    def _hash(self, key):
        return hash(key) % self.size

    def _probe(self, index, i):
        """선형 탐사"""
        return (index + i) % self.size

    def insert(self, key, value):
        index = self._hash(key)

        for i in range(self.size):
            probe_index = self._probe(index, i)

            if (self.table[probe_index] is None or
                self.table[probe_index] is self.deleted):
                self.table[probe_index] = (key, value)
                return True

            if self.table[probe_index][0] == key:
                self.table[probe_index] = (key, value)
                return True

        return False  # 테이블이 가득 참

    def get(self, key):
        index = self._hash(key)

        for i in range(self.size):
            probe_index = self._probe(index, i)

            if self.table[probe_index] is None:
                return None

            if (self.table[probe_index] is not self.deleted and
                self.table[probe_index][0] == key):
                return self.table[probe_index][1]

        return None

# 테스트
ht = HashTableOpenAddressing(10)
ht.insert("apple", 5)
ht.insert("banana", 7)
print(ht.get("apple"))   # 5
```

### 해시 함수 설계
```python
def djb2_hash(key):
    """DJB2 해시 함수"""
    hash_value = 5381
    for char in str(key):
        hash_value = ((hash_value << 5) + hash_value) + ord(char)
    return hash_value

def sdbm_hash(key):
    """SDBM 해시 함수"""
    hash_value = 0
    for char in str(key):
        hash_value = ord(char) + (hash_value << 6) + (hash_value << 16) - hash_value
    return hash_value

def combined_hash(key, table_size):
    """다중 해시 함수 결합"""
    h1 = djb2_hash(key)
    h2 = sdbm_hash(key)
    return (h1 + h2) % table_size
```

## 2. 힙 (Heap)과 우선순위 큐

### 힙의 속성
- **완전 이진 트리**: 마지막 레벨을 제외하고 모든 레벨이 가득 차 있음
- **힙 속성**: 부모 노드가 자식 노드보다 크거나 작음 (최대힙/최소힙)

### 힙 정렬 구현
```python
def heapify(arr, n, i):
    """힙 속성 유지"""
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    # 왼쪽 자식이 더 큰 경우
    if left < n and arr[left] > arr[largest]:
        largest = left

    # 오른쪽 자식이 더 큰 경우
    if right < n and arr[right] > arr[largest]:
        largest = right

    # largest가 루트가 아닌 경우 교환
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    """힙 정렬"""
    n = len(arr)

    # 최대 힙 구성
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # 힙에서 요소를 하나씩 추출
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # 최대값을 끝으로 이동
        heapify(arr, i, 0)  # 힙 속성 복원

# 테스트
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("힙 정렬 결과:", arr)
```

### 우선순위 큐 구현
```python
import heapq

class PriorityQueue:
    """최소 힙 기반 우선순위 큐"""

    def __init__(self):
        self.heap = []
        self.entry_count = 0

    def push(self, priority, item):
        """항목 삽입"""
        entry = (priority, self.entry_count, item)
        heapq.heappush(self.heap, entry)
        self.entry_count += 1

    def pop(self):
        """최소 우선순위 항목 추출"""
        if self.heap:
            return heapq.heappop(self.heap)[2]
        return None

    def peek(self):
        """최소 우선순위 항목 확인"""
        if self.heap:
            return self.heap[0][2]
        return None

    def is_empty(self):
        return len(self.heap) == 0

# 테스트
pq = PriorityQueue()
pq.push(3, "low")
pq.push(1, "high")
pq.push(2, "medium")

print(pq.pop())  # "high" (우선순위 1)
print(pq.pop())  # "medium" (우선순위 2)
```

## 3. B-트리와 데이터베이스 인덱싱

### B-트리의 구조
- **균형 잡힌 다진 트리**: 모든 리프 노드가 같은 레벨에 있음
- **차수(Order)**: 노드가 가질 수 있는 최대 자식 수
- **키 분배**: 각 노드가 여러 개의 키를 가짐

```python
class BTreeNode:
    """B-트리 노드"""

    def __init__(self, leaf=False):
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    """간단한 B-트리 구현 (차수 t=2)"""

    def __init__(self, t=2):
        self.root = BTreeNode(True)
        self.t = t  # 최소 차수

    def search(self, key, node=None):
        """키 검색"""
        if node is None:
            node = self.root

        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1

        if i < len(node.keys) and key == node.keys[i]:
            return True

        if node.leaf:
            return False

        return self.search(key, node.children[i])

    def insert(self, key):
        """키 삽입"""
        root = self.root

        if len(root.keys) == 2 * self.t - 1:
            # 루트가 가득 찬 경우 분할
            new_root = BTreeNode(False)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root

        self._insert_non_full(self.root, key)

    def _insert_non_full(self, node, key):
        """가득 차지 않은 노드에 키 삽입"""
        i = len(node.keys) - 1

        if node.leaf:
            # 리프 노드에 삽입
            node.keys.append(None)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            # 내부 노드 처리
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1

            if len(node.children[i].keys) == 2 * self.t - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1

            self._insert_non_full(node.children[i], key)

    def _split_child(self, parent, i):
        """자식 노드 분할"""
        t = self.t
        y = parent.children[i]
        z = BTreeNode(y.leaf)

        # 새로운 노드에 키 이동
        parent.children.insert(i + 1, z)
        parent.keys.insert(i, y.keys[t - 1])

        z.keys = y.keys[t: (2 * t) - 1]
        y.keys = y.keys[0: t - 1]

        if not y.leaf:
            z.children = y.children[t: 2 * t]
            y.children = y.children[0: t]

# 테스트
btree = BTree(t=2)
for key in [10, 20, 5, 6, 12, 30, 7, 17]:
    btree.insert(key)

print("B-트리에서 12 검색:", btree.search(12))  # True
print("B-트리에서 15 검색:", btree.search(15))  # False
```

### 데이터베이스 인덱싱
- **B-트리 인덱스**: 범위 쿼리에 효율적
- **해시 인덱스**: 등가 쿼리에 효율적
- **비트맵 인덱스**: 저카디널리티 컬럼에 효율적

## 4. 고급 정렬 알고리즘

### 계수 정렬 (Counting Sort)
```python
def counting_sort(arr):
    """계수 정렬 (범위가 제한된 정수에 효율적)"""
    if not arr:
        return arr

    # 범위 파악
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1

    # 계수 배열 생성
    count = [0] * range_val
    output = [0] * len(arr)

    # 빈도 계산
    for num in arr:
        count[num - min_val] += 1

    # 누적 합 계산
    for i in range(1, len(count)):
        count[i] += count[i - 1]

    # 정렬된 배열 생성
    for num in reversed(arr):
        output[count[num - min_val] - 1] = num
        count[num - min_val] -= 1

    return output

# 테스트
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("계수 정렬 결과:", sorted_arr)
```

### 기수 정렬 (Radix Sort)
```python
def counting_sort_by_digit(arr, exp):
    """자릿수별 계수 정렬"""
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # 현재 자릿수 빈도 계산
    for num in arr:
        digit = (num // exp) % 10
        count[digit] += 1

    # 누적 합 계산
    for i in range(1, 10):
        count[i] += count[i - 1]

    # 정렬
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1

    return output

def radix_sort(arr):
    """기수 정렬"""
    if not arr:
        return arr

    # 최대값 찾기
    max_val = max(arr)

    # 각 자릿수별 정렬
    exp = 1
    while max_val // exp > 0:
        arr = counting_sort_by_digit(arr, exp)
        exp *= 10

    return arr

# 테스트
arr = [170, 45, 75, 90, 802, 24, 2, 66]
sorted_arr = radix_sort(arr)
print("기수 정렬 결과:", sorted_arr)
```

## 5. 고급 트리 구조

### AVL 트리 (균형 이진 탐색 트리)
```python
class AVLNode:
    """AVL 트리 노드"""

    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    """AVL 트리 구현"""

    def get_height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def rotate_right(self, y):
        """오른쪽 회전"""
        x = y.left
        T2 = x.right

        x.right = y
        y.left = T2

        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))

        return x

    def rotate_left(self, x):
        """왼쪽 회전"""
        y = x.right
        T2 = y.left

        y.left = x
        x.right = T2

        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))

        return y

    def insert(self, root, key):
        """AVL 트리에 노드 삽입"""
        if not root:
            return AVLNode(key)

        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        balance = self.get_balance(root)

        # 불균형 처리
        if balance > 1 and key < root.left.key:  # LL
            return self.rotate_right(root)

        if balance < -1 and key > root.right.key:  # RR
            return self.rotate_left(root)

        if balance > 1 and key > root.left.key:  # LR
            root.left = self.rotate_left(root.left)
            return self.rotate_right(root)

        if balance < -1 and key < root.right.key:  # RL
            root.right = self.rotate_right(root.right)
            return self.rotate_left(root)

        return root

# 테스트
avl = AVLTree()
root = None
for key in [10, 20, 30, 40, 50, 25]:
    root = avl.insert(root, key)
```

## 6. 실전 시스템 적용

### 메모리 캐시 (LRU Cache)
```python
from collections import OrderedDict

class LRUCache:
    """Least Recently Used 캐시"""

    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1

        # 최근에 사용된 것으로 이동
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            # 기존 값 업데이트
            self.cache.move_to_end(key)
        else:
            # 새 값 추가
            if len(self.cache) >= self.capacity:
                # 가장 오래된 항목 제거
                self.cache.popitem(last=False)
            self.cache[key] = value
            self.cache.move_to_end(key)

# 테스트
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # 1
cache.put(3, 3)        # 2 제거
print(cache.get(2))    # -1 (제거됨)
```

### 블룸 필터 (Bloom Filter)
```python
import hashlib

class BloomFilter:
    """블룸 필터 구현"""

    def __init__(self, size, hash_count):
        self.size = size
        self.hash_count = hash_count
        self.bit_array = [0] * size

    def _hashes(self, item):
        """여러 해시 함수 생성"""
        hashes = []
        for i in range(self.hash_count):
            hash_obj = hashlib.md5((str(item) + str(i)).encode())
            hash_val = int(hash_obj.hexdigest(), 16) % self.size
            hashes.append(hash_val)
        return hashes

    def add(self, item):
        """항목 추가"""
        for hash_val in self._hashes(item):
            self.bit_array[hash_val] = 1

    def check(self, item):
        """항목 존재 여부 확인 (거짓 양성 가능)"""
        for hash_val in self._hashes(item):
            if self.bit_array[hash_val] == 0:
                return False  # 확실히 없음
        return True  # 있을 수 있음

# 테스트
bf = BloomFilter(100, 3)
bf.add("apple")
bf.add("banana")

print("apple 존재:", bf.check("apple"))      # True
print("banana 존재:", bf.check("banana"))    # True
print("orange 존재:", bf.check("orange"))    # False (거짓 음성 없음)
```

## 7. 성능 분석과 최적화

### 해시 테이블 성능
- **평균 시간 복잡도**: O(1)
- **최악 시간 복잡도**: O(n) (충돌이 심한 경우)
- **적재율**: 0.75 이하 유지 권장

### 트리 구조 성능
- **AVL 트리**: O(log n) 보장
- **B-트리**: 디스크 I/O 최적화
- **레드-블랙 트리**: 실전에서 많이 사용

### 캐시 전략
- **LRU**: 최근 사용된 항목 유지
- **LFU**: 자주 사용된 항목 유지
- **ARC**: LRU와 LFU의 하이브리드

## 8. 연습 문제

1. 해시 테이블에서 충돌이 발생하는 이유와 해결 방법을 설명하세요.

2. 힙 정렬의 시간 복잡도를 분석하고, 다른 정렬 알고리즘과 비교해보세요.

3. B-트리가 데이터베이스 인덱스로 적합한 이유를 설명하세요.

4. 블룸 필터가 "거짓 양성"을 허용하는 이유와 장점을 설명하세요.

## 마무리

고급 자료구조와 알고리즘은 실전 시스템 개발에서 핵심적인 역할을 합니다. 데이터베이스, 파일 시스템, 검색 엔진, 캐시 시스템 등에서 필수적으로 사용됩니다.

**핵심 요약:**
- 해시 테이블: O(1) 평균 검색, 충돌 해결 기법 필요
- 힙: 우선순위 큐 구현, 힙 정렬에 활용
- B-트리: 균형 잡힌 다진 트리, 데이터베이스 인덱스에 최적
- 고급 정렬: 계수 정렬, 기수 정렬 (특정 조건에서 효율적)
- 실전 적용: LRU 캐시, 블룸 필터 등

이제 알고리즘 커리큘럼이 완성되었습니다! 🎉

**추가 학습:** 각 자료구조의 장단점을 이해하고, 상황에 맞게 선택하는 능력을 기르세요. 이론과 실전 구현을 병행하는 것이 중요합니다! 🏗️⚡

이로써 **알고리즘 카테고리**가 완성되었습니다. 총 10편의 글을 작성했습니다! 📚✨
