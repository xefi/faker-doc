---
title: English (India)
description: Indian English locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-in
```

Be sure to setup faker with the `en_IN` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_IN');
```

## Address

#### State
```php
$faker->state(); // Uttarakhand
```

#### House Number
```php
echo $faker->houseNumber(); // 104
```

#### Street Name
```php
echo $faker->streetName(); // Hills Rajpath
```

#### Street Address
```php
$faker->streetAddress(); // 33, Chowraha Residency
```

#### Zip code
```php
echo $faker->zipCode(); // 861325
```

#### City
```php
echo $faker->city(); // Mumbai
```

#### Full Address
```php
echo $faker->fullAddress(); // 287, Path Church, Ahmedabad, Rajasthan 584416
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Teal
```

#### Color Name
```php
$faker->colorName() // CharcoalGray
```

## Company

#### Company
```php
$faker->company(); // Godrej Group
```

#### GSTIN
```php
$faker->gstin(); // 12OCKPK3802V6Z2
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'IN', format: 'See code') // IN28CU9011517189912178556470
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Suhana Tiwari
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Suhana
```

#### Lastname
```php
$faker->lastName() // Tiwari
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
