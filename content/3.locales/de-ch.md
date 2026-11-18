---
title: German (Switzerland)
description: German (Switzerland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-de-ch
```

Be sure to setup faker with the `de_CH` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('de_CH');
```

## Address

#### Region
```php
$faker->region(); // Romandie
```

#### Province
```php
$faker->province(); // Graubünden
```

#### Province code
Returns a random two-letter canton code.
```php
$faker->provinceCode(); // ZG
```

#### City
```php
$faker->city(); // Schaffhausen
```

#### House Number
```php
$faker->houseNumber(); // 32
```

#### Street Name
```php
$faker->streetName(); // Spitalring
```

#### Street Address
```php
$faker->streetAddress(); // Limmatrain 118
```

#### Post code
```php
$faker->postcode(); // 5704
```

#### Full Address
```php
$faker->fullAddress(); // Gotthardring 161, 9268 Zug
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Türkis
```

#### Color Name
```php
$faker->colorName(); // KönigsBlau
```

## Company

#### Company
```php
$faker->company(); // Toggenburg Industries
```

#### Company number
Returns a Swiss enterprise identification number (UID) with a valid check digit, such as "CHE-123.456.789".
```php
$faker->companyNumber(); // CHE-344.301.537
```

#### VAT number
Returns a Swiss VAT number, such as "CHE-123.456.789 MWST".
```php
$faker->vat(); // CHE-241.875.037 MWST
```

#### Handelsregisternummer
Returns a commercial register number in the legacy format, such as "CH-020.3.012.345-6".
```php
$faker->handelsregisternummer(); // CH-456.1.038.092-1
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. 
```php
$faker->iban(countryCode: null, format: null); // CH8197797189210020770
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Lina Schneider
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Petra
```

#### Lastname
```php
$faker->lastName(); // Gerber
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Frau
```

#### AVS
Returns a Swiss social security number (AHV) with a valid EAN-13 check digit.
```php
$faker->avs(formatted: false); // 7569107067451
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0618400831
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0758230473
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0563545229
```

## Text

#### Words
```php
$faker->words(words: 3); // hilft für ansätze
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Effektive Kommunikation ist ein Grundpfeiler für produktive Arbeitsumgebungen. Regelmässige Bewertungen...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Innovation treibt Fortschritt in modernen Branchen und Dienstleistungen. Zusammenarbeit zwischen Teams führt...
```
