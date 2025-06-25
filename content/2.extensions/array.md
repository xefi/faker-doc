---
title: Array
description: Array extension for Xefi Faker PHP
---

## Random Element

```php
$faker->randomElement(['first', 'second', 'third', 'fourth']); // second
```

## Random Key

```php
$faker->randomKey([['firstname' => 'John'], ['lastname' => 'Doe'], ['nickname' => 'Johnny'], ['login' => 'j.doe']]); // nickname
```

## Random Key Number

```php
$faker->randomKeyNumber([['firstname' => 'John'], ['lastname' => 'Doe'], ['nickname' => 'Johnny'], ['login' => 'j.doe']]); // 2
```
