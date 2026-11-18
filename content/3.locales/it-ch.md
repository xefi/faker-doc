---
title: Italian (Switzerland)
description: Italian (Switzerland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-it-ch
```

Be sure to setup faker with the `it_CH` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('it_CH');
```

## Address

#### Region
```php
$faker->region(); // Svizzera romanda
```

#### Province
```php
$faker->province(); // Zurigo
```

#### Province code
Returns a random two-letter canton code.
```php
$faker->provinceCode(); // LU
```

#### City
```php
$faker->city(); // Riva San Vitale
```

#### Post code
```php
$faker->postcode(); // 6969
```

#### House Number
```php
$faker->houseNumber(); // 28
```

#### Street Name
```php
$faker->streetName(); // Contrada Industria
```

#### Street Address
```php
$faker->streetAddress(); // Via Ospedale 64
```

#### Full Address
```php
$faker->fullAddress(); // Via alla Chiesa 97, 6959 Airolo
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // VerdeAcqua
```

#### Color Name
```php
$faker->colorName(); // Salmone
```

## Company

#### Company
```php
$faker->company(); // Gambarogno Immobiliare SA
```

#### Company number
Returns a Swiss enterprise identification number (UID) with a valid check digit, such as "CHE-123.456.789".
```php
$faker->companyNumber(); // CHE-848.590.662
```

#### VAT number
Returns a Swiss VAT number, such as "CHE-123.456.789 IVA".
```php
$faker->vat(); // CHE-375.773.808 IVA
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns a Swiss IBAN: a 5-digit bank clearing number followed by a 12-digit account number.
```php
$faker->iban(countryCode: null, format: null); // CH2175275639516712041
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Giorgia Bernasconi
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Giulia
```

#### Lastname
```php
$faker->lastName(); // Lepori
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Sig.ra
```

#### AVS
Returns a Swiss social security number (AVS) with a valid EAN-13 check digit.
```php
$faker->avs(formatted: false); // 7566727679309
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0774559428
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0756654663
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0914413315
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +41 81 487 09 61
```

## Text

#### Words
```php
$faker->words(words: 3); // i le si
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Una comunicazione chiara favorisce la produttività e la fiducia reciproca. L'analisi dei dati aiuta a...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La qualità del servizio resta un obiettivo centrale per ogni azienda. Ogni progetto richiede attenzione e una...
```
