---
title: Norwegian Bokmål (Norway)
description: Norwegian Bokmål (Norway) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-nb-no
```

Be sure to setup faker with the `nb_NO` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('nb_NO');
```

## Address

#### County
Get a random county (fylke) name.
```php
$faker->county(); // Nordland
```

#### County code
Get a random county number (fylkesnummer).
```php
$faker->countyCode(); // 39
```

#### City
```php
$faker->city(); // Oslo
```

#### Post code
```php
$faker->postcode(); // 9564
```

#### House Number
```php
$faker->houseNumber(); // 244
```

#### Street Name
```php
$faker->streetName(); // Nordresvingen
```

#### Street Address
```php
$faker->streetAddress(); // Furugate 203
```

#### Full Address
```php
$faker->fullAddress(); // Øvrebakken 42, 3049 Haugesund
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Marineblå
```

#### Color Name
```php
$faker->colorName(); // Akva
```

## Company

#### Company
```php
$faker->company(); // Sognefjord Kraftlag SA
```

#### Company number
Get a random organisation number (organisasjonsnummer) with its modulus 11 check digit.
```php
$faker->companyNumber(); // 977998506
```

#### VAT number
Get a random VAT number (MVA-nummer), built on an organisation number.
```php
$faker->vat(); // NO944063242MVA
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Norwegian one (eleven digits account number with its modulus 11 check digit) by default.
```php
$faker->iban(countryCode: null, format: null); // NO2934373016324
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Nina Amundsen
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Synnøve
```

#### Lastname
```php
$faker->lastName(); // Jørgensen
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Frk.
```

#### Fødselsnummer
Get a random national identity number (fødselsnummer) with both of its control digits.
```php
$faker->fodselsnummer(gender: 'F', formatted: false); // 26128931618
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 95868257
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 92697337
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 62738180
```

## Text

#### Words
```php
$faker->words(words: 3); // og fremdriften pålitelige
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Teamene samarbeider tett for å nå de felles målene. Arbeidsmetodene utvikler seg i takt med behovene og...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Styringen av ressursene er avgjørende for den samlede ytelsen. Arbeidsmetodene utvikler seg i takt med...
```
