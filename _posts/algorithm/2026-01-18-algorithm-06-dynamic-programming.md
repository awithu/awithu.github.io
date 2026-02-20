---
layout: post
title:  "?숈쟻 怨꾪쉷踰?(Dynamic Programming): ??臾몄젣瑜??묒? 臾몄젣濡??섎늻湲?"
date:   2025-01-18 09:00:00 +0900
categories: [IT, ?뚭퀬由ъ쬁]
tags: [?뚭퀬由ъ쬁, ?숈쟻怨꾪쉷踰? DP, 硫붾え?댁젣?댁뀡, ?酉몃젅?댁뀡]
description: "?숈쟻 怨꾪쉷踰뺤쓽 ?듭떖 ?먮━? 硫붾え?댁젣?댁뀡, ?酉몃젅?댁뀡 湲곕쾿??諛곗썎?덈떎."
---

# ?숈쟻 怨꾪쉷踰?(Dynamic Programming): ??臾몄젣瑜??묒? 臾몄젣濡??섎늻湲?

?꾨줈洹몃옒諛띿뿉??媛??媛뺣젰??臾몄젣 ?닿껐 湲곕쾿 以??섎굹媛 諛붾줈 **?숈쟻 怨꾪쉷踰?Dynamic Programming)**?낅땲?? "?숈쟻"?대씪???대쫫??遺숈뿀吏留? ?ъ떎 ?뺤쟻?닿퀬 泥닿퀎?곸씤 臾몄젣 ?닿껐 諛⑹떇?낅땲?? ?대쾲 湲?먯꽌???숈쟻 怨꾪쉷踰뺤쓽 ?듭떖 ?먮━? ?ㅼ쟾 ?곸슜 諛⑸쾿???먯꽭???뚯븘蹂닿쿋?듬땲??

## 1. ?숈쟻 怨꾪쉷踰뺤쓽 湲곗큹 媛쒕뀗

### ?숈쟻 怨꾪쉷踰뺤쓽 ?뺤쓽
蹂듭옟??臾몄젣瑜?**???묒? ?섏쐞 臾몄젣濡??섎늻???닿껐**?섍퀬, 洹?寃곌낵瑜?**??ν븯???ъ궗??*?섎뒗 ?뚭퀬由ъ쬁 ?ㅺ퀎 湲곕쾿?낅땲??

### ??媛吏 ?듭떖 ?붿냼
1. **以묐났 遺遺?臾몄젣 (Overlapping Subproblems)**: 媛숈? ?섏쐞 臾몄젣媛 ?щ윭 踰??섑???
2. **理쒖쟻 遺遺?援ъ“ (Optimal Substructure)**: 理쒖쟻?닿? ?섏쐞 臾몄젣??理쒖쟻?대줈 援ъ꽦??
3. **硫붾え?댁젣?댁뀡 (Memoization)**: 怨꾩궛 寃곌낵瑜???ν븯???ъ궗??

### ?숈쟻 怨꾪쉷踰?vs 遺꾪븷 ?뺣났
- **怨듯넻??*: ??臾몄젣瑜??묒? 臾몄젣濡?遺꾪빐
- **李⑥씠??*:
  - 遺꾪븷 ?뺣났: ?섏쐞 臾몄젣媛 ?낅┰??(?? 蹂묓빀 ?뺣젹)
  - ?숈쟻 怨꾪쉷踰? ?섏쐞 臾몄젣媛 以묐났??(?? ?쇰낫?섏튂)

## 2. ?묎렐 諛⑹떇: 硫붾え?댁젣?댁뀡 vs ?酉몃젅?댁뀡

### 硫붾え?댁젣?댁뀡 (?섑뼢?? Top-Down)
?꾩슂????怨꾩궛?섍퀬 寃곌낵瑜???ν븯??諛⑹떇?낅땲??

```python
# ?쇰컲 ?ш? (鍮꾪슚?⑥쟻)
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# 硫붾え?댁젣?댁뀡 ?곸슜
def fibonacci_memo(n, memo=None):
    if memo is None:
        memo = {}

    if n in memo:        # ?대? 怨꾩궛??媛믪씠硫?諛섑솚
        return memo[n]

    if n <= 1:
        return n

    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]
```

