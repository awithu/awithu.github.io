---
layout: post
title:  "시간 복잡도와 공간 복잡도: 알고리즘 효율성 분석"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 복잡도, Big-O, 시간복잡도, 공간복잡도]
description: "알고리즘의 효율성을 평가하는 시간 복잡도와 공간 복잡도, Big O 표기법에 대해 배웁니다."
---

# 시간 복잡도와 공간 복잡도: 알고리즘 효율성 분석

알고리즘의 성능을 평가하는 것은 매우 중요합니다. 같은 문제를 푸는 두 알고리즘이 있다면, 어느 것이 더 빠르고 효율적인지 알아야 합니다. 이번 글에서는 알고리즘의 효율성을 측정하는 **시간 복잡도**와 **공간 복잡도**에 대해 자세히 알아보겠습니다.

## 1. 왜 복잡도 분석이 필요한가?

### 현실적인 문제 상황
```python
# 방법 1: 단순한 방법
def find_number_v1(arr, target):
    for num in arr:      # O(n)
        if num == target:
            return True
    return False

# 방법 2: 정렬 후 검색
def find_number_v2(arr, target):
    arr.sort()           # O(n log n)
    # 이진 검색 수행     # O(log n)
    # 총 시간: O(n log n)
```

어떤 방법을 선택해야 할까요? 데이터 크기에 따라 다릅니다!

### 복잡도 분석의 목적
1. **알고리즘 비교**: 같은 문제를 푸는 여러 알고리즘 중 최선 선택
2. **성능 예측**: 입력 크기가 커졌을 때 실행 시간 예측
3. **최적화**: 병목 지점 발견 및 개선
4. **자원 계획**: 메모리 사용량 예측

## 2. 시간 복잡도 (Time Complexity)

시간 복잡도는 **알고리즘이 실행되는 데 걸리는 시간**을 입력 크기의 함수로 표현한 것입니다.

### 실행 시간 측정 방법

#### 1. 실제 실행 시간 측정
```python
import time

def measure_time(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    return result, end - start

# 예시
arr = list(range(10000))
result, exec_time = measure_time(find_number_v1, arr, 5000)
print(f"실행 시간: {exec_time:.6f}초")
```

**문제점:**
- 컴퓨터 성능에 따라 결과가 다름
- 운영체제, 다른 프로세스 영향
- 작은 입력에서는 차이가 미미함

#### 2. 연산 횟수 세기
```python
def count_operations(arr):
    count = 0
    for i in range(len(arr)):  # n번 반복
        count += 1             # 1번 연산
    return count

# 입력 크기가 n일 때 연산 횟수 = n
```

**장점:**
- 입력 크기에 따른 패턴 파악 가능
- 하드웨어 독립적

### Big O 표기법

Big O 표기법은 **알고리즘의 상한(upper bound)**을 표현합니다.

#### 주요 복잡도 클래스

| Big O | 이름 | 예시 | 설명 |
|-------|------|------|------|
| O(1) | 상수 시간 | 배열 인덱스 접근 | 입력 크기와 무관 |
| O(log n) | 로그 시간 | 이진 검색 | 입력 크기가 커져도 느리게 증가 |
| O(n) | 선형 시간 | 선형 검색 | 입력 크기에 비례 |
| O(n log n) | 선형로그 시간 | 퀵 정렬, 병합 정렬 | 대부분의 효율적인 정렬 |
| O(n²) | 제곱 시간 | 버블 정렬, 선택 정렬 | 중첩 반복문 |
| O(2ⁿ) | 지수 시간 | 피보나치(재귀) | 매우 비효율적 |

#### Big O 계산 규칙

1. **상수항 무시**: O(2n) → O(n)
2. **계수 무시**: O(3n²) → O(n²)
3. **최고차항만**: O(n² + n) → O(n²)
4. **로그의 밑은 무시**: O(log₂ n) = O(log₁₀ n) = O(log n)

### 시간 복잡도 분석 예시

#### 예시 1: 상수 시간 O(1)
```python
def get_first_element(arr):
    return arr[0]  # 항상 1번의 연산
```

#### 예시 2: 선형 시간 O(n)
```python
def find_max(arr):
    max_val = arr[0]
    for num in arr:        # n번 반복
        if num > max_val:  # 1번 비교
            max_val = num
    return max_val         # 총 연산: O(n)
```

#### 예시 3: 제곱 시간 O(n²)
```python
def bubble_sort(arr):
    for i in range(len(arr)):        # n번
        for j in range(len(arr)-1):  # n번
            if arr[j] > arr[j+1]:    # 1번 비교
                swap(arr, j, j+1)    # 총 연산: O(n²)
```

#### 예시 4: 로그 시간 O(log n)
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:             # 최대 log₂n번 반복
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### 최선/최악/평균 경우 분석

