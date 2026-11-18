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
$faker->state(); // Victoria
```

#### State code
```php
$faker->stateCode(); // VIC
```

#### City
```php
$faker->city(); // Ballarat
```

#### Post code
```php
$faker->postcode(); // 6709
```

#### House Number
```php
$faker->houseNumber(); // 128
```

#### Street Name
```php
$faker->streetName(); // Lonsdale Drive
```

#### Street Address
```php
$faker->streetAddress(); // 67 Waratah Court
```

#### Full Address
```php
$faker->fullAddress(); // 190 Boronia Boulevard, Geelong VIC 3528
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Silver
```

#### Color Name
```php
$faker->colorName(); // LightCoral
```

## Company

#### Company
```php
$faker->company(); // Hunter Valley Cellars Pty Ltd
```

#### Company number
Generates an Australian Company Number (ACN) with a valid modulus 10 check digit.
```php
$faker->companyNumber(); // 376762426
```

#### ABN
Generates an Australian Business Number (ABN) with valid modulus 89 check digits.
```php
$faker->abn(formatted: false); // 90901788004
```

## Financial

#### BSB
Generates a Bank State Branch (BSB) code.
```php
$faker->bsb(formatted: true); // 182-670
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Australia does not use IBAN: this builds an IBAN-shaped string from a BSB and a 9-digit account number.
```php
$faker->iban(countryCode: null, format: null); // AU53736843098787233
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Tahlia Johnson
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Olivia
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

#### TFN
Generates a Tax File Number (TFN) with a valid modulus 11 check digit.
```php
$faker->tfn(formatted: false); // 711423495
```

#### Medicare number
Generates a Medicare card number with a valid check digit and an issue number.
```php
$faker->medicareNumber(formatted: false); // 3066798451
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0724784496
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0438417919
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0216242275
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +61 458 795 399
```

## Text

#### Words
```php
$faker->words(words: 3); // and the on
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Managers prioritise safety on every site, from the city to the bush. Mentors encourage graduates to ask...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Labour costs and travel expenses are reviewed at the end of each quarter. Managers prioritise safety on every...
```
