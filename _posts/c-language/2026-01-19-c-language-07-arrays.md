---
layout: post
title:  "C?몄뼱 媛뺤쓽 7?? 諛곗뿴"
date:   2025-01-19 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, 諛곗뿴, array, ?먮즺援ъ“]
---

# C?몄뼱 媛뺤쓽 7?? 諛곗뿴

## 諛곗뿴?대??

諛곗뿴(Array)? 媛숈? ??낆쓽 ?곗씠?곕? ?곗냽??硫붾え由?怨듦컙????ν븯???먮즺援ъ“?낅땲?? ?щ윭 媛쒖쓽 蹂?섎? ?섎굹???대쫫?쇰줈 愿由ы븷 ???덉뒿?덈떎.

## 諛곗뿴 ?좎뼵

### 湲곕낯 ?뺤떇

```c
?곗씠?고???諛곗뿴紐??ш린];
```

### ?덉떆

```c
int numbers[5];           // 5媛쒖쓽 ?뺤닔瑜???ν븯??諛곗뿴
float scores[10];         // 10媛쒖쓽 ?ㅼ닔瑜???ν븯??諛곗뿴
char name[20];           // 20媛쒖쓽 臾몄옄瑜???ν븯??諛곗뿴
```

## 諛곗뿴 珥덇린??

### 諛⑸쾿 1: ?좎뼵怨??숈떆??珥덇린??

```c
int numbers[5] = {1, 2, 3, 4, 5};
```

### 諛⑸쾿 2: ?ш린 ?앸왂 (?먮룞 ?ш린)

```c
int numbers[] = {1, 2, 3, 4, 5};  // ?ш린媛 ?먮룞?쇰줈 5濡??ㅼ젙??
```

### 諛⑸쾿 3: 遺遺?珥덇린??

```c
int numbers[5] = {1, 2};  // ?섎㉧吏??0?쇰줈 珥덇린?붾맖
// 寃곌낵: {1, 2, 0, 0, 0}
```

### 諛⑸쾿 4: 紐⑤몢 0?쇰줈 珥덇린??

```c
int numbers[5] = {0};  // 紐⑤뱺 ?붿냼媛 0?쇰줈 珥덇린??
```

## 諛곗뿴 ?묎렐

諛곗뿴??媛??붿냼???몃뜳??0遺???쒖옉)濡??묎렐?⑸땲??

```c
int numbers[5] = {10, 20, 30, 40, 50};

printf("%d\n", numbers[0]);  // 10 (泥?踰덉㎏ ?붿냼)
printf("%d\n", numbers[2]);  // 30 (??踰덉㎏ ?붿냼)
printf("%d\n", numbers[4]);  // 50 (留덉?留??붿냼)

// 媛?蹂寃?
numbers[0] = 100;
printf("%d\n", numbers[0]);  // 100
```

**二쇱쓽?ы빆:**
- ?몃뜳?ㅻ뒗 0遺???쒖옉?⑸땲??
- 諛곗뿴 踰붿쐞瑜?踰쀬뼱?섎㈃ ?ㅻ쪟媛 諛쒖깮?????덉뒿?덈떎

## 諛곗뿴 ?쒗쉶

### for 臾??ъ슜

```c
int numbers[5] = {1, 2, 3, 4, 5};

// 諛곗뿴 異쒕젰
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
printf("\n");

// 諛곗뿴??媛??낅젰
for (int i = 0; i < 5; i++) {
    printf("?レ옄 ?낅젰: ");
    scanf("%d", &numbers[i]);
}
```

## 諛곗뿴???ш린

```c
int numbers[5];
int size = sizeof(numbers) / sizeof(numbers[0]);  // 諛곗뿴 ?ш린 怨꾩궛
printf("諛곗뿴 ?ш린: %d\n", size);  // 5
```

## ?ㅼ감??諛곗뿴

### 2李⑥썝 諛곗뿴

```c
int matrix[3][4];  // 3??4??諛곗뿴

// 珥덇린??
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// ?묎렐
printf("%d\n", matrix[0][0]);  // 1
printf("%d\n", matrix[1][2]);  // 7
```

### 2李⑥썝 諛곗뿴 ?쒗쉶

```c
int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\n");
}
```

## 諛곗뿴???⑥닔???꾨떖

諛곗뿴???⑥닔???꾨떖???뚮뒗 ?ъ씤?곕줈 ?꾨떖?⑸땲??

```c
// 諛곗뿴????援ы븯湲?
int sum(int arr[], int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += arr[i];
    }
    return total;
}

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int result = sum(numbers, 5);
    printf("?? %d\n", result);
    return 0;
}
```

## 諛곗뿴??理쒕?媛?理쒖냼媛?李얘린

```c
int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int findMin(int arr[], int size) {
    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
```

## 諛곗뿴 ?뺣젹 (踰꾨툝 ?뺣젹)

```c
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 媛?援먰솚
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int numbers[5] = {5, 2, 8, 1, 9};
    bubbleSort(numbers, 5);
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    // 異쒕젰: 1 2 5 8 9
    return 0;
}
```

## 諛곗뿴 寃??(?좏삎 寃??

```c
int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i;  // 李얠? ?꾩튂 諛섑솚
        }
    }
    return -1;  // 李얠? 紐삵븿
}
```

## ?ㅼ쟾 ?덉젣: ?숈깮 ?깆쟻 愿由?

```c
#include <stdio.h>

int main() {
    int scores[5];
    int sum = 0;
    float average;
    
    // ?깆쟻 ?낅젰
    printf("5紐낆쓽 ?깆쟻???낅젰?섏꽭??\n");
    for (int i = 0; i < 5; i++) {
        printf("?숈깮 %d: ", i + 1);
        scanf("%d", &scores[i]);
        sum += scores[i];
    }
    
    // ?됯퇏 怨꾩궛
    average = (float)sum / 5;
    
    // 寃곌낵 異쒕젰
    printf("\n=== ?깆쟻 寃곌낵 ===\n");
    for (int i = 0; i < 5; i++) {
        printf("?숈깮 %d: %d??n", i + 1, scores[i]);
    }
    printf("?됯퇏: %.2f??n", average);
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?됰젹 怨깆뀍

{% raw %}
```c
#include <stdio.h>

void multiplyMatrices(int a[][3], int b[][3], int result[][3], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[i][j] = 0;
            for (int k = 0; k < cols; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

int main() {
    int matrix1[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int matrix2[3][3] = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
    int result[3][3];
    
    multiplyMatrices(matrix1, matrix2, result, 3, 3);
    
    // 寃곌낵 異쒕젰
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}
```
{% endraw %}

## 諛곗뿴???쒓퀎

1. **怨좎젙 ?ш린**: 諛곗뿴 ?ш린瑜??고??꾩뿉 蹂寃쏀븷 ???놁쓬
2. **硫붾え由???퉬**: ?꾩슂??寃껊낫???ш쾶 ?좎뼵?섎㈃ 硫붾え由???퉬
3. **?쎌엯/??젣 ?대젮?**: 以묎컙???붿냼瑜??쎌엯?섍굅????젣?섍린 ?대젮?

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 ?ъ씤??湲곗큹?????怨듬??대낫寃좎뒿?덈떎.

