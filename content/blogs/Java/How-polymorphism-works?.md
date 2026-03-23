---
title: "How polymorphism works?"
date: 2026-03-01
categories: ["How"]
tags: ["oops", "Java"]
summary: "Difference between polymorphism, How it works while compilie time and runtime?"
---

Polymorphism is one of the core ideas in object-oriented programming: **the same method call can behave differently depending on the actual object at runtime**. In this post we will see what that really means in Java, how the compiler and JVM work together to make it happen, and how compile-time and runtime polymorphism differ.

We will use simple Java code samples and a few comparison tables so you can quickly remember the differences.

## 1. What is polymorphism?

**Polymorphism** literally means “many forms”. In Java, it usually refers to the ability to:

- **Use a parent type reference** (e.g. `Shape`)  
- **Point it to different child objects** (e.g. `Circle`, `Rectangle`)  
- **Call the same method** (e.g. `draw()`)  
- And have **different behavior at runtime**, depending on which object is actually stored in that reference.

### Code example – basic polymorphism

```java
// Parent class
class Shape {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
}

// Child classes
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape s1 = new Circle();    // parent reference, child object
        Shape s2 = new Rectangle(); // parent reference, child object

        s1.draw(); // prints: Drawing a circle
        s2.draw(); // prints: Drawing a rectangle
    }
}
```

Key points:

- The **reference type** is `Shape`, but the **object type** is `Circle` or `Rectangle`.
- The method call `draw()` is the **same in code**, but the **JVM decides at runtime** which implementation to execute.

This is **runtime polymorphism** (implemented via **method overriding**).

## 2. Compile-time vs runtime polymorphism

In Java, the word “polymorphism” is used for two slightly different ideas:

- **Compile-time polymorphism** → mostly about **method overloading**  
- **Runtime polymorphism** → mostly about **method overriding**

### High-level comparison

| **Aspect**              | **Compile-time polymorphism**                    | **Runtime polymorphism**                          |
|-------------------------|--------------------------------------------------|---------------------------------------------------|
| Decision made at       | Compile time (by the compiler)                  | Runtime (by the JVM)                             |
| Main mechanism         | Method overloading                               | Method overriding                                |
| Based on               | Method signature (parameters)                   | Actual object type stored in the reference       |
| Flexibility            | Less flexible, fixed at compile time            | More flexible, decided when the program runs     |
| Common usage           | Utility methods, constructors, convenience APIs | Extensible designs, frameworks, plugin systems   |

### Code example – compile-time polymorphism (method overloading)

```java
class Calculator {

    // add two integers
    int add(int a, int b) {
        return a + b;
    }

    // add three integers (overloaded method)
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // add two doubles (overloaded method)
    double add(double a, double b) {
        return a + b;
    }
}

public class OverloadingDemo {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(1, 2));       // calls add(int, int)
        System.out.println(calc.add(1, 2, 3));    // calls add(int, int, int)
        System.out.println(calc.add(1.5, 2.5));   // calls add(double, double)
    }
}
```

Here, **which `add` method is called is decided at compile time** based on:

- Number of parameters
- Types of parameters

This is why it is called **compile-time polymorphism**.

### Code example – runtime polymorphism (method overriding)

```java
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class OverridingDemo {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        a1.makeSound(); // Woof!
        a2.makeSound(); // Meow!
    }
}
```

Here, **the reference type is the same (`Animal`)** but the **actual object differs**.  
The JVM decides **at runtime** which `makeSound()` implementation to execute.

## 3. Dynamic vs static polymorphism (binding)

You will often hear these pairs of terms:

- **Static binding** ≈ **compile-time polymorphism** ≈ **method overloading**  
- **Dynamic binding** ≈ **runtime polymorphism** ≈ **method overriding**

“Binding” here means: *when is the method implementation chosen and fixed?*

### Comparison table – static vs dynamic binding

| **Concept**             | **Static (early) binding**               | **Dynamic (late) binding**                     |
|-------------------------|------------------------------------------|-----------------------------------------------|
| When decision is made   | During compilation                       | During execution                              |
| Typical examples        | Overloaded methods, private methods      | Overridden methods (non-final, non-static)    |
| Depends on              | Reference type and argument types        | Actual object type at runtime                 |
| Performance             | Slightly faster (no runtime lookup)      | Slight overhead (runtime lookup + dispatch)   |
| Flexibility             | Less flexible                             | More flexible / extensible                    |

In practice:

- **Method overloading** → static binding  
- **Method overriding (non-static, non-final methods)** → dynamic binding

## 4. How polymorphism works in Java under the hood

Let’s take the earlier `Shape` example and see what the JVM roughly does.

```java
Shape s = new Circle();
s.draw();
```

Conceptually, the steps are:

1. **At compile time**
   - The compiler checks:  
     - Does `Shape` have a method `void draw()`?  
     - If yes, the call `s.draw()` is **allowed**.
   - The **exact implementation** is **not fixed yet**; the compiler only knows that some `draw()` will be called.

2. **At runtime**
   - The reference `s` actually holds a `Circle` object.
   - The JVM:
     - Looks at the **actual object type** (`Circle`).  
     - Finds the most specific `draw()` implementation in `Circle`’s class hierarchy.  
     - Executes `Circle`’s `draw()` method.

Most JVM implementations use some form of **virtual method table (vtable)** under the hood:

- Each class has a table of its virtual methods and their implementations.
- When you call `s.draw()`, the JVM:
  - Checks the object type of `s`.
  - Uses that type’s vtable entry for `draw()`.

You don’t see this in Java code, but this is how **dynamic dispatch** is efficiently implemented.

## 5. When to use polymorphism in your design

Polymorphism becomes powerful when:

- **You code to interfaces / abstract classes**, not concrete implementations.
- You want to **add new behaviors without changing existing code** (Open/Closed Principle).
- You build **extensible systems** (e.g. strategy patterns, frameworks, plugin architectures).

Example pattern:

```java
interface PaymentProcessor {
    void pay(double amount);
}

class CreditCardProcessor implements PaymentProcessor {
    public void pay(double amount) {
        System.out.println("Paying " + amount + " with credit card");
    }
}

class UpiProcessor implements PaymentProcessor {
    public void pay(double amount) {
        System.out.println("Paying " + amount + " via UPI");
    }
}

public class CheckoutService {
    private final PaymentProcessor paymentProcessor;

    public CheckoutService(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    public void checkout(double amount) {
        paymentProcessor.pay(amount); // polymorphic call
    }
}
```

You can pass any `PaymentProcessor` implementation into `CheckoutService` and it will work without modification.

## Conclusion

- **Polymorphism** lets you write code that works with **general types** (interfaces / parent classes) while still getting **specific behavior** at runtime.  
- **Compile-time polymorphism** (overloading) is resolved by the **compiler**, while **runtime polymorphism** (overriding) is resolved by the **JVM** based on the actual object.  
- Understanding how **static vs dynamic binding** work helps you reason about performance, extensibility, and where behavior can change.  
- If you consistently **program to interfaces and use polymorphic calls**, your Java code will be easier to extend and maintain over time.
