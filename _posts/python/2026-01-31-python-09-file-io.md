---
layout: post
title:  "?뚯씠??媛뺤쓽 9?? ?뚯씪 ?낆텧??"
date:   2025-01-31 10:00:00 +0900
categories: [IT, ?뚯씠??媛뺤쓽]
tags: [?뚯씠?? ?뚯씪?낆텧?? ?뚯씪泥섎━, file, IO]
description: "?뚯씠?ъ쑝濡??뚯씪???쎄퀬 ?곕뒗 諛⑸쾿, with 臾??ъ슜, CSV/JSON ?뚯씪 泥섎━ ???뚯씪 ?낆텧?μ쓽 紐⑤뱺 湲곕뒫??諛곗썎?덈떎."
---

# ?뚯씠??媛뺤쓽 9?? ?뚯씪 ?낆텧??

## ?뚯씪 ?낆텧?μ씠??

?뚯씪 ?낆텧?μ? ?뚯씪?먯꽌 ?곗씠?곕? ?쎄굅???뚯씪???곗씠?곕? ?곕뒗 ?묒뾽?낅땲?? ?뚯씠?ъ? ?뚯씪 泥섎━瑜?留ㅼ슦 ?쎄쾶 ?????덉뒿?덈떎.

## ?뚯씪 ?닿린

### 湲곕낯 ?뺤떇

```python
file = open("?뚯씪紐?, "紐⑤뱶")
# ?뚯씪 ?묒뾽
file.close()
```

### ?뚯씪 紐⑤뱶

