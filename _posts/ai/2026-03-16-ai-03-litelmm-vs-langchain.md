---
layout: post
title: "개발자 입장에서 보는 LiteLLM과 LangChain의 차이"
date: 2025-02-20 09:00:00 +0900
categories: [IT, AI]
tags: [AI, LLM, LiteLLM, LangChain]
description: "LiteLLM은 호출 표준화, LangChain은 워크플로우 구성에 강점이 있습니다."
---

# 개발자 입장에서 보는 LiteLLM과 LangChain의 차이

두 도구는 자주 함께 언급되지만 역할이 다릅니다.  
**LiteLLM은 LLM 호출 레이어**, **LangChain은 워크플로우/체인 구성 레이어**에 가깝습니다.

## 1. 핵심 목적

- **LiteLLM**: 여러 모델 공급자(OpenAI, Anthropic 등) API를 **단일 인터페이스로 통합**
- **LangChain**: 프롬프트, 체인, 메모리, 도구 호출을 **워크플로우로 구성**

## 2. LiteLLM을 쓰는 이유

- 모델 제공자별 API 차이를 숨김
- 호출/로그/비용 추적을 통합
- 라우팅, 폴백, 재시도 정책을 단일 레이어로 관리

**한 줄 요약**: “LLM API 호출 표준화”

## 3. LangChain을 쓰는 이유

- 프롬프트/메모리/도구 호출을 연결
- 체인/에이전트 구성으로 복잡한 흐름을 설계
- 실행 단계별 로깅과 디버깅 지원

**한 줄 요약**: “LLM 앱의 실행 흐름 설계”

## 4. 비교 포인트

- **범위**: LiteLLM은 호출 레이어, LangChain은 오케스트레이션 레이어
- **관심사**: LiteLLM은 API 통합, LangChain은 추론 흐름
- **복잡도**: LiteLLM은 얇고 가벼움, LangChain은 기능이 많음

## 5. 함께 쓰는 조합

실전에서는 다음처럼 함께 쓰는 경우가 많습니다.

```
LangChain (워크플로우)
   ↓
LiteLLM (호출/라우팅)
   ↓
모델 제공자
```

## 6. 선택 기준

- **호출 표준화가 필요** → LiteLLM
- **복잡한 에이전트/워크플로우** → LangChain
- **둘 다 필요** → 조합 사용

## 7. 요약

LiteLLM은 “API 통합”, LangChain은 “흐름 설계”에 강합니다.  
같이 쓰면 운영과 개발 효율이 크게 올라갑니다.

