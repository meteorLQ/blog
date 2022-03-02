---
date: 2021-12-26
title: BigDecimal用于高精度计算，其计算方法有加减乘除
tags:
- vitepress
- markdown
description: BigDecimal用于高精度计算，其计算方法有加减乘除
---
<meta name="referrer" content="no-referrer" />

# BigDecimal用于高精度计算，其计算方法有加减乘除
注：在创建BigDecimal对象时，请务必使用new BigDecimal（String num）构造器，否则可能会丢失精度。
## 常用方法

- **加（add）**
```java
BigDecimal bigDecimal = new BigDecimal("8");
BigDecimal add = new BigDecimal("8").add(new BigDecimal("1"));
System.out.println("add = " + add);
```

- **减（subtract）**
```java
BigDecimal subtract = bigDecimal.subtract(new BigDecimal("1"));
System.out.println("subtract = " + subtract);
```
​


- **乘（multiply）**
```java
 BigDecimal multiply = bigDecimal.multiply(new BigDecimal("2"));
 System.out.println("multiply = " + multiply);
```
​


- **除（divide）**

注：在jdk17中，这些静态常量已经被标记为过时，所以请使用RoundingMode枚举类代替。以下代码全部使用该枚举展示。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25635684/1639991425414-8a9e43c6-559e-4ab6-a91c-cb7aa8600c8b.png#clientId=u8a276d0e-e1b6-4&from=paste&height=154&id=u186678db&margin=%5Bobject%20Object%5D&name=image.png&originHeight=307&originWidth=547&originalType=binary&ratio=1&size=64181&status=done&style=none&taskId=uadb5f4df-86e3-43e0-b3d0-275f7485085&width=273.5)​


舍入模式

1. UP
> 舍入远离零的舍入模式。在丢弃非零部分之前始终增加数字(始终对非零舍弃部分前面的数字加1)。
> 注意，此舍入模式始终不会减少计算值的大小。

```java
BigDecimal up = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.UP);
System.out.println("UP = " + up);
```

2. DOWN
> 接近零的舍入模式。在丢弃某部分之前始终不增加数字(从不对舍弃部分前面的数字加1，即截短)。
> 注意，此舍入模式始终不会增加计算值的大小。

```java
BigDecimal DOWN = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.DOWN);
System.out.println("DOWN = " + DOWN);
```

3. CEILING
> 接近正无穷大的舍入模式。
> 如果 BigDecimal 为正，则舍入行为与 UP 相同;
> 如果为负，则舍入行为与 DOWN 相同。
> 注意，此舍入模式始终不会减少计算值。

```java
BigDecimal CEILING = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.CEILING);
System.out.println("CEILING = " + CEILING);
```

4. FLOOR
> 接近负无穷大的舍入模式。
> 如果 BigDecimal 为正，则舍入行为与 DOWN 相同;
> 如果为负，则舍入行为与 UP 相同。
> 注意，此舍入模式始终不会增加计算值。

```java
BigDecimal FLOOR = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.FLOOR);
System.out.println("FLOOR = " + FLOOR);
```

5. HALF_UP
> 向“最接近的”数字舍入，如果与两个相邻数字的距离相等，则为向上舍入的舍入模式。
> 如果舍弃部分 >= 0.5，则舍入行为与 UP 相同;否则舍入行为与 DOWN 相同。
> 注意，这是我们大多数人在小学时就学过的舍入模式(四舍五入)。

```java
BigDecimal HALF_UP = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.HALF_UP);
System.out.println("HALF_UP = " + HALF_UP);
```

6. HALF_DOWN
> 向“最接近的”数字舍入，如果与两个相邻数字的距离相等，则为上舍入的舍入模式。
> 如果舍弃部分 > 0.5，则舍入行为与 UP 相同;否则舍入行为与 DOWN 相同(五舍六入)。

```java
BigDecimal HALF_DOWN = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.HALF_DOWN);
System.out.println("HALF_DOWN = " + HALF_DOWN);
```

7. HALF_EVEN
> 向“最接近的”数字舍入，如果与两个相邻数字的距离相等，则向相邻的偶数舍入。如果舍弃部分左边的数字为奇数，则舍入行为与 HALF_UP 相同；如果为偶数，则舍入行为与 HALF_DOWN 相同。注意，在重复进行一系列计算时，此舍入模式可以将累加错误减到最小。此舍入模式也称为“银行家舍入法”，主要在美国使用。四舍六入，五分两种情况。如果前一位为奇数，则入位，否则舍去。
> 以下例子为保留小数点1位，那么这种舍入方式下的结果。
> 1.15>1.2 1.25>1.2

```java
BigDecimal HALF_EVEN = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.HALF_EVEN);
System.out.println("HALF_EVEN = " + HALF_EVEN);
```

8. UNNECESSARY
> 断言请求的操作具有精确的结果，因此不需要舍入。如果对获得精确结果的操作指定此舍入模式，则抛出ArithmeticException。

