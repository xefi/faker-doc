---
title: Currencies
description: Currencies extension for Xefi Faker PHP
---

## Requirement

This extension is not included with the base faker php package, you'll need to require it:
```bash
composer require --dev xefi/faker-php-currencies
```

## Currency

```php
$faker->currency();
// [
//   [code] => "KRW",
//   [name] => "South Korean Won",
//   [symbol] => "₩"
// ]
```

## Currency code

```php
$faker->currencyCode() // KRW
```

## Currency name

```php
$faker->currencyName() // South Korean Won
```

## Currency symbol

```php
$faker->currencySymbol() // ₩
```
