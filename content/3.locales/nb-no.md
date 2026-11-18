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
$faker->county(); // Agder
```

#### County code
Get a random county number (fylkesnummer).
```php
$faker->countyCode(); // 33
```

#### City
```php
$faker->city(); // Larvik
```

#### Post code
```php
$faker->postcode(); // 4958
```

#### House Number
```php
$faker->houseNumber(); // 179
```

#### Street Name
```php
$faker->streetName(); // Skolevegen
```

#### Street Address
```php
$faker->streetAddress(); // Solveien 73
```

#### Full Address
```php
$faker->fullAddress(); // Bryggetunet 93, 1100 Skien
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Marineblå
```

#### Color Name
```php
$faker->colorName(); // Blå
```

## Company

#### Company
```php
$faker->company(); // Johansen Rørlegger AS
```

#### Company number
Get a random organisation number (organisasjonsnummer) with its modulus 11 check digit.
```php
$faker->companyNumber(); // 855550733
```

#### VAT number
Get a random VAT number (MVA-nummer), built on an organisation number.
```php
$faker->vat(); // NO821844169MVA
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Norwegian one (eleven digits account number with its modulus 11 check digit) by default.
```php
$faker->iban(countryCode: null, format: null); // NO4328834353999
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Nina Solberg
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Sofie
```

#### Lastname
```php
$faker->lastName(); // Johansen
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Fru
```

#### Fødselsnummer
Get a random national identity number (fødselsnummer) with both of its control digits.
```php
$faker->fodselsnummer(gender: 'F', formatted: false); // 02125697863
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 73234222
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 99902492
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 30694893
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +47 65 55 56 98
```

## Text

#### Words
```php
$faker->words(words: 3); // felles å kundenes
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Teamene samarbeider tett for å nå de felles målene. En jevnlig evaluering av arbeidsrutinene avdekker mulige...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Styringen av ressursene er avgjørende for den samlede ytelsen. Arbeidsmetodene utvikler seg i takt med...
```
