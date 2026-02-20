---
layout: post
title:  "怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁: ?ㅼ쟾 ?쒖뒪??援ы쁽"
date:   2025-01-22 09:00:00 +0900
categories: [IT, ?뚭퀬由ъ쬁]
tags: [?뚭퀬由ъ쬁, ?먮즺援ъ“, ?댁떆?뚯씠釉? ?? B?몃━, 怨좉툒?뺣젹]
description: "?ㅼ쟾 ?쒖뒪?쒖뿉???ъ슜?섎뒗 怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁?ㅼ쓣 諛곗썎?덈떎."
---

# 怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁: ?ㅼ쟾 ?쒖뒪??援ы쁽

吏湲덇퉴吏 湲곕낯?곸씤 ?뚭퀬由ъ쬁?ㅼ쓣 諛곗썱?듬땲?? ?댁젣 ?ㅼ쟾 ?쒖뒪?쒖뿉???ㅼ젣濡??ъ슜?섎뒗 怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁?ㅼ쓣 ?뚯븘蹂닿쿋?듬땲?? ?곗씠?곕쿋?댁뒪, ?뚯씪 ?쒖뒪?? 寃???붿쭊 ?깆뿉???듭떖?곸쑝濡??ъ슜?섎뒗 湲곗닠?ㅼ엯?덈떎.

## 1. ?댁떆 ?뚯씠釉?(Hash Table)

### ?댁떆 ?⑥닔???먮━
?ㅻ? 怨좎젙???ш린??媛믪쑝濡?留ㅽ븨?섎뒗 ?⑥닔?낅땲??

```python
def simple_hash(key, table_size):
    """媛꾨떒???댁떆 ?⑥닔 ?덉떆"""
    return sum(ord(char) for char in str(key)) % table_size

print(simple_hash("hello", 10))  # 2
print(simple_hash("world", 10))  # 1
```

### 異⑸룎 ?닿껐 湲곕쾿

#### 1. 泥댁씠??(Chaining)
```python
class HashTableChaining:
    """泥댁씠??諛⑹떇 ?댁떆 ?뚯씠釉?""

    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]  # 由ъ뒪?몄쓽 由ъ뒪??

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        # 湲곗〈 ?ㅺ? ?덉쑝硫??낅뜲?댄듃
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        # ???ㅻ㈃ 異붽?
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

# ?뚯뒪??
ht = HashTableChaining(10)
ht.insert("apple", 5)
ht.insert("banana", 7)
print(ht.get("apple"))   # 5
print(ht.get("banana"))  # 7
```

#### 2. 媛쒕갑 二쇱냼踰?(Open Addressing)
```python
class HashTableOpenAddressing:
    """?좏삎 ?먯궗 諛⑹떇 ?댁떆 ?뚯씠釉?""

    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        self.deleted = object()  # ??젣 ?쒖떆??

    def _hash(self, key):
        return hash(key) % self.size

    def _probe(self, index, i):
        """?좏삎 ?먯궗"""
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

        return False  # ?뚯씠釉붿씠 媛??李?

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

# ?뚯뒪??
ht = HashTableOpenAddressing(10)
ht.insert("apple", 5)
ht.insert("banana", 7)
print(ht.get("apple"))   # 5
```

### ?댁떆 ?⑥닔 ?ㅺ퀎
```python
def djb2_hash(key):
    """DJB2 ?댁떆 ?⑥닔"""
    hash_value = 5381
    for char in str(key):
        hash_value = ((hash_value << 5) + hash_value) + ord(char)
    return hash_value

def sdbm_hash(key):
    """SDBM ?댁떆 ?⑥닔"""
    hash_value = 0
    for char in str(key):
        hash_value = ord(char) + (hash_value << 6) + (hash_value << 16) - hash_value
    return hash_value

def combined_hash(key, table_size):
    """?ㅼ쨷 ?댁떆 ?⑥닔 寃고빀"""
    h1 = djb2_hash(key)
    h2 = sdbm_hash(key)
    return (h1 + h2) % table_size
```

