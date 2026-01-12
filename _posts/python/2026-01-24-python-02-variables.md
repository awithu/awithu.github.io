---
layout: post
title:  "파이썬 강의 2편: 변수와 데이터 타입"
date:   2026-01-24 10:00:00 +0900
categories: [IT, 파이썬 강의]
tags: [파이썬, 변수, 데이터타입, 기초]
description: "파이썬의 변수 선언 방법과 기본 데이터 타입(정수, 실수, 문자열, 불린)을 배우고 실전 예제를 통해 이해합니다."
---

# 파이썬 강의 2편: 변수와 데이터 타입

## 변수란?

변수(Variable)는 데이터를 저장하는 공간입니다. 파이썬에서는 변수를 선언할 때 타입을 명시하지 않아도 됩니다.

## 변수 선언

파이썬은 매우 간단하게 변수를 선언할 수 있습니다:

```python
name = "홍길동"
age = 25
height = 175.5
is_student = True
```

**C언어와 비교:**
- C언어: `int age = 25;` (타입 명시 필요)
- 파이썬: `age = 25` (타입 자동 추론)

## 기본 데이터 타입

### 1. 정수 (Integer)

```python
age = 25
count = -10
big_number = 1000000

print(type(age))  # <class 'int'>
```

### 2. 실수 (Float)

```python
height = 175.5
pi = 3.14159
temperature = -5.5

print(type(height))  # <class 'float'>
```

### 3. 문자열 (String)

```python
name = "홍길동"
message = '안녕하세요'
multiline = """여러 줄
문자열입니다"""

print(type(name))  # <class 'str'>
```

**문자열 사용법:**
- 작은따옴표(`'`) 또는 큰따옴표(`"`) 사용 가능
- 삼중따옴표(`"""`)로 여러 줄 문자열 가능

### 4. 불린 (Boolean)

```python
is_student = True
is_working = False

print(type(is_student))  # <class 'bool'>
```

### 5. 리스트 (List)

```python
numbers = [1, 2, 3, 4, 5]
names = ["홍길동", "김철수", "이영희"]
mixed = [1, "문자열", 3.14, True]

print(type(numbers))  # <class 'list'>
```

### 6. 딕셔너리 (Dictionary)

```python
student = {
    "name": "홍길동",
    "age": 25,
    "grade": "A"
}

print(type(student))  # <class 'dict'>
```

## 변수명 규칙

1. **영문자, 숫자, 언더스코어(_)만 사용**
2. **숫자로 시작할 수 없음**
3. **예약어 사용 불가** (if, for, while 등)

**좋은 예:**
```python
student_name = "홍길동"
student_age = 25
max_score = 100
```

**나쁜 예:**
```python
2name = "홍길동"  # 숫자로 시작
student-name = "홍길동"  # 하이픈 사용 불가
if = 10  # 예약어 사용 불가
```

## 타입 확인하기

`type()` 함수로 변수의 타입을 확인할 수 있습니다:

```python
age = 25
name = "홍길동"
height = 175.5

print(type(age))     # <class 'int'>
print(type(name))    # <class 'str'>
print(type(height))  # <class 'float'>
```

## 타입 변환 (Type Casting)

다른 타입으로 변환할 수 있습니다:

```python
# 정수를 문자열로
age = 25
age_str = str(age)
print(age_str, type(age_str))  # 25 <class 'str'>

# 문자열을 정수로
number_str = "100"
number = int(number_str)
print(number, type(number))  # 100 <class 'int'>

# 정수를 실수로
num = 10
num_float = float(num)
print(num_float, type(num_float))  # 10.0 <class 'float'>
```

## 변수 값 변경

변수는 언제든지 값을 변경할 수 있습니다:

```python
age = 25
print(age)  # 25

age = 26
print(age)  # 26

# 타입도 변경 가능
age = "스물여섯"
print(age, type(age))  # 스물여섯 <class 'str'>
```

## 여러 변수에 값 할당

```python
# 같은 값 할당
a = b = c = 10
print(a, b, c)  # 10 10 10

# 다른 값 할당
name, age, height = "홍길동", 25, 175.5
print(name, age, height)  # 홍길동 25 175.5
```

## 실전 예제: 학생 정보 관리

```python
# 학생 정보 변수 선언
student_name = "홍길동"
student_age = 20
student_score = 85.5
is_passed = True

# 정보 출력
print("=== 학생 정보 ===")
print("이름:", student_name)
print("나이:", student_age, "세")
print("점수:", student_score, "점")
print("합격 여부:", "합격" if is_passed else "불합격")
```

## 실전 예제: 간단한 계산

```python
# 원의 넓이 계산
radius = 5
pi = 3.14159
area = pi * radius * radius

print("반지름:", radius)
print("원의 넓이:", area)
print("원의 넓이 (소수점 2자리):", round(area, 2))
```

## 변수와 메모리

파이썬에서는 변수가 객체를 참조합니다:

```python
a = 10
b = a  # b는 a와 같은 객체를 참조
print(a, b)  # 10 10

a = 20  # a는 새로운 객체를 참조
print(a, b)  # 20 10 (b는 여전히 10)
```

## 주의사항

1. **변수명은 의미 있게**: `x`, `y`보다는 `age`, `name`이 좋음
2. **타입 확인**: 필요시 `type()` 함수로 확인
3. **타입 변환**: 문자열과 숫자 연산 시 주의

## 다음 강의 예고

다음 강의에서는 연산자에 대해 배워보겠습니다.

