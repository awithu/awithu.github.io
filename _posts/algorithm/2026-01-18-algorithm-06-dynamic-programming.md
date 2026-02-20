---
layout: post
title:  "동적 계획법 (Dynamic Programming): 큰 문제를 작은 문제로 나누기"
date:   2025-02-20 09:00:00 +0900
categories: [IT, 알고리즘]
tags: [알고리즘, 동적계획법, DP, 메모이제이션, 타뷸레이션]
description: "동적 계획법의 핵심 원리와 메모이제이션, 타뷸레이션 기법을 배웁니다."
---

# 동적 계획법 (Dynamic Programming): 큰 문제를 작은 문제로 나누기

프로그래밍에서 가장 강력한 문제 해결 기법 중 하나가 바로 **동적 계획법(Dynamic Programming)**입니다. "동적"이라는 이름이 붙었지만, 사실 정적이고 체계적인 문제 해결 방식입니다. 이번 글에서는 동적 계획법의 핵심 원리와 실전 적용 방법을 자세히 알아보겠습니다.

## 1. 동적 계획법의 기초 개념

### 동적 계획법의 정의
복잡한 문제를 **더 작은 하위 문제로 나누어 해결**하고, 그 결과를 **저장하여 재사용**하는 알고리즘 설계 기법입니다.

### 세 가지 핵심 요소
1. **중복 부분 문제 (Overlapping Subproblems)**: 같은 하위 문제가 여러 번 나타남
2. **최적 부분 구조 (Optimal Substructure)**: 최적해가 하위 문제의 최적해로 구성됨
3. **메모이제이션 (Memoization)**: 계산 결과를 저장하여 재사용

### 동적 계획법 vs 분할 정복
- **공통점**: 큰 문제를 작은 문제로 분해
- **차이점**:
  - 분할 정복: 하위 문제가 독립적 (예: 병합 정렬)
  - 동적 계획법: 하위 문제가 중복됨 (예: 피보나치)

## 2. 접근 방식: 메모이제이션 vs 타뷸레이션

### 메모이제이션 (하향식, Top-Down)
필요할 때 계산하고 결과를 저장하는 방식입니다.

```python
# 일반 재귀 (비효율적)
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# 메모이제이션 적용
def fibonacci_memo(n, memo=None):
    if memo is None:
        memo = {}

    if n in memo:        # 이미 계산한 값이면 반환
        return memo[n]

    if n <= 1:
        return n

    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]
```

### 타뷸레이션 (상향식, Bottom-Up)
작은 문제부터 차례대로 계산하여 결과를 저장하는 방식입니다.

```python
def fibonacci_tabulation(n):
    if n <= 1:
        return n

    dp = [0] * (n + 1)    # DP 테이블 생성
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
```

### 두 방식 비교

| 측면 | 메모이제이션 | 타뷸레이션 |
|------|-------------|------------|
| 방향 | 하향식 (재귀) | 상향식 (반복) |
| 구현 | 함수 + 캐시 | 배열 + 반복 |
| 장점 | 직관적, 필요한 것만 계산 | 스택 오버플로우 없음 |
| 단점 | 재귀 오버헤드 | 불필요한 계산 가능 |
| 메모리 | O(n) 콜 스택 | O(n) 배열 |

## 3. 대표적인 동적 계획법 문제들

### 1. 최장 공통 부분 수열 (LCS)

**문제**: 두 문자열의 최장 공통 부분 수열의 길이를 구하세요.

```python
def lcs_length(X, Y):
    """
    최장 공통 부분 수열 길이 계산

    Args:
        X, Y (str): 비교할 문자열들

    Returns:
        int: LCS 길이
    """
    m, n = len(X), len(Y)

    # DP 테이블 생성 (m+1) x (n+1)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # DP 테이블 채우기
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]:        # 문자가 같으면
                dp[i][j] = dp[i-1][j-1] + 1
            else:                       # 문자가 다르면
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

# 테스트
X = "AGGTAB"
Y = "GXTXAYB"
print(f"LCS 길이: {lcs_length(X, Y)}")  # 4 ("GTAB")
```

### 2. 0/1 배낭 문제 (Knapsack Problem)

**문제**: 제한된 무게 내에서 최대 가치를 얻는 물건 조합을 찾으세요.

```python
def knapsack_01(weights, values, capacity):
    """
    0/1 배낭 문제 해결

    Args:
        weights (list): 각 물건의 무게
        values (list): 각 물건의 가치
        capacity (int): 배낭 용량

    Returns:
        int: 최대 가치
    """
    n = len(weights)
    # DP 테이블: (n+1) x (capacity+1)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    # DP 테이블 채우기
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                # 물건을 넣는 경우 vs 넣지 않는 경우
                dp[i][w] = max(dp[i-1][w],
                              dp[i-1][w - weights[i-1]] + values[i-1])
            else:
                # 물건을 넣을 수 없음
                dp[i][w] = dp[i-1][w]

    return dp[n][capacity]

# 테스트
weights = [2, 3, 4, 5]     # 물건 무게
values = [3, 4, 5, 6]      # 물건 가치
capacity = 5                # 배낭 용량

max_value = knapsack_01(weights, values, capacity)
print(f"최대 가치: {max_value}")  # 7 (무게 2+3, 가치 3+4)
```

