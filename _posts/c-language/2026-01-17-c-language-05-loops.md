---
layout: post
title: "C?몄뼱 媛뺤쓽 5?? 諛섎났臾?(for, while)"
date:   2025-01-17 10:00:00 +0900
categories: ["IT", "C?몄뼱 媛뺤쓽"]
tags: ["C?몄뼱", "諛섎났臾? for臾? while臾? 諛섎났"]
---

# C?몄뼱 媛뺤쓽 5?? 諛섎났臾?(for, while)

## 諛섎났臾몄씠??

諛섎났臾몄? ?뱀젙 肄붾뱶瑜??щ윭 踰??ㅽ뻾?????덇쾶 ?댁＜???쒖뼱臾몄엯?덈떎. 媛숈? ?묒뾽??諛섎났?댁빞 ?????좎슜?⑸땲??

## for 臾?

?뺥빐吏??잛닔留뚰겮 諛섎났?????ъ슜?⑸땲??

### 湲곕낯 ?뺤떇

```c
for (珥덇린?? 議곌굔; 利앷컧) {
    // 諛섎났 ?ㅽ뻾??肄붾뱶
}
```

### ?덉떆

```c
// 1遺??10源뚯? 異쒕젰
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}
// 異쒕젰: 1 2 3 4 5 6 7 8 9 10
```

### ?숈옉 怨쇱젙

1. **珥덇린??*: `int i = 1` ?ㅽ뻾 (??踰덈쭔)
2. **議곌굔 ?뺤씤**: `i <= 10` ?뺤씤
3. **肄붾뱶 ?ㅽ뻾**: 議곌굔??李몄씠硫?以묎큵????肄붾뱶 ?ㅽ뻾
4. **利앷컧**: `i++` ?ㅽ뻾
5. **2踰덉쑝濡??뚯븘媛??諛섎났**

### ?ㅼ뼇???ъ슜踰?

```c
// ??닚 異쒕젰
for (int i = 10; i >= 1; i--) {
    printf("%d ", i);
}

// 2??利앷?
for (int i = 0; i <= 10; i += 2) {
    printf("%d ", i);
}

// 以묒꺽 for 臾?(援ш뎄??
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        printf("%d x %d = %d\n", i, j, i * j);
    }
}
```

## while 臾?

議곌굔??李몄씤 ?숈븞 諛섎났?⑸땲??

### 湲곕낯 ?뺤떇

```c
while (議곌굔) {
    // 諛섎났 ?ㅽ뻾??肄붾뱶
}
```

### ?덉떆

```c
int i = 1;
while (i <= 10) {
    printf("%d ", i);
    i++;
}
```

### for vs while

```c
// for 臾?
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}

// while 臾몄쑝濡??숈씪?섍쾶
int i = 1;
while (i <= 10) {
    printf("%d ", i);
    i++;
}
```

## do-while 臾?

理쒖냼 ??踰덉? ?ㅽ뻾?섍퀬, 洹???議곌굔???뺤씤?⑸땲??

```c
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 10);
```

**李⑥씠??**
- `while`: 議곌굔??癒쇱? ?뺤씤
- `do-while`: 肄붾뱶瑜?癒쇱? ?ㅽ뻾????議곌굔 ?뺤씤

## 諛섎났臾??쒖뼱

### break 臾?

諛섎났臾몄쓣 利됱떆 醫낅즺?⑸땲??

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // i媛 5媛 ?섎㈃ 諛섎났臾?醫낅즺
    }
    printf("%d ", i);
}
// 異쒕젰: 1 2 3 4
```

### continue 臾?

?꾩옱 諛섎났??嫄대꼫?곌퀬 ?ㅼ쓬 諛섎났?쇰줈 ?섏뼱媛묐땲??

```c
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // 吏앹닔硫?嫄대꼫?곌린
    }
    printf("%d ", i);
}
// 異쒕젰: 1 3 5 7 9 (??섎쭔 異쒕젰)
```

## 臾댄븳 猷⑦봽

議곌굔????긽 李몄씤 諛섎났臾몄엯?덈떎:

```c
// for 臾몄쑝濡?臾댄븳 猷⑦봽
for (;;) {
    // 肄붾뱶
    if (議곌굔) break;  // 醫낅즺 議곌굔
}

// while 臾몄쑝濡?臾댄븳 猷⑦봽
while (1) {
    // 肄붾뱶
    if (議곌굔) break;  // 醫낅즺 議곌굔
}
```

## ?ㅼ쟾 ?덉젣: ?⑺넗由ъ뼹 怨꾩궛

```c
#include <stdio.h>

int main() {
    int n;
    long long factorial = 1;
    
    printf("?レ옄瑜??낅젰?섏꽭?? ");
    scanf("%d", &n);
    
    if (n < 0) {
        printf("?뚯닔???⑺넗由ъ뼹??怨꾩궛?????놁뒿?덈떎.\n");
        return 1;
    }
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    printf("%d! = %lld\n", n, factorial);
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?뚯닔 李얘린

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int n;
    printf("?レ옄瑜??낅젰?섏꽭?? ");
    scanf("%d", &n);
    
    bool isPrime = true;
    
    if (n < 2) {
        isPrime = false;
    } else {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        printf("%d???뚯닔?낅땲??\n", n);
    } else {
        printf("%d???뚯닔媛 ?꾨떃?덈떎.\n", n);
    }
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: 蹂?李띻린

```c
#include <stdio.h>

int main() {
    int n;
    printf("以??섎? ?낅젰?섏꽭?? ");
    scanf("%d", &n);
    
    // 吏곴컖?쇨컖??
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    
    printf("\n");
    
    // ??쭅媛곸궪媛곹삎
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?レ옄 留욎텛湲?寃뚯엫

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));
    int answer = rand() % 100 + 1;  // 1~100 ?ъ씠???쒕뜡 ?レ옄
    int guess;
    int attempts = 0;
    
    printf("1遺??100 ?ъ씠???レ옄瑜?留욎떠蹂댁꽭??\n");
    
    while (1) {
        printf("?レ옄瑜??낅젰?섏꽭?? ");
        scanf("%d", &guess);
        attempts++;
        
        if (guess == answer) {
            printf("?뺣떟?낅땲?? %d踰?留뚯뿉 留욎톬?듬땲??\n", attempts);
            break;
        } else if (guess < answer) {
            printf("?????レ옄?낅땲??\n");
        } else {
            printf("???묒? ?レ옄?낅땲??\n");
        }
    }
    
    return 0;
}
```

## 諛섎났臾??좏깮 媛?대뱶

- **for**: 諛섎났 ?잛닔媛 ?뺥빐???덉쓣 ??
- **while**: 議곌굔???곕씪 諛섎났????
- **do-while**: 理쒖냼 ??踰덉? ?ㅽ뻾?댁빞 ????

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?⑥닔?????怨듬??대낫寃좎뒿?덈떎.

