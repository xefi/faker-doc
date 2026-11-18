---
title: German (Germany)
description: German locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-de-de
```

Be sure to setup faker with the `de_DE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('de_DE');
```

## Address

#### Region
```php
$faker->region(); // ['BW' => 'Baden-Württemberg'];
```

#### City
```php
$faker->city(); // Bonn
```

#### House Number
```php
$faker->houseNumber(); // 174
```

#### Street Name
```php
$faker->streetName(); // Beethoven Ring
```

#### Street Address
```php
$faker->streetAddress(); // Wilhelm Weg 170
```

#### Zip code
```php
$faker->zipCode(); // 33950
```

#### Full Address
```php
$faker->fullAddress(); // Kleist Ring 17, 41661 Braunschweig, Thüringen
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // DunkelRot
```

#### Color Name
```php
$faker->colorName() // Schwarz
```

## Company

#### Company
```php
$faker->company(); // Lindholm Logistik
```

#### Ust IdNr
```php
$faker->ustIdNr(); // DE7593849123
```

#### Handelsregisternummer
```php
$faker->handelsregisternummer(); // HRB84923
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban() // DE22280420382619382472
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Jan Zimmermann
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Jana
```

#### Lastname
```php
$faker->lastName() // Klein
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F') // Fräulein
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber() // 017663057694
```

#### Cell phone number
```php
$faker->cellPhoneNumber() // 01721689252
```

#### Landline phone number
```php
$faker->landlinePhoneNumber() // 08975752516
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber() // +49 211 7548480
```

## Text

#### Words

```php
$faker->words(words: 3); // ressourcenmanagement ist essentiell
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Kontinuierliche Verbesserung hilft Unternehmen wettbewerbsfähig und ...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Die Nutzung von Technologie ermöglicht es Teams, smarter ...
```
