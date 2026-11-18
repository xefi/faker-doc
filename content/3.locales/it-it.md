---
title: Italian (Italy)
description: Italian (Italy) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-it-it
```

Be sure to setup faker with the `it_IT` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('it_IT');
```

## Address

#### Region
```php
$faker->region(); // Friuli-Venezia Giulia
```

#### Province
```php
$faker->province(); // Bari
```

#### Province code
Returns a random two-letter province code (sigla).
```php
$faker->provinceCode(); // SA
```

#### City
```php
$faker->city(); // Imola
```

#### Post code
```php
$faker->postcode(); // 80886
```

#### House Number
```php
$faker->houseNumber(); // 184
```

#### Street Name
```php
$faker->streetName(); // Lungomare Santa Maria
```

#### Street Address
```php
$faker->streetAddress(); // Largo IV Novembre 187
```

#### Full Address
```php
$faker->fullAddress(); // Via Dante Alighieri 233, 18632 Parma PR
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Acqua
```

#### Color Name
```php
$faker->colorName(); // Magenta
```

## Company

#### Company
```php
$faker->company(); // Costruzioni Bianchi S.p.A.
```

#### Partita IVA
Returns an 11-digit partita IVA: 7-digit company number, 3-digit tax office code and a Luhn check digit.
```php
$faker->partitaIva(); // 46451980844
```

#### VAT number
Returns an Italian intra-community VAT number, such as "IT12345678903".
```php
$faker->vat(); // IT02656420631
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an Italian IBAN: CIN check letter, ABI (5 digits), CAB (5 digits) and a 12-digit account number.
```php
$faker->iban(countryCode: 'IT', format: null); // IT73K6612422206760489456204
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Serena Costa
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Greta
```

#### Lastname
```php
$faker->lastName(); // Esposito
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ing.
```

#### Codice Fiscale
Returns a codice fiscale with a valid check character, built from a random name and birth date.
```php
$faker->codiceFiscale(gender: 'F'); // CSTDNL53T53A944R
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0913481526
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 3879015050
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0815318261
```

## Text

#### Words
```php
$faker->words(words: 3); // la metodi l'analisi
```

#### Sentences
```php
$faker->sentences(sentences: 3); // I processi vengono rivisti per migliorare i risultati e rispondere al mercato. Alcuni indicatori aiutano a...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La qualità del servizio resta un obiettivo centrale per ogni azienda. Ogni progetto richiede attenzione e una...
```
