---
title: Phone
description: Phone extension for Xefi Faker PHP
---

Please be aware that the base package only provide random fake phone numbers, if you want to have more specialized content please create your own formats (locales are coming soon).  
Format: Specify in a string the format you want, `{d}` for digit, `{l}` for letter, `{a}` for any, `{separator}` for the separator. Other characters are used as-is. For example: `{d}{d}.{d}{d}{separator}{d}{d}.{d}{d}` with a `-` as separator gives `83.52-33.10`.

## Phone number

```php
$faker->phoneNumber(format: null, separator: null, prefix: null); // 70229848
```

## Cell Phone Number

```php
$faker->cellPhoneNumber(separator: null, prefix: null); // 5748
```

## Landline Phone Number

```php
$faker->landlinePhoneNumber(separator: null, prefix: null); // 70229848
```

## Indicatored Phone Number

```php
$faker->indicatoredPhoneNumber(separator: null); // 0070229848
```

## Indicatored Cell Phone Number

```php
$faker->indicatoredCellPhoneNumber(separator: null); // 007022
```

## Indicatored Landline Phone Number

```php
$faker->indicatoredLandlinePhoneNumber(separator: null, prefix: null); // 0070229848
```
