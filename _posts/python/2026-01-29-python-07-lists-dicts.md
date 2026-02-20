---
layout: post
title: "?뚯씠??媛뺤쓽 7?? 由ъ뒪?몄? ?뺤뀛?덈━"
date:   2025-01-29 10:00:00 +0900
categories: ["IT", "?뚯씠??媛뺤쓽"]
tags: ["?뚯씠?? 由ъ뒪?? ?뺤뀛?덈━", "list", "dict", "?먮즺援ъ“"]
description: "?뚯씠?ъ쓽 由ъ뒪?몄? ?뺤뀛?덈━瑜?諛곗슦怨? ?붿냼 異붽?/??젣/?섏젙, ?щ씪?댁떛, ?댁옣 ?⑥닔 ???ㅼ뼇???쒖슜踰뺤쓣 ?숈뒿?⑸땲??"
---

# ?뚯씠??媛뺤쓽 7?? 由ъ뒪?몄? ?뺤뀛?덈━

## 由ъ뒪?몃??

由ъ뒪??List)???щ윭 媛쒖쓽 ?곗씠?곕? ?쒖꽌?濡???ν븯???먮즺援ъ“?낅땲?? ?ㅻⅨ ?몄뼱??諛곗뿴怨??좎궗?섏?留????좎뿰?⑸땲??

## 由ъ뒪???앹꽦

```python
# 鍮?由ъ뒪??
empty_list = []

# ?レ옄 由ъ뒪??
numbers = [1, 2, 3, 4, 5]

# 臾몄옄??由ъ뒪??
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]

# ?ㅼ뼇??????쇳빀
mixed = [1, "臾몄옄??, 3.14, True]
```

## 由ъ뒪???묎렐

?몃뜳?ㅻ줈 ?붿냼???묎렐?⑸땲??(0遺???쒖옉):

```python
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]

print(fruits[0])  # ?ш낵 (泥?踰덉㎏ ?붿냼)
print(fruits[1])  # 諛붾굹??
print(fruits[-1]) # ?ㅻ젋吏 (留덉?留??붿냼, -1 ?ъ슜)
```

## 由ъ뒪???섏젙

```python
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]
fruits[0] = "?щ룄"
print(fruits)  # ['?щ룄', '諛붾굹??, '?ㅻ젋吏']
```

## 由ъ뒪???щ씪?댁떛

由ъ뒪?몄쓽 ?쇰?瑜?媛?몄삱 ???덉뒿?덈떎:

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[2:5])    # [2, 3, 4] (?몃뜳??2遺??4源뚯?)
print(numbers[:3])     # [0, 1, 2] (泥섏쓬遺??2源뚯?)
print(numbers[3:])     # [3, 4, 5, 6, 7, 8, 9] (3遺???앷퉴吏)
print(numbers[::2])    # [0, 2, 4, 6, 8] (2移몄뵫)
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (??닚)
```

## 由ъ뒪??硫붿꽌??

### ?붿냼 異붽?

```python
fruits = ["?ш낵", "諛붾굹??]

# append(): ?앹뿉 異붽?
fruits.append("?ㅻ젋吏")
print(fruits)  # ['?ш낵', '諛붾굹??, '?ㅻ젋吏']

# insert(): ?뱀젙 ?꾩튂??異붽?
fruits.insert(1, "?щ룄")
print(fruits)  # ['?ш낵', '?щ룄', '諛붾굹??, '?ㅻ젋吏']

# extend(): ?щ윭 ?붿냼 異붽?
fruits.extend(["?섎컯", "李몄쇅"])
print(fruits)  # ['?ш낵', '?щ룄', '諛붾굹??, '?ㅻ젋吏', '?섎컯', '李몄쇅']
```

### ?붿냼 ??젣

```python
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]

# remove(): 媛믪쑝濡???젣
fruits.remove("諛붾굹??)
print(fruits)  # ['?ш낵', '?ㅻ젋吏']

# pop(): ?몃뜳?ㅻ줈 ??젣 (湲곕낯媛? 留덉?留??붿냼)
fruits.pop()
print(fruits)  # ['?ш낵']

# del: ?몃뜳?ㅻ줈 ??젣
del fruits[0]
print(fruits)  # []
```

### 湲고? 硫붿꽌??

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# sort(): ?뺣젹 (?먮낯 ?섏젙)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

# reverse(): ??닚
numbers.reverse()
print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]

# count(): 媛쒖닔 ?멸린
print(numbers.count(1))  # 2

# index(): ?몃뜳??李얘린
print(numbers.index(5))  # 2

# len(): 湲몄씠
print(len(numbers))  # 8
```

## 由ъ뒪??而댄봽由ы뿨??

由ъ뒪?몃? 媛꾧껐?섍쾶 ?앹꽦?????덉뒿?덈떎:

```python
# ?쇰컲 諛⑸쾿
squares = []
for i in range(10):
    squares.append(i ** 2)

# 由ъ뒪??而댄봽由ы뿨??
squares = [i ** 2 for i in range(10)]

# 議곌굔 異붽?
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]
```

## ?뺤뀛?덈━??

?뺤뀛?덈━(Dictionary)????Key)? 媛?Value)???띿쑝濡??곗씠?곕? ??ν븯???먮즺援ъ“?낅땲??