### ?酉몃젅?댁뀡 (?곹뼢?? Bottom-Up)
?묒? 臾몄젣遺??李⑤??濡?怨꾩궛?섏뿬 寃곌낵瑜???ν븯??諛⑹떇?낅땲??

```python
def fibonacci_tabulation(n):
    if n <= 1:
        return n

    dp = [0] * (n + 1)    # DP ?뚯씠釉??앹꽦
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
```

### ??諛⑹떇 鍮꾧탳

| 痢〓㈃ | 硫붾え?댁젣?댁뀡 | ?酉몃젅?댁뀡 |
|------|-------------|------------|
| 諛⑺뼢 | ?섑뼢??(?ш?) | ?곹뼢??(諛섎났) |
| 援ы쁽 | ?⑥닔 + 罹먯떆 | 諛곗뿴 + 諛섎났 |
| ?μ젏 | 吏곴??? ?꾩슂??寃껊쭔 怨꾩궛 | ?ㅽ깮 ?ㅻ쾭?뚮줈???놁쓬 |
| ?⑥젏 | ?ш? ?ㅻ쾭?ㅻ뱶 | 遺덊븘?뷀븳 怨꾩궛 媛??|
| 硫붾え由?| O(n) 肄??ㅽ깮 | O(n) 諛곗뿴 |

## 3. ??쒖쟻???숈쟻 怨꾪쉷踰?臾몄젣??

### 1. 理쒖옣 怨듯넻 遺遺??섏뿴 (LCS)

**臾몄젣**: ??臾몄옄?댁쓽 理쒖옣 怨듯넻 遺遺??섏뿴??湲몄씠瑜?援ы븯?몄슂.

```python
def lcs_length(X, Y):
    """
    理쒖옣 怨듯넻 遺遺??섏뿴 湲몄씠 怨꾩궛

    Args:
        X, Y (str): 鍮꾧탳??臾몄옄?대뱾

    Returns:
        int: LCS 湲몄씠
    """
    m, n = len(X), len(Y)

    # DP ?뚯씠釉??앹꽦 (m+1) x (n+1)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # DP ?뚯씠釉?梨꾩슦湲?
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]:        # 臾몄옄媛 媛숈쑝硫?
                dp[i][j] = dp[i-1][j-1] + 1
            else:                       # 臾몄옄媛 ?ㅻⅤ硫?
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

# ?뚯뒪??
X = "AGGTAB"
Y = "GXTXAYB"
print(f"LCS 湲몄씠: {lcs_length(X, Y)}")  # 4 ("GTAB")
```

### 2. 0/1 諛곕궘 臾몄젣 (Knapsack Problem)

**臾몄젣**: ?쒗븳??臾닿쾶 ?댁뿉??理쒕? 媛移섎? ?삳뒗 臾쇨굔 議고빀??李얠쑝?몄슂.

```python
def knapsack_01(weights, values, capacity):
    """
    0/1 諛곕궘 臾몄젣 ?닿껐

    Args:
        weights (list): 媛?臾쇨굔??臾닿쾶
        values (list): 媛?臾쇨굔??媛移?
        capacity (int): 諛곕궘 ?⑸웾

    Returns:
        int: 理쒕? 媛移?
    """
    n = len(weights)
    # DP ?뚯씠釉? (n+1) x (capacity+1)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    # DP ?뚯씠釉?梨꾩슦湲?
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                # 臾쇨굔???ｋ뒗 寃쎌슦 vs ?ｌ? ?딅뒗 寃쎌슦
                dp[i][w] = max(dp[i-1][w],
                              dp[i-1][w - weights[i-1]] + values[i-1])
            else:
                # 臾쇨굔???ｌ쓣 ???놁쓬
                dp[i][w] = dp[i-1][w]

    return dp[n][capacity]

# ?뚯뒪??
weights = [2, 3, 4, 5]     # 臾쇨굔 臾닿쾶
values = [3, 4, 5, 6]      # 臾쇨굔 媛移?
capacity = 5                # 諛곕궘 ?⑸웾

max_value = knapsack_01(weights, values, capacity)
print(f"理쒕? 媛移? {max_value}")  # 7 (臾닿쾶 2+3, 媛移?3+4)
```

