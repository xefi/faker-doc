---
title: French (France)
description: French locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fr-fr
```

Be sure to setup faker with the `fr_FR` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fr_FR');
```

## Address

#### Department
```php
$faker->department(); // ['18' => 'Cher'];
```

#### Region
```php
$faker->region(); // "Saint-Pierre-et-Miquelon"
```

#### City
```php
$faker->city(); // Lille
```

#### Post code
```php
$faker->postCode(); // 79295
```

#### House Number
```php
$faker->houseNumber(); // 1405
```

#### Street Name
```php
$faker->streetName(); // Chemin du Moulin
```

#### Street Address
```php
$faker->streetAddress(); // 1405 Chemin du Moulin
```

#### Full Address
```php
$faker->fullAddress(); // 1405 Chemin du Moulin, 79295 Lille (Cher)
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Noir
```

#### Color Name
```php
$faker->colorName() // BlancAntique
```

## Company

#### Company
```php
$faker->company(); // Alpille Informatique
```

#### Siret
```php
$faker->siret(); // 36252187900034
```

#### Siren
```php
$faker->siren(); // 362521879
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'FR', format: 'See code') // FR7630004028379876543210943
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Martine Benard
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Anne
```

#### Lastname
```php
$faker->lastName() // Levy
```

#### Nir

This field corresponds to "Numéro d’Inscription au Répertoire" also called "Numéro de sécurité sociale"
```php
// Gender: null(both), "M" (male) or "F" (female)
// Formated: "x xx xx xx xxx xxx xx"
$faker->nir(gender: 'M', formated: true) // 1 84 12 75 123 456 78
```

## Text

#### Words

```php
$faker->words(words: 3); // travail les identifier
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Chaque projet requiert une attention particulière pour assurer ...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // La qualité des services reste un objectif central dans le ...
```
