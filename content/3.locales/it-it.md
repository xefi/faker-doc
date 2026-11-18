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
$faker->region(); // Campania
```

#### Province
```php
$faker->province(); // Messina
```

#### Province code
Returns a random two-letter province code (sigla).
```php
$faker->provinceCode(); // TN
```

#### City
```php
$faker->city(); // Bari
```

#### Post code
```php
$faker->postcode(); // 80098
```

#### House Number
```php
$faker->houseNumber(); // 25
```

#### Street Name
```php
$faker->streetName(); // Viale Indipendenza
```

#### Street Address
```php
$faker->streetAddress(); // Largo Leonardo da Vinci 14
```

#### Full Address
```php
$faker->fullAddress(); // Largo Giacomo Matteotti 162, 59250 Bari BA
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Fucsia
```

#### Color Name
```php
$faker->colorName(); // Rosso
```

## Company

#### Company
```php
$faker->company(); // Romano Alimentari S.r.l.
```

#### Partita IVA
Returns an 11-digit partita IVA: 7-digit company number, 3-digit tax office code and a Luhn check digit.
```php
$faker->partitaIva(); // 23205400551
```

#### VAT number
Returns an Italian intra-community VAT number, such as "IT12345678903".
```php
$faker->vat(); // IT05405970301
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an Italian IBAN: CIN check letter, ABI (5 digits), CAB (5 digits) and a 12-digit account number.
```php
$faker->iban(countryCode: 'IT', format: null); // IT52F2203322766173132348477
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Federica Conti
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Alice
```

#### Lastname
```php
$faker->lastName(); // Mariani
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Avv.
```

#### Codice Fiscale
Returns a codice fiscale with a valid check character, built from a random name and birth date.
```php
$faker->codiceFiscale(gender: 'F'); // RMNGRG93L63L781H
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0552860949
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 3319040532
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0554168635
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +39 055 178 7565
```

## Text

#### Words
```php
$faker->words(words: 3); // a a sviluppare
```

#### Sentences
```php
$faker->sentences(sentences: 3); // I collaboratori lavorano insieme per raggiungere traguardi comuni. Programmi su misura sostengono la crescita...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La qualità del servizio resta un obiettivo centrale per ogni azienda. Ogni progetto richiede attenzione e una...
```