### 3. 동전 거스름돈 문제

**문제**: 최소 개수의 동전으로 거스름돈을 만들 수 있는가?

```python
def coin_change(coins, amount):
    """
    최소 동전 개수로 거스름돈 만들기

    Args:
        coins (list): 동전 종류들
        amount (int): 거스름돈 금액

    Returns:
        int: 최소 동전 개수 (-1은 불가능)
    """
    # DP 테이블: 금액 0부터 amount까지
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0원은 0개의 동전

    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# 테스트
coins = [1, 2, 5]      # 동전 종류
amount = 11             # 거스름돈

min_coins = coin_change(coins, amount)
print(f"최소 동전 개수: {min_coins}")  # 3 (5+5+1)
```

## 4. 동적 계획법 설계 패턴

### 1. DP 테이블 정의
- **행/열의 의미**: 무엇을 나타내는가?
- **초기값 설정**: 기저 조건에 해당
- **점화식**: 이전 결과로부터 현재 결과를 계산

### 2. 상태 전이
```python
# 일반적인 패턴
dp[i][j] = max(
    dp[i-1][j],                    # 이전 상태 유지
    dp[i-1][j - weight] + value    # 새로운 선택
)
```

### 3. 공간 최적화
```python
# 2차원 DP를 1차원으로 최적화
def knapsack_1d(weights, values, capacity):
    dp = [0] * (capacity + 1)

    for i in range(len(weights)):
        for w in range(capacity, weights[i]-1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[capacity]
```

## 5. 고급 동적 계획법 기법

### 1. 행렬 체인 곱셈 (Matrix Chain Multiplication)

```python
def matrix_chain_order(dimensions):
    """
    행렬 체인 곱셈의 최소 연산 횟수 계산

    Args:
        dimensions (list): 행렬 차원들 [d0, d1, d2, ..., dn]

    Returns:
        int: 최소 연산 횟수
    """
    n = len(dimensions) - 1  # 행렬 개수
    dp = [[0] * n for _ in range(n)]

    # 체인 길이별로 계산
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            # 가능한 모든 분할점 시도
            for k in range(i, j):
                cost = (dp[i][k] + dp[k+1][j] +
                       dimensions[i] * dimensions[k+1] * dimensions[j+1])
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n-1]
```

### 2. 최장 증가 부분 수열 (LIS)

```python
def longest_increasing_subsequence(nums):
    """
    최장 증가 부분 수열 길이 계산

    Args:
        nums (list): 숫자 배열

    Returns:
        int: LIS 길이
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n  # 각 위치에서의 LIS 길이

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
```

## 6. 동적 계획법 문제 해결 전략

### 1. 문제 분석
- **최적 부분 구조**가 있는가?
- **중복 부분 문제**가 있는가?
- **상태 정의**는 무엇인가?

### 2. 상태 정의
- **명확한 의미**: dp[i] 또는 dp[i][j]가 무엇을 나타내는가?
- **충분한 정보**: 최적해를 구성할 수 있는가?

### 3. 점화식 도출
- **기저 조건**: 가장 작은 문제의 해
- **상태 전이**: 이전 상태로부터 현재 상태 계산

### 4. 구현 및 최적화
- **시간/공간 복잡도** 분석
- **메모리 최적화** 가능 여부 확인

## 7. 연습 문제

1. 피보나치 수열을 동적 계획법으로 구현하고, 재귀 버전과 성능을 비교해보세요.

2. 다음 문제의 점화식을 도출해보세요: "n개의 계단을 1칸 또는 2칸씩 올라갈 수 있는 방법의 수"

3. LCS 문제를 메모이제이션으로 구현해보세요.

4. 배낭 문제에서 물건을 여러 개 선택할 수 있는 경우(Unbounded Knapsack)를 해결해보세요.

## 마무리

동적 계획법은 어렵지만 강력한 문제 해결 도구입니다. 처음에는 복잡해 보이지만, 패턴을 익히면 다양한 문제를 우아하게 해결할 수 있습니다.

**핵심 요약:**
- 동적 계획법 = 중복 부분 문제 + 최적 부분 구조 + 메모이제이션
- 메모이제이션(하향식) vs 타뷸레이션(상향식)
- 대표 문제: LCS, 배낭 문제, 동전 거스름돈
- 설계 패턴: 상태 정의 → 점화식 → 구현

다음 글에서는 **그리디 알고리즘**에 대해 알아보겠습니다. 순간 최선의 선택이 전체 최적해로 이어지는 매력적인 알고리즘을 배워보겠습니다!

**추가 팁:** 동적 계획법 문제를 풀 때는 작은 입력부터 시작해서 패턴을 파악하세요. DP 테이블을 직접 그려보며 점화식을 검증하는 습관을 들이세요! 📊🧠
