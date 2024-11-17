---
title: English (United States)
description: English United States locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-us
```

Be sure to setup faker with the `fr_FR` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_US');
```

## Address

#### Department
```php
$faker->department(); // ['AL' => 'Alabama'];
```

#### Region
```php
echo $faker->region(); // "Northeast"
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Black
```

#### Color Name
```php
$faker->colorName() // DarkKhaki
```

## Company

#### Ein
```php
$faker->ein(); // 74-7205738
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'US', format: 'See code') // US7630004028379876543210943
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Nicholas Wilson
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Betty
```

#### Lastname
```php
$faker->lastName() // Anderson
```

## Text

#### Words

```php
$faker->words(words: 3); // professional development enpowers
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Data analysis provides insights into performance ...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Goals are adjusted to align with shifting ...
```
