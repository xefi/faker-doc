---
title: French (Belgium)
description: French Belgian locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fr-be
```

Be sure to setup faker with the `fr_BE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fr_BE');
```

## Address

#### Province
```php
$faker->province(); // Hainaut
```

#### Region
```php
$faker->region(); // Wallonie
```

#### City
```php
$faker->city(); // Bruxelles
```

#### Post code
```php
$faker->postCode(); // 5600
```

#### House Number
```php
$faker->houseNumber(); // 257
```

#### Street Name
```php
$faker->streetName(); // Avenue de la Gare
```

#### Street Address
```php
$faker->streetAddress(); // 257 Avenue de la Gare
```

#### Full Address
```php
$faker->fullAddress(); // 257 Avenue de la Gare, 5600 Bruxelles
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Noir
```

#### Color Name
```php
$faker->colorName() // BleuRoyal
```

## Company

#### Company
```php
$faker->company(); // Technobel Solutions
```

#### Company Identification Number
```php
$faker->companyNumber(); // 0895340190
```

#### VAT number
```php
$faker->vat(); // BE0895340190
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'BE', format: 'See code') // BE68539007547034
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Isabelle Dupont
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Isabelle
```

#### Lastname
```php
$faker->lastName() // Dupont
```

#### RRN (Rijksregisternummer)

This field corresponds to the Belgian "Numéro de registre national", also known as the "Belgian National Number".
```php
// Gender: null(both), "M" (male) or "F" (female)
// Formated: "xxxx-xxxx-xx"
$faker->rrn(gender: 'M', formated: true) // 12 34 56 7890 12
```

## Text

#### Words

```php
$faker->words(words: 3); // gestion des ressources humaines
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Chaque projet nécessite une attention particulière pour garantir la réussite en Belgique...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // La qualité des services reste un objectif central pour les entreprises belges...
```
