---
layout: post
title:  "?뚯씠??媛뺤쓽 5?? 諛섎났臾?(for, while)"
date:   2025-01-27 10:00:00 +0900
categories: [IT, ?뚯씠??媛뺤쓽]
tags: [?뚯씠?? 諛섎났臾? for臾? while臾? 諛섎났]
description: "?뚯씠?ъ쓽 for臾멸낵 while臾몄쓣 諛곗슦怨? 由ъ뒪???쒗쉶, 踰붿쐞 ?⑥닔, 以묒꺽 諛섎났臾????ㅼ뼇??諛섎났臾??쒖슜踰뺤쓣 ?숈뒿?⑸땲??"
---

# ?뚯씠??媛뺤쓽 5?? 諛섎났臾?(for, while)

## 諛섎났臾몄씠??

諛섎났臾몄? ?뱀젙 肄붾뱶瑜??щ윭 踰??ㅽ뻾?????덇쾶 ?댁＜???쒖뼱臾몄엯?덈떎. 媛숈? ?묒뾽??諛섎났?댁빞 ?????좎슜?⑸땲??

## for 臾?

?뺥빐吏??잛닔留뚰겮 ?먮뒗 ?쒗?ㅼ쓽 媛??붿냼?????諛섎났?⑸땲??

### 湲곕낯 ?뺤떇

```python
for 蹂??in ?쒗??
    # 諛섎났 ?ㅽ뻾??肄붾뱶
```

### 由ъ뒪???쒗쉶

```python
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]

for fruit in fruits:
    print(fruit)
```

異쒕젰:
```
?ш낵
諛붾굹??
?ㅻ젋吏
```

### range() ?⑥닔 ?ъ슜

```python
# 0遺??9源뚯?
for i in range(10):
    print(i)

# 1遺??10源뚯?
for i in range(1, 11):
    print(i)

# 0遺??10源뚯?, 2??利앷?
for i in range(0, 11, 2):
    print(i)
```

### 臾몄옄???쒗쉶

```python
word = "Python"

for char in word:
    print(char)
```

異쒕젰:
```
P
y
t
h
o
n
```

## while 臾?

議곌굔??李몄씤 ?숈븞 諛섎났?⑸땲??

### 湲곕낯 ?뺤떇

```python
while 議곌굔:
    # 諛섎났 ?ㅽ뻾??肄붾뱶
```

### ?덉떆

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

異쒕젰:
```
0
1
2
3
4
```

## 諛섎났臾??쒖뼱

### break 臾?

諛섎났臾몄쓣 利됱떆 醫낅즺?⑸땲??

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

異쒕젰:
```
0
1
2
3
4
```

### continue 臾?

?꾩옱 諛섎났??嫄대꼫?곌퀬 ?ㅼ쓬 諛섎났?쇰줈 ?섏뼱媛묐땲??

```python
for i in range(10):
    if i % 2 == 0:
        continue  # 吏앹닔硫?嫄대꼫?곌린
    print(i)
```

異쒕젰:
```
1
3
5
7
9
```

### else 臾?

諛섎났臾몄씠 ?뺤긽?곸쑝濡??꾨즺?섎㈃ ?ㅽ뻾?⑸땲??

```python
for i in range(5):
    print(i)
else:
    print("諛섎났 ?꾨즺!")
```

**break濡?醫낅즺?섎㈃ else ?ㅽ뻾 ????**
```python
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("??硫붿떆吏??異쒕젰?섏? ?딆뒿?덈떎.")
```

## 以묒꺽 諛섎났臾?

諛섎났臾??덉뿉 ???ㅻⅨ 諛섎났臾몄쓣 ?ъ슜?????덉뒿?덈떎:

```python
# 援ш뎄??異쒕젰
for i in range(1, 10):
    for j in range(1, 10):
        print(f"{i} x {j} = {i * j}")
    print()  # 以꾨컮轅?
```

## ?ㅼ쟾 ?덉젣: ?レ옄 ?⑷퀎 援ы븯湲?

