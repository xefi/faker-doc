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
$faker->region(); // Nelson
```

#### City
```php
$faker->city(); // Rotorua
```

#### Post code
```php
$faker->postcode(); // 3391
```

#### House Number
```php
$faker->houseNumber(); // 236
```

#### Street Name
```php
$faker->streetName(); // Hillary Quay
```

#### Street Address
```php
$faker->streetAddress(); // 282 Kauri Grove
```

#### Full Address
```php
$faker->fullAddress(); // 202 George Lane, Gisborne 4023
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // White
```

#### Color Name
```php
$faker->colorName(); // MediumOrchid
```

## Company

#### Company
```php
$faker->company(); // Waikato River Farms Limited
```

#### Company number
Generates a Companies Office company number.
```php
$faker->companyNumber(); // 5709166
```

#### NZBN
Generates a New Zealand Business Number (NZBN): a GS1 GLN starting with 9429 and ending with a valid check digit.
```php
$faker->nzbn(); // 9429370724902
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. New Zealand does not use IBAN: this builds an IBAN-shaped string from a 2-digit bank code, a 4-digit branch, a 7-digit account number and a 2-digit suffix.
```php
$faker->iban(countryCode: null, format: null); // NZ84158853717769277
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Stella Wood
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Poppy
```

#### Lastname
```php
$faker->lastName(); // White
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Prof
```

#### IRD number
Generates an Inland Revenue (IRD) number with a valid modulus 11 check digit, between 10,000,000 and 150,000,000.
```php
$faker->irdNumber(formatted: false); // 27722571
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 060735895
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0292999829
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 045342202
```

## Text

#### Words
```php
$faker->words(words: 3); // programme each and
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Whanau and community remain at the heart of the culture. Flexible arrangements allow people to balance work...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // The service centre answers enquiries from customers right around the country. Staff favour practical...
```
