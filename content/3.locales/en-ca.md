---
title: English (Canada)
description: English (Canada) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-ca
```

Be sure to setup faker with the `en_CA` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_CA');
```

## Address

#### Province
```php
$faker->province(); // Northwest Territories
```

#### Province code
Returns a random two-letter province or territory code.
```php
$faker->provinceCode(); // NU
```

#### City
```php
$faker->city(); // Saskatoon
```

#### Post code
```php
$faker->postcode(); // R6V 2V5
```

#### House Number
```php
$faker->houseNumber(); // 6139
```

#### Street Name
```php
$faker->streetName(); // King Lane
```

#### Street Address
```php
$faker->streetAddress(); // 3148 Church Boulevard
```

#### Full Address
```php
$faker->fullAddress(); // 5390 Maple Way, Sherbrooke QC H7V 8G3
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // White
```

#### Color Name
```php
$faker->colorName(); // Yellow
```

## Company

#### Company
```php
$faker->company(); // Northern Lights Energy Inc.
```

#### Business number
Generates a 9-digit federal Business Number (BN) with a valid Luhn check digit.
```php
$faker->businessNumber(); // 820035103
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Canada does not use IBAN: this builds an IBAN-shaped string from a 5-digit transit number, a 3-digit institution number and a 7-digit account number.
```php
$faker->iban(countryCode: null, format: null); // CA50559650011124185
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Abigail Wong
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Courtney
```

#### Lastname
```php
$faker->lastName(); // Martin
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Mrs.
```

#### SIN
Generates a Social Insurance Number (SIN) with a valid Luhn check digit.
```php
$faker->sin(formatted: false); // 441074945
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 2365459742
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 3656533496
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // (548) 5285543
```

## Text

#### Words
```php
$faker->words(words: 3); // new catalogue it
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Bilingual service remains a priority for customers across the country. The program is reviewed every spring...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // The service centre stays open through the long winter months. Staff analyze feedback carefully before...
```
