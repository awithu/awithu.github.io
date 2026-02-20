---
layout: post
title:  "분할 정복 (Divide and Conquer): 큰 문제를 작은 문제로 나누기"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 분할정복, 병합정렬, 퀵정렬, 마스터정리]
description: "분할 정복 알고리즘의 원리와 마스터 정리, 대표적인 알고리즘들을 배웁니다."
---

# 분할 정복 (Divide and Conquer): 큰 문제를 작은 문제로 나누기

프로그래밍에서 복잡한 문제를 해결하는 가장 강력한 전략 중 하나가 바로 **분할 정복(Divide and Conquer)**입니다. 큰 문제를 더 작은 문제로 나누어 해결하는 체계적인 접근 방식입니다. 이번 글에서는 분할 정복의 원리와 대표적인 알고리즘들을 자세히 알아보겠습니다.

## 1. 분할 정복의 기초 개념

### 분할 정복의 정의
복잡한 문제를 **더 작은 동일한 형태의 부분 문제로 분해**하여 해결하고, 그 결과를 **결합**하여 전체 문제를 해결하는 알고리즘 설계 기법입니다.

### 분할 정복의 3단계
1. **분할 (Divide)**: 원래 문제를 더 작은 부분 문제로 나눕니다
2. **정복 (Conquer)**: 각 부분 문제를 재귀적으로 해결합니다
3. **결합 (Combine)**: 부분 문제들의 해를 결합하여 전체 문제의 해를 구합니다

### 분할 정복 vs 동적 계획법
- **공통점**: 큰 문제를 작은 문제로 분해
- **차이점**:
  - 분할 정복: 부분 문제가 독립적 (하위 문제 간 중복 없음)
  - 동적 계획법: 부분 문제가 중복됨 (메모이제이션 필요)

## 2. 분할 정복의 시간 복잡도: 마스터 정리

### 마스터 정리의 정의
재귀적 알고리즘의 시간 복잡도를 분석하는 공식입니다.

**마스터 정리 형태:**
```
T(n) = aT(n/b) + f(n)

여기서:
- a: 재귀 호출 횟수
- b: 문제 크기 감소 비율
- f(n): 분할/결합 단계의 비용
```

### 마스터 정리의 경우 분석

#### 경우 1: f(n) = O(n^(log_b a - ε))
- **결과**: T(n) = Θ(n^log_b a)
- **의미**: 재귀 호출이 지배적

#### 경우 2: f(n) = Θ(n^log_b a log^k n)
- **결과**: T(n) = Θ(n^log_b a log^(k+1) n)
- **의미**: 분할/결합과 재귀가 균형

#### 경우 3: f(n) = Ω(n^log_b a + ε)
- **결과**: T(n) = Θ(f(n))
- **의미**: 분할/결합 단계가 지배적

### 마스터 정리 적용 예시

**병합 정렬:**
```
T(n) = 2T(n/2) + O(n)
a = 2, b = 2, f(n) = n
log_b a = log_2 2 = 1
f(n) = Θ(n^1) → 경우 2
∴ T(n) = Θ(n log n)
```

**이진 검색:**
```
T(n) = T(n/2) + O(1)
a = 1, b = 2, f(n) = 1
log_b a = log_2 1 = 0
f(n) = Θ(1) = Θ(n^0) → 경우 3
∴ T(n) = Θ(1) = O(log n)
```

## 3. 대표적인 분할 정복 알고리즘들

### 1. 병합 정렬 (Merge Sort)

**원리**: 배열을 반으로 나누어 각각 정렬한 후 병합합니다.

