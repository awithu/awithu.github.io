---
layout: post
title:  "?뚯씠??媛뺤쓽 10?? ?대옒?ㅼ? 媛앹껜"
date:   2025-02-01 10:00:00 +0900
categories: [IT, ?뚯씠??媛뺤쓽]
tags: [?뚯씠?? ?대옒?? 媛앹껜, OOP, 媛앹껜吏??
description: "?뚯씠?ъ쓽 ?대옒?ㅼ? 媛앹껜, ?앹꽦?? 硫붿꽌?? ?곸냽 ??媛앹껜吏???꾨줈洹몃옒諛띿쓽 湲곗큹瑜?諛곗썎?덈떎."
---

# ?뚯씠??媛뺤쓽 10?? ?대옒?ㅼ? 媛앹껜

## ?대옒?ㅼ? 媛앹껜??

?대옒??Class)??媛앹껜瑜?留뚮뱾湲??꾪븳 ?ㅺ퀎?꾩씠怨? 媛앹껜(Object)???대옒?ㅻ줈遺???앹꽦???몄뒪?댁뒪?낅땲?? 媛앹껜吏???꾨줈洹몃옒諛띿쓽 ?듭떖 媛쒕뀗?낅땲??

## ?대옒???뺤쓽

### 湲곕낯 ?뺤떇

```python
class ?대옒?ㅻ챸:
    def __init__(self):
        # 珥덇린??硫붿꽌??
        pass
    
    def 硫붿꽌?쒕챸(self):
        # 硫붿꽌???뺤쓽
        pass
```

### 媛꾨떒???덉떆

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"?덈뀞?섏꽭?? ???{self.name}?닿퀬 {self.age}?몄엯?덈떎.")