## ?뺤뀛?덈━ ?앹꽦

```python
# 鍮??뺤뀛?덈━
empty_dict = {}

# ??媛??띿쑝濡??앹꽦
student = {
    "name": "?띻만??,
    "age": 25,
    "grade": "A"
}

# dict() ?⑥닔 ?ъ슜
student = dict(name="?띻만??, age=25, grade="A")
```

## ?뺤뀛?덈━ ?묎렐

```python
student = {
    "name": "?띻만??,
    "age": 25,
    "grade": "A"
}

print(student["name"])        # ?띻만??
print(student.get("age"))     # 25
print(student.get("city", "?놁쓬"))  # ?놁쓬 (湲곕낯媛?
```

## ?뺤뀛?덈━ ?섏젙

```python
student = {"name": "?띻만??, "age": 25}

# 媛??섏젙
student["age"] = 26

# ????媛?異붽?
student["city"] = "?쒖슱"

print(student)  # {'name': '?띻만??, 'age': 26, 'city': '?쒖슱'}
```

## ?뺤뀛?덈━ 硫붿꽌??

```python
student = {"name": "?띻만??, "age": 25, "grade": "A"}

# keys(): 紐⑤뱺 ??
print(list(student.keys()))  # ['name', 'age', 'grade']

# values(): 紐⑤뱺 媛?
print(list(student.values()))  # ['?띻만??, 25, 'A']

# items(): 紐⑤뱺 ??媛???
print(list(student.items()))  # [('name', '?띻만??), ('age', 25), ('grade', 'A')]

# pop(): ?ㅻ줈 ??젣
age = student.pop("age")
print(age)  # 25
print(student)  # {'name': '?띻만??, 'grade': 'A'}

# update(): ?щ윭 ??媛?異붽?/?섏젙
student.update({"city": "?쒖슱", "phone": "010-XXXX-XXXX"})
```

## ?뺤뀛?덈━ ?쒗쉶

```python
student = {"name": "?띻만??, "age": 25, "grade": "A"}

# ?ㅻ줈 ?쒗쉶
for key in student:
    print(f"{key}: {student[key]}")

# items()濡??쒗쉶
for key, value in student.items():
    print(f"{key}: {value}")
```

## ?ㅼ쟾 ?덉젣: ?숈깮 愿由??쒖뒪??

```python
students = [
    {"name": "?띻만??, "age": 20, "score": 85},
    {"name": "源泥좎닔", "age": 21, "score": 90},
    {"name": "?댁쁺??, "age": 20, "score": 78}
]

# ?됯퇏 ?먯닔 怨꾩궛
total = 0
for student in students:
    total += student["score"]

average = total / len(students)
print(f"?됯퇏 ?먯닔: {average:.2f}")

# 理쒓퀬???숈깮 李얘린
best_student = max(students, key=lambda x: x["score"])
print(f"理쒓퀬???숈깮: {best_student['name']} ({best_student['score']}??")
```

## ?ㅼ쟾 ?덉젣: ?⑥뼱 鍮덈룄 ?멸린

```python
text = "apple banana apple orange banana apple"
words = text.split()

word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print(word_count)  # {'apple': 3, 'banana': 2, 'orange': 1}
```

## 以묒꺽 ?먮즺援ъ“

由ъ뒪?몄? ?뺤뀛?덈━瑜?以묒꺽?댁꽌 ?ъ슜?????덉뒿?덈떎:

```python
# 由ъ뒪???덉뿉 ?뺤뀛?덈━
students = [
    {"name": "?띻만??, "scores": [85, 90, 88]},
    {"name": "源泥좎닔", "scores": [92, 87, 91]}
]

# ?뺤뀛?덈━ ?덉뿉 由ъ뒪??
classroom = {
    "students": ["?띻만??, "源泥좎닔", "?댁쁺??],
    "teacher": "?좎깮??,
    "room": 101
}
```

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 臾몄옄??泥섎━?????怨듬??대낫寃좎뒿?덈떎.

