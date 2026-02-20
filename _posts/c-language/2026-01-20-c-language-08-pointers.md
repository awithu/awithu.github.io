---
layout: post
title:  "C?몄뼱 媛뺤쓽 8?? ?ъ씤??湲곗큹"
date:   2025-01-20 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, ?ъ씤?? pointer, 硫붾え由? 二쇱냼]
---

# C?몄뼱 媛뺤쓽 8?? ?ъ씤??湲곗큹

## ?ъ씤?곕??

?ъ씤??Pointer)??蹂?섏쓽 硫붾え由?二쇱냼瑜???ν븯??蹂?섏엯?덈떎. C?몄뼱??媛??媛뺣젰?섎㈃?쒕룄 ?대젮??媛쒕뀗 以??섎굹?낅땲??

## 硫붾え由?二쇱냼 ?댄빐?섍린

紐⑤뱺 蹂?섎뒗 硫붾え由ъ뿉 ??λ릺硫? 媛곴컖 怨좎쑀??二쇱냼瑜?媛吏묐땲??

```c
int num = 10;
printf("媛? %d\n", num);        // 10
printf("二쇱냼: %p\n", &num);     // 硫붾え由?二쇱냼 (?? 0x7fff5fbff6ac)
```

- `&`: 二쇱냼 ?곗궛??(Address Operator)
- 蹂???욎뿉 `&`瑜?遺숈씠硫?洹?蹂?섏쓽 二쇱냼瑜??살쓣 ???덉뒿?덈떎

## ?ъ씤???좎뼵

```c
?곗씠?고???*?ъ씤?곕??섎챸;
```

### ?덉떆

```c
int num = 10;
int *ptr;        // int???ъ씤???좎뼵
ptr = &num;      // num??二쇱냼瑜?ptr?????

printf("num??媛? %d\n", num);        // 10
printf("num??二쇱냼: %p\n", &num);     // 二쇱냼
printf("ptr??媛由ы궎??媛? %d\n", *ptr);  // 10
printf("ptr????λ맂 二쇱냼: %p\n", ptr);  // &num怨??숈씪
```

## ??갭議??곗궛??(*)

?ъ씤?곌? 媛由ы궎??硫붾え由ъ쓽 媛믪쓣 媛?몄삤嫄곕굹 蹂寃쏀븷 ???덉뒿?덈떎:

```c
int num = 10;
int *ptr = &num;

*ptr = 20;  // ptr??媛由ы궎??怨?num)??媛믪쓣 20?쇰줈 蹂寃?
printf("%d\n", num);  // 20
```

## ?ъ씤?곗쓽 湲곕낯 ?ъ슜踰?

```c
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;
    
    printf("=== ?ъ씤??湲곕낯 ===\n");
    printf("num??媛? %d\n", num);
    printf("num??二쇱냼: %p\n", &num);
    printf("ptr??媛?二쇱냼): %p\n", ptr);
    printf("ptr??媛由ы궎??媛? %d\n", *ptr);
    
    // ?ъ씤?곕? ?듯븳 媛?蹂寃?
    *ptr = 20;
    printf("\n媛?蹂寃???\n");
    printf("num??媛? %d\n", num);
    printf("ptr??媛由ы궎??媛? %d\n", *ptr);
    
    return 0;
}
```

## ?ъ씤?곗? ?⑥닔

?ъ씤?곕? ?ъ슜?섎㈃ ?⑥닔?먯꽌 ?ㅼ젣 蹂?섏쓽 媛믪쓣 蹂寃쏀븷 ???덉뒿?덈떎:

### 媛믪뿉 ?섑븳 ?꾨떖 (Call by Value)

```c
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // ?⑥닔 ?댁뿉?쒕쭔 媛믪씠 諛붾?
}

int main() {
    int x = 10, y = 20;
    swap(x, y);
    printf("%d %d\n", x, y);  // 10 20 (蹂?섏? ?딆쓬)
    return 0;
}
```

### 李몄“???섑븳 ?꾨떖 (Call by Reference)

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

## ?ъ씤?곗? 諛곗뿴

諛곗뿴 ?대쫫? 泥?踰덉㎏ ?붿냼??二쇱냼瑜?媛由ы궢?덈떎:

