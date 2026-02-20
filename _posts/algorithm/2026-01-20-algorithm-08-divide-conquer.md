---
layout: post
title:  "遺꾪븷 ?뺣났 (Divide and Conquer): ??臾몄젣瑜??묒? 臾몄젣濡??섎늻湲?
date:   2025-01-20 09:00:00 +0900
categories: [IT, ?뚭퀬由ъ쬁]
tags: [?뚭퀬由ъ쬁, 遺꾪븷?뺣났, 蹂묓빀?뺣젹, ?듭젙?? 留덉뒪?곗젙由?
description: "遺꾪븷 ?뺣났 ?뚭퀬由ъ쬁???먮━? 留덉뒪???뺣━, ??쒖쟻???뚭퀬由ъ쬁?ㅼ쓣 諛곗썎?덈떎."
---

# 遺꾪븷 ?뺣났 (Divide and Conquer): ??臾몄젣瑜??묒? 臾몄젣濡??섎늻湲?

?꾨줈洹몃옒諛띿뿉??蹂듭옟??臾몄젣瑜??닿껐?섎뒗 媛??媛뺣젰???꾨왂 以??섎굹媛 諛붾줈 **遺꾪븷 ?뺣났(Divide and Conquer)**?낅땲?? ??臾몄젣瑜????묒? 臾몄젣濡??섎늻???닿껐?섎뒗 泥닿퀎?곸씤 ?묎렐 諛⑹떇?낅땲?? ?대쾲 湲?먯꽌??遺꾪븷 ?뺣났???먮━? ??쒖쟻???뚭퀬由ъ쬁?ㅼ쓣 ?먯꽭???뚯븘蹂닿쿋?듬땲??

## 1. 遺꾪븷 ?뺣났??湲곗큹 媛쒕뀗

### 遺꾪븷 ?뺣났???뺤쓽
蹂듭옟??臾몄젣瑜?**???묒? ?숈씪???뺥깭??遺遺?臾몄젣濡?遺꾪빐**?섏뿬 ?닿껐?섍퀬, 洹?寃곌낵瑜?**寃고빀**?섏뿬 ?꾩껜 臾몄젣瑜??닿껐?섎뒗 ?뚭퀬由ъ쬁 ?ㅺ퀎 湲곕쾿?낅땲??

### 遺꾪븷 ?뺣났??3?④퀎
1. **遺꾪븷 (Divide)**: ?먮옒 臾몄젣瑜????묒? 遺遺?臾몄젣濡??섎닏?덈떎
2. **?뺣났 (Conquer)**: 媛?遺遺?臾몄젣瑜??ш??곸쑝濡??닿껐?⑸땲??
3. **寃고빀 (Combine)**: 遺遺?臾몄젣?ㅼ쓽 ?대? 寃고빀?섏뿬 ?꾩껜 臾몄젣???대? 援ы빀?덈떎

### 遺꾪븷 ?뺣났 vs ?숈쟻 怨꾪쉷踰?
- **怨듯넻??*: ??臾몄젣瑜??묒? 臾몄젣濡?遺꾪빐
- **李⑥씠??*:
  - 遺꾪븷 ?뺣났: 遺遺?臾몄젣媛 ?낅┰??(?섏쐞 臾몄젣 媛?以묐났 ?놁쓬)
  - ?숈쟻 怨꾪쉷踰? 遺遺?臾몄젣媛 以묐났??(硫붾え?댁젣?댁뀡 ?꾩슂)

## 2. 遺꾪븷 ?뺣났???쒓컙 蹂듭옟?? 留덉뒪???뺣━

### 留덉뒪???뺣━???뺤쓽
?ш????뚭퀬由ъ쬁???쒓컙 蹂듭옟?꾨? 遺꾩꽍?섎뒗 怨듭떇?낅땲??

**留덉뒪???뺣━ ?뺥깭:**
```
T(n) = aT(n/b) + f(n)

?ш린??
- a: ?ш? ?몄텧 ?잛닔
- b: 臾몄젣 ?ш린 媛먯냼 鍮꾩쑉
- f(n): 遺꾪븷/寃고빀 ?④퀎??鍮꾩슜
```

### 留덉뒪???뺣━??寃쎌슦 遺꾩꽍

#### 寃쎌슦 1: f(n) = O(n^(log_b a - 琯))
- **寃곌낵**: T(n) = ?(n^log_b a)
- **?섎?**: ?ш? ?몄텧??吏諛곗쟻

#### 寃쎌슦 2: f(n) = ?(n^log_b a log^k n)
- **寃곌낵**: T(n) = ?(n^log_b a log^(k+1) n)
- **?섎?**: 遺꾪븷/寃고빀怨??ш?媛 洹좏삎

#### 寃쎌슦 3: f(n) = 廓(n^log_b a + 琯)
- **寃곌낵**: T(n) = ?(f(n))
- **?섎?**: 遺꾪븷/寃고빀 ?④퀎媛 吏諛곗쟻

### 留덉뒪???뺣━ ?곸슜 ?덉떆

**蹂묓빀 ?뺣젹:**
```
T(n) = 2T(n/2) + O(n)
a = 2, b = 2, f(n) = n
log_b a = log_2 2 = 1
f(n) = ?(n^1) ??寃쎌슦 2
??T(n) = ?(n log n)
```

**?댁쭊 寃??**
```
T(n) = T(n/2) + O(1)
a = 1, b = 2, f(n) = 1
log_b a = log_2 1 = 0
f(n) = ?(1) = ?(n^0) ??寃쎌슦 3
??T(n) = ?(1) = O(log n)
```

## 3. ??쒖쟻??遺꾪븷 ?뺣났 ?뚭퀬由ъ쬁??

### 1. 蹂묓빀 ?뺣젹 (Merge Sort)

**?먮━**: 諛곗뿴??諛섏쑝濡??섎늻??媛곴컖 ?뺣젹????蹂묓빀?⑸땲??

```python
def merge(arr, left, mid, right):
    """
    ??媛쒖쓽 ?뺣젹??遺遺?諛곗뿴??蹂묓빀

    Args:
        arr (list): ?먮낯 諛곗뿴
        left (int): ?쇱そ 遺遺?諛곗뿴 ?쒖옉 ?몃뜳??
        mid (int): 以묎컙 吏??
        right (int): ?ㅻⅨ履?遺遺?諛곗뿴 ???몃뜳??
    """
    # ?꾩떆 諛곗뿴 ?앹꽦
    n1 = mid - left + 1
    n2 = right - mid

    L = arr[left:left + n1]
    R = arr[mid + 1:mid + 1 + n2]

    i = j = 0
    k = left

    # ??諛곗뿴 蹂묓빀
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # ?⑥? ?붿냼??蹂듭궗
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
    蹂묓빀 ?뺣젹 援ы쁽

    Args:
        arr (list): ?뺣젹??諛곗뿴
        left (int): ?쒖옉 ?몃뜳??
        right (int): ???몃뜳??
    """
    if left < right:
        mid = (left + right) // 2

        # 遺꾪븷 ?④퀎
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)

        # 寃고빀 ?④퀎
        merge(arr, left, mid, right)

# ?뚯뒪??
test_array = [12, 11, 13, 5, 6, 7]
print("?뺣젹 ??", test_array)
merge_sort(test_array, 0, len(test_array) - 1)
print("?뺣젹 ??", test_array)
```

**?쒓컙 蹂듭옟??遺꾩꽍:**
- 遺꾪븷: O(log n) ?④퀎
- 媛??④퀎 蹂묓빀: O(n)
- 珥? O(n log n)

**?뱀쭠:**
- ?덉젙???뺣젹
- 異붽? 怨듦컙 O(n) ?꾩슂
- ?몃? ?뺣젹???좎슜

### 2. ???뺣젹 (Quick Sort)

**?먮━**: ?쇰쿁??湲곗??쇰줈 諛곗뿴??遺꾪븷?섏뿬 ?뺣젹?⑸땲??

```python
def partition(arr, low, high):
    """
    ???뺣젹??遺꾪븷 ?⑥닔

    Args:
        arr (list): 遺꾪븷??諛곗뿴
        low (int): ?쒖옉 ?몃뜳??
        high (int): ???몃뜳??

    Returns:
        int: ?쇰쿁??理쒖쥌 ?꾩튂
    """
    pivot = arr[high]  # 留덉?留??붿냼瑜??쇰쿁?쇰줈 ?좏깮
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    """
    ???뺣젹 援ы쁽

    Args:
        arr (list): ?뺣젹??諛곗뿴
        low (int): ?쒖옉 ?몃뜳??
        high (int): ???몃뜳??
    """
    if low < high:
        # 遺꾪븷
        pi = partition(arr, low, high)

        # ?뺣났
        quick_sort(arr, low, pi - 1)    # ?쇱そ 遺遺?
        quick_sort(arr, pi + 1, high)   # ?ㅻⅨ履?遺遺?

# ?뚯뒪??
test_array = [10, 7, 8, 9, 1, 5]
print("?뺣젹 ??", test_array)
quick_sort(test_array, 0, len(test_array) - 1)
print("?뺣젹 ??", test_array)
```

**?쒓컙 蹂듭옟??遺꾩꽍:**
- 理쒖꽑: O(n log n) - 洹좊벑 遺꾪븷
- 理쒖븙: O(n짼) - ?명뼢??遺꾪븷
- ?됯퇏: O(n log n)

**?뱀쭠:**
- ?쒖옄由??뺣젹 (異붽? 怨듦컙 O(log n))
- 罹먯떆 ?⑥쑉??醫뗭쓬
- 遺덉븞?뺤쟻 ?뺣젹

### 3. 理쒓렐??????李얘린 (Closest Pair of Points)

**臾몄젣**: 2D ?됰㈃?곸쓽 ?먮뱾 以?媛??媛源뚯슫 ???먯쓣 李얠쑝?몄슂.

```python
import math

def distance(p1, p2):
    """?????ъ씠??嫄곕━ 怨꾩궛"""
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

def brute_force(points):
    """釉뚮（???ъ뒪 諛⑹떇?쇰줈 理쒖냼 嫄곕━ 李얘린"""
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
    遺꾪븷 ?뺣났?쇰줈 理쒓렐??????李얘린

    Args:
        points (list): [(x, y), ...] ?뺥깭????由ъ뒪??

    Returns:
        float: 理쒖냼 嫄곕━
    """
    def closest_util(points_sorted_x, points_sorted_y):
        n = len(points_sorted_x)

        # 湲곗? 議곌굔
        if n <= 3:
            return brute_force(points_sorted_x)

        # 以묒븰 ??
        mid = n // 2
        mid_point = points_sorted_x[mid]

        # 醫뚯슦濡?遺꾪븷
        left_x = points_sorted_x[:mid]
        right_x = points_sorted_x[mid:]

        # Y醫뚰몴 ?뺣젹???먮뱾??遺꾪븷
        left_y = [p for p in points_sorted_y if p[0] <= mid_point[0]]
        right_y = [p for p in points_sorted_y if p[0] > mid_point[0]]

        # ?ш? ?몄텧
        dl = closest_util(left_x, left_y)
        dr = closest_util(right_x, right_y)
        d = min(dl, dr)

        # 以묒븰 ??洹쇱쿂 ?먮뱾 寃??
        strip = [p for p in points_sorted_y if abs(p[0] - mid_point[0]) < d]

        for i in range(len(strip)):
            for j in range(i + 1, min(i + 7, len(strip))):
                dist = distance(strip[i], strip[j])
                if dist < d:
                    d = dist

        return d

    # X醫뚰몴 湲곗? ?뺣젹
    points_x = sorted(points, key=lambda p: p[0])
    points_y = sorted(points, key=lambda p: p[1])

    return closest_util(points_x, points_y)

# ?뚯뒪??
points = [(2, 3), (12, 30), (40, 50), (5, 1), (12, 10), (3, 4)]
min_distance = closest_pair(points)
print(f"理쒖냼 嫄곕━: {min_distance:.2f}")
```

**?쒓컙 蹂듭옟??** O(n log n)

### 4. ?ㅽ듃?쇱꽱 ?됰젹 怨깆뀍 (Strassen's Matrix Multiplication)

**?먮━**: 2x2 ?됰젹 怨깆뀍??7踰덉쓽 怨깆뀍?쇰줈 ?섑뻾?⑸땲??

```python
def add_matrix(A, B):
    """?됰젹 ?㏃뀍"""
    return [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def subtract_matrix(A, B):
    """?됰젹 類꾩뀍"""
    return [[A[i][j] - B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

def strassen_multiply(A, B):
    """
    ?ㅽ듃?쇱꽱 ?뚭퀬由ъ쬁?쇰줈 ?됰젹 怨깆뀍

    Args:
        A, B (list): n x n ?됰젹 (n? 2??嫄곕벊?쒓낢)

    Returns:
        list: A x B 寃곌낵 ?됰젹
    """
    n = len(A)

    if n == 1:
        return [[A[0][0] * B[0][0]]]

    # ?됰젹??4?깅텇
    mid = n // 2
    A11 = [row[:mid] for row in A[:mid]]
    A12 = [row[mid:] for row in A[:mid]]
    A21 = [row[:mid] for row in A[mid:]]
    A22 = [row[mid:] for row in A[mid:]]

    B11 = [row[:mid] for row in B[:mid]]
    B12 = [row[mid:] for row in B[:mid]]
    B21 = [row[:mid] for row in B[mid:]]
    B22 = [row[mid:] for row in B[mid:]]

    # 7踰덉쓽 怨깆뀍 怨꾩궛
    P1 = strassen_multiply(A11, subtract_matrix(B12, B22))
    P2 = strassen_multiply(add_matrix(A11, A12), B22)
    P3 = strassen_multiply(add_matrix(A21, A22), B11)
    P4 = strassen_multiply(A22, subtract_matrix(B21, B11))
    P5 = strassen_multiply(add_matrix(A11, A22), add_matrix(B11, B22))
    P6 = strassen_multiply(subtract_matrix(A12, A22), add_matrix(B21, B22))
    P7 = strassen_multiply(subtract_matrix(A11, A21), add_matrix(B11, B12))

    # 寃곌낵 ?됰젹 議고빀
    C11 = add_matrix(subtract_matrix(add_matrix(P5, P4), P2), P6)
    C12 = add_matrix(P1, P2)
    C21 = add_matrix(P3, P4)
    C22 = subtract_matrix(subtract_matrix(add_matrix(P5, P1), P3), P7)

    # 寃곌낵 ?됰젹 援ъ꽦
    result = []
    for i in range(mid):
        result.append(C11[i] + C12[i])
    for i in range(mid):
        result.append(C21[i] + C22[i])

    return result

# ?뚯뒪??(2x2 ?됰젹)
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
result = strassen_multiply(A, B)
print("A x B =", result)
```

**?쒓컙 蹂듭옟??** O(n^log??) ??O(n^2.81) (?쇰컲 ?됰젹 怨깆뀍 O(n^3)蹂대떎 ?⑥쑉??

## 4. 遺꾪븷 ?뺣났???λ떒??

### ?μ젏
1. **臾몄젣 遺꾪빐**: 蹂듭옟??臾몄젣瑜?愿由?媛?ν븳 ?⑥쐞濡?遺꾪빐
2. **蹂묐젹??*: ?낅┰?곸씤 遺遺?臾몄젣瑜??숈떆??泥섎━ 媛??
3. **理쒖쟻??*: 罹먯떆 ?⑥쑉???μ긽 (吏??꽦)
4. **?섑븰??遺꾩꽍**: 留덉뒪???뺣━瑜??듯븳 ?뺥솗??蹂듭옟??遺꾩꽍

### ?⑥젏
1. **?ш? ?ㅻ쾭?ㅻ뱶**: ?⑥닔 ?몄텧 鍮꾩슜
2. **?ㅽ깮 ?ㅻ쾭?뚮줈??*: 源딆? ?ш??먯꽌 ?꾪뿕
3. **異붽? 怨듦컙**: ?쇰? ?뚭퀬由ъ쬁?먯꽌 O(n) 怨듦컙 ?꾩슂
4. **湲곗? 議곌굔**: ?곸젅??湲곗? 議곌굔 ?ㅼ젙???대젮?

## 5. 遺꾪븷 ?뺣났 ?ㅺ퀎 ?⑦꽩

### 1. 臾몄젣 遺꾩꽍
- **遺꾪븷 媛?μ꽦**: 臾몄젣瑜??낅┰?곸씤 遺遺?臾몄젣濡??섎닃 ???덈뒗媛?
- **寃고빀 媛?μ꽦**: 遺遺??대? ?꾩껜 ?대줈 寃고빀?????덈뒗媛?
- **湲곗? 議곌굔**: ?ш?瑜?硫덉텧 紐낇솗??議곌굔???덈뒗媛?

### 2. ?뚭퀬由ъ쬁 ?ㅺ퀎
- **遺꾪븷 ?꾨왂**: 臾몄젣瑜??대뼸寃??섎닃 寃껋씤媛?
- **?뺣났 ?꾨왂**: 遺遺?臾몄젣瑜??대뼸寃??닿껐??寃껋씤媛?
- **寃고빀 ?꾨왂**: 寃곌낵瑜??대뼸寃?蹂묓빀??寃껋씤媛?

### 3. 理쒖쟻??怨좊젮?ы빆
- **湲곗? 議곌굔 理쒖쟻??*: ?묒? 臾몄젣??吏곸젒 ?닿껐
- **遺덊븘?뷀븳 ?묒뾽 ?쒓굅**: 以묐났 怨꾩궛 ?쇳븯湲?
- **怨듦컙 理쒖쟻??*: ?쒖옄由??뚭퀬由ъ쬁 怨좊젮

## 6. 怨좉툒 遺꾪븷 ?뺣났 湲곕쾿

### 1. 硫?곗뒪?덈뱶 遺꾪븷 ?뺣났
```python
import concurrent.futures
import threading

def parallel_merge_sort(arr):
    """
    蹂묐젹 蹂묓빀 ?뺣젹 (硫?곗뒪?덈뱶)
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

### 2. 遺꾪븷 ?뺣났 + ?숈쟻 怨꾪쉷踰?
```python
def matrix_chain_multiply(dimensions):
    """
    ?됰젹 泥댁씤 怨깆뀍 理쒖쟻 ?쒖꽌 李얘린
    遺꾪븷 ?뺣났 + DP ?섏씠釉뚮━??
    """
    n = len(dimensions) - 1

    def optimal_multiply(i, j):
        if i == j:
            return 0

        min_cost = float('inf')

        for k in range(i, j):
            # 遺꾪븷 ?뺣났?쇰줈 理쒖쟻 遺꾪븷??李얘린
            cost = (optimal_multiply(i, k) +
                   optimal_multiply(k + 1, j) +
                   dimensions[i-1] * dimensions[k] * dimensions[j])

            min_cost = min(min_cost, cost)

        return min_cost

    return optimal_multiply(1, n)
```

## 7. 遺꾪븷 ?뺣났 臾몄젣 ?닿껐 ?꾨왂

### 1. 臾몄젣 遺꾨쪟
- **洹좊벑 遺꾪븷**: 蹂묓빀 ?뺣젹 (n/2??遺꾪븷)
- **遺덇퇏??遺꾪븷**: ???뺣젹 (?쇰쿁 湲곗? 遺꾪븷)
- **?ㅼ감??遺꾪븷**: 理쒓렐??????(怨듦컙 遺꾪븷)

### 2. ?⑥쑉??遺꾩꽍
- **留덉뒪???뺣━ ?곸슜**: ?ш???蹂듭옟??怨꾩궛
- **蹂묐ぉ 吏???앸퀎**: 媛??鍮꾩슜?????④퀎 理쒖쟻??
- **?곸닔 理쒖쟻??*: ?ㅼ젣 援ы쁽?먯꽌 ?깅뒫 ?μ긽

### 3. ?붾쾭源???
- **?묒? ?낅젰遺???뚯뒪??*: 湲곗? 議곌굔 寃利?
- **?ш? ?몃━ 洹몃━湲?*: ?몄텧 ?먮쫫 ?쒓컖??
- **?ㅽ깮 異붿쟻**: ?ш? 源딆씠 紐⑤땲?곕쭅

## 8. ?곗뒿 臾몄젣

1. 蹂묓빀 ?뺣젹怨????뺣젹???쒓컙 蹂듭옟?꾨? 留덉뒪???뺣━瑜??ъ슜?섏뿬 遺꾩꽍?대낫?몄슂.

2. 遺꾪븷 ?뺣났 ?뚭퀬由ъ쬁?먯꽌 湲곗? 議곌굔??以묒슂???댁쑀??臾댁뾿?멸???

3. ?ㅽ듃?쇱꽱 ?됰젹 怨깆뀍???쇰컲 ?됰젹 怨깆뀍蹂대떎 ?⑥쑉?곸씤 ?댁쑀瑜??ㅻ챸?섏꽭??

4. 遺꾪븷 ?뺣났???ъ슜?????녿뒗 臾몄젣???덉떆瑜??ㅼ뼱蹂댁꽭??

## 留덈Т由?

遺꾪븷 ?뺣났? 而댄벂??怨쇳븰???듭떖 ?뚭퀬由ъ쬁 ?ㅺ퀎 湲곕쾿 以??섎굹?낅땲?? ??臾몄젣瑜?泥닿퀎?곸쑝濡??묒? 臾몄젣濡??섎늻???닿껐?섎뒗 媛뺣젰???꾨왂?낅땲??

**?듭떖 ?붿빟:**
- 遺꾪븷 ?뺣났 = 遺꾪븷 ???뺣났 ??寃고빀??3?④퀎
- 留덉뒪???뺣━: T(n) = aT(n/b) + f(n) 蹂듭옟??遺꾩꽍
- ????뚭퀬由ъ쬁: 蹂묓빀 ?뺣젹, ???뺣젹, 理쒓렐??????
- ?μ젏: 蹂묐젹???⑹씠, ?섑븰??遺꾩꽍 媛??
- ?⑥젏: ?ш? ?ㅻ쾭?ㅻ뱶, 異붽? 怨듦컙 ?꾩슂

?ㅼ쓬 湲?먯꽌??**洹몃옒???뚭퀬由ъ쬁**??????뚯븘蹂닿쿋?듬땲?? ?곌껐???곗씠??援ъ“瑜??ㅻ（???뚭퀬由ъ쬁?ㅼ쓽 ?멸퀎瑜??먰뿕?대낫寃좎뒿?덈떎!

**異붽? ??** 遺꾪븷 ?뺣났 ?뚭퀬由ъ쬁???ㅺ퀎???뚮뒗 ??긽 湲곗? 議곌굔??癒쇱? ?앷컖?섏꽭?? ?ш????앹쓣 紐낇솗???섎뒗 寃껋씠 以묒슂?⑸땲?? ?뙰?뱤