```python
def merge(arr, left, mid, right):
    """
    두 개의 정렬된 부분 배열을 병합

    Args:
        arr (list): 원본 배열
        left (int): 왼쪽 부분 배열 시작 인덱스
        mid (int): 중간 지점
        right (int): 오른쪽 부분 배열 끝 인덱스
    """
    # 임시 배열 생성
    n1 = mid - left + 1
    n2 = right - mid

    L = arr[left:left + n1]
    R = arr[mid + 1:mid + 1 + n2]

    i = j = 0
    k = left

    # 두 배열 병합
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # 남은 요소들 복사
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1

    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    """
    병합 정렬 구현

    Args:
        arr (list): 정렬할 배열
        left (int): 시작 인덱스
        right (int): 끝 인덱스
    """
    if left < right:
        mid = (left + right) // 2

        # 분할 단계
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)

        # 결합 단계
        merge(arr, left, mid, right)

# 테스트
test_array = [12, 11, 13, 5, 6, 7]
print("정렬 전:", test_array)
merge_sort(test_array, 0, len(test_array) - 1)
print("정렬 후:", test_array)
```

**시간 복잡도 분석:**
- 분할: O(log n) 단계
- 각 단계 병합: O(n)
- 총: O(n log n)

**특징:**
- 안정적 정렬
- 추가 공간 O(n) 필요
- 외부 정렬에 유용

### 2. 퀵 정렬 (Quick Sort)

**원리**: 피벗을 기준으로 배열을 분할하여 정렬합니다.

```python
def partition(arr, low, high):
    """
    퀵 정렬의 분할 함수

    Args:
        arr (list): 분할할 배열
        low (int): 시작 인덱스
        high (int): 끝 인덱스

    Returns:
        int: 피벗의 최종 위치
    """
    pivot = arr[high]  # 마지막 요소를 피벗으로 선택
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    """
    퀵 정렬 구현

    Args:
        arr (list): 정렬할 배열
        low (int): 시작 인덱스
        high (int): 끝 인덱스
    """
    if low < high:
        # 분할
        pi = partition(arr, low, high)

        # 정복
        quick_sort(arr, low, pi - 1)    # 왼쪽 부분
        quick_sort(arr, pi + 1, high)   # 오른쪽 부분

# 테스트
test_array = [10, 7, 8, 9, 1, 5]
print("정렬 전:", test_array)
quick_sort(test_array, 0, len(test_array) - 1)
print("정렬 후:", test_array)
```

**시간 복잡도 분석:**
- 최선: O(n log n) - 균등 분할
- 최악: O(n²) - 편향된 분할
- 평균: O(n log n)

**특징:**
- 제자리 정렬 (추가 공간 O(log n))
- 캐시 효율성 좋음
- 불안정적 정렬

### 3. 최근접 점 쌍 찾기 (Closest Pair of Points)

**문제**: 2D 평면상의 점들 중 가장 가까운 두 점을 찾으세요.

```python
import math

def distance(p1, p2):
    """두 점 사이의 거리 계산"""
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

def brute_force(points):
    """브루트 포스 방식으로 최소 거리 찾기"""
    min_dist = float('inf')
    n = len(points)

    for i in range(n):
        for j in range(i + 1, n):
            dist = distance(points[i], points[j])
            if dist < min_dist:
                min_dist = dist

    return min_dist

def closest_pair(points):
    """
    분할 정복으로 최근접 점 쌍 찾기

    Args:
        points (list): [(x, y), ...] 형태의 점 리스트

    Returns:
        float: 최소 거리
    """
    def closest_util(points_sorted_x, points_sorted_y):
        n = len(points_sorted_x)

        # 기저 조건
        if n <= 3:
            return brute_force(points_sorted_x)

        # 중앙 선
        mid = n // 2
        mid_point = points_sorted_x[mid]

        # 좌우로 분할
        left_x = points_sorted_x[:mid]
        right_x = points_sorted_x[mid:]

        # Y좌표 정렬된 점들도 분할
        left_y = [p for p in points_sorted_y if p[0] <= mid_point[0]]
        right_y = [p for p in points_sorted_y if p[0] > mid_point[0]]

        # 재귀 호출
        dl = closest_util(left_x, left_y)
        dr = closest_util(right_x, right_y)
        d = min(dl, dr)

        # 중앙 선 근처 점들 검사
        strip = [p for p in points_sorted_y if abs(p[0] - mid_point[0]) < d]

        for i in range(len(strip)):
            for j in range(i + 1, min(i + 7, len(strip))):
                dist = distance(strip[i], strip[j])
                if dist < d:
                    d = dist

        return d

    # X좌표 기준 정렬
    points_x = sorted(points, key=lambda p: p[0])
    points_y = sorted(points, key=lambda p: p[1])

    return closest_util(points_x, points_y)

# 테스트
points = [(2, 3), (12, 30), (40, 50), (5, 1), (12, 10), (3, 4)]
min_distance = closest_pair(points)
print(f"최소 거리: {min_distance:.2f}")
```