### 3. ?숈쟾 嫄곗뒪由꾨룉 臾몄젣

**臾몄젣**: 理쒖냼 媛쒖닔???숈쟾?쇰줈 嫄곗뒪由꾨룉??留뚮뱾 ???덈뒗媛?

```python
def coin_change(coins, amount):
    """
    理쒖냼 ?숈쟾 媛쒖닔濡?嫄곗뒪由꾨룉 留뚮뱾湲?

    Args:
        coins (list): ?숈쟾 醫낅쪟??
        amount (int): 嫄곗뒪由꾨룉 湲덉븸

    Returns:
        int: 理쒖냼 ?숈쟾 媛쒖닔 (-1? 遺덇???
    """
    # DP ?뚯씠釉? 湲덉븸 0遺??amount源뚯?
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0?먯? 0媛쒖쓽 ?숈쟾

    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# ?뚯뒪??
coins = [1, 2, 5]      # ?숈쟾 醫낅쪟
amount = 11             # 嫄곗뒪由꾨룉

min_coins = coin_change(coins, amount)
print(f"理쒖냼 ?숈쟾 媛쒖닔: {min_coins}")  # 3 (5+5+1)
```

## 4. ?숈쟻 怨꾪쉷踰??ㅺ퀎 ?⑦꽩

### 1. DP ?뚯씠釉??뺤쓽
- **???댁쓽 ?섎?**: 臾댁뾿???섑??대뒗媛?
- **珥덇린媛??ㅼ젙**: 湲곗? 議곌굔???대떦
- **?먰솕??*: ?댁쟾 寃곌낵濡쒕????꾩옱 寃곌낵瑜?怨꾩궛

### 2. ?곹깭 ?꾩씠
```python
# ?쇰컲?곸씤 ?⑦꽩
dp[i][j] = max(
    dp[i-1][j],                    # ?댁쟾 ?곹깭 ?좎?
    dp[i-1][j - weight] + value    # ?덈줈???좏깮
)
```

### 3. 怨듦컙 理쒖쟻??
```python
# 2李⑥썝 DP瑜?1李⑥썝?쇰줈 理쒖쟻??
def knapsack_1d(weights, values, capacity):
    dp = [0] * (capacity + 1)

    for i in range(len(weights)):
        for w in range(capacity, weights[i]-1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[capacity]
```

## 5. 怨좉툒 ?숈쟻 怨꾪쉷踰?湲곕쾿

### 1. ?됰젹 泥댁씤 怨깆뀍 (Matrix Chain Multiplication)

```python
def matrix_chain_order(dimensions):
    """
    ?됰젹 泥댁씤 怨깆뀍??理쒖냼 ?곗궛 ?잛닔 怨꾩궛

    Args:
        dimensions (list): ?됰젹 李⑥썝??[d0, d1, d2, ..., dn]

    Returns:
        int: 理쒖냼 ?곗궛 ?잛닔
    """
    n = len(dimensions) - 1  # ?됰젹 媛쒖닔
    dp = [[0] * n for _ in range(n)]

    # 泥댁씤 湲몄씠蹂꾨줈 怨꾩궛
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            # 媛?ν븳 紐⑤뱺 遺꾪븷???쒕룄
            for k in range(i, j):
                cost = (dp[i][k] + dp[k+1][j] +
                       dimensions[i] * dimensions[k+1] * dimensions[j+1])
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n-1]
```

### 2. 理쒖옣 利앷? 遺遺??섏뿴 (LIS)

```python
def longest_increasing_subsequence(nums):
    """
    理쒖옣 利앷? 遺遺??섏뿴 湲몄씠 怨꾩궛

    Args:
        nums (list): ?レ옄 諛곗뿴

    Returns:
        int: LIS 湲몄씠
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n  # 媛??꾩튂?먯꽌??LIS 湲몄씠

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)
```

