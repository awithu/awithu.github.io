---
layout: post
title:  "?뚯씠??媛뺤쓽 8?? 臾몄옄??泥섎━"
date:   2025-01-30 10:00:00 +0900
categories: [IT, ?뚯씠??媛뺤쓽]
tags: [?뚯씠?? 臾몄옄?? string, ?띿뒪?몄쿂由?
description: "?뚯씠?ъ쓽 臾몄옄??硫붿꽌?? ?щ㎎?? ?щ씪?댁떛, ?뺢퇋?쒗쁽??湲곗큹 ??臾몄옄??泥섎━??紐⑤뱺 湲곕뒫??諛곗썎?덈떎."
---

# ?뚯씠??媛뺤쓽 8?? 臾몄옄??泥섎━

## 臾몄옄?댁씠??

臾몄옄??String)? 臾몄옄?ㅼ쓽 ?쒗?ㅼ엯?덈떎. ?뚯씠?ъ뿉??臾몄옄?댁? 留ㅼ슦 媛뺣젰?섍퀬 ?좎뿰?섍쾶 泥섎━?????덉뒿?덈떎.

## 臾몄옄???앹꽦

```python
# ?묒??곗샂??
str1 = 'Hello'

# ?곕뵲?댄몴
str2 = "World"

# ?쇱쨷?곗샂??(?щ윭 以?
str3 = """?щ윭 以?
臾몄옄?댁엯?덈떎"""

# ?댁뒪耳?댄봽 臾몄옄
str4 = "?덈뀞?섏꽭??n以꾨컮轅덉엯?덈떎"
```

## 臾몄옄???묎렐

?몃뜳?ㅻ줈 臾몄옄???묎렐?????덉뒿?덈떎:

```python
text = "Python"

print(text[0])   # P (泥?踰덉㎏ 臾몄옄)
print(text[-1])  # n (留덉?留?臾몄옄)
print(text[1:4]) # yth (?щ씪?댁떛)
```

## 臾몄옄???곗궛

```python
# ?곌껐
greeting = "?덈뀞" + "?섏꽭??
print(greeting)  # ?덈뀞?섏꽭??

# 諛섎났
print("Hello" * 3)  # HelloHelloHello

# 湲몄씠
text = "Python"
print(len(text))  # 6
```

## 臾몄옄??硫붿꽌??

### ??뚮Ц??蹂??

```python
text = "Hello World"

print(text.upper())    # HELLO WORLD
print(text.lower())    # hello world
print(text.capitalize())  # Hello world
print(text.title())    # Hello World
```

### 怨듬갚 ?쒓굅

```python
text = "  Python  "

print(text.strip())    # Python (?묒そ 怨듬갚 ?쒓굅)
print(text.lstrip())   # Python  (?쇱そ 怨듬갚 ?쒓굅)
print(text.rstrip())   #   Python (?ㅻⅨ履?怨듬갚 ?쒓굅)
```

### 臾몄옄??李얘린

```python
text = "Hello World"

print(text.find("World"))    # 6 (?몃뜳??諛섑솚)
print(text.find("Python"))   # -1 (?놁쑝硫?-1)
print(text.index("World"))   # 6
print("World" in text)       # True
print(text.count("l"))       # 3 (媛쒖닔)
```

### 臾몄옄??遺꾪븷怨?寃고빀

```python
# split(): 臾몄옄??遺꾪븷
text = "?ш낵,諛붾굹???ㅻ젋吏"
fruits = text.split(",")
print(fruits)  # ['?ш낵', '諛붾굹??, '?ㅻ젋吏']

# join(): 臾몄옄??寃고빀
fruits = ["?ш낵", "諛붾굹??, "?ㅻ젋吏"]
text = ", ".join(fruits)
print(text)  # ?ш낵, 諛붾굹?? ?ㅻ젋吏
```

### 臾몄옄??援먯껜

```python
text = "Hello World"

new_text = text.replace("World", "Python")
print(new_text)  # Hello Python
```

### 臾몄옄??寃??

```python
text = "Hello123"

print(text.isdigit())    # False (紐⑤몢 ?レ옄?몄?)
print(text.isalpha())    # False (紐⑤몢 臾몄옄?몄?)
print(text.isalnum())    # True (臾몄옄 ?먮뒗 ?レ옄?몄?)
print(text.startswith("Hello"))  # True
print(text.endswith("123"))      # True
```

## 臾몄옄???щ㎎??

### f-string (沅뚯옣, Python 3.6+)