**시간 복잡도:** O(n log n)

### 4. 스트라센 행렬 곱셈 (Strassen's Matrix Multiplication)

**원리**: 2x2 행렬 곱셈을 7번의 곱셈으로 수행합니다.

```python
def add_matrix(A, B):
    """행렬 덧셈"""
    return [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def subtract_matrix(A, B):
    """행렬 뺄셈"""
    return [[A[i][j] - B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def strassen_multiply(A, B):
    """
    스트라센 알고리즘으로 행렬 곱셈

    Args:
        A, B (list): n x n 행렬 (n은 2의 거듭제곱)

    Returns:
        list: A x B 결과 행렬
    """
    n = len(A)

    if n == 1:
        return [[A[0][0] * B[0][0]]]

    # 행렬을 4등분
    mid = n // 2
    A11 = [row[:mid] for row in A[:mid]]
    A12 = [row[mid:] for row in A[:mid]]
    A21 = [row[:mid] for row in A[mid:]]
    A22 = [row[mid:] for row in A[mid:]]

    B11 = [row[:mid] for row in B[:mid]]
    B12 = [row[mid:] for row in B[:mid]]
    B21 = [row[:mid] for row in B[mid:]]
    B22 = [row[mid:] for row in B[mid:]]

    # 7번의 곱셈 계산
    P1 = strassen_multiply(A11, subtract_matrix(B12, B22))
    P2 = strassen_multiply(add_matrix(A11, A12), B22)
    P3 = strassen_multiply(add_matrix(A21, A22), B11)
    P4 = strassen_multiply(A22, subtract_matrix(B21, B11))
    P5 = strassen_multiply(add_matrix(A11, A22), add_matrix(B11, B22))
    P6 = strassen_multiply(subtract_matrix(A12, A22), add_matrix(B21, B22))
    P7 = strassen_multiply(subtract_matrix(A11, A21), add_matrix(B11, B12))

    # 결과 행렬 조합
    C11 = add_matrix(subtract_matrix(add_matrix(P5, P4), P2), P6)
    C12 = add_matrix(P1, P2)
    C21 = add_matrix(P3, P4)
    C22 = subtract_matrix(subtract_matrix(add_matrix(P5, P1), P3), P7)

    # 결과 행렬 구성
    result = []
    for i in range(mid):
        result.append(C11[i] + C12[i])
    for i in range(mid):
        result.append(C21[i] + C22[i])

    return result

# 테스트 (2x2 행렬)
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
result = strassen_multiply(A, B)
print("A x B =", result)
```

**시간 복잡도:** O(n^log₂7) ≈ O(n^2.81) (일반 행렬 곱셈 O(n^3)보다 효율적)

## 4. 분할 정복의 장단점

### 장점
1. **문제 분해**: 복잡한 문제를 관리 가능한 단위로 분해
2. **병렬화**: 독립적인 부분 문제를 동시에 처리 가능
3. **최적화**: 캐시 효율성 향상 (지역성)
4. **수학적 분석**: 마스터 정리를 통한 정확한 복잡도 분석

### 단점
1. **재귀 오버헤드**: 함수 호출 비용
2. **스택 오버플로우**: 깊은 재귀에서 위험
3. **추가 공간**: 일부 알고리즘에서 O(n) 공간 필요
4. **기저 조건**: 적절한 기저 조건 설정이 어려움

## 5. 분할 정복 설계 패턴

