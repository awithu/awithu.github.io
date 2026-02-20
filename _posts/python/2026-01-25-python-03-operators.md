---
layout: post
title:  "?뚯씠??媛뺤쓽 3?? ?곗궛??"
date:   2025-01-25 10:00:00 +0900
categories: [IT, ?뚯씠??媛뺤쓽]
tags: [?뚯씠?? ?곗궛?? ?곗닠?곗궛, ?쇰━?곗궛]
description: "?뚯씠?ъ쓽 ?곗닠 ?곗궛?? 鍮꾧탳 ?곗궛?? ?쇰━ ?곗궛?? ?좊떦 ?곗궛???깆쓣 諛곗슦怨??ㅼ쟾 ?덉젣瑜??듯빐 ?쒖슜?⑸땲??"
---

# ?뚯씠??媛뺤쓽 3?? ?곗궛??

## ?곗궛?먮??

?곗궛??Operator)???곗씠?곕? 泥섎━?섍린 ?꾪븳 湲고샇?낅땲?? ?뚯씠?ъ뿉???ㅼ뼇???곗궛?먭? ?덉뒿?덈떎.

## ?곗닠 ?곗궛??

湲곕낯?곸씤 ?섑븰 ?곗궛???섑뻾?⑸땲??

```python
a = 10
b = 3

print(a + b)  # ?㏃뀍: 13
print(a - b)  # 類꾩뀍: 7
print(a * b)  # 怨깆뀍: 30
print(a / b)  # ?섎닓?? 3.333...
print(a // b) # 紐? 3 (?뺤닔 ?섎닓??
print(a % b)  # ?섎㉧吏: 1
print(a ** b) # 嫄곕벊?쒓낢: 1000
```

**二쇱쓽?ы빆:**
- `/` : ??긽 ?ㅼ닔 寃곌낵 諛섑솚
- `//` : ?뺤닔 ?섎닓??(紐?
- `**` : 嫄곕벊?쒓낢 ?곗궛??

## 鍮꾧탳 ?곗궛??

??媛믪쓣 鍮꾧탳?섏뿬 `True` ?먮뒗 `False`瑜?諛섑솚?⑸땲??

```python
a = 10
b = 5

print(a == b)  # 媛숈쓬: False
print(a != b)  # ?ㅻ쫫: True
print(a > b)   # ?? True
print(a < b)   # ?묒쓬: False
print(a >= b)  # ?ш굅??媛숈쓬: True
print(a <= b)  # ?묎굅??媛숈쓬: False
```

## ?쇰━ ?곗궛??

?쇰━ ?곗궛???섑뻾?⑸땲??

```python
a = True
b = False

print(a and b)  # AND: False
print(a or b)   # OR: True
print(not a)    # NOT: False
```

**吏꾨━??**

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

## ?좊떦 ?곗궛??

蹂?섏뿉 媛믪쓣 ?좊떦?⑸땲??

```python
a = 10
a += 5   # a = a + 5? ?숈씪
print(a) # 15

a -= 3   # a = a - 3? ?숈씪
print(a) # 12

a *= 2   # a = a * 2? ?숈씪
print(a) # 24

a /= 4   # a = a / 4? ?숈씪
print(a) # 6.0

a //= 2  # a = a // 2? ?숈씪
print(a) # 3.0

a %= 2   # a = a % 2? ?숈씪
print(a) # 1.0

a **= 3  # a = a ** 3? ?숈씪
print(a) # 1.0
```

## 硫ㅻ쾭???곗궛??

媛믪씠 ?쒗??由ъ뒪?? 臾몄옄???????ы븿?섏뼱 ?덈뒗吏 ?뺤씤:

```python
numbers = [1, 2, 3, 4, 5]

print(3 in numbers)      # True
print(10 in numbers)     # False
print(3 not in numbers) # False
```

## ?앸퀎 ?곗궛??

??媛앹껜媛 媛숈? 媛앹껜?몄? ?뺤씤:

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is b)      # False (?ㅻⅨ 媛앹껜)
print(a is c)      # True (媛숈? 媛앹껜)
print(a == b)      # True (媛믪? 媛숈쓬)
```

**`is` vs `==`:**
- `is`: 媛숈? 媛앹껜?몄? ?뺤씤 (硫붾え由?二쇱냼 鍮꾧탳)
- `==`: 媛믪씠 媛숈?吏 ?뺤씤

## ?곗궛???곗꽑?쒖쐞

?곗궛?먮뒗 ?곗꽑?쒖쐞???곕씪 ?ㅽ뻾?⑸땲??

1. 愿꾪샇 `()`
2. 嫄곕벊?쒓낢 `**`
3. 怨깆뀍, ?섎닓?? ?섎㉧吏 `*`, `/`, `//`, `%`
4. ?㏃뀍, 類꾩뀍 `+`, `-`
5. 鍮꾧탳 ?곗궛??`<`, `>`, `<=`, `>=`, `==`, `!=`
6. ?쇰━ NOT `not`
7. ?쇰━ AND `and`
8. ?쇰━ OR `or`

**?덉떆:**
```python
result = 2 + 3 * 4      # 14 (怨깆뀍??癒쇱?)
result2 = (2 + 3) * 4   # 20 (愿꾪샇媛 癒쇱?)
```

## ?ㅼ쟾 ?덉젣: 怨꾩궛湲??꾨줈洹몃옩

```python
# 媛꾨떒??怨꾩궛湲?
num1 = float(input("泥?踰덉㎏ ?レ옄: "))
operator = input("?곗궛??(+, -, *, /): ")
num2 = float(input("??踰덉㎏ ?レ옄: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        print("0?쇰줈 ?섎닃 ???놁뒿?덈떎!")
        result = None
else:
    print("?섎せ???곗궛?먯엯?덈떎!")
    result = None

if result is not None:
    print(f"{num1} {operator} {num2} = {result}")
```

## ?ㅼ쟾 ?덉젣: ?깆쟻 ?먯젙

```python
score = float(input("?먯닔瑜??낅젰?섏꽭?? "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"?먯닔: {score}, ?깃툒: {grade}")
```

## ?ㅼ쟾 ?덉젣: 吏앹닔/????먮퀎

```python
number = int(input("?レ옄瑜??낅젰?섏꽭?? "))

if number % 2 == 0:
    print(f"{number}??吏앹닔?낅땲??")
else:
    print(f"{number}????섏엯?덈떎.")
```

## 臾몄옄???곗궛

```python
# 臾몄옄???곌껐
first_name = "??
last_name = "湲몃룞"
full_name = first_name + last_name
print(full_name)  # ?띻만??

# 臾몄옄??諛섎났
print("Hello" * 3)  # HelloHelloHello

# 臾몄옄??鍮꾧탳
print("apple" < "banana")  # True (?ъ쟾??
```

## 由ъ뒪???곗궛

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# 由ъ뒪???곌껐
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# 由ъ뒪??諛섎났
repeated = list1 * 2
print(repeated)  # [1, 2, 3, 1, 2, 3]

# 硫ㅻ쾭???뺤씤
print(2 in list1)  # True
```

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?쒖뼱臾?if, elif, else)?????怨듬??대낫寃좎뒿?덈떎.

