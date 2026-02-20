---
layout: post
title:  "C?몄뼱 媛뺤쓽 10?? 援ъ“泥?
date:   2025-01-22 10:00:00 +0900
categories: [IT, C?몄뼱 媛뺤쓽]
tags: [C?몄뼱, 援ъ“泥? struct, ?ъ슜?먯젙?섑???
---

# C?몄뼱 媛뺤쓽 10?? 援ъ“泥?

## 援ъ“泥대??

援ъ“泥?Structure)???쒕줈 ?ㅻⅨ ??낆쓽 ?곗씠?곕? ?섎굹??洹몃９?쇰줈 臾띠뼱??愿由ы븷 ???덇쾶 ?댁＜???ъ슜???뺤쓽 ?곗씠????낆엯?덈떎.

## 援ъ“泥??좎뼵

### 湲곕낯 ?뺤떇

```c
struct 援ъ“泥대챸 {
    ?곗씠?고???硫ㅻ쾭1;
    ?곗씠?고???硫ㅻ쾭2;
    // ...
};
```

### ?덉떆: ?숈깮 ?뺣낫 援ъ“泥?

```c
struct Student {
    char name[50];
    int age;
    float score;
};
```

## 援ъ“泥?蹂???좎뼵

```c
// 諛⑸쾿 1: 援ъ“泥??좎뼵 ??蹂???좎뼵
struct Student {
    char name[50];
    int age;
    float score;
};

struct Student student1;

// 諛⑸쾿 2: ?좎뼵怨??숈떆??蹂???좎뼵
struct Student {
    char name[50];
    int age;
    float score;
} student1, student2;

// 諛⑸쾿 3: typedef ?ъ슜 (沅뚯옣)
typedef struct {
    char name[50];
    int age;
    float score;
} Student;

Student student1;  // struct ?ㅼ썙???놁씠 ?ъ슜 媛??
```

## 援ъ“泥?硫ㅻ쾭 ?묎렐

??`.`) ?곗궛?먮? ?ъ슜?섏뿬 硫ㅻ쾭???묎렐?⑸땲??

```c
struct Student {
    char name[50];
    int age;
    float score;
};

struct Student student1;

// 媛??좊떦
strcpy(student1.name, "?띻만??);
student1.age = 20;
student1.score = 85.5;

// 媛?異쒕젰
printf("?대쫫: %s\n", student1.name);
printf("?섏씠: %d\n", student1.age);
printf("?먯닔: %.1f\n", student1.score);
```

## 援ъ“泥?珥덇린??

### 諛⑸쾿 1: ?좎뼵怨??숈떆??珥덇린??

```c
struct Student student1 = {
    "?띻만??,
    20,
    85.5
};
```

### 諛⑸쾿 2: 吏??珥덇린??(C99)

```c
struct Student student1 = {
    .name = "?띻만??,
    .age = 20,
    .score = 85.5
};
```

## 援ъ“泥?諛곗뿴

?щ윭 媛쒖쓽 援ъ“泥대? 諛곗뿴濡?愿由ы븷 ???덉뒿?덈떎:

```c
struct Student students[5];

// ?낅젰
for (int i = 0; i < 5; i++) {
    printf("?숈깮 %d ?뺣낫 ?낅젰:\n", i + 1);
    printf("?대쫫: ");
    scanf("%s", students[i].name);
    printf("?섏씠: ");
    scanf("%d", &students[i].age);
    printf("?먯닔: ");
    scanf("%f", &students[i].score);
}

// 異쒕젰
for (int i = 0; i < 5; i++) {
    printf("?숈깮 %d: %s, %d?? %.1f??n", 
           i + 1, students[i].name, students[i].age, students[i].score);
}
```

## 援ъ“泥??ъ씤??

援ъ“泥대? 媛由ы궎???ъ씤?곕? ?ъ슜?????덉뒿?덈떎:

```c
struct Student student1 = {"?띻만??, 20, 85.5};
struct Student *ptr = &student1;

// ?ъ씤?곕? ?듯븳 硫ㅻ쾭 ?묎렐
printf("%s\n", (*ptr).name);  // 諛⑸쾿 1
printf("%s\n", ptr->name);    // 諛⑸쾿 2 (?붿궡???곗궛?? 沅뚯옣)
printf("%d\n", ptr->age);
printf("%.1f\n", ptr->score);
```

**?붿궡???곗궛??`->`)**: ?ъ씤?곕? ?듯빐 援ъ“泥?硫ㅻ쾭???묎렐?????ъ슜

## 援ъ“泥대? ?⑥닔???꾨떖

### 媛믪뿉 ?섑븳 ?꾨떖

```c
void printStudent(struct Student s) {
    printf("?대쫫: %s\n", s.name);
    printf("?섏씠: %d\n", s.age);
    printf("?먯닔: %.1f\n", s.score);
}

int main() {
    struct Student student1 = {"?띻만??, 20, 85.5};
    printStudent(student1);
    return 0;
}
```

### 李몄“???섑븳 ?꾨떖 (?ъ씤??

```c
void printStudent(struct Student *s) {
    printf("?대쫫: %s\n", s->name);
    printf("?섏씠: %d\n", s->age);
    printf("?먯닔: %.1f\n", s->score);
}

void modifyStudent(struct Student *s) {
    s->age = 21;  // 媛?蹂寃?媛??
    s->score = 90.0;
}

int main() {
    struct Student student1 = {"?띻만??, 20, 85.5};
    printStudent(&student1);
    modifyStudent(&student1);
    printStudent(&student1);
    return 0;
}
```

## 以묒꺽 援ъ“泥?

援ъ“泥??덉뿉 ?ㅻⅨ 援ъ“泥대? ?ы븿?????덉뒿?덈떎:

```c
struct Date {
    int year;
    int month;
    int day;
};

struct Student {
    char name[50];
    struct Date birthDate;
    float score;
};

int main() {
    struct Student student1 = {
        "?띻만??,
        {2000, 1, 15},
        85.5
    };
    
    printf("?앸뀈?붿씪: %d??%d??%d??n", 
           student1.birthDate.year,
           student1.birthDate.month,
           student1.birthDate.day);
    
    return 0;
}
```

## 援ъ“泥??ш린? 硫붾え由??뺣젹

援ъ“泥댁쓽 ?ш린??硫ㅻ쾭?ㅼ쓽 ?ш린 ?⑷낵 ?ㅻ? ???덉뒿?덈떎 (硫붾え由??뺣젹 ?뚮Ц):

```c
struct Example {
    char a;    // 1諛붿씠??
    int b;     // 4諛붿씠??
    char c;    // 1諛붿씠??
};

printf("?ш린: %zu\n", sizeof(struct Example));  // 12諛붿씠??(?뺣젹??
```

## ?ㅼ쟾 ?덉젣: ?숈깮 愿由??쒖뒪??

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float score;
} Student;

void inputStudent(Student *s) {
    printf("?대쫫: ");
    scanf("%s", s->name);
    printf("?섏씠: ");
    scanf("%d", &s->age);
    printf("?먯닔: ");
    scanf("%f", &s->score);
}

void printStudent(Student *s) {
    printf("?대쫫: %s, ?섏씠: %d, ?먯닔: %.1f\n", 
           s->name, s->age, s->score);
}

float calculateAverage(Student students[], int count) {
    float sum = 0;
    for (int i = 0; i < count; i++) {
        sum += students[i].score;
    }
    return sum / count;
}