```python
# 선형 검색의 경우 분석
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# 최선 경우 (Best Case): O(1)
# - 찾는 값이 배열의 첫 번째에 있을 때

# 최악 경우 (Worst Case): O(n)
# - 찾는 값이 배열의 마지막에 있거나 없을 때

# 평균 경우 (Average Case): O(n/2) = O(n)
# - 모든 위치에 있을 확률이 같다고 가정
```

## 3. 공간 복잡도 (Space Complexity)

공간 복잡도는 **알고리즘이 사용하는 메모리 공간**을 입력 크기의 함수로 표현한 것입니다.

### 공간 복잡도 분석 예시

#### 예시 1: O(1) - 제자리 정렬
```python
def swap_sort(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]  # 임시 변수만 사용
    return arr

# 추가 공간: O(1) - 임시 변수만 사용
```

#### 예시 2: O(n) - 추가 배열 사용
```python
def copy_and_sort(arr):
    copied = arr.copy()  # O(n) 공간 추가
    return sorted(copied)

# 추가 공간: O(n) - 배열 복사본 생성
```

#### 예시 3: O(n²) - 2차원 배열
```python
def create_multiplication_table(n):
    table = [[0] * n for _ in range(n)]  # n x n 크기의 2차원 배열
    for i in range(n):
        for j in range(n):
            table[i][j] = (i+1) * (j+1)
    return table

# 공간 복잡도: O(n²)
```

## 4. 복잡도 분석 실전 팁

### 1. 재귀 함수의 복잡도
```python
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# 시간 복잡도: O(2ⁿ) - 지수 시간 (매우 비효율적)
# 공간 복잡도: O(n) - 콜 스택 깊이
```

### 2. 최적화된 재귀
```python
def fibonacci_memo(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# 시간 복잡도: O(n) - 메모이제이션으로 최적화
# 공간 복잡도: O(n) - 메모 배열 + 콜 스택
```

### 3. 복잡도 비교 실습

```python
import time
import matplotlib.pyplot as plt

def measure_complexity():
    sizes = [100, 500, 1000, 2000, 5000]

    for n in sizes:
        arr = list(range(n))

        # O(n) 알고리즘
        start = time.time()
        linear_sum = sum(arr)
        linear_time = time.time() - start

        # O(n²) 알고리즘 (제곱 시간 예시)
        start = time.time()
        quadratic_sum = 0
        for i in range(n):
            for j in range(n):
                quadratic_sum += 1
        quadratic_time = time.time() - start

        print(f"n={n}: O(n)={linear_time:.4f}s, O(n²)={quadratic_time:.4f}s")

measure_complexity()
```

## 5. 알고리즘 선택 가이드라인

### 입력 크기에 따른 선택

| 입력 크기 | 허용되는 복잡도 | 예시 알고리즘 |
|-----------|------------------|----------------|
| n ≤ 10 | O(n!) | 완전 탐색 |
| n ≤ 20 | O(2ⁿ) | 비트 마스크, DP |
| n ≤ 500 | O(n³) | 플로이드-워셜 |
| n ≤ 5000 | O(n²) | 동적 계획법 |
| n ≤ 10⁶ | O(n log n) | 정렬, 힙 |
| n ≤ 10⁹ | O(n) | 선형 탐색 |
| n > 10⁹ | O(log n), O(1) | 해시, 이진 검색 |

### 메모리 제약 고려
- **제자리 알고리즘**: 추가 공간 O(1)
- **메모리 제한**: 보통 256MB ~ 1GB
- **공간-시간 트레이드오프**: 메모리를 사용해서 시간을 절약할 수 있음

## 6. 연습 문제

1. 다음 코드의 시간 복잡도를 분석하세요:
```python
def mystery_function(arr):
    total = 0
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            total += arr[i] + arr[j]
    return total
```

2. 다음 중 시간 복잡도가 가장 낮은 것은?
   - A) O(1)
   - B) O(log n)
   - C) O(n)
   - D) O(n²)

3. 공간 복잡도가 O(1)인 정렬 알고리즘을 2개 이상 말해보세요.

4. 피보나치 수열을 구하는 재귀 함수의 시간 복잡도를 분석하고, 이를 최적화하는 방법을 제안하세요.

## 마무리

시간 복잡도와 공간 복잡도는 알고리즘의 효율성을 평가하는 핵심 도구입니다. Big O 표기법을 사용하여 알고리즘을 분석하고 비교할 수 있습니다.

**핵심 요약:**
- 시간 복잡도: 알고리즘 실행 시간의 상한
- 공간 복잡도: 알고리즘 메모리 사용량의 상한
- Big O: 최고차항만 고려, 계수와 상수 무시
- 복잡도 클래스: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)

다음 글에서는 **기초 정렬 알고리즘**에 대해 알아보겠습니다. 정렬은 실제 프로그래밍에서 가장 많이 사용되는 알고리즘 중 하나입니다!

**추가 팁:** 알고리즘을 구현할 때는 항상 복잡도를 고려하세요. 작은 입력에서는 차이가 미미하지만, 큰 데이터에서는 성능 차이가 수십 배 이상 날 수 있습니다! 🚀