# 媛앹껜 ?앹꽦
person1 = Person("?띻만??, 25)
person1.introduce()  # ?덈뀞?섏꽭?? ????띻만?숈씠怨?25?몄엯?덈떎.
```

## ?앹꽦??(__init__)

媛앹껜媛 ?앹꽦?????먮룞?쇰줈 ?몄텧?섎뒗 硫붿꽌?쒖엯?덈떎:

```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
        print(f"{name} ?숈깮???앹꽦?섏뿀?듬땲??")

student = Student("?띻만??, 20, "A")
```

## ?몄뒪?댁뒪 蹂?섏? 硫붿꽌??

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name      # ?몄뒪?댁뒪 蹂??
        self.breed = breed    # ?몄뒪?댁뒪 蹂??
    
    def bark(self):           # ?몄뒪?댁뒪 硫붿꽌??
        print(f"{self.name}媛 硫띾찉 吏뽰뒿?덈떎!")
    
    def get_info(self):       # ?몄뒪?댁뒪 硫붿꽌??
        return f"{self.name}??{self.breed}?낅땲??"

dog1 = Dog("戮??, "怨⑤뱺由ы듃由щ쾭")
dog1.bark()              # 戮?먭? 硫띾찉 吏뽰뒿?덈떎!
print(dog1.get_info())   # 戮?먮뒗 怨⑤뱺由ы듃由щ쾭?낅땲??
```

## ?대옒??蹂??

紐⑤뱺 ?몄뒪?댁뒪媛 怨듭쑀?섎뒗 蹂?섏엯?덈떎:

```python
class Student:
    school = "?쒖슱??숆탳"  # ?대옒??蹂??
    
    def __init__(self, name):
        self.name = name      # ?몄뒪?댁뒪 蹂??

student1 = Student("?띻만??)
student2 = Student("源泥좎닔")

print(student1.school)  # ?쒖슱??숆탳
print(student2.school)  # ?쒖슱??숆탳

# ?대옒??蹂??蹂寃?
Student.school = "?곗꽭??숆탳"
print(student1.school)  # ?곗꽭??숆탳
```

## ?ㅼ쟾 ?덉젣: ???怨꾩쥖 ?대옒??

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        """?낃툑"""
        if amount > 0:
            self.balance += amount
            print(f"{amount}???낃툑?섏뿀?듬땲?? ?붿븸: {self.balance}??)
        else:
            print("?낃툑 湲덉븸? 0蹂대떎 而ㅼ빞 ?⑸땲??")
    
    def withdraw(self, amount):
        """異쒓툑"""
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                print(f"{amount}??異쒓툑?섏뿀?듬땲?? ?붿븸: {self.balance}??)
            else:
                print("?붿븸??遺議깊빀?덈떎.")
        else:
            print("異쒓툑 湲덉븸? 0蹂대떎 而ㅼ빞 ?⑸땲??")
    
    def get_balance(self):
        """?붿븸 議고쉶"""
        return self.balance

# ?ъ슜
account = BankAccount("?띻만??, 10000)
account.deposit(5000)
account.withdraw(3000)
print(f"?꾩옱 ?붿븸: {account.get_balance()}??)
```

## ?ㅼ쟾 ?덉젣: ?숈깮 愿由??대옒??

```python
class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.scores = []
    
    def add_score(self, score):
        """?먯닔 異붽?"""
        if 0 <= score <= 100:
            self.scores.append(score)
        else:
            print("?먯닔??0-100 ?ъ씠?ъ빞 ?⑸땲??")
    
    def get_average(self):
        """?됯퇏 ?먯닔 怨꾩궛"""
        if len(self.scores) == 0:
            return 0
        return sum(self.scores) / len(self.scores)
    
    def get_grade(self):
        """?깃툒 諛섑솚"""
        average = self.get_average()
        if average >= 90:
            return "A"
        elif average >= 80:
            return "B"
        elif average >= 70:
            return "C"
        elif average >= 60:
            return "D"
        else:
            return "F"
    
    def __str__(self):
        """臾몄옄???쒗쁽"""
        return f"{self.name} (?숇쾲: {self.student_id}, ?됯퇏: {self.get_average():.2f}, ?깃툒: {self.get_grade()})"

# ?ъ슜
student = Student("?띻만??, "2024001")
student.add_score(85)
student.add_score(90)
student.add_score(78)

print(student)
```

## ?곸냽 (Inheritance)

湲곗〈 ?대옒?ㅻ? ?뺤옣?섏뿬 ?덈줈???대옒?ㅻ? 留뚮뱾 ???덉뒿?덈떎:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name}媛 硫띾찉 吏뽰뒿?덈떎!"

class Cat(Animal):
    def speak(self):
        return f"{self.name}媛 ?쇱샊 ?곷땲??"

dog = Dog("戮??)
cat = Cat("?섎퉬")

print(dog.speak())  # 戮?먭? 硫띾찉 吏뽰뒿?덈떎!
print(cat.speak())  # ?섎퉬媛 ?쇱샊 ?곷땲??
```

## ?뱀닔 硫붿꽌??(Magic Methods)

### __str__: 臾몄옄???쒗쁽

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

person = Person("?띻만??, 25)
print(person)  # Person(name=?띻만?? age=25)
```

### __len__: 湲몄씠 諛섑솚

```python
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, item):
        self.items.append(item)
    
    def __len__(self):
        return len(self.items)

cart = ShoppingCart()
cart.add_item("?ш낵")
cart.add_item("諛붾굹??)
print(len(cart))  # 2
```

## 罹≪뒓??(Encapsulation)

?뚯씠?ъ? ?묎렐 ?쒖뼱?먭? ?놁?留? 愿濡?곸쑝濡??ъ슜?⑸땲??

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance      # 蹂댄샇??蹂??(愿濡)
        self.__account_number = 12345  # 鍮꾧났媛?蹂??(?대쫫 蹂寃쎈맖)
    
    def get_balance(self):
        return self._balance
    
    def set_balance(self, amount):
        if amount >= 0:
            self._balance = amount

account = BankAccount("?띻만??, 1000)
print(account.get_balance())  # 1000
```

## ?ㅼ쟾 ?덉젣: ?꾩꽌 愿由??쒖뒪??

```python
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_borrowed = False
    
    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return True
        return False
    
    def return_book(self):
        if self.is_borrowed:
            self.is_borrowed = False
            return True
        return False
    
    def __str__(self):
        status = "?異?以? if self.is_borrowed else "?異?媛??
        return f"{self.title} - {self.author} ({status})"

class Library:
    def __init__(self):
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def find_book(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None
    
    def list_available_books(self):
        return [book for book in self.books if not book.is_borrowed]

# ?ъ슜
library = Library()
library.add_book(Book("?뚯씠???꾨줈洹몃옒諛?, "?띻만??, "123-456"))
library.add_book(Book("?먮즺援ъ“", "源泥좎닔", "789-012"))

book = library.find_book("?뚯씠???꾨줈洹몃옒諛?)
if book:
    book.borrow()
    print(book)

available = library.list_available_books()
print(f"?異?媛?ν븳 梨? {len(available)}沅?)
```

## ?ㅼ쓬 ?④퀎

?댁젣 ?뚯씠?ъ쓽 湲곕낯 媛쒕뀗?ㅼ쓣 紐⑤몢 諛곗썱?듬땲?? ?ㅼ쓬?먮뒗:
- 紐⑤뱢怨??⑦궎吏
- ?덉쇅 泥섎━
- ?곗퐫?덉씠??
- ?쒕꼫?덉씠??
- ?꾨줈?앺듃 ?ㅼ뒿

?깆쓣 ?듯빐 ?ㅻ젰?????μ긽?쒗궗 ???덉뒿?덈떎.

## 留덈Т由?

?뚯씠??怨듬?瑜??대젃寃??뺣━?대뇬?댁슂! ?댁젣 湲곕낯湲곕? 諛뷀깢?쇰줈 ?ㅼ뼇???꾨줈?앺듃瑜?留뚮뱾?대낫?ㅺ퀬 ?댁슂. ?뚯씠?ъ쓽 ?띾????쇱씠釉뚮윭由щ? ?쒖슜?섎㈃ ??媛쒕컻, ?곗씠??遺꾩꽍, ?멸났吏?????ㅼ뼇??遺꾩빞?먯꽌 ?쒖슜?????덉쓣 寃?媛숈븘??

