---
title: English (United Kingdom)
description: English United Kingdom locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-gb
```

Be sure to setup faker with the `en_GB` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_GB');
```

## Address

#### Department
```php
$faker->department(); // ['SCT' => 'Banffshire']
```

#### Region
```php
echo $faker->region(); // England
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Lime
```

#### Color Name
```php
$faker->colorName() // DarkCyan
```

## Company

#### Ust IdNr
```php
$faker->vatNumber(); // GB783920473
```

#### Handelsregisternummer
```php
$faker->companyRegistrationNumber(); // KH839263
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'GB', format: 'See code') // GB72JJED92839147382930
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Joseph Edwards
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Lily
```

#### Lastname
```php
$faker->lastName() // King
```

## Text

#### Words

```php
$faker->words(words: 3); // Innovation drives progress
```

#### Sentences

```php
$faker->sentences(sentences: 3); // The use of technology enables teams to work smarter and ...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Monitoring progress helps identify opportunities for growth and ...
```