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
$faker->region(); // Bas-Saint-Laurent
```

#### Province
```php
$faker->province(); // Manitoba
```

#### Province code
Returns a random two-letter province or territory code.
```php
$faker->provinceCode(); // QC
```

#### City
```php
$faker->city(); // Longueuil
```

#### Post code
```php
$faker->postcode(); // J5S 1X1
```

#### House Number
```php
$faker->houseNumber(); // 8051
```

#### Street Name
```php
$faker->streetName(); // croissant Principale
```

#### Street Address
```php
$faker->streetAddress(); // 3066, chemin de l'Église
```

#### Full Address
```php
$faker->fullAddress(); // 1953, chemin du Mont-Royal, Longueuil (Québec) H6W 9N1
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Fuchsia
```

#### Color Name
```php
$faker->colorName(); // Rouge
```

## Company

#### Company
```php
$faker->company(); // Excavation Morin et Frères ltée
```

#### Business number
Returns a 9-digit federal business number (NE) with a valid Luhn check digit.
```php
$faker->businessNumber(); // 172538902
```

#### VAT number
Returns a GST/HST registration number, such as "123456782 RT0001".
```php
$faker->vat(); // 289510166 RT0001
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an IBAN-shaped number built from a Canadian account: 3-digit institution, 5-digit transit and 12-digit account.
```php
$faker->iban(countryCode: null, format: null); // CA7622565773581284919562
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Ginette Tremblay
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Marie
```

#### Lastname
```php
$faker->lastName(); // Beaulieu
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Pre
```

#### SIN
Returns a social insurance number (NAS) with a valid Luhn check digit.
```php
$faker->sin(formatted: false); // 402875405
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 4185438453
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 5793467791
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 4189760279
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +1 418 347 9637
```

## Text

#### Words
```php
$faker->words(words: 3); // service la la
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Les processus sont revus chaque automne afin d'améliorer les résultats. Les programmes personnalisés...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La qualité du service à la clientèle demeure une priorité pour nos équipes. Chaque projet est planifié avec...
```
