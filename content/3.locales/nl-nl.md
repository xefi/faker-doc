---
title: Dutch (Netherlands)
description: Dutch (Netherlands) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-nl-nl
```

Be sure to setup faker with the `nl_NL` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('nl_NL');
```

## Address

#### Province
```php
$faker->province(); // Drenthe
```

#### Province code
Get a random province code (ISO 3166-2:NL subdivision code without the country prefix).
```php
$faker->provinceCode(); // ZH
```

#### City
```php
$faker->city(); // Zwolle
```

#### Post code
```php
$faker->postcode(); // 1768 SG
```

#### House Number
```php
$faker->houseNumber(); // 65
```

#### Street Name
```php
$faker->streetName(); // Noorderdijk
```

#### Street Address
```php
$faker->streetAddress(); // Brinkdijk 241
```

#### Full Address
```php
$faker->fullAddress(); // Julianaplein 157, 5830 TW Rotterdam
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Aqua
```

#### Color Name
```php
$faker->colorName(); // Turkoois
```

## Company

#### Company
```php
$faker->company(); // Friese Zuivelfabriek Coöperatie U.A.
```

#### Company number
Get a random Kamer van Koophandel (KvK) registration number.
```php
$faker->companyNumber(); // 93239461
```

#### RSIN
Get a random RSIN (Rechtspersonen en Samenwerkingsverbanden Informatienummer) passing the 11-proef.
```php
$faker->rsin(); // 287354994
```

#### VAT number
Get a random VAT number (btw-identificatienummer) of a legal entity, built on its RSIN.
```php
$faker->vat(); // NL947588723B01
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Dutch one (bank code followed by a ten digits account number) by default.
```php
$faker->iban(countryCode: null, format: null); // NL54KNAB6904607440
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Mirjam de Bruijn
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Anouk
```

#### Lastname
```php
$faker->lastName(); // Schouten
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // ir.
```

#### BSN
Get a random Burgerservicenummer (BSN) passing the 11-proef.
```php
$faker->bsn(); // 376766153
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0660828723
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0690726007
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0133565934
```

## Text

#### Words
```php
$faker->words(words: 3); // eisen van sturen
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Werkmethoden veranderen mee met de behoeften en de technologie. Persoonlijke trainingsprogramma's...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Het beheer van middelen is een sleutelfactor voor de totale prestatie. Werkmethoden veranderen mee met de...
```
