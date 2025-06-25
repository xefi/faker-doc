---
title: English (Pakistan)
description: English Pakistan locale for Xefi Faker PHP
---

You need to require the locale to be able to use it:

```bash
composer require --dev xefi/faker-php-locales-en-pk
```

Be sure to set up faker with the `en_PK` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_PK');
```

## Address

#### Province
```php
$faker->province(); // Punjab
```

#### Province Code
```php
$faker->provinceCode(); // SD
```

#### City
```php
$faker->city(); // Karachi
```

#### Sector Block
```php
$faker->sectorBlock(); // F-11
```

#### Street Name
```php
$faker->streetName(); // Iqbal Road
```

#### Street Address
```php
$faker->streetAddress(); // G-7 Kashmir Avenue
```

#### Postal Code
```php
$faker->postalCode(); // 44000
```

#### Full Address
```php
$faker->fullAddress(); // G-11 Shahrah-e-Pakistan Street, Islamabad ICT
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Lime
```

#### Color Name
```php
$faker->colorName(); // Saffron
```

## Company

#### Company
```php
$faker->company(); // Attock Petroleum
```

#### NTN
```php
$faker->ntn(); // 57308237
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details.

```php
$faker->iban(countryCode: 'PK', format: 'See code'); // PK72JJED92839147382930
```

```php
$faker->ifsc(); // G4855732
```

## Person

#### Name
```php
// Gender: null (both), "M" (male) or "F" (female)
$faker->name(gender: 'M'); // Ahmed Khan
```

#### Firstname
```php
$faker->firstName(gender: 'F'); // Ayesha
```

#### Lastname
```php
$faker->lastName(); // Butt
```

## Text

#### Words
```php
$faker->words(words: 3); // Unity Faith Discipline
```

#### Sentences
```php
$faker->sentences(sentences: 3); // The economy of Pakistan is rapidly growing...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Pakistan has a rich cultural heritage...
```
