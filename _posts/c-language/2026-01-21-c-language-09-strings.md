---
layout: post
title:  "C?몄뼱 媛뺤쓽 9?? 臾몄옄??泥섎━"
date:   2025-01-21 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, 臾몄옄?? string, 臾몄옄諛곗뿴]
---

# C?몄뼱 媛뺤쓽 9?? 臾몄옄??泥섎━

## 臾몄옄?댁씠??

C?몄뼱?먯꽌 臾몄옄?댁? 臾몄옄 諛곗뿴濡??쒗쁽?⑸땲?? 臾몄옄?댁쓽 ?앹? ??臾몄옄(`\0`)濡??쒖떆?⑸땲??

## 臾몄옄???좎뼵

### 諛⑸쾿 1: 臾몄옄 諛곗뿴

```c
char str[20] = "Hello";
// ?먮뒗
char str[] = "Hello";  // ?ш린 ?먮룞 ?ㅼ젙 (6: 5臾몄옄 + ??臾몄옄)
```

### 諛⑸쾿 2: ?ъ씤??

```c
char *str = "Hello";
```

**李⑥씠??**
- 諛곗뿴: ?섏젙 媛??
- ?ъ씤?? ?섏젙 遺덇???(臾몄옄??由ы꽣??

## 臾몄옄??珥덇린??

```c
char str1[10] = "Hello";
char str2[] = "World";
char str3[10] = {'H', 'e', 'l', 'l', 'o', '\0'};
```

## 臾몄옄???낅젰/異쒕젰

### printf? scanf ?ъ슜

```c
char name[50];

printf("?대쫫???낅젰?섏꽭?? ");
scanf("%s", name);  // 怨듬갚 ?꾧퉴吏留??낅젰??
printf("?덈뀞?섏꽭?? %s??\n", name);
```

### gets? puts ?ъ슜 (鍮꾩텛泥?

```c
char str[100];
gets(str);    // ??以??꾩껜 ?낅젰 (?꾪뿕!)
puts(str);    // 異쒕젰 ??以꾨컮轅?
```

### fgets ?ъ슜 (沅뚯옣)

```c
char str[100];
printf("臾몄옄???낅젰: ");
fgets(str, sizeof(str), stdin);  // ?덉쟾???낅젰
printf("?낅젰??臾몄옄?? %s", str);
```

## 臾몄옄??湲몄씠 援ы븯湲?

### 吏곸젒 援ы쁽

```c
int stringLength(char *str) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}
```

### strlen ?⑥닔 ?ъ슜

```c
#include <string.h>

char str[] = "Hello";
int len = strlen(str);  // 5
```

## 臾몄옄??蹂듭궗

### 吏곸젒 援ы쁽

```c
void stringCopy(char *dest, char *src) {
    int i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0';
}
```

### strcpy ?⑥닔 ?ъ슜

```c
#include <string.h>

char src[] = "Hello";
char dest[20];
strcpy(dest, src);
printf("%s\n", dest);  // Hello
```

### strncpy ?ъ슜 (?덉쟾)

```c
char src[] = "Hello";
char dest[20];
strncpy(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\0';  // ?덉쟾???꾪빐
```

## 臾몄옄???곌껐 (Concatenation)

### 吏곸젒 援ы쁽

```c
void stringConcat(char *dest, char *src) {
    int destLen = strlen(dest);
    int i = 0;
    while (src[i] != '\0') {
        dest[destLen + i] = src[i];
        i++;
    }
    dest[destLen + i] = '\0';
}
```

### strcat ?⑥닔 ?ъ슜

```c
#include <string.h>

char str1[20] = "Hello";
char str2[] = " World";
strcat(str1, str2);
printf("%s\n", str1);  // Hello World
```

### strncat ?ъ슜 (?덉쟾)

```c
char str1[20] = "Hello";
char str2[] = " World";
strncat(str1, str2, sizeof(str1) - strlen(str1) - 1);
```

## 臾몄옄??鍮꾧탳

### 吏곸젒 援ы쁽

```c
int stringCompare(char *str1, char *str2) {
    int i = 0;
    while (str1[i] != '\0' && str2[i] != '\0') {
        if (str1[i] != str2[i]) {
            return str1[i] - str2[i];
        }
        i++;
    }
    return str1[i] - str2[i];
}
```

### strcmp ?⑥닔 ?ъ슜

```c
#include <string.h>

char str1[] = "Hello";
char str2[] = "Hello";
char str3[] = "World";

if (strcmp(str1, str2) == 0) {
    printf("媛숈뒿?덈떎.\n");
}

if (strcmp(str1, str3) < 0) {
    printf("str1??str3蹂대떎 ?묒뒿?덈떎.\n");
}
```

**諛섑솚媛?**
- 0: ??臾몄옄?댁씠 媛숈쓬
- ?묒닔: 泥?踰덉㎏ 臾몄옄?댁씠 ??
- ?뚯닔: 泥?踰덉㎏ 臾몄옄?댁씠 ?묒쓬

## 臾몄옄??寃??

### strchr: 臾몄옄 寃??

```c
#include <string.h>

char str[] = "Hello World";
char *result = strchr(str, 'o');
if (result != NULL) {
    printf("李얠? ?꾩튂: %s\n", result);  // o World
    printf("?몃뜳?? %ld\n", result - str);  // 4
}
```

### strstr: 臾몄옄??寃??

```c
#include <string.h>

char str[] = "Hello World";
char *result = strstr(str, "World");
if (result != NULL) {
    printf("李얠? ?꾩튂: %s\n", result);  // World
}
```

## 臾몄옄???좏겙??(Tokenization)

### strtok ?⑥닔 ?ъ슜

```c
#include <string.h>

char str[] = "Hello,World,C,Programming";
char *part = strtok(str, ",");

while (part != NULL) {
    printf("%s\n", part);
    part = strtok(NULL, ",");
}
```

異쒕젰:
```
Hello
World
C
Programming
```

## 臾몄옄??蹂??

### ?レ옄瑜?臾몄옄?대줈

```c
#include <stdio.h>

int num = 123;
char str[20];
sprintf(str, "%d", num);
printf("%s\n", str);  // 123
```

### 臾몄옄?댁쓣 ?レ옄濡?

```c
#include <stdlib.h>

char str[] = "123";
int num = atoi(str);        // 臾몄옄?댁쓣 ?뺤닔濡?
long lnum = atol(str);      // 臾몄옄?댁쓣 long?쇰줈
double dnum = atof("3.14"); // 臾몄옄?댁쓣 ?ㅼ닔濡?

printf("%d\n", num);   // 123
printf("%.2f\n", dnum); // 3.14
```

## ?ㅼ쟾 ?덉젣: 臾몄옄???ㅼ쭛湲?

```c
#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    int len = strlen(str);
    int start = 0;
    int end = len - 1;
    
    while (start < end) {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

int main() {
    char str[] = "Hello";
    reverseString(str);
    printf("%s\n", str);  // olleH
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?⑥뼱 媛쒖닔 ?멸린

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int countWords(char *str) {
    int count = 0;
    int inWord = 0;
    
    for (int i = 0; str[i] != '\0'; i++) {
        if (isspace(str[i])) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            count++;
        }
    }
    
    return count;
}

int main() {
    char str[] = "Hello World C Programming";
    printf("?⑥뼱 媛쒖닔: %d\n", countWords(str));  // 4
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?뚮Ц(Palindrome) ?뺤씤

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(char *str) {
    int len = strlen(str);
    int start = 0;
    int end = len - 1;
    
    while (start < end) {
        // 怨듬갚怨???뚮Ц??臾댁떆
        while (isspace(str[start])) start++;
        while (isspace(str[end])) end--;
        
        if (tolower(str[start]) != tolower(str[end])) {
            return 0;  // ?뚮Ц???꾨떂
        }
        start++;
        end--;
    }
    
    return 1;  // ?뚮Ц??
}

int main() {
    char str[] = "A man a plan a canal Panama";
    if (isPalindrome(str)) {
        printf("?뚮Ц?낅땲??\n");
    } else {
        printf("?뚮Ц???꾨떃?덈떎.\n");
    }
    return 0;
}
```

## 二쇱슂 臾몄옄???⑥닔 ?뺣━

| ?⑥닔 | ?ㅻ챸 | ?ㅻ뜑 |
|------|------|------|
| `strlen()` | 臾몄옄??湲몄씠 | `<string.h>` |
| `strcpy()` | 臾몄옄??蹂듭궗 | `<string.h>` |
| `strcat()` | 臾몄옄???곌껐 | `<string.h>` |
| `strcmp()` | 臾몄옄??鍮꾧탳 | `<string.h>` |
| `strchr()` | 臾몄옄 寃??| `<string.h>` |
| `strstr()` | 臾몄옄??寃??| `<string.h>` |
| `strtok()` | 臾몄옄???좏겙??| `<string.h>` |

## 二쇱쓽?ы빆

1. **諛곗뿴 ?ш린**: 異⑸텇???ш린瑜??좊떦?댁빞 ??
2. **??臾몄옄**: 臾몄옄???앹뿉 `\0` ?꾩슂
3. **踰꾪띁 ?ㅻ쾭?뚮줈??*: `strcpy`, `strcat` ?ъ슜 ??二쇱쓽
4. **?덉쟾???⑥닔**: `strncpy`, `strncat` ?ъ슜 沅뚯옣

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 援ъ“泥댁뿉 ???怨듬??대낫寃좎뒿?덈떎.

