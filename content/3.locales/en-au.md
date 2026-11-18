---
title: English (Australia)
description: English (Australia) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-au
```

Be sure to setup faker with the `en_AU` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_AU');
```

## Address

#### State
```php
$faker->state(); // Tasmania
```

#### State code
```php
$faker->stateCode(); // QLD
```

#### City
```php
$faker->city(); // Albury
```

#### Post code
```php
$faker->postcode(); // 2618
```

#### House Number
```php
$faker->houseNumber(); // 211
```

#### Street Name
```php
$faker->streetName(); // Sturt Street
```

#### Street Address
```php
$faker->streetAddress(); // 223 Bligh Way
```

#### Full Address
```php
$faker->fullAddress(); // 90 Russell Drive, Perth WA 6456
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Yellow
```

#### Color Name
```php
$faker->colorName(); // RoyalBlue
```

## Company

#### Company
```php
$faker->company(); // Flinders Ranges Pastoral Co. Pty Ltd
```

#### Company number
Generates an Australian Company Number (ACN) with a valid modulus 10 check digit.
```php
$faker->companyNumber(); // 781270013
```

#### ABN
Generates an Australian Business Number (ABN) with valid modulus 89 check digits.
```php
$faker->abn(formatted: false); // 62473772144
```

## Financial

#### BSB
Generates a Bank State Branch (BSB) code.
```php
$faker->bsb(formatted: true); // 187-241
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Australia does not use IBAN: this builds an IBAN-shaped string from a BSB and a 9-digit account number.
```php
$faker->iban(countryCode: null, format: null); // AU92037732666426672
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Ruby Martin
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Georgia
```

#### Lastname
```php
$faker->lastName(); // Wilson
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Mrs
```

#### TFN
Generates a Tax File Number (TFN) with a valid modulus 11 check digit.
```php
$faker->tfn(formatted: false); // 432952545
```

#### Medicare number
Generates a Medicare card number with a valid check digit and an issue number.
```php
$faker->medicareNumber(formatted: false); // 2431494494
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0745558281
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0464398663
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0255011379
```

## Text

#### Words
```php
$faker->words(words: 3); // reports regularly and
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Good communication keeps regional offices connected with head office. Suppliers are chosen for their...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // The service centre handles enquiries from customers in every state and territory. Staff favour practical...
```
