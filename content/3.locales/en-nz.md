---
title: English (New Zealand)
description: English (New Zealand) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-nz
```

Be sure to setup faker with the `en_NZ` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_NZ');
```

## Address

#### Region
```php
$faker->region(); // Gisborne
```

#### City
```php
$faker->city(); // Rotorua
```

#### Post code
```php
$faker->postcode(); // 9107
```

#### House Number
```php
$faker->houseNumber(); // 125
```

#### Street Name
```php
$faker->streetName(); // Dominion Road
```

#### Street Address
```php
$faker->streetAddress(); // 69 Cuba Street
```

#### Full Address
```php
$faker->fullAddress(); // 108 Wakefield Parade, Taupō 3825
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Maroon
```

#### Color Name
```php
$faker->colorName(); // Chocolate
```

## Company

#### Company
```php
$faker->company(); // Bay of Islands Charters Limited
```

#### Company number
Generates a Companies Office company number.
```php
$faker->companyNumber(); // 5889457
```

#### NZBN
Generates a New Zealand Business Number (NZBN): a GS1 GLN starting with 9429 and ending with a valid check digit.
```php
$faker->nzbn(); // 9429609774425
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. New Zealand does not use IBAN: this builds an IBAN-shaped string from a 2-digit bank code, a 4-digit branch, a 7-digit account number and a 2-digit suffix.
```php
$faker->iban(countryCode: null, format: null); // NZ19153437076354105
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Poppy Cooper
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Hazel
```

#### Lastname
```php
$faker->lastName(); // King
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Dame
```

#### IRD number
Generates an Inland Revenue (IRD) number with a valid modulus 11 check digit, between 10,000,000 and 150,000,000.
```php
$faker->irdNumber(formatted: false); // 78825561
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0213027336
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0270054740
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 073603215
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +64 9 045 0253
```

## Text

#### Words
```php
$faker->words(words: 3); // enquiries helps flexible
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Small changes to daily routines often deliver the biggest gains. Suppliers are chosen for their reliability...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Every organisation needs a clear plan before the financial year ends in March. Teams from both islands share...
```