```java
BigDecimal UNNECESSARY = new BigDecimal("1").divide(new BigDecimal("3"), 2,RoundingMode.UNNECESSARY);
System.out.println("UNNECESSARY = " + UNNECESSARY);
```
​

注：在使用除法是必须指明精确小数位或舍入模式，否则可能会抛出异常
```java
BigDecimal divide = bigDecimal.divide(new BigDecimal("2"));
System.out.println("divide = " + divide);
```
// 如何值为无限小数，该方法会抛出异常java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.

- **绝对值（abs）	**
```java
BigDecimal abs = new BigDecimal("-1").abs();
System.out.println("abs = " + abs);
```
## BigDecimal转String，科学计数法问题

1. toString() 某些场景下使用科学计数法
1. toPlainString() 不使用任何计数法
```java
System.out.println( new BigDecimal("0.000000000000").toPlainString());
System.out.println( new BigDecimal("1E+11").toPlainString());
System.out.println(new BigDecimal("3550.00").stripTrailingZeros().toPlainString());
```

3. toEngineeringString() 某些场景下使用工程计数法



这里简单提下科学计数法和工程计数法的区别：
科学记数法，是将数字表示成10的幂的倍数的形式。
工程记数法，是在科学记数法基础上，将10的幂限制为3的倍数。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25635684/1639995872655-dd724351-bc12-4993-961c-5adfdb62b403.png#clientId=ubcd77552-87cd-4&from=paste&height=198&id=u316beeee&margin=%5Bobject%20Object%5D&name=image.png&originHeight=316&originWidth=510&originalType=binary&ratio=1&size=12584&status=done&style=none&taskId=u1df71e8f-fa3d-4d00-814f-2d37d3f690c&width=319)
## 保留小数位数
如果我们想对BigDecimal类型保留小数位数，可以使用setScale()方法，使用方法如下所示：
```java
BigDecimal scale = new BigDecimal("-1.2335").setScale(3, RoundingMode.HALF_EVEN);
System.out.println("scale = " + scale);
```
## BigDecimal格式化
```java
NumberFormat currency = NumberFormat.getCurrencyInstance(); //建立货币格式化引用
NumberFormat percent = NumberFormat.getPercentInstance();  //建立百分比格式化引用
percent.setMaximumFractionDigits(3); //百分比小数点最多3位

BigDecimal loanAmount = new BigDecimal("15000.48"); //贷款金额
BigDecimal interestRate = new BigDecimal("0.008"); //利率
BigDecimal interest = loanAmount.multiply(interestRate); //相乘

System.out.println("贷款金额:\t" + currency.format(loanAmount));
System.out.println("利率:\t" + percent.format(interestRate));
System.out.println("利息:\t" + currency.format(interest));
```
## 工具类
```java
package com.vivo.ars.util;
import java.math.BigDecimal;

/**
 * 用于高精确处理常用的数学运算
 */
public class ArithmeticUtils {
    //默认除法运算精度
    private static final int DEF_DIV_SCALE = 10;

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */

    public static double add(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.add(b2).doubleValue();
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */
    public static BigDecimal add(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2);
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1    被加数
     * @param v2    加数
     * @param scale 保留scale 位小数
     * @return 两个参数的和
     */
    public static String add(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static double sub(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.subtract(b2).doubleValue();
    }

    /**
     * 提供精确的减法运算。
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static BigDecimal sub(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2);
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1    被减数
     * @param v2    减数
     * @param scale 保留scale 位小数
     * @return 两个参数的差
     */
    public static String sub(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.multiply(b2).doubleValue();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static BigDecimal mul(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2, int scale) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return round(b1.multiply(b2).doubleValue(), scale);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static String mul(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供（相对）精确的除法运算，当发生除不尽的情况时，精确到
     * 小数点以后10位，以后的数字四舍五入
     *
     * @param v1 被除数
     * @param v2 除数
     * @return 两个参数的商
     */

    public static double div(double v1, double v2) {
        return div(v1, v2, DEF_DIV_SCALE);
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示表示需要精确到小数点以后几位。
     * @return 两个参数的商
     */
    public static double div(double v1, double v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示需要精确到小数点以后几位
     * @return 两个参数的商
     */
    public static String div(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v1);
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static double round(double v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(Double.toString(v));
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static String round(String v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(v);
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static String remainder(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.remainder(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数  BigDecimal
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static BigDecimal remainder(BigDecimal v1, BigDecimal v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        return v1.remainder(v2).setScale(scale, BigDecimal.ROUND_HALF_UP);
    }

    /**
     * 比较大小
     *
     * @param v1 被比较数
     * @param v2 比较数
     * @return 如果v1 大于v2 则 返回true 否则false
     */
    public static boolean compare(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        int bj = b1.compareTo(b2);
        boolean res;
        if (bj > 0)
            res = true;
        else
            res = false;
        return res;
    }
}

```
