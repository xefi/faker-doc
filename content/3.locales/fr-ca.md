---
title: French (Canada)
description: French (Canada) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fr-ca
```

Be sure to setup faker with the `fr_CA` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fr_CA');
```

## Address

#### Region
```php
$faker->region(); // Chaudière-Appalaches
```

#### Province
```php
$faker->province(); // Québec
```

#### Province code
Returns a random two-letter province or territory code.
```php
$faker->provinceCode(); // YT
```

#### City
```php
$faker->city(); // Montréal
```

#### Post code
```php
$faker->postcode(); // J9Z 9X5
```

#### House Number
```php
$faker->houseNumber(); // 9955
```

#### Street Name
```php
$faker->streetName(); // avenue de la Montagne
```

#### Street Address
```php
$faker->streetAddress(); // 4330, rue du Moulin
```

#### Full Address
```php
$faker->fullAddress(); // 8452, route Wilfrid-Laurier, Salaberry-de-Valleyfield (Québec) J4M 1X4
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Aqua
```

#### Color Name
```php
$faker->colorName(); // OrchidéeMoyenne
```

## Company

#### Company
```php
$faker->company(); // Imprimerie Leblanc inc.
```

#### Business number
Returns a 9-digit federal business number (NE) with a valid Luhn check digit.
```php
$faker->businessNumber(); // 704199918
```

#### VAT number
Returns a GST/HST registration number, such as "123456782 RT0001".
```php
$faker->vat(); // 516694619 RT0001
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an IBAN-shaped number built from a Canadian account: 3-digit institution, 5-digit transit and 12-digit account.
```php
$faker->iban(countryCode: null, format: null); // CA8024445605119032749693
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Rosalie Bernier
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Chantal
```

#### Lastname
```php
$faker->lastName(); // Côté
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Me
```

#### SIN
Returns a social insurance number (NAS) with a valid Luhn check digit.
```php
$faker->sin(formatted: false); // 659002497
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 4504905841
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 4388887122
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 8192151903
```

## Text

#### Words
```php
$faker->words(words: 3); // objectifs sont décisions
```

#### Sentences
```php
$faker->sentences(sentences: 3); // La qualité du service à la clientèle demeure une priorité pour nos équipes. Chaque projet est planifié avec...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La satisfaction des clients dépend de notre capacité à répondre rapidement. Des indicateurs servent à mesurer...
```
