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
$faker->region(); // Brussels Hoofdstedelijk Gewest
```

#### Province
```php
$faker->province(); // Vlaams-Brabant
```

#### City
```php
$faker->city(); // Herentals
```

#### Post code
```php
$faker->postcode(); // 3766
```

#### House Number
```php
$faker->houseNumber(); // 123
```

#### Street Name
```php
$faker->streetName(); // Kapellaan
```

#### Street Address
```php
$faker->streetAddress(); // Kastanjevest 265
```

#### Full Address
```php
$faker->fullAddress(); // Dorpsplein 211, 2566 Elsene
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Grijs
```

#### Color Name
```php
$faker->colorName(); // Magenta
```

## Company

#### Company
```php
$faker->company(); // Brouwerij De Leie BV
```

#### Company number
Get a random enterprise number (ondernemingsnummer) with its modulo 97 check digits.
```php
$faker->companyNumber(); // 0554956893
```

#### VAT number
Get a random VAT number (btw-nummer), built on an enterprise number.
```php
$faker->vat(); // BE0354761662
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Belgian one (account number with its modulo 97 check digits) by default.
```php
$faker->iban(countryCode: null, format: null); // BE41159680033310
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Els Martens
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Leen
```

#### Lastname
```php
$faker->lastName(); // Van den Bossche
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Prof.
```

#### RRN (Rijksregisternummer)
Get a random national register number (rijksregisternummer) with its modulo 97 check digits.
```php
$faker->rrn(gender: 'F', formatted: false); // 77120103287
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0466631200
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0478234716
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 090029815
```

## Text

#### Words
```php
$faker->words(words: 3); // tevredenheid vaardigheden volgen
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Dagelijkse uitdagingen worden overwonnen dankzij goed beheer en passende vaardigheden. Data-analyse helpt om...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // De kwaliteit van de dienstverlening blijft een belangrijk doel in de zakelijke sector. Elk project vraagt om...
```