int main() {
    Student students[5];
    
    // ?숈깮 ?뺣낫 ?낅젰
    printf("5紐낆쓽 ?숈깮 ?뺣낫瑜??낅젰?섏꽭??\n");
    for (int i = 0; i < 5; i++) {
        printf("\n?숈깮 %d:\n", i + 1);
        inputStudent(&students[i]);
    }
    
    // ?숈깮 ?뺣낫 異쒕젰
    printf("\n=== ?숈깮 ?뺣낫 ===\n");
    for (int i = 0; i < 5; i++) {
        printStudent(&students[i]);
    }
    
    // ?됯퇏 怨꾩궛
    float avg = calculateAverage(students, 5);
    printf("\n?됯퇏 ?먯닔: %.2f\n", avg);
    
    return 0;
}
```

## ?ㅼ쟾 ?덉젣: ?꾩꽌 愿由??쒖뒪??

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    char title[100];
    char author[50];
    int year;
    float price;
} Book;

void addBook(Book *book, char *title, char *author, int year, float price) {
    strcpy(book->title, title);
    strcpy(book->author, author);
    book->year = year;
    book->price = price;
}

void printBook(Book *book) {
    printf("?쒕ぉ: %s\n", book->title);
    printf("??? %s\n", book->author);
    printf("異쒗뙋?꾨룄: %d\n", book->year);
    printf("媛寃? %.2f??n", book->price);
    printf("---\n");
}

int main() {
    Book library[3];
    
    addBook(&library[0], "C?몄뼱 ?꾨줈洹몃옒諛?, "?띻만??, 2020, 25000);
    addBook(&library[1], "?먮즺援ъ“", "源泥좎닔", 2021, 30000);
    addBook(&library[2], "?뚭퀬由ъ쬁", "?댁쁺??, 2022, 35000);
    
    printf("=== ?꾩꽌 紐⑸줉 ===\n");
    for (int i = 0; i < 3; i++) {
        printBook(&library[i]);
    }
    
    return 0;
}
```

## 援ъ“泥댁? ?⑥닔 ?ъ씤??

援ъ“泥댁뿉 ?⑥닔 ?ъ씤?곕? ?ы븿?????덉뒿?덈떎:

```c
typedef struct {
    int x, y;
    void (*print)(int, int);
} Point;

void printPoint(int x, int y) {
    printf("(%d, %d)\n", x, y);
}

int main() {
    Point p = {10, 20, printPoint};
    p.print(p.x, p.y);  // (10, 20)
    return 0;
}
```

## 援ъ“泥댁쓽 ?μ젏

1. **?곗씠??洹몃９??*: 愿?⑤맂 ?곗씠?곕? ?섎굹濡?臾띠뼱 愿由?
2. **肄붾뱶 媛?낆꽦**: ?섎? ?덈뒗 ?⑥쐞濡??곗씠??愿由?
3. **?ъ궗?⑹꽦**: 援ъ“泥대? ??낆쿂???ъ슜 媛??
4. **?뺤옣??*: ?꾩슂???곕씪 硫ㅻ쾭 異붽? 媛??

## ?ㅼ쓬 ?④퀎

?댁젣 C?몄뼱??湲곕낯 媛쒕뀗?ㅼ쓣 紐⑤몢 諛곗썱?듬땲?? ?ㅼ쓬?먮뒗:
- ?뚯씪 ?낆텧??
- ?숈쟻 硫붾え由??좊떦 ?ы솕
- 怨좉툒 ?ъ씤??湲곕쾿
- ?꾨줈?앺듃 ?ㅼ뒿

?깆쓣 ?듯빐 ?ㅻ젰?????μ긽?쒗궗 ???덉뒿?덈떎.

## 留덈Т由?

C?몄뼱 怨듬?瑜??대젃寃??뺣━?대뇬?댁슂! ?댁젣 湲곕낯湲곕? 諛뷀깢?쇰줈 ?ㅼ뼇???꾨줈?앺듃瑜?留뚮뱾?대낫?ㅺ퀬 ?댁슂. 袁몄????곗뒿???ㅻ젰 ?μ긽???댁뇿?쇨퀬 ?앷컖?댁슂.

