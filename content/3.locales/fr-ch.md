---
title: French (Swiss)
description: French Swiss locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fr-ch
```

Be sure to setup faker with the `fr_CH` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fr_CH');
```

## Address

#### Region
```php
$faker->region(); // Suisse romande
```

#### Province (canton)
```php
$faker->province(); // Valais
```

#### City
```php
$faker->city(); // Genève
```

#### Post code
```php
$faker->postCode(); // 2805
```

#### House Number
```php
$faker->houseNumber(); // 181
```

#### Street Name
```php
$faker->streetName(); // Route du Marché
```

#### Street Address
```php
$faker->streetAddress(); // Route du Marché 181
```

#### Full Address
```php
$faker->fullAddress(); // Route du Marché 181, 2805 Genève
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Noir
```

#### Color Name
```php
$faker->colorName() // Blanc antique
```

## Company

#### Company
```php
$faker->company(); // Nestlé Suisse SA
```

#### Company number
```php
$faker->companyNumber(); // CHE-380.842.438
```

#### VAT Number
```php
$faker->vat(); // CHE-380.842.438 TVA
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'CH', format: 'See code') // CH6757112815366133814
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Anna Steiner
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Anna
```

#### Lastname
```php
$faker->lastName() // Steiner
```

#### AVS

```php
// Formated: "756.xxxx.xxxx.xx"
$faker->avs(formated: false) // 7564038982068
```

## Text

#### Words

```php
$faker->words(words: 3); // communication productivité proposés
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Des indicateurs sont utilisés pour mesurer...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Des indicateurs sont utilisés pour mesurer...
```
