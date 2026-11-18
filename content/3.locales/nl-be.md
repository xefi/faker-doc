---
title: Dutch (Belgium)
description: Dutch (Belgium) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-nl-be
```

Be sure to setup faker with the `nl_BE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('nl_BE');
```

## Address

#### Region
```php
$faker->region(); // Vlaams Gewest
```

#### Province
```php
$faker->province(); // Oost-Vlaanderen
```

#### City
```php
$faker->city(); // Diest
```

#### Post code
```php
$faker->postcode(); // 8534
```

#### House Number
```php
$faker->houseNumber(); // 220
```

#### Street Name
```php
$faker->streetName(); // Consciencelei
```

#### Street Address
```php
$faker->streetAddress(); // Dijleplein 189
```

#### Full Address
```php
$faker->fullAddress(); // Tulpenplein 17, 1227 Ukkel
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Grijs
```

#### Color Name
```php
$faker->colorName(); // Lichtgroen
```

## Company

#### Company
```php
$faker->company(); // Willems Elektrotechniek BV
```

#### Company number
Get a random enterprise number (ondernemingsnummer) with its modulo 97 check digits.
```php
$faker->companyNumber(); // 0380389755
```

#### VAT number
Get a random VAT number (btw-nummer), built on an enterprise number.
```php
$faker->vat(); // BE0262854162
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Belgian one (account number with its modulo 97 check digits) by default.
```php
$faker->iban(countryCode: null, format: null); // BE37093010858428
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Katrien Verbeke
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Hanne
```

#### Lastname
```php
$faker->lastName(); // De Vos
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ir.
```

#### RRN (Rijksregisternummer)
Get a random national register number (rijksregisternummer) with its modulo 97 check digits.
```php
$faker->rrn(gender: 'F', formatted: false); // 63071419677
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0492079082
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0463385437
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 096581036
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +32 460 27 73 32
```

## Text

#### Words
```php
$faker->words(words: 3); // hogere te kan
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Processen worden herzien om de resultaten te verbeteren en aan de eisen van de markt te voldoen. Data-analyse...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Het beheer van middelen is een sleutelfactor voor de totale prestatie. Werkmethoden veranderen mee met de...
```
