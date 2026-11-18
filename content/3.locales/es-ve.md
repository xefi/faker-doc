---
title: Spanish (Venezuela)
description: Spanish (Venezuela) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-es-ve
```

Be sure to setup faker with the `es_VE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('es_VE');
```

## Address

#### Region
```php
$faker->region(); // Capital
```

#### State
Generates a Venezuelan state (or the Distrito Capital).
```php
$faker->state(); // Sucre
```

#### City
```php
$faker->city(); // La Victoria
```

#### Post code
```php
$faker->postcode(); // 6109
```

#### House Number
```php
$faker->houseNumber(); // 135
```

#### Street Name
```php
$faker->streetName(); // Calle Francisco de Miranda
```

#### Street Address
```php
$faker->streetAddress(); // Carrera Ayacucho, Nº 162
```

#### Full Address
```php
$faker->fullAddress(); // Transversal Bella Vista, Nº 153, Carúpano 4132
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // VerdeAzulado
```

#### Color Name
```php
$faker->colorName(); // SalmónClaro
```

## Company

#### Company
```php
$faker->company(); // Transporte Caribe Express C.A.
```

#### RIF
Generates a RIF (Registro de Información Fiscal) with a valid check digit, such as J-12345678-9.
```php
$faker->rif(); // J-75019880-4
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an IBAN-like number built around a 20-digit Venezuelan bank account, Venezuela having no IBAN.
```php
$faker->iban(countryCode: null, format: null); // VE2901150753977463173073
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Milagros Peña
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Andreína
```

#### Lastname
```php
$faker->lastName(); // Sánchez
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Sra.
```

#### Cédula
Generates a cédula de identidad number, prefixed by V- (Venezuelan) or E- (foreign resident).
```php
$faker->cedula(); // V-25056388
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 04126500896
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 04225664601
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 02810852798
```

## Text

#### Words
```php
$faker->words(words: 3); // innecesarios constancia oportunidades
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Los problemas cotidianos se resuelven con creatividad y constancia. La formación del talento humano es una...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La calidad del servicio sigue siendo el compromiso principal de la empresa. Cada proyecto arranca con una...
```
