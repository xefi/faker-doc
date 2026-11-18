---
title: Czech (Czechia)
description: Czech (Czechia) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-cs-cz
```

Be sure to setup faker with the `cs_CZ` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('cs_CZ');
```

## Address

#### Region
Returns a random Czech region (kraj).
```php
$faker->region(); // Jihočeský kraj
```

#### City
```php
$faker->city(); // Most
```

#### Post code
```php
$faker->postcode(); // 103 81
```

#### House Number
```php
$faker->houseNumber(); // 1610/120
```

#### Street Name
```php
$faker->streetName(); // Purkyňova
```

#### Street Address
```php
$faker->streetAddress(); // Purkyňova 2709/1
```

#### Full Address
```php
$faker->fullAddress(); // Zahradní 1036, 117 14 Zlín
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Olivová
```

#### Color Name
```php
$faker->colorName(); // SvětleLososová
```

## Company

#### Company
```php
$faker->company(); // Zlatá Praha Reality s.r.o.
```

#### IČO
Generates a Czech company identification number (IČO): 8 digits with a valid modulo 11 check digit.
```php
$faker->ico(); // 85088331
```

#### VAT number
Generates a Czech VAT number (DIČ) of a legal entity: "CZ" followed by its IČO.
```php
$faker->vat(); // CZ39449181
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Czech IBAN (CZkk + 20 digits). The default BBAN is a 4-digit bank code, a 6-digit account prefix and a 10-digit account number passing the national modulo 11 check.
```php
$faker->iban(countryCode: 'CZ', format: null); // CZ6780400000000783418197
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Ludmila Svobodová
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Romana
```

#### Lastname
```php
$faker->lastName(); // Sedláčková
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ing.
```

#### Rodné číslo
Generates a Czech birth number (rodné číslo), formatted as YYMMDD/XXXX.
```php
$faker->rodneCislo(gender: 'F'); // 665812/1162
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 738900787
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 771064765
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 557646733
```

## Text

#### Words
```php
$faker->words(words: 3); // každý spokojenost umožňuje
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Otevřená komunikace mezi kolegy zvyšuje produktivitu i vzájemnou důvěru. Pracovní postupy se vyvíjejí podle...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Kvalita služeb zůstává hlavním cílem v celém profesním odvětví. Každý projekt vyžaduje pečlivé plánování a...
```