### 1. 문제 분석
- **분할 가능성**: 문제를 독립적인 부분 문제로 나눌 수 있는가?
- **결합 가능성**: 부분 해를 전체 해로 결합할 수 있는가?
- **기저 조건**: 재귀를 멈출 명확한 조건이 있는가?

### 2. 알고리즘 설계
- **분할 전략**: 문제를 어떻게 나눌 것인가?
- **정복 전략**: 부분 문제를 어떻게 해결할 것인가?
- **결합 전략**: 결과를 어떻게 병합할 것인가?

### 3. 최적화 고려사항
- **기저 조건 최적화**: 작은 문제는 직접 해결
- **불필요한 작업 제거**: 중복 계산 피하기
- **공간 최적화**: 제자리 알고리즘 고려

## 6. 고급 분할 정복 기법

### 1. 멀티스레드 분할 정복
```python
import concurrent.futures
import threading

def parallel_merge_sort(arr):
    """
    병렬 병합 정렬 (멀티스레드)
    """
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        left_future = executor.submit(parallel_merge_sort, arr[:mid])
        right_future = executor.submit(parallel_merge_sort, arr[mid:])

        left = left_future.result()
        right = right_future.result()

    return merge(left, right)
```

### 2. 분할 정복 + 동적 계획법
```python
def matrix_chain_multiply(dimensions):
    """
    행렬 체인 곱셈 최적 순서 찾기
    분할 정복 + DP 하이브리드
    """
    n = len(dimensions) - 1

    def optimal_multiply(i, j):
        if i == j:
            return 0

        min_cost = float('inf')

        for k in range(i, j):
            # 분할 정복으로 최적 분할점 찾기
            cost = (optimal_multiply(i, k) +
                   optimal_multiply(k + 1, j) +
                   dimensions[i-1] * dimensions[k] * dimensions[j])

            min_cost = min(min_cost, cost)

        return min_cost

    return optimal_multiply(1, n)
```

## 7. 분할 정복 문제 해결 전략

### 1. 문제 분류
- **균등 분할**: 병합 정렬 (n/2씩 분할)
- **불균등 분할**: 퀵 정렬 (피벗 기준 분할)
- **다차원 분할**: 최근접 점 쌍 (공간 분할)

### 2. 효율성 분석
- **마스터 정리 적용**: 재귀적 복잡도 계산
- **병목 지점 식별**: 가장 비용이 큰 단계 최적화
- **상수 최적화**: 실제 구현에서 성능 향상

### 3. 디버깅 팁
- **작은 입력부터 테스트**: 기저 조건 검증
- **재귀 트리 그리기**: 호출 흐름 시각화
- **스택 추적**: 재귀 깊이 모니터링

## 8. 연습 문제

1. 병합 정렬과 퀵 정렬의 시간 복잡도를 마스터 정리를 사용하여 분석해보세요.

2. 분할 정복 알고리즘에서 기저 조건이 중요한 이유는 무엇인가요?

3. 스트라센 행렬 곱셈이 일반 행렬 곱셈보다 효율적인 이유를 설명하세요.

4. 분할 정복을 사용할 수 없는 문제의 예시를 들어보세요.

## 마무리

분할 정복은 컴퓨터 과학의 핵심 알고리즘 설계 기법 중 하나입니다. 큰 문제를 체계적으로 작은 문제로 나누어 해결하는 강력한 전략입니다.

**핵심 요약:**
- 분할 정복 = 분할 → 정복 → 결합의 3단계
- 마스터 정리: T(n) = aT(n/b) + f(n) 복잡도 분석
- 대표 알고리즘: 병합 정렬, 퀵 정렬, 최근접 점 쌍
- 장점: 병렬화 용이, 수학적 분석 가능
- 단점: 재귀 오버헤드, 추가 공간 필요

다음 글에서는 **그래프 알고리즘**에 대해 알아보겠습니다. 연결된 데이터 구조를 다루는 알고리즘들의 세계를 탐험해보겠습니다!

**추가 팁:** 분할 정복 알고리즘을 설계할 때는 항상 기저 조건을 먼저 생각하세요. 재귀의 끝을 명확히 하는 것이 중요합니다! 🌳📊
