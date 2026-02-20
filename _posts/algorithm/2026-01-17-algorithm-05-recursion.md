---
layout: post
title:  "재귀 알고리즘: 함수가 자신을 부르는 마법"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 재귀, 재귀함수, 콜스택]
description: "재귀의 개념과 원리, 콜 스택 메모리, 재귀를 이용한 문제 해결 방법을 배웁니다."
---

# 재귀 알고리즘: 함수가 자신을 부르는 마법

프로그래밍에서 가장 아름답고 강력한 개념 중 하나가 바로 **재귀(Recursion)**입니다. 함수가 자신을 호출하는 이 마법 같은 기법은 복잡한 문제를 우아하게 해결할 수 있게 해줍니다. 이번 글에서는 재귀의 원리와 실전 적용 방법을 자세히 알아보겠습니다.

## 1. 재귀의 기초 개념

### 재귀의 정의
함수가 **직접 또는 간접적으로 자신을 호출**하는 프로그래밍 기법입니다.

### 재귀 vs 반복
```python
# 반복적 접근
def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# 재귀적 접근
def factorial_recursive(n):
    if n <= 1:          # 기저 조건 (Base Case)
        return 1
    return n * factorial_recursive(n - 1)  # 재귀 호출
```

### 재귀의 세 가지 법칙
1. **기저 조건(Base Case)**: 재귀 호출을 멈추는 조건
2. **진행 방향(Progress)**: 기저 조건을 향해 나아가는 것
3. **재귀 호출(Recursive Call)**: 함수가 자신을 호출하는 부분

## 2. 재귀의 작동 원리

### 콜 스택 (Call Stack)
재귀 함수가 호출될 때마다 **스택 프레임**이 생성됩니다.

```
factorial_recursive(5)의 실행 과정:

factorial_recursive(5)
├── factorial_recursive(4)
│   ├── factorial_recursive(3)
│   │   ├── factorial_recursive(2)
│   │   │   ├── factorial_recursive(1)
│   │   │   │   └── return 1          # 기저 조건 도달
│   │   │   └── return 2 * 1 = 2
│   │   └── return 3 * 2 = 6
│   └── return 4 * 6 = 24
└── return 5 * 24 = 120
```

### 메모리 관점에서의 재귀
```python
# 각 호출마다 스택에 저장되는 정보:
# - 지역 변수들
# - 매개변수들
# - 반환 주소

def factorial_recursive(n):
    print(f"호출: factorial_recursive({n})")
    if n <= 1:
        print(f"기저 조건 도달: factorial_recursive({n}) = 1")
        return 1

    result = n * factorial_recursive(n - 1)
    print(f"반환: factorial_recursive({n}) = {result}")
    return result

factorial_recursive(5)
```

**출력 결과:**
```
호출: factorial_recursive(5)
호출: factorial_recursive(4)
호출: factorial_recursive(3)
호출: factorial_recursive(2)
호출: factorial_recursive(1)
기저 조건 도달: factorial_recursive(1) = 1
반환: factorial_recursive(2) = 2
반환: factorial_recursive(3) = 6
반환: factorial_recursive(4) = 24
반환: factorial_recursive(5) = 120
```

## 3. 재귀 알고리즘 구현 사례

### 1. 피보나치 수열 (Fibonacci Sequence)

```python
def fibonacci_recursive(n):
    """
    피보나치 수열의 n번째 항을 구하는 재귀 함수

    Args:
        n (int): 구할 항의 위치 (0부터 시작)

    Returns:
        int: n번째 피보나치 수
    """
    if n <= 1:          # 기저 조건
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# 테스트
for i in range(10):
    print(f"F({i}) = {fibonacci_recursive(i)}")
```

**문제점**: 중복 계산이 많아 비효율적
- fibonacci_recursive(5)는 fibonacci_recursive(3)을 2번 호출
- 지수 시간 복잡도 O(2ⁿ)

### 2. 하노이 탑 (Tower of Hanoi)

```python
def hanoi(n, source, target, auxiliary):
    """
    하노이 탑 문제를 해결하는 재귀 함수

    Args:
        n (int): 이동할 원판 개수
        source (str): 출발 기둥
        target (str): 목표 기둥
        auxiliary (str): 보조 기둥
    """
    if n == 1:  # 기저 조건
        print(f"원판 1을 {source}에서 {target}로 이동")
        return

    # n-1개의 원판을 보조 기둥으로 이동
    hanoi(n-1, source, auxiliary, target)

    # 가장 큰 원판을 목표 기둥으로 이동
    print(f"원판 {n}을 {source}에서 {target}로 이동")

    # 보조 기둥의 n-1개 원판을 목표 기둥으로 이동
    hanoi(n-1, auxiliary, target, source)

# 테스트
print("3개의 원판으로 하노이 탑 풀기:")
hanoi(3, 'A', 'C', 'B')
```

### 3. 디렉토리 구조 탐색

```python
import os

def list_files_recursive(path, level=0):
    """
    디렉토리 구조를 재귀적으로 탐색하는 함수

    Args:
        path (str): 탐색할 경로
        level (int): 들여쓰기 레벨
    """
    indent = "  " * level

    try:
        items = os.listdir(path)
    except PermissionError:
        print(f"{indent}[접근 거부] {path}")
        return

    for item in items:
        item_path = os.path.join(path, item)

        if os.path.isdir(item_path):
            print(f"{indent}📁 {item}/")
            list_files_recursive(item_path, level + 1)  # 재귀 호출
        else:
            print(f"{indent}📄 {item}")

# 테스트
list_files_recursive(".", 0)
```