## 2. ??(Heap)怨??곗꽑?쒖쐞 ??

### ?숈쓽 ?띿꽦
- **?꾩쟾 ?댁쭊 ?몃━**: 留덉?留??덈꺼???쒖쇅?섍퀬 紐⑤뱺 ?덈꺼??媛??李??덉쓬
- **???띿꽦**: 遺紐??몃뱶媛 ?먯떇 ?몃뱶蹂대떎 ?ш굅???묒쓬 (理쒕???理쒖냼??

### ???뺣젹 援ы쁽
```python
def heapify(arr, n, i):
    """???띿꽦 ?좎?"""
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    # ?쇱そ ?먯떇??????寃쎌슦
    if left < n and arr[left] > arr[largest]:
        largest = left

    # ?ㅻⅨ履??먯떇??????寃쎌슦
    if right < n and arr[right] > arr[largest]:
        largest = right

    # largest媛 猷⑦듃媛 ?꾨땶 寃쎌슦 援먰솚
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    """???뺣젹"""
    n = len(arr)

    # 理쒕? ??援ъ꽦
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # ?숈뿉???붿냼瑜??섎굹??異붿텧
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # 理쒕?媛믪쓣 ?앹쑝濡??대룞
        heapify(arr, i, 0)  # ???띿꽦 蹂듭썝

# ?뚯뒪??
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("???뺣젹 寃곌낵:", arr)
```

### ?곗꽑?쒖쐞 ??援ы쁽
```python
import heapq

class PriorityQueue:
    """理쒖냼 ??湲곕컲 ?곗꽑?쒖쐞 ??""

    def __init__(self):
        self.heap = []
        self.entry_count = 0

    def push(self, priority, item):
        """??ぉ ?쎌엯"""
        entry = (priority, self.entry_count, item)
        heapq.heappush(self.heap, entry)
        self.entry_count += 1

    def pop(self):
        """理쒖냼 ?곗꽑?쒖쐞 ??ぉ 異붿텧"""
        if self.heap:
            return heapq.heappop(self.heap)[2]
        return None

    def peek(self):
        """理쒖냼 ?곗꽑?쒖쐞 ??ぉ ?뺤씤"""
        if self.heap:
            return self.heap[0][2]
        return None

    def is_empty(self):
        return len(self.heap) == 0

# ?뚯뒪??
pq = PriorityQueue()
pq.push(3, "low")
pq.push(1, "high")
pq.push(2, "medium")

print(pq.pop())  # "high" (?곗꽑?쒖쐞 1)
print(pq.pop())  # "medium" (?곗꽑?쒖쐞 2)
```

## 3. B-?몃━? ?곗씠?곕쿋?댁뒪 ?몃뜳??

### B-?몃━??援ъ“
- **洹좏삎 ?≫엺 ?ㅼ쭊 ?몃━**: 紐⑤뱺 由ы봽 ?몃뱶媛 媛숈? ?덈꺼???덉쓬
- **李⑥닔(Order)**: ?몃뱶媛 媛吏????덈뒗 理쒕? ?먯떇 ??
- **??遺꾨같**: 媛??몃뱶媛 ?щ윭 媛쒖쓽 ?ㅻ? 媛吏?

```python
class BTreeNode:
    """B-?몃━ ?몃뱶"""

    def __init__(self, leaf=False):
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    """媛꾨떒??B-?몃━ 援ы쁽 (李⑥닔 t=2)"""

    def __init__(self, t=2):
        self.root = BTreeNode(True)
        self.t = t  # 理쒖냼 李⑥닔

    def search(self, key, node=None):
        """??寃??""
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
        """???쎌엯"""
        root = self.root

        if len(root.keys) == 2 * self.t - 1:
            # 猷⑦듃媛 媛??李?寃쎌슦 遺꾪븷
            new_root = BTreeNode(False)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root

        self._insert_non_full(self.root, key)

    def _insert_non_full(self, node, key):
        """媛??李⑥? ?딆? ?몃뱶?????쎌엯"""
        i = len(node.keys) - 1

        if node.leaf:
            # 由ы봽 ?몃뱶???쎌엯
            node.keys.append(None)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            # ?대? ?몃뱶 泥섎━
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1

            if len(node.children[i].keys) == 2 * self.t - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1

            self._insert_non_full(node.children[i], key)

    def _split_child(self, parent, i):
        """?먯떇 ?몃뱶 遺꾪븷"""
        t = self.t
        y = parent.children[i]
        z = BTreeNode(y.leaf)

        # ?덈줈???몃뱶?????대룞
        parent.children.insert(i + 1, z)
        parent.keys.insert(i, y.keys[t - 1])

        z.keys = y.keys[t: (2 * t) - 1]
        y.keys = y.keys[0: t - 1]

        if not y.leaf:
            z.children = y.children[t: 2 * t]
            y.children = y.children[0: t]

# ?뚯뒪??
btree = BTree(t=2)
for key in [10, 20, 5, 6, 12, 30, 7, 17]:
    btree.insert(key)

print("B-?몃━?먯꽌 12 寃??", btree.search(12))  # True
print("B-?몃━?먯꽌 15 寃??", btree.search(15))  # False
```

### ?곗씠?곕쿋?댁뒪 ?몃뜳??
- **B-?몃━ ?몃뜳??*: 踰붿쐞 荑쇰━???⑥쑉??
- **?댁떆 ?몃뜳??*: ?깃? 荑쇰━???⑥쑉??
- **鍮꾪듃留??몃뜳??*: ?移대뵒?먮━??而щ읆???⑥쑉??

## 4. 怨좉툒 ?뺣젹 ?뚭퀬由ъ쬁

### 怨꾩닔 ?뺣젹 (Counting Sort)
```python
def counting_sort(arr):
    """怨꾩닔 ?뺣젹 (踰붿쐞媛 ?쒗븳???뺤닔???⑥쑉??"""
    if not arr:
        return arr

    # 踰붿쐞 ?뚯븙
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1

    # 怨꾩닔 諛곗뿴 ?앹꽦
    count = [0] * range_val
    output = [0] * len(arr)

    # 鍮덈룄 怨꾩궛
    for num in arr:
        count[num - min_val] += 1

    # ?꾩쟻 ??怨꾩궛
    for i in range(1, len(count)):
        count[i] += count[i - 1]

    # ?뺣젹??諛곗뿴 ?앹꽦
    for num in reversed(arr):
        output[count[num - min_val] - 1] = num
        count[num - min_val] -= 1

    return output

# ?뚯뒪??
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print("怨꾩닔 ?뺣젹 寃곌낵:", sorted_arr)
```

### 湲곗닔 ?뺣젹 (Radix Sort)
```python
def counting_sort_by_digit(arr, exp):
    """?먮┸?섎퀎 怨꾩닔 ?뺣젹"""
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # ?꾩옱 ?먮┸??鍮덈룄 怨꾩궛
    for num in arr:
        digit = (num // exp) % 10
        count[digit] += 1

    # ?꾩쟻 ??怨꾩궛
    for i in range(1, 10):
        count[i] += count[i - 1]

    # ?뺣젹
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1

    return output

def radix_sort(arr):
    """湲곗닔 ?뺣젹"""
    if not arr:
        return arr

    # 理쒕?媛?李얘린
    max_val = max(arr)

    # 媛??먮┸?섎퀎 ?뺣젹
    exp = 1
    while max_val // exp > 0:
        arr = counting_sort_by_digit(arr, exp)
        exp *= 10

    return arr

# ?뚯뒪??
arr = [170, 45, 75, 90, 802, 24, 2, 66]
sorted_arr = radix_sort(arr)
print("湲곗닔 ?뺣젹 寃곌낵:", sorted_arr)
```

## 5. 怨좉툒 ?몃━ 援ъ“

### AVL ?몃━ (洹좏삎 ?댁쭊 ?먯깋 ?몃━)
```python
class AVLNode:
    """AVL ?몃━ ?몃뱶"""

    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    """AVL ?몃━ 援ы쁽"""

    def get_height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def rotate_right(self, y):
        """?ㅻⅨ履??뚯쟾"""
        x = y.left
        T2 = x.right

        x.right = y
        y.left = T2

        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))

        return x

    def rotate_left(self, x):
        """?쇱そ ?뚯쟾"""
        y = x.right
        T2 = y.left

        y.left = x
        x.right = T2

        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))

        return y

    def insert(self, root, key):
        """AVL ?몃━???몃뱶 ?쎌엯"""
        if not root:
            return AVLNode(key)

        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        balance = self.get_balance(root)

        # 遺덇퇏??泥섎━
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

# ?뚯뒪??
avl = AVLTree()
root = None
for key in [10, 20, 30, 40, 50, 25]:
    root = avl.insert(root, key)
```

## 6. ?ㅼ쟾 ?쒖뒪???곸슜

### 硫붾え由?罹먯떆 (LRU Cache)
```python
from collections import OrderedDict

class LRUCache:
    """Least Recently Used 罹먯떆"""

    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1

        # 理쒓렐???ъ슜??寃껋쑝濡??대룞
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            # 湲곗〈 媛??낅뜲?댄듃
            self.cache.move_to_end(key)
        else:
            # ??媛?異붽?
            if len(self.cache) >= self.capacity:
                # 媛???ㅻ옒????ぉ ?쒓굅
                self.cache.popitem(last=False)
            self.cache[key] = value
            self.cache.move_to_end(key)

# ?뚯뒪??
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))    # 1
cache.put(3, 3)        # 2 ?쒓굅
print(cache.get(2))    # -1 (?쒓굅??
```

### 釉붾８ ?꾪꽣 (Bloom Filter)
```python
import hashlib

class BloomFilter:
    """釉붾８ ?꾪꽣 援ы쁽"""

    def __init__(self, size, hash_count):
        self.size = size
        self.hash_count = hash_count
        self.bit_array = [0] * size

    def _hashes(self, item):
        """?щ윭 ?댁떆 ?⑥닔 ?앹꽦"""
        hashes = []
        for i in range(self.hash_count):
            hash_obj = hashlib.md5((str(item) + str(i)).encode())
            hash_val = int(hash_obj.hexdigest(), 16) % self.size
            hashes.append(hash_val)
        return hashes

    def add(self, item):
        """??ぉ 異붽?"""
        for hash_val in self._hashes(item):
            self.bit_array[hash_val] = 1

    def check(self, item):
        """??ぉ 議댁옱 ?щ? ?뺤씤 (嫄곗쭞 ?묒꽦 媛??"""
        for hash_val in self._hashes(item):
            if self.bit_array[hash_val] == 0:
                return False  # ?뺤떎???놁쓬
        return True  # ?덉쓣 ???덉쓬

# ?뚯뒪??
bf = BloomFilter(100, 3)
bf.add("apple")
bf.add("banana")

print("apple 議댁옱:", bf.check("apple"))      # True
print("banana 議댁옱:", bf.check("banana"))    # True
print("orange 議댁옱:", bf.check("orange"))    # False (嫄곗쭞 ?뚯꽦 ?놁쓬)
```

## 7. ?깅뒫 遺꾩꽍怨?理쒖쟻??

### ?댁떆 ?뚯씠釉??깅뒫
- **?됯퇏 ?쒓컙 蹂듭옟??*: O(1)
- **理쒖븙 ?쒓컙 蹂듭옟??*: O(n) (異⑸룎???ы븳 寃쎌슦)
- **?곸옱??*: 0.75 ?댄븯 ?좎? 沅뚯옣

### ?몃━ 援ъ“ ?깅뒫
- **AVL ?몃━**: O(log n) 蹂댁옣
- **B-?몃━**: ?붿뒪??I/O 理쒖쟻??
- **?덈뱶-釉붾옓 ?몃━**: ?ㅼ쟾?먯꽌 留롮씠 ?ъ슜

### 罹먯떆 ?꾨왂
- **LRU**: 理쒓렐 ?ъ슜????ぉ ?좎?
- **LFU**: ?먯＜ ?ъ슜????ぉ ?좎?
- **ARC**: LRU? LFU???섏씠釉뚮━??

## 8. ?곗뒿 臾몄젣

1. ?댁떆 ?뚯씠釉붿뿉??異⑸룎??諛쒖깮?섎뒗 ?댁쑀? ?닿껐 諛⑸쾿???ㅻ챸?섏꽭??

2. ???뺣젹???쒓컙 蹂듭옟?꾨? 遺꾩꽍?섍퀬, ?ㅻⅨ ?뺣젹 ?뚭퀬由ъ쬁怨?鍮꾧탳?대낫?몄슂.

3. B-?몃━媛 ?곗씠?곕쿋?댁뒪 ?몃뜳?ㅻ줈 ?곹빀???댁쑀瑜??ㅻ챸?섏꽭??

4. 釉붾８ ?꾪꽣媛 "嫄곗쭞 ?묒꽦"???덉슜?섎뒗 ?댁쑀? ?μ젏???ㅻ챸?섏꽭??

## 留덈Т由?

怨좉툒 ?먮즺援ъ“? ?뚭퀬由ъ쬁? ?ㅼ쟾 ?쒖뒪??媛쒕컻?먯꽌 ?듭떖?곸씤 ??븷???⑸땲?? ?곗씠?곕쿋?댁뒪, ?뚯씪 ?쒖뒪?? 寃???붿쭊, 罹먯떆 ?쒖뒪???깆뿉???꾩닔?곸쑝濡??ъ슜?⑸땲??

**?듭떖 ?붿빟:**
- ?댁떆 ?뚯씠釉? O(1) ?됯퇏 寃?? 異⑸룎 ?닿껐 湲곕쾿 ?꾩슂
- ?? ?곗꽑?쒖쐞 ??援ы쁽, ???뺣젹???쒖슜
- B-?몃━: 洹좏삎 ?≫엺 ?ㅼ쭊 ?몃━, ?곗씠?곕쿋?댁뒪 ?몃뜳?ㅼ뿉 理쒖쟻
- 怨좉툒 ?뺣젹: 怨꾩닔 ?뺣젹, 湲곗닔 ?뺣젹 (?뱀젙 議곌굔?먯꽌 ?⑥쑉??
- ?ㅼ쟾 ?곸슜: LRU 罹먯떆, 釉붾８ ?꾪꽣 ??

?댁젣 ?뚭퀬由ъ쬁 而ㅻ━?섎읆???꾩꽦?섏뿀?듬땲?? ?럦

**異붽? ?숈뒿:** 媛??먮즺援ъ“???λ떒?먯쓣 ?댄빐?섍퀬, ?곹솴??留욊쾶 ?좏깮?섎뒗 ?λ젰??湲곕Ⅴ?몄슂. ?대줎怨??ㅼ쟾 援ы쁽??蹂묓뻾?섎뒗 寃껋씠 以묒슂?⑸땲?? ?룛截뤴슒

?대줈??**?뚭퀬由ъ쬁 移댄뀒怨좊━**媛 ?꾩꽦?섏뿀?듬땲?? 珥?10?몄쓽 湲???묒꽦?덉뒿?덈떎! ?뱴??