## 6. ?숈쟻 怨꾪쉷踰?臾몄젣 ?닿껐 ?꾨왂

### 1. 臾몄젣 遺꾩꽍
- **理쒖쟻 遺遺?援ъ“**媛 ?덈뒗媛?
- **以묐났 遺遺?臾몄젣**媛 ?덈뒗媛?
- **?곹깭 ?뺤쓽**??臾댁뾿?멸??

### 2. ?곹깭 ?뺤쓽
- **紐낇솗???섎?**: dp[i] ?먮뒗 dp[i][j]媛 臾댁뾿???섑??대뒗媛?
- **異⑸텇???뺣낫**: 理쒖쟻?대? 援ъ꽦?????덈뒗媛?

### 3. ?먰솕???꾩텧
- **湲곗? 議곌굔**: 媛???묒? 臾몄젣????
- **?곹깭 ?꾩씠**: ?댁쟾 ?곹깭濡쒕????꾩옱 ?곹깭 怨꾩궛

### 4. 援ы쁽 諛?理쒖쟻??
- **?쒓컙/怨듦컙 蹂듭옟??* 遺꾩꽍
- **硫붾え由?理쒖쟻??* 媛???щ? ?뺤씤

## 7. ?곗뒿 臾몄젣

1. ?쇰낫?섏튂 ?섏뿴???숈쟻 怨꾪쉷踰뺤쑝濡?援ы쁽?섍퀬, ?ш? 踰꾩쟾怨??깅뒫??鍮꾧탳?대낫?몄슂.

2. ?ㅼ쓬 臾몄젣???먰솕?앹쓣 ?꾩텧?대낫?몄슂: "n媛쒖쓽 怨꾨떒??1移??먮뒗 2移몄뵫 ?щ씪媛????덈뒗 諛⑸쾿????

3. LCS 臾몄젣瑜?硫붾え?댁젣?댁뀡?쇰줈 援ы쁽?대낫?몄슂.

4. 諛곕궘 臾몄젣?먯꽌 臾쇨굔???щ윭 媛??좏깮?????덈뒗 寃쎌슦(Unbounded Knapsack)瑜??닿껐?대낫?몄슂.

## 留덈Т由?

?숈쟻 怨꾪쉷踰뺤? ?대졄吏留?媛뺣젰??臾몄젣 ?닿껐 ?꾧뎄?낅땲?? 泥섏쓬?먮뒗 蹂듭옟??蹂댁씠吏留? ?⑦꽩???듯엳硫??ㅼ뼇??臾몄젣瑜??곗븘?섍쾶 ?닿껐?????덉뒿?덈떎.

**?듭떖 ?붿빟:**
- ?숈쟻 怨꾪쉷踰?= 以묐났 遺遺?臾몄젣 + 理쒖쟻 遺遺?援ъ“ + 硫붾え?댁젣?댁뀡
- 硫붾え?댁젣?댁뀡(?섑뼢?? vs ?酉몃젅?댁뀡(?곹뼢??
- ???臾몄젣: LCS, 諛곕궘 臾몄젣, ?숈쟾 嫄곗뒪由꾨룉
- ?ㅺ퀎 ?⑦꽩: ?곹깭 ?뺤쓽 ???먰솕????援ы쁽

?ㅼ쓬 湲?먯꽌??**洹몃━???뚭퀬由ъ쬁**??????뚯븘蹂닿쿋?듬땲?? ?쒓컙 理쒖꽑???좏깮???꾩껜 理쒖쟻?대줈 ?댁뼱吏??留ㅻ젰?곸씤 ?뚭퀬由ъ쬁??諛곗썙蹂닿쿋?듬땲??

**異붽? ??** ?숈쟻 怨꾪쉷踰?臾몄젣瑜?? ?뚮뒗 ?묒? ?낅젰遺???쒖옉?댁꽌 ?⑦꽩???뚯븙?섏꽭?? DP ?뚯씠釉붿쓣 吏곸젒 洹몃젮蹂대ŉ ?먰솕?앹쓣 寃利앺븯???듦????ㅼ씠?몄슂! ?뱤?쭬