```python
# 1遺??100源뚯?????
total = 0
for i in range(1, 101):
    total += i

print(f"1遺??100源뚯????? {total}")
```

## ?ㅼ쟾 ?덉젣: ?⑺넗由ъ뼹 怨꾩궛

```python
n = int(input("?レ옄瑜??낅젰?섏꽭?? "))
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(f"{n}! = {factorial}")
```

## ?ㅼ쟾 ?덉젣: ?뚯닔 李얘린

```python
n = int(input("?レ옄瑜??낅젰?섏꽭?? "))
is_prime = True

if n < 2:
    is_prime = False
else:
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            is_prime = False
            break

if is_prime:
    print(f"{n}???뚯닔?낅땲??")
else:
    print(f"{n}???뚯닔媛 ?꾨떃?덈떎.")
```

## ?ㅼ쟾 ?덉젣: 蹂?李띻린

```python
# 吏곴컖?쇨컖??
n = int(input("以??섎? ?낅젰?섏꽭?? "))

for i in range(1, n + 1):
    print("*" * i)

# ??쭅媛곸궪媛곹삎
for i in range(n, 0, -1):
    print("*" * i)

# ?쇰씪誘몃뱶
for i in range(1, n + 1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)
```

## ?ㅼ쟾 ?덉젣: ?レ옄 留욎텛湲?寃뚯엫

```python
import random

answer = random.randint(1, 100)
attempts = 0

print("1遺??100 ?ъ씠???レ옄瑜?留욎떠蹂댁꽭??")

while True:
    guess = int(input("?レ옄瑜??낅젰?섏꽭?? "))
    attempts += 1
    
    if guess == answer:
        print(f"?뺣떟?낅땲?? {attempts}踰?留뚯뿉 留욎톬?듬땲??")
        break
    elif guess < answer:
        print("?????レ옄?낅땲??")
    else:
        print("???묒? ?レ옄?낅땲??")
```

## ?ㅼ쟾 ?덉젣: 由ъ뒪??泥섎━

```python
# ?먯닔 由ъ뒪?몄뿉???됯퇏 援ы븯湲?
scores = [85, 90, 78, 92, 88]
total = 0

for score in scores:
    total += score

average = total / len(scores)
print(f"?됯퇏 ?먯닔: {average:.2f}")

# 理쒓퀬?먭낵 理쒖???李얘린
max_score = scores[0]
min_score = scores[0]

for score in scores:
    if score > max_score:
        max_score = score
    if score < min_score:
        min_score = score

print(f"理쒓퀬?? {max_score}, 理쒖??? {min_score}")
```

## enumerate() ?⑥닔

?몃뜳?ㅼ? 媛믪쓣 ?④퍡 媛?몄삱 ???덉뒿?덈떎:

```python
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]

for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")
```

異쒕젰:
```
1. ?ш낵
2. 諛붾굹??
3. ?ㅻ젋吏
```

## zip() ?⑥닔

?щ윭 由ъ뒪?몃? ?숈떆???쒗쉶?????덉뒿?덈떎:

```python
names = ["?띻만??, "源泥좎닔", "?댁쁺??]
ages = [25, 30, 28]

for name, age in zip(names, ages):
    print(f"{name}: {age}??)
```

異쒕젰:
```
?띻만?? 25??
源泥좎닔: 30??
?댁쁺?? 28??
```

## 臾댄븳 猷⑦봽

議곌굔????긽 李몄씤 諛섎났臾몄엯?덈떎:

```python
# 臾댄븳 猷⑦봽 (二쇱쓽!)
while True:
    user_input = input("紐낅졊?대? ?낅젰?섏꽭??(醫낅즺: quit): ")
    if user_input == "quit":
        break
    print(f"?낅젰??紐낅졊?? {user_input}")
```

## for vs while ?몄젣 ?ъ슜?좉퉴?

- **for**: 諛섎났 ?잛닔媛 ?뺥빐???덇굅???쒗?ㅻ? ?쒗쉶????
- **while**: 議곌굔???곕씪 諛섎났????

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?⑥닔?????怨듬??대낫寃좎뒿?덈떎.

