---
layout: post
title:  "C언어 강의 2편: 변수와 데이터 타입"
date:   2026-01-14 10:00:00 +0900
categories: [IT, C언어 강의]
tags: [C언어, 변수, 데이터타입, 기초]
---

# C언어 강의 2편: 변수와 데이터 타입

## 변수란?

변수(Variable)는 데이터를 저장하는 메모리 공간에 붙인 이름입니다. 프로그램 실행 중에 값이 변경될 수 있습니다.

## 변수 선언 방법

```c
데이터타입 변수명;
```

예시:
```c
int age;
float height;
char grade;
```

## 기본 데이터 타입

### 정수형 (Integer)

```c
int num = 10;           // 일반 정수 (보통 4바이트)
short s = 5;            // 짧은 정수 (2바이트)
long l = 1000000L;      // 긴 정수 (4바이트 이상)
long long ll = 1000000000LL;  // 매우 긴 정수 (8바이트)
```

### 실수형 (Floating Point)

```c
float f = 3.14f;        // 단정밀도 실수 (4바이트)
double d = 3.14159;     // 배정밀도 실수 (8바이트)
long double ld = 3.141592653589793L;  // 확장 정밀도
```

### 문자형 (Character)

```c
char c = 'A';           // 단일 문자 (1바이트)
char str[] = "Hello";   // 문자열
```

### 부울형 (Boolean)

```c
#include <stdbool.h>
bool flag = true;       // C99 이상에서 사용 가능
```

## 변수 초기화

변수는 선언과 동시에 초기화할 수 있습니다:

```c
int age = 25;
float height = 175.5;
char grade = 'A';
```

## 상수 (Constants)

값이 변경되지 않는 변수입니다:

```c
const int MAX_SIZE = 100;
const float PI = 3.14159;
```

또는 매크로를 사용할 수 있습니다:

```c
#define MAX_SIZE 100
#define PI 3.14159
```

## 변수명 규칙

1. 영문자, 숫자, 언더스코어(_)만 사용 가능
2. 숫자로 시작할 수 없음
3. 대소문자를 구분함
4. 예약어는 사용할 수 없음

**좋은 예:**
```c
int studentAge;
int student_count;
int maxSize;
```

**나쁜 예:**
```c
int 2age;        // 숫자로 시작
int student-age;  // 하이픈 사용 불가
int int;          // 예약어 사용 불가
```

## 실전 예제

```c
#include <stdio.h>

int main() {
    // 변수 선언 및 초기화
    int age = 25;
    float height = 175.5;
    char grade = 'A';
    
    // 변수 출력
    printf("나이: %d세\n", age);
    printf("키: %.1fcm\n", height);
    printf("등급: %c\n", grade);
    
    // 변수 값 변경
    age = 26;
    printf("다음 해 나이: %d세\n", age);
    
    return 0;
}
```

출력 결과:
```
나이: 25세
키: 175.5cm
등급: A
다음 해 나이: 26세
```

## 형식 지정자 (Format Specifiers)

- `%d`: 정수 (int)
- `%f`: 실수 (float, double)
- `%c`: 문자 (char)
- `%s`: 문자열 (char[])
- `%ld`: 긴 정수 (long)
- `%lf`: 배정밀도 실수 (double)

## 다음 강의 예고

다음 강의에서는 연산자에 대해 배워보겠습니다.