- `"r"`: ?쎄린 紐⑤뱶 (湲곕낯媛?
- `"w"`: ?곌린 紐⑤뱶 (?뚯씪???덉쑝硫???뼱?곌린)
- `"a"`: 異붽? 紐⑤뱶 (?뚯씪 ?앹뿉 異붽?)
- `"x"`: ?앹꽦 紐⑤뱶 (?뚯씪???놁쓣 ?뚮쭔 ?앹꽦)
- `"b"`: 諛붿씠?덈━ 紐⑤뱶
- `"t"`: ?띿뒪??紐⑤뱶 (湲곕낯媛?

## ?뚯씪 ?쎄린

### read(): ?꾩껜 ?쎄린

```python
file = open("example.txt", "r", encoding="utf-8")
content = file.read()
print(content)
file.close()
```

### readline(): ??以??쎄린

```python
file = open("example.txt", "r", encoding="utf-8")
line = file.readline()
print(line)
file.close()
```

### readlines(): 紐⑤뱺 以??쎄린

```python
file = open("example.txt", "r", encoding="utf-8")
lines = file.readlines()
for line in lines:
    print(line.strip())  # strip()?쇰줈 以꾨컮轅??쒓굅
file.close()
```

### ?뚯씪??吏곸젒 ?쒗쉶

```python
file = open("example.txt", "r", encoding="utf-8")
for line in file:
    print(line.strip())
file.close()
```

## ?뚯씪 ?곌린

### write(): 臾몄옄???곌린

```python
file = open("output.txt", "w", encoding="utf-8")
file.write("Hello, World!\n")
file.write("?뚯씠???뚯씪 ?낆텧??)
file.close()
```

### writelines(): ?щ윭 以??곌린

```python
lines = ["泥?踰덉㎏ 以?n", "??踰덉㎏ 以?n", "??踰덉㎏ 以?n"]
file = open("output.txt", "w", encoding="utf-8")
file.writelines(lines)
file.close()
```

## with 臾??ъ슜 (沅뚯옣)

?뚯씪???먮룞?쇰줈 ?レ븘以띾땲??

```python
# ?쎄린
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)
# ?뚯씪???먮룞?쇰줈 ?ロ옒

# ?곌린
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Hello, World!\n")
```

## ?ㅼ쟾 ?덉젣: ?뚯씪 蹂듭궗

```python
def copy_file(source, destination):
    with open(source, "r", encoding="utf-8") as src:
        content = src.read()
    
    with open(destination, "w", encoding="utf-8") as dst:
        dst.write(content)
    
    print(f"{source}瑜?{destination}濡?蹂듭궗?덉뒿?덈떎.")

copy_file("source.txt", "copy.txt")
```

## ?ㅼ쟾 ?덉젣: ?뚯씪 ?듦퀎

```python
def file_statistics(filename):
    with open(filename, "r", encoding="utf-8") as file:
        content = file.read()
        lines = content.split("\n")
    
    stats = {
        "臾몄옄 ??: len(content),
        "?⑥뼱 ??: len(content.split()),
        "以???: len(lines),
        "臾몄옣 ??: content.count(".") + content.count("!") + content.count("?")
    }
    
    return stats

stats = file_statistics("example.txt")
for key, value in stats.items():
    print(f"{key}: {value}")
```

## CSV ?뚯씪 泥섎━

CSV(Comma-Separated Values) ?뚯씪??泥섎━?⑸땲??

```python
import csv

# CSV ?뚯씪 ?쎄린
with open("students.csv", "r", encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# CSV ?뚯씪 ?곌린
data = [
    ["?대쫫", "?섏씠", "?먯닔"],
    ["?띻만??, "25", "85"],
    ["源泥좎닔", "23", "90"]
]

with open("output.csv", "w", encoding="utf-8", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)
```

## JSON ?뚯씪 泥섎━

JSON(JavaScript Object Notation) ?뚯씪??泥섎━?⑸땲??

```python
import json

# JSON ?뚯씪 ?쎄린
with open("data.json", "r", encoding="utf-8") as file:
    data = json.load(file)
    print(data)

# JSON ?뚯씪 ?곌린
data = {
    "name": "?띻만??,
    "age": 25,
    "scores": [85, 90, 88]
}

with open("output.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)
```

## ?ㅼ쟾 ?덉젣: 濡쒓렇 ?뚯씪 遺꾩꽍

```python
def analyze_log(log_file):
    error_count = 0
    warning_count = 0
    
    with open(log_file, "r", encoding="utf-8") as file:
        for line in file:
            if "ERROR" in line:
                error_count += 1
            elif "WARNING" in line:
                warning_count += 1
    
    print(f"?먮윭: {error_count}媛?)
    print(f"寃쎄퀬: {warning_count}媛?)

analyze_log("app.log")
```

## ?ㅼ쟾 ?덉젣: ?ㅼ젙 ?뚯씪 ?쎄린

```python
def read_config(config_file):
    config = {}
    
    with open(config_file, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if line and not line.startswith("#"):  # 二쇱꽍 ?쒖쇅
                key, value = line.split("=")
                config[key.strip()] = value.strip()
    
    return config

config = read_config("config.txt")
print(config)
```

## ?뚯씪 議댁옱 ?뺤씤

```python
import os

filename = "example.txt"

if os.path.exists(filename):
    print(f"{filename} ?뚯씪??議댁옱?⑸땲??")
else:
    print(f"{filename} ?뚯씪???놁뒿?덈떎.")
```

## ?붾젆?좊━ ?묒뾽

```python
import os

# ?꾩옱 ?붾젆?좊━
print(os.getcwd())

# ?뚯씪 紐⑸줉
files = os.listdir(".")
for file in files:
    print(file)

# ?붾젆?좊━ ?앹꽦
os.makedirs("new_folder", exist_ok=True)
```

## ?덉쇅 泥섎━

?뚯씪 ?묒뾽 ???ㅻ쪟媛 諛쒖깮?????덉쑝誘濡??덉쇅 泥섎━媛 ?꾩슂?⑸땲??

```python
try:
    with open("example.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("?뚯씪??李얠쓣 ???놁뒿?덈떎.")
except PermissionError:
    print("?뚯씪 ?묎렐 沅뚰븳???놁뒿?덈떎.")
except Exception as e:
    print(f"?ㅻ쪟 諛쒖깮: {e}")
```

## ?ㅼ쟾 ?덉젣: ?숈깮 ?뺣낫 愿由??쒖뒪??

```python
import json

def save_students(students, filename):
    """?숈깮 ?뺣낫瑜?JSON ?뚯씪濡????""
    with open(filename, "w", encoding="utf-8") as file:
        json.dump(students, file, ensure_ascii=False, indent=2)

def load_students(filename):
    """JSON ?뚯씪?먯꽌 ?숈깮 ?뺣낫 遺덈윭?ㅺ린"""
    try:
        with open(filename, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# ?ъ슜
students = [
    {"name": "?띻만??, "age": 25, "score": 85},
    {"name": "源泥좎닔", "age": 23, "score": 90}
]

save_students(students, "students.json")
loaded_students = load_students("students.json")
print(loaded_students)
```

## 二쇱쓽?ы빆

1. **?몄퐫??*: ?쒓? ?뚯씪? `encoding="utf-8"` ?ъ슜
2. **?뚯씪 ?リ린**: `with` 臾??ъ슜 沅뚯옣
3. **?덉쇅 泥섎━**: ?뚯씪???놁쓣 ???덉쑝誘濡?泥섎━ ?꾩슂
4. **寃쎈줈**: ?곷? 寃쎈줈? ?덈? 寃쎈줈 援щ텇

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?대옒?ㅼ? 媛앹껜?????怨듬??대낫寃좎뒿?덈떎.