## 4. 재귀의 장단점

### 장점
1. **코드 간결성**: 복잡한 로직을 간단하게 표현
2. **수학적 증명 용이**: 수학적 귀납법과 유사
3. **문제 분해**: 큰 문제를 작은 문제로 분해
4. **트리/그래프 문제에 강함**: 자연스러운 구현

### 단점
1. **스택 오버플로우**: 콜 스택 메모리 제한
2. **중복 계산**: 같은 계산 반복 (피보나치 예시)
3. **디버깅 어려움**: 콜 스택 추적 복잡
4. **성능 저하**: 함수 호출 오버헤드

### 단점 극복 방법

#### 1. 메모이제이션 (Memoization)
```python
def fibonacci_memo(n, memo=None):
    if memo is None:
        memo = {}

    if n in memo:        # 이미 계산한 값이면 반환
        return memo[n]

    if n <= 1:
        return n

    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# 테스트
print(f"F(10) = {fibonacci_memo(10)}")  # 캐시 활용
```

#### 2. 꼬리 재귀 (Tail Recursion)
```python
def factorial_tail_recursive(n, accumulator=1):
    """
    꼬리 재귀를 사용한 팩토리얼
    컴파일러 최적화로 스택 오버플로우 방지 가능
    """
    if n <= 1:
        return accumulator
    return factorial_tail_recursive(n - 1, n * accumulator)

# 테스트
print(f"5! = {factorial_tail_recursive(5)}")
```

#### 3. 반복문으로 변환
```python
def fibonacci_iterative(n):
    """반복문을 사용한 피보나치 (메모리 효율적)"""
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# 테스트
print(f"F(10) = {fibonacci_iterative(10)}")
```

## 5. 재귀적 사고 훈련

### 1. 문자열 뒤집기
```python
def reverse_string(s):
    if len(s) <= 1:      # 기저 조건
        return s
    return reverse_string(s[1:]) + s[0]  # 재귀 호출

print(reverse_string("Hello"))  # "olleH"
```

### 2. 배열의 합 구하기
```python
def array_sum(arr):
    if not arr:           # 기저 조건
        return 0
    return arr[0] + array_sum(arr[1:])  # 재귀 호출

print(array_sum([1, 2, 3, 4, 5]))  # 15
```

### 3. 이진 탐색 트리 순회
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    """중위 순회 (Left → Root → Right)"""
    if root is None:
        return []

    return (inorder_traversal(root.left) +
            [root.val] +
            inorder_traversal(root.right))

# 테스트 트리 생성
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

print(inorder_traversal(root))  # [1, 3, 2]
```

## 6. 재귀의 시간 복잡도와 공간 복잡도

### 시간 복잡도
- **재귀 호출 트리**의 크기에 따라 결정
- 피보나치: O(2ⁿ), 메모이제이션 적용 시 O(n)

### 공간 복잡도
- **콜 스택 깊이**가 공간 복잡도 결정
- 선형 재귀: O(n), 트리 재귀: O(log n) ~ O(n)

### 최적화 고려사항
1. **꼬리 재귀**: 컴파일러 최적화로 스택 오버플로우 방지
2. **반복문 변환**: 메모리 효율성 향상
3. **메모이제이션**: 중복 계산 제거

## 7. 재귀 vs 반복문 비교

| 측면 | 재귀 | 반복문 |
|------|------|--------|
| 코드 간결성 | 높음 | 낮음 |
| 메모리 사용 | 스택 | 변수 |
| 디버깅 | 어려움 | 쉬움 |
| 성능 | 함수 호출 오버헤드 | 효율적 |
| 적용 | 트리, 그래프 | 선형 처리 |

### 선택 가이드라인
- **재귀 사용**: 문제 구조가 재귀적일 때 (트리, 분할 정복)
- **반복문 사용**: 성능이 중요하고 스택 오버플로우 우려될 때
- **하이브리드**: 메모이제이션과 함께 사용

## 8. 연습 문제

1. 다음 재귀 함수의 콜 스택을 그려보세요:
```python
def mystery(n):
    if n <= 1:
        return 1
    return n + mystery(n-2)
```

2. 재귀를 사용한 이진 검색을 구현해보세요.

3. 피보나치 재귀 함수를 메모이제이션으로 최적화해보세요.

4. 재귀를 사용하지 않고 하노이 탑 문제를 해결하는 방법을 생각해보세요.

## 마무리

재귀는 프로그래밍의 핵심 개념 중 하나입니다. 처음에는 어렵게 느껴질 수 있지만, 연습하다 보면 복잡한 문제를 우아하게 해결하는 강력한 도구가 됩니다.

**핵심 요약:**
- 재귀 = 함수가 자신을 호출하는 기법
- 기저 조건 + 재귀 호출 + 진행 방향이 필수
- 장점: 코드 간결성, 수학적 증명 용이
- 단점: 스택 오버플로우, 중복 계산
- 해결책: 메모이제이션, 꼬리 재귀, 반복문 변환

이제 기초 알고리즘 커리큘럼이 끝났습니다! 다음 글부터는 **고급 알고리즘**인 동적 계획법부터 시작합니다. 재귀의 마법 같은 세계를 잘 즐기셨나요? 🎭✨

**추가 학습:** 다양한 재귀 문제를 풀어보며 재귀적 사고를 익히세요. 처음에는 헷갈릴 수 있지만, 익숙해지면 프로그래밍의 새로운 차원을 경험할 수 있습니다! 🌀
