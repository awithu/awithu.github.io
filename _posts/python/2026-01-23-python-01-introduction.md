---
layout: post
title:  "파이썬 강의 1편: 파이썬 소개 및 설치하기"
date:   2026-01-23 10:00:00 +0900
categories: [IT, 파이썬 강의]
tags: [파이썬, Python, 기초, 설치, 시작하기]
description: "파이썬이란 무엇인지 알아보고, Windows와 Mac에서 파이썬을 설치하고 첫 번째 프로그램을 실행해봅니다."
---

# 파이썬 강의 1편: 파이썬 소개 및 설치하기

## 파이썬이란?

파이썬(Python)은 1991년 귀도 반 로섬(Guido van Rossum)이 개발한 프로그래밍 언어입니다. 읽기 쉽고 배우기 쉬운 문법으로 초보자에게 매우 친화적인 언어입니다.

## 파이썬의 특징

### 장점
- **간단한 문법**: 읽기 쉽고 이해하기 쉬운 코드
- **다양한 용도**: 웹 개발, 데이터 분석, 인공지능, 자동화 등
- **풍부한 라이브러리**: 다양한 작업을 위한 라이브러리가 많음
- **크로스 플랫폼**: Windows, Mac, Linux 모두 지원
- **커뮤니티**: 활발한 커뮤니티와 풍부한 자료

### 단점
- **실행 속도**: C언어보다 느림 (하지만 대부분의 경우 문제없음)
- **메모리 사용**: 상대적으로 메모리를 많이 사용

## 파이썬 설치하기

### Windows 환경

1. **공식 사이트에서 다운로드**
   - https://www.python.org/downloads/ 접속
   - 최신 버전 다운로드 (Python 3.x 권장)

2. **설치 시 주의사항**
   - ✅ "Add Python to PATH" 체크박스 반드시 선택!
   - "Install Now" 클릭

3. **설치 확인**
   ```bash
   python --version
   ```
   또는
   ```bash
   python3 --version
   ```

### Mac 환경

1. **Homebrew 사용 (권장)**
   ```bash
   brew install python3
   ```

2. **공식 사이트에서 다운로드**
   - https://www.python.org/downloads/ 접속
   - Mac용 설치 파일 다운로드

3. **설치 확인**
   ```bash
   python3 --version
   ```

## 첫 번째 프로그램 작성하기

### 방법 1: Python IDLE 사용

1. IDLE 실행 (Windows: 시작 메뉴에서 "IDLE" 검색)
2. 새 파일 생성 (File → New File)
3. 코드 작성:
   ```python
   print("Hello, World!")
   ```
4. 저장 (Ctrl+S 또는 Cmd+S)
5. 실행 (F5 또는 Run → Run Module)

### 방법 2: 텍스트 에디터 사용

1. 메모장 또는 VS Code로 `hello.py` 파일 생성
2. 코드 작성:
   ```python
   print("Hello, World!")
   ```
3. 터미널에서 실행:
   ```bash
   python hello.py
   ```

## 파이썬 개발 환경 추천

### 에디터/IDE
- **Visual Studio Code**: 무료, 확장 기능 풍부
- **PyCharm**: 전문적인 Python IDE (Community 버전 무료)
- **Jupyter Notebook**: 데이터 분석에 유용
- **Sublime Text**: 가벼운 텍스트 에디터

### VS Code 설정
1. VS Code 설치: https://code.visualstudio.com/
2. Python 확장 프로그램 설치
3. 파일 생성 후 바로 실행 가능

## 파이썬 버전 확인

```python
import sys
print(sys.version)
```

또는 터미널에서:
```bash
python --version
```

## 실전 예제: 간단한 계산기

```python
# 간단한 계산기
a = 10
b = 5

print("덧셈:", a + b)
print("뺄셈:", a - b)
print("곱셈:", a * b)
print("나눗셈:", a / b)
```

출력 결과:
```
덧셈: 15
뺄셈: 5
곱셈: 50
나눗셈: 2.0
```

## 파이썬의 활용 분야

1. **웹 개발**: Django, Flask 프레임워크
2. **데이터 분석**: pandas, numpy 라이브러리
3. **인공지능/머신러닝**: TensorFlow, PyTorch
4. **자동화**: 파일 처리, 웹 스크래핑
5. **게임 개발**: Pygame
6. **데스크톱 애플리케이션**: Tkinter, PyQt

## 다음 강의 예고

다음 강의에서는 변수와 데이터 타입에 대해 배워보겠습니다.

