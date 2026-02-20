---
layout: post
title:  "C?몄뼱 媛뺤쓽 4?? ?쒖뼱臾?(if, switch)"
date:   2025-01-16 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, ?쒖뼱臾? if臾? switch臾? 議곌굔臾?
---

# C?몄뼱 媛뺤쓽 4?? ?쒖뼱臾?(if, switch)

## ?쒖뼱臾몄씠??

?쒖뼱臾몄? ?꾨줈洹몃옩???ㅽ뻾 ?먮쫫???쒖뼱?섎뒗 臾몄옣?낅땲?? 議곌굔???곕씪 ?ㅻⅨ 肄붾뱶瑜??ㅽ뻾?섍굅?? ?뱀젙 肄붾뱶瑜?諛섎났 ?ㅽ뻾?????덉뒿?덈떎.

## if 臾?

議곌굔??李몄씪 ??肄붾뱶瑜??ㅽ뻾?⑸땲??

### 湲곕낯 ?뺤떇

```c
if (議곌굔) {
    // 議곌굔??李몄씪 ???ㅽ뻾??肄붾뱶
}
```

### ?덉떆

```c
int age = 20;

if (age >= 18) {
    printf("?깆씤?낅땲??\n");
}
```

## if-else 臾?

議곌굔??嫄곗쭞???뚮룄 肄붾뱶瑜??ㅽ뻾?⑸땲??

```c
int score = 85;

if (score >= 60) {
    printf("?⑷꺽?낅땲??\n");
} else {
    printf("遺덊빀寃⑹엯?덈떎.\n");
}
```

## if-else if-else 臾?

?щ윭 議곌굔???뺤씤?⑸땲??

```c
int score = 85;

if (score >= 90) {
    printf("A?깃툒\n");
} else if (score >= 80) {
    printf("B?깃툒\n");
} else if (score >= 70) {
    printf("C?깃툒\n");
} else {
    printf("F?깃툒\n");
}
```

## 以묒꺽 if 臾?

if 臾??덉뿉 ???ㅻⅨ if 臾몄쓣 ?ъ슜?????덉뒿?덈떎:

```c
int age = 25;
bool hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        printf("?댁쟾 媛?ν빀?덈떎.\n");
    } else {
        printf("硫댄뿀媛 ?꾩슂?⑸땲??\n");
    }
} else {
    printf("誘몄꽦?꾩옄?낅땲??\n");
}
```

## ?쇳빆 ?곗궛??

媛꾨떒??議곌굔臾몄쓣 ??以꾨줈 ?묒꽦?????덉뒿?덈떎:

```c
int a = 10, b = 5;
int max = (a > b) ? a : b;  // a媛 ?щ㈃ a, ?꾨땲硫?b
printf("??媛? %d\n", max);
```

## switch 臾?

?щ윭 寃쎌슦 以??섎굹瑜??좏깮?????ъ슜?⑸땲??

### 湲곕낯 ?뺤떇

```c
switch (蹂?? {
    case 媛?:
        // 媛??????ㅽ뻾
        break;
    case 媛?:
        // 媛??????ㅽ뻾
        break;
    default:
        // ?꾩쓽 寃쎌슦媛 ?꾨땺 ???ㅽ뻾
        break;
}
```

### ?덉떆

```c
int day = 3;

switch (day) {
    case 1:
        printf("?붿슂??n");
        break;
    case 2:
        printf("?붿슂??n");
        break;
    case 3:
        printf("?섏슂??n");
        break;
    case 4:
        printf("紐⑹슂??n");
        break;
    case 5:
        printf("湲덉슂??n");
        break;
    default:
        printf("二쇰쭚\n");
        break;
}
```

**二쇱쓽?ы빆:**
- `break`瑜?鍮쇰㉨?쇰㈃ ?ㅼ쓬 case???ㅽ뻾?⑸땲??(fall-through)
- `default`???좏깮?ы빆?낅땲??

## switch 臾몄쓽 fall-through ?쒖슜

?섎룄?곸쑝濡?break瑜??앸왂?????덉뒿?덈떎:

```c
int month = 2;

switch (month) {
    case 12:
    case 1:
    case 2:
        printf("寃⑥슱\n");
        break;
    case 3:
    case 4:
    case 5:
        printf("遊?n");
        break;
    case 6:
    case 7:
    case 8:
        printf("?щ쫫\n");
        break;
    case 9:
    case 10:
    case 11:
        printf("媛??n");
        break;
}
```

## ?ㅼ쟾 ?덉젣: ?깆쟻 怨꾩궛湲?

```c
#include <stdio.h>

int main() {
    int score;
    printf("?먯닔瑜??낅젰?섏꽭?? ");
    scanf("%d", &score);
    
    if (score < 0 || score > 100) {
        printf("?섎せ???먯닔?낅땲??\n");
    } else if (score >= 90) {
        printf("A?깃툒?낅땲??\n");
    } else if (score >= 80) {
        printf("B?깃툒?낅땲??\n");
    } else if (score >= 70) {
        printf("C?깃툒?낅땲??\n");
    } else if (score >= 60) {
        printf("D?깃툒?낅땲??\n");
    } else {
        printf("F?깃툒?낅땲??\n");
    }
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: 怨꾩궛湲?

```c
#include <stdio.h>

int main() {
    char operator;
    double num1, num2, result;
    
    printf("?곗궛?먮? ?낅젰?섏꽭??(+, -, *, /): ");
    scanf(" %c", &operator);
    
    printf("???レ옄瑜??낅젰?섏꽭?? ");
    scanf("%lf %lf", &num1, &num2);
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                printf("0?쇰줈 ?섎닃 ???놁뒿?덈떎.\n");
                return 1;
            }
            break;
        default:
            printf("?섎せ???곗궛?먯엯?덈떎.\n");
            return 1;
    }
    
    printf("%.2f %c %.2f = %.2f\n", num1, operator, num2, result);
    return 0;
}
```

## if vs switch ?몄젣 ?ъ슜?좉퉴?

- **if 臾?*: 踰붿쐞 寃?? 蹂듭옟??議곌굔, 遺???쒗쁽??
- **switch 臾?*: ?뺥솗??媛?鍮꾧탳, ?щ윭 寃쎌슦 以??좏깮

## ?ㅼ쓬??怨듬????댁슜

?ㅼ쓬 ?ъ뒪?몄뿉?쒕뒗 諛섎났臾?for, while)?????怨듬??대낫寃좎뒿?덈떎.