```c
int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;  // arr? &arr[0]怨??숈씪

printf("%d\n", *ptr);        // 1 (arr[0])
printf("%d\n", *(ptr + 1));  // 2 (arr[1])
printf("%d\n", *(ptr + 2));  // 3 (arr[2])

// 諛곗뿴 ?묎렐 諛⑸쾿??
printf("%d\n", arr[0]);      // 1
printf("%d\n", *(arr + 0));  // 1 (?숈씪)
printf("%d\n", ptr[0]);      // 1 (?숈씪)
```

## ?ъ씤???곗닠 ?곗궛

?ъ씤?곗뿉 ?뺤닔瑜??뷀븯嫄곕굹 鍮쇰㈃ ?ㅼ쓬/?댁쟾 ?붿냼瑜?媛由ы궢?덈떎:

```c
int arr[5] = {10, 20, 30, 40, 50};
int *ptr = arr;

printf("%d\n", *ptr);        // 10
printf("%d\n", *(ptr + 1));  // 20
printf("%d\n", *(ptr + 2));  // 30

ptr++;  // ?ㅼ쓬 ?붿냼濡??대룞
printf("%d\n", *ptr);        // 20
```

## NULL ?ъ씤??

?ъ씤?곌? ?꾨Т寃껊룄 媛由ы궎吏 ?딆쓣 ???ъ슜:

```c
int *ptr = NULL;

if (ptr == NULL) {
    printf("?ъ씤?곌? NULL?낅땲??\n");
}

// NULL ?ъ씤????갭議곕뒗 ?꾪뿕!
// *ptr = 10;  // ?ㅻ쪟 諛쒖깮!
```

## ?ъ씤?곗쓽 ?ъ씤??(?댁쨷 ?ъ씤??

?ъ씤?곗쓽 二쇱냼瑜???ν븯???ъ씤??

```c
int num = 10;
int *ptr = &num;
int **pptr = &ptr;

printf("num: %d\n", num);           // 10
printf("*ptr: %d\n", *ptr);         // 10
printf("**pptr: %d\n", **pptr);     // 10
```

## ?숈쟻 硫붾え由??좊떦

?ъ씤?곕? ?ъ슜?섏뿬 ?고??꾩뿉 硫붾え由щ? ?좊떦?????덉뒿?덈떎:

```c
#include <stdlib.h>

int main() {
    int *ptr;
    int n = 5;
    
    // ?숈쟻 硫붾え由??좊떦
    ptr = (int*)malloc(n * sizeof(int));
    
    if (ptr == NULL) {
        printf("硫붾え由??좊떦 ?ㅽ뙣\n");
        return 1;
    }
    
    // ?ъ슜
    for (int i = 0; i < n; i++) {
        ptr[i] = i * 10;
    }
    
    // 異쒕젰
    for (int i = 0; i < n; i++) {
        printf("%d ", ptr[i]);
    }
    
    // 硫붾え由??댁젣 (以묒슂!)
    free(ptr);
    ptr = NULL;
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: 諛곗뿴??理쒕?媛?李얘린

```c
#include <stdio.h>

int findMax(int *arr, int size) {
    int max = *arr;  // arr[0]
    for (int i = 1; i < size; i++) {
        if (*(arr + i) > max) {
            max = *(arr + i);
        }
    }
    return max;
}

int main() {
    int numbers[5] = {5, 2, 8, 1, 9};
    int max = findMax(numbers, 5);
    printf("理쒕?媛? %d\n", max);
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: 臾몄옄??湲몄씠 援ы븯湲?

```c
#include <stdio.h>

int stringLength(char *str) {
    int length = 0;
    while (*str != '\0') {
        length++;
        str++;
    }
    return length;
}

int main() {
    char str[] = "Hello";
    printf("湲몄씠: %d\n", stringLength(str));
    return 0;
}
```

## ?ъ씤???ъ슜 ??二쇱쓽?ы빆

1. **珥덇린??*: ?ъ씤?곕? ?ъ슜?섍린 ?꾩뿉 諛섎뱶??珥덇린??
2. **NULL 泥댄겕**: ??갭議??꾩뿉 NULL?몄? ?뺤씤
3. **踰붿쐞 ?뺤씤**: 諛곗뿴 踰붿쐞瑜?踰쀬뼱?섏? ?딅룄濡?二쇱쓽
4. **硫붾え由??댁젣**: `malloc`?쇰줈 ?좊떦??硫붾え由щ뒗 諛섎뱶??`free`濡??댁젣

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 臾몄옄??泥섎━?????怨듬??대낫寃좎뒿?덈떎.