```python
name = "?띻만??
age = 25

text = f"?대쫫: {name}, ?섏씠: {age}??
print(text)  # ?대쫫: ?띻만?? ?섏씠: 25??

# ?쒗쁽???ъ슜
text = f"?대뀈 ?섏씠: {age + 1}??
print(text)  # ?대뀈 ?섏씠: 26??

# ?щ㎎ 吏??
pi = 3.14159
print(f"?먯＜?? {pi:.2f}")  # ?먯＜?? 3.14
```

### format() 硫붿꽌??

```python
name = "?띻만??
age = 25

text = "?대쫫: {}, ?섏씠: {}??.format(name, age)
print(text)  # ?대쫫: ?띻만?? ?섏씠: 25??

# ?몃뜳???ъ슜
text = "?대쫫: {0}, ?섏씠: {1}?? ?대쫫: {0}".format(name, age)

# ?ㅼ썙???ъ슜
text = "?대쫫: {name}, ?섏씠: {age}??.format(name=name, age=age)
```

### % ?щ㎎??(援ъ떇)

```python
name = "?띻만??
age = 25

text = "?대쫫: %s, ?섏씠: %d?? % (name, age)
print(text)  # ?대쫫: ?띻만?? ?섏씠: 25??
```

## ?ㅼ쟾 ?덉젣: 臾몄옄???ㅼ쭛湲?

```python
text = "Python"

# 諛⑸쾿 1: ?щ씪?댁떛
reversed_text = text[::-1]
print(reversed_text)  # nohtyP

# 諛⑸쾿 2: reversed()? join()
reversed_text = "".join(reversed(text))
print(reversed_text)  # nohtyP
```

## ?ㅼ쟾 ?덉젣: ?뚮Ц(Palindrome) ?뺤씤

```python
def is_palindrome(text):
    text = text.lower().replace(" ", "")
    return text == text[::-1]

print(is_palindrome("level"))      # True
print(is_palindrome("hello"))     # False
print(is_palindrome("A man a plan a canal Panama"))  # True
```

## ?ㅼ쟾 ?덉젣: ?⑥뼱 媛쒖닔 ?멸린

```python
text = "Hello World Python Programming"

words = text.split()
print(f"?⑥뼱 媛쒖닔: {len(words)}")  # 4

# 媛??⑥뼱??湲몄씠
for word in words:
    print(f"{word}: {len(word)}湲??)
```

## ?ㅼ쟾 ?덉젣: ?대찓??寃利?

```python
def is_valid_email(email):
    if "@" not in email:
        return False
    
    parts = email.split("@")
    if len(parts) != 2:
        return False
    
    username, domain = parts
    if len(username) == 0 or len(domain) == 0:
        return False
    
    if "." not in domain:
        return False
    
    return True

print(is_valid_email("test@example.com"))  # True
print(is_valid_email("invalid.email"))     # False
```

## ?ㅼ쟾 ?덉젣: ?띿뒪???듦퀎

```python
def text_statistics(text):
    stats = {
        "臾몄옄 ??: len(text),
        "?⑥뼱 ??: len(text.split()),
        "以???: text.count("\n") + 1,
        "?臾몄옄": sum(1 for c in text if c.isupper()),
        "?뚮Ц??: sum(1 for c in text if c.islower()),
        "?レ옄": sum(1 for c in text if c.isdigit())
    }
    return stats

text = """Hello World
Python Programming
123 Numbers"""

stats = text_statistics(text)
for key, value in stats.items():
    print(f"{key}: {value}")
```

## ?뺢퇋?쒗쁽??湲곗큹 (re 紐⑤뱢)

```python
import re

text = "?곕씫泥? 010-XXXX-XXXX"

# ?꾪솕踰덊샇 ?⑦꽩 李얘린 (?덉떆)
pattern = r"\d{3}-[X\d]{4}-[X\d]{4}"
match = re.search(pattern, text)
if match:
    print(f"?꾪솕踰덊샇 ?⑦꽩: {match.group()}")  # 010-XXXX-XXXX

# ?대찓??李얘린
text = "?대찓?? test@example.com"
pattern = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
match = re.search(pattern, text)
if match:
    print(f"?대찓?? {match.group()}")  # test@example.com
```

## 臾몄옄???몄퐫???붿퐫??

```python
# 臾몄옄?댁쓣 諛붿씠?몃줈
text = "?덈뀞?섏꽭??
encoded = text.encode("utf-8")
print(encoded)  # b'\xec\x95\x88\xeb\x85\x95...'

# 諛붿씠?몃? 臾몄옄?대줈
decoded = encoded.decode("utf-8")
print(decoded)  # ?덈뀞?섏꽭??
```

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?뚯씪 ?낆텧?μ뿉 ???怨듬??대낫寃좎뒿?덈떎.

