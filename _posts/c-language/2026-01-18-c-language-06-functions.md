---
layout: post
title:  "C?몄뼱 媛뺤쓽 6?? ?⑥닔"
date:   2025-01-18 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, ?⑥닔, function, 紐⑤뱢?? ?ъ궗??
---

# C?몄뼱 媛뺤쓽 6?? ?⑥닔

## ?⑥닔??

?⑥닔(Function)???뱀젙 ?묒뾽???섑뻾?섎뒗 肄붾뱶 釉붾줉?낅땲?? 肄붾뱶瑜??ъ궗?⑺븯怨?紐⑤뱢?뷀븷 ???덇쾶 ?댁쨳?덈떎.

## ?⑥닔???μ젏

1. **肄붾뱶 ?ъ궗??*: 媛숈? 肄붾뱶瑜??щ윭 踰??묒꽦?섏? ?딆븘????
2. **紐⑤뱢??*: ?꾨줈洹몃옩???묒? ?⑥쐞濡??섎닃 ???덉쓬
3. **媛?낆꽦**: 肄붾뱶媛 ???쎄린 ?ъ썙吏?
4. **?좎?蹂댁닔**: ?섏젙???꾩슂??????怨노쭔 ?섏젙?섎㈃ ??

## ?⑥닔 ?좎뼵 諛??뺤쓽

### 湲곕낯 ?뺤떇

```c
諛섑솚????⑥닔紐?留ㅺ컻蹂?? {
    // ?⑥닔 蹂몃Ц
    return 媛?
}
```

### ?덉떆: 媛꾨떒???⑥닔

```c
#include <stdio.h>

// ?⑥닔 ?좎뼵 (?꾨줈?좏???
int add(int a, int b);

int main() {
    int result = add(5, 3);
    printf("寃곌낵: %d\n", result);
    return 0;
}

// ?⑥닔 ?뺤쓽
int add(int a, int b) {
    return a + b;
}
```

## 諛섑솚媛믪씠 ?녿뒗 ?⑥닔

```c
void printHello() {
    printf("Hello, World!\n");
}

int main() {
    printHello();
    return 0;
}
```

## 留ㅺ컻蹂?섍? ?녿뒗 ?⑥닔

```c
int getNumber() {
    return 42;
}

int main() {
    int num = getNumber();
    printf("?レ옄: %d\n", num);
    return 0;
}
```

## ?ㅼ뼇???⑥닔 ?덉젣

### 理쒕?媛?援ы븯湲?

```c
int max(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// ?먮뒗 ?쇳빆 ?곗궛???ъ슜
int max(int a, int b) {
    return (a > b) ? a : b;
}
```

### ?⑺넗由ъ뼹 怨꾩궛

```c
long long factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);  // ?ш? ?⑥닔
}
```

### ?뚯닔 ?먮퀎

```c
#include <stdbool.h>
#include <math.h>

bool isPrime(int n) {
    if (n < 2) {
        return false;
    }
    
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    
    return true;
}
```

## ?⑥닔 ?꾨줈?좏???

?⑥닔瑜??ъ슜?섍린 ?꾩뿉 ?좎뼵?댁빞 ?⑸땲??

```c
// ?꾨줈?좏????좎뼵
int add(int a, int b);
void printMessage();

int main() {
    int result = add(5, 3);
    printMessage();
    return 0;
}

// ?⑥닔 ?뺤쓽
int add(int a, int b) {
    return a + b;
}

void printMessage() {
    printf("?⑥닔 ?몄텧 ?꾨즺!\n");
}
```

## 吏??蹂?섏? ?꾩뿭 蹂??

### 吏??蹂??

?⑥닔 ?대??먯꽌 ?좎뼵??蹂?섎줈, ?⑥닔媛 ?앸굹硫??щ씪吏묐땲??

```c
void function() {
    int localVar = 10;  // 吏??蹂??
    printf("%d\n", localVar);
}

int main() {
    // printf("%d\n", localVar);  // ?ㅻ쪟! ?묎렐 遺덇?
    function();
    return 0;
}
```

### ?꾩뿭 蹂??

?⑥닔 諛뽰뿉???좎뼵??蹂?섎줈, 紐⑤뱺 ?⑥닔?먯꽌 ?묎렐 媛?ν빀?덈떎:

```c
int globalVar = 100;  // ?꾩뿭 蹂??

void function() {
    printf("%d\n", globalVar);  // ?묎렐 媛??
}

int main() {
    printf("%d\n", globalVar);  // ?묎렐 媛??
    return 0;
}
```

## 媛믪뿉 ?섑븳 ?꾨떖 (Call by Value)

C?몄뼱??湲곕낯?곸쑝濡?媛믪뿉 ?섑븳 ?꾨떖???ъ슜?⑸땲??

```c
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // ???⑥닔 ?댁뿉?쒕쭔 媛믪씠 諛붾?
}

int main() {
    int x = 10, y = 20;
    swap(x, y);
    printf("%d %d\n", x, y);  // 10 20 (蹂?섏? ?딆쓬)
    return 0;
}
```

## 李몄“???섑븳 ?꾨떖 (Call by Reference)

?ъ씤?곕? ?ъ슜?섏뿬 ?ㅼ젣 蹂?섏쓽 媛믪쓣 蹂寃쏀븷 ???덉뒿?덈떎:

```c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("%d %d\n", x, y);  // 20 10 (媛믪씠 諛붾?
    return 0;
}
```

## ?ш? ?⑥닔

?⑥닔媛 ?먭린 ?먯떊???몄텧?섎뒗 ?⑥닔?낅땲??

```c
// ?쇰낫?섏튂 ?섏뿴
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// ?섎끂????
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("?먮컲 1??%c?먯꽌 %c濡??대룞\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    printf("?먮컲 %d瑜?%c?먯꽌 %c濡??대룞\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}
```

## ?ㅼ쟾 ?덉젣: 怨꾩궛湲??꾨줈洹몃옩

```c
#include <stdio.h>

double add(double a, double b) {
    return a + b;
}

double subtract(double a, double b) {
    return a - b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("0?쇰줈 ?섎닃 ???놁뒿?덈떎.\n");
        return 0;
    }
}

int main() {
    char operator;
    double num1, num2, result;
    
    printf("?곗궛?먮? ?낅젰?섏꽭??(+, -, *, /): ");
    scanf(" %c", &operator);
    
    printf("???レ옄瑜??낅젰?섏꽭?? ");
    scanf("%lf %lf", &num1, &num2);
    
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            printf("?섎せ???곗궛?먯엯?덈떎.\n");
            return 1;
    }
    
    printf("%.2f %c %.2f = %.2f\n", num1, operator, num2, result);
    return 0;
}
```

## ?⑥닔 ?묒꽦 ??二쇱쓽?ы빆

1. **紐낇솗???대쫫**: ?⑥닔媛 ?섎뒗 ?쇱쓣 ?대쫫?쇰줈 ?????덉뼱????
2. **?⑥씪 梨낆엫**: ?섎굹???⑥닔???섎굹???묒뾽留??섑뻾
3. **?곸젅???ш린**: ?⑥닔媛 ?덈Т 湲몃㈃ ?묒? ?⑥닔濡??섎늻湲?
4. **臾몄꽌??*: 蹂듭옟???⑥닔??二쇱꽍?쇰줈 ?ㅻ챸

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 諛곗뿴?????怨듬??대낫寃좎뒿?덈떎.

