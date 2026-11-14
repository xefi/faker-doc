---
title: Phone
description: Phone extension for Xefi Faker PHP
---

Please be aware that the base package only provide random fake phone numbers, if you want to have more specialized content please create your own formats (locales are coming soon).  
Format: Specify in a string the format you want, `{d}` for digit, `{l}` for letter, `{a}` for any, `{separator}` for the separator. Other characters are used as-is. For example: `{d}{d}.{d}{d}{separator}{d}{d}.{d}{d}` with a `-` as separator gives `83.52-33.10`.

The `prefix` is added before the generated number (empty by default), and the "indicatored" helpers use the country indicator as prefix (`+00` in the base package).

## Phone number

```php
$faker->phoneNumber(format: null, separator: '', prefix: null); // 7022984815
```

## Indicatored Phone Number

```php
$faker->indicatoredPhoneNumber(format: null, separator: ''); // +007022984815
```

## Spaced, Dotted and Dashed Phone Numbers

Shortcuts using a space, a dot or a dash as separator:

```php
$faker->spacedPhoneNumber(format: null, prefix: null); // 70 22 98 48 15
$faker->dottedPhoneNumber(format: null, prefix: null); // 70.22.98.48.15
$faker->dashedPhoneNumber(format: null, prefix: null); // 70-22-98-48-15

$faker->spacedIndicatoredPhoneNumber(format: null); // +0070 22 98 48 15
$faker->dottedIndicatoredPhoneNumber(format: null); // +0070.22.98.48.15
$faker->dashedIndicatoredPhoneNumber(format: null); // +0070-22-98-48-15
```

## Cell Phone Number

```php
$faker->cellPhoneNumber(separator: '', prefix: null); // 5748
```

## Indicatored Cell Phone Number

```php
$faker->indicatoredCellPhoneNumber(separator: ''); // +005748
```

## Spaced, Dotted and Dashed Cell Phone Numbers

```php
$faker->spacedCellPhoneNumber(prefix: null); // 57 48
$faker->dottedCellPhoneNumber(prefix: null); // 57.48
$faker->dashedCellPhoneNumber(prefix: null); // 57-48

$faker->spacedIndicatoredCellPhoneNumber(); // +0057 48
$faker->dottedIndicatoredCellPhoneNumber(); // +0057.48
$faker->dashedIndicatoredCellPhoneNumber(); // +0057-48
```

## Landline Phone Number

```php
$faker->landlinePhoneNumber(separator: '', prefix: null); // 70229848
```

## Indicatored Landline Phone Number

```php
$faker->indicatoredLandlinePhoneNumber(separator: ''); // +0070229848
```

## Spaced, Dotted and Dashed Landline Phone Numbers

```php
$faker->spacedLandlinePhoneNumber(prefix: null); // 70 22 98 48
$faker->dottedLandlinePhoneNumber(prefix: null); // 70.22.98.48
$faker->dashedLandlinePhoneNumber(prefix: null); // 70-22-98-48

$faker->spacedIndicatoredLandlinePhoneNumber(); // +0070 22 98 48
$faker->dottedIndicatoredLandlinePhoneNumber(); // +0070.22.98.48
$faker->dashedIndicatoredLandlinePhoneNumber(); // +0070-22-98-48
```
