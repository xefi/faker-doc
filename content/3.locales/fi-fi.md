---
title: Finnish (Finland)
description: Finnish (Finland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fi-fi
```

Be sure to setup faker with the `fi_FI` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fi_FI');
```

## Address

#### Region
Returns a random Finnish region (maakunta).
```php
$faker->region(); // Etelä-Karjala
```

#### City
```php
$faker->city(); // Oulu
```

#### Post code
```php
$faker->postcode(); // 31904
```

#### House Number
```php
$faker->houseNumber(); // 95
```

#### Street Name
```php
$faker->streetName(); // Pihlajaväylä
```

#### Street Address
```php
$faker->streetAddress(); // Pihlajakaari 73
```

#### Full Address
```php
$faker->fullAddress(); // Kirkkoaukio 148 C 31, 13792 Vaasa
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Sinivihreä
```

#### Color Name
```php
$faker->colorName(); // Luumunvioletti
```

## Company

#### Company
```php
$faker->company(); // Revontuli Ohjelmistot Oy
```

#### Y-tunnus
Generates a Finnish business ID (Y-tunnus), formatted as 1234567-8 with a valid modulo 11 check digit.
```php
$faker->yTunnus(); // 1776392-8
```

#### VAT number
Generates a Finnish VAT number (ALV-numero): "FI" followed by the Y-tunnus without its hyphen.
```php
$faker->vat(); // FI67181184
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Finnish IBAN (FIkk + 14 digits). The default BBAN is a 6-digit bank and branch code followed by a 7-digit account number and its Luhn check digit.
```php
$faker->iban(countryCode: 'FI', format: null); // FI4947358691274895
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Laura Jokinen
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Liisa
```

#### Lastname
```php
$faker->lastName(); // Mattila
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Tohtori
```

#### Henkilötunnus
Generates a Finnish personal identity code (henkilötunnus), formatted as DDMMYYCZZZQ.
```php
$faker->henkilotunnus(gender: 'F'); // 031166-866S
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 037801876
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0414766650
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0174874676
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +358 41 204 2885
```

## Text

#### Words
```php
$faker->words(words: 3); // nopeasta koulutusohjelmat ja
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Jokainen projekti vaatii huolellista suunnittelua ja selkeää vastuunjakoa. Prosesseja tarkastellaan...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Asiakastyytyväisyys riippuu palvelun laadusta ja nopeasta reagoinnista. Mittareita käytetään suorituskyvyn...
```
