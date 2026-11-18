---
title: English (Ireland)
description: English (Ireland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-ie
```

Be sure to setup faker with the `en_IE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_IE');
```

## Address

#### Province
```php
$faker->province(); // Ulster
```

#### County
```php
$faker->county(); // Wexford
```

#### City
```php
$faker->city(); // Athlone
```

#### Post code
```php
$faker->postcode(); // F26 AN6V
```

#### House Number
```php
$faker->houseNumber(); // 165
```

#### Street Name
```php
$faker->streetName(); // Green Hill
```

#### Street Address
```php
$faker->streetAddress(); // 84 Connolly Park
```

#### Full Address
```php
$faker->fullAddress(); // 59 Barrack Place, Tralee, Co. Kerry, V92 HNPV
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Olive
```

#### Color Name
```php
$faker->colorName(); // LightGreen
```

## Company

#### Company
```php
$faker->company(); // Boyne Valley Foods Ltd
```

#### Company number
Generates a Companies Registration Office (CRO) number.
```php
$faker->companyNumber(); // 349177
```

#### VAT number
Generates an Irish VAT number ("IE" + 7 digits + check letter + optional letter) with a valid modulus 23 check letter.
```php
$faker->vat(newFormat: true); // IE2223149PG
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an Irish IBAN: 4-letter bank code, 6-digit sort code and 8-digit account number.
```php
$faker->iban(countryCode: null, format: null); // IE09IPBS99299928834365
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Emma Moore
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Sadhbh
```

#### Lastname
```php
$faker->lastName(); // O'Reilly
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Sr
```

#### PPSN
Generates a Personal Public Service Number (PPSN) with a valid modulus 23 check character.
```php
$faker->ppsn(newFormat: true); // 8701384JA
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0877897894
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0872053273
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0562090718
```

## Text

#### Words
```php
$faker->words(words: 3); // over often sustainable
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Good communication keeps regional offices close to head office in the city. Managers make safety their first...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Every organisation needs a clear plan and a good sense of humour. Teams in every county share their progress...
```
