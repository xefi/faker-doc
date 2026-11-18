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
$faker->province(); // Flevoland
```

#### Province code
Get a random province code (ISO 3166-2:NL subdivision code without the country prefix).
```php
$faker->provinceCode(); // GE
```

#### City
```php
$faker->city(); // Lelystad
```

#### Post code
```php
$faker->postcode(); // 2506 AW
```

#### House Number
```php
$faker->houseNumber(); // 196
```

#### Street Name
```php
$faker->streetName(); // Oranjegracht
```

#### Street Address
```php
$faker->streetAddress(); // Beatrixdijk 263
```

#### Full Address
```php
$faker->fullAddress(); // Boskade 288, 3023 NT Almere
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Olijfgroen
```

#### Color Name
```php
$faker->colorName(); // Rood
```

## Company

#### Company
```php
$faker->company(); // Twentse Textielunie B.V.
```

#### Company number
Get a random Kamer van Koophandel (KvK) registration number.
```php
$faker->companyNumber(); // 99231856
```

#### RSIN
Get a random RSIN (Rechtspersonen en Samenwerkingsverbanden Informatienummer) passing the 11-proef.
```php
$faker->rsin(); // 743319552
```

#### VAT number
Get a random VAT number (btw-identificatienummer) of a legal entity, built on its RSIN.
```php
$faker->vat(); // NL556437792B01
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Dutch one (bank code followed by a ten digits account number) by default.
```php
$faker->iban(countryCode: null, format: null); // NL51NNBA3662634798
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Yara Mulder
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Eva
```

#### Lastname
```php
$faker->lastName(); // Brouwer
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // ir.
```

#### BSN
Get a random Burgerservicenummer (BSN) passing the 11-proef.
```php
$faker->bsn(); // 803627555
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0158393946
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0660882015
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0103243579
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +31 6 25 03 14 75
```

## Text

#### Words
```php
$faker->words(words: 3); // voor ondersteunen nauwkeurige
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Door wendbaar te blijven, kunnen organisaties concurrerend en innovatief blijven. Processen worden herzien om...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Het beheer van middelen is een sleutelfactor voor de totale prestatie. Werkmethoden veranderen mee met de...
```
