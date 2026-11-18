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
$faker->province(); // Nunavut
```

#### Province code
Returns a random two-letter province or territory code.
```php
$faker->provinceCode(); // NS
```

#### City
```php
$faker->city(); // Sudbury
```

#### Post code
```php
$faker->postcode(); // A0M 7G9
```

#### House Number
```php
$faker->houseNumber(); // 9811
```

#### Street Name
```php
$faker->streetName(); // Robson Boulevard
```

#### Street Address
```php
$faker->streetAddress(); // 9636 Jarvis Boulevard
```

#### Full Address
```php
$faker->fullAddress(); // 7884 Yonge Crescent, Montreal QC H3W 6C8
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Green
```

#### Color Name
```php
$faker->colorName(); // LightBlue
```

## Company

#### Company
```php
$faker->company(); // Great Lakes Shipping Corp.
```

#### Business number
Generates a 9-digit federal Business Number (BN) with a valid Luhn check digit.
```php
$faker->businessNumber(); // 938713294
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Canada does not use IBAN: this builds an IBAN-shaped string from a 5-digit transit number, a 3-digit institution number and a 7-digit account number.
```php
$faker->iban(countryCode: null, format: null); // CA96709100107141859
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Lauren Johnson
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Amelia
```

#### Lastname
```php
$faker->lastName(); // Murray
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Rev.
```

#### SIN
Generates a Social Insurance Number (SIN) with a valid Luhn check digit.
```php
$faker->sin(formatted: false); // 377556576
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 6395061821
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 8736322596
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 8192976919
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +1 437 943 2608
```

## Text

#### Words
```php
$faker->words(words: 3); // suppliers direct central
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Mentors encourage new graduates to ask questions and take initiative. Flexible schedules let people balance...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Every organization benefits from a clear plan and honest communication. Teams from coast to coast share their...
```
