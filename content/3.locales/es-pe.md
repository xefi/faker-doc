---
title: Spanish (Peru)
description: Spanish (Peru) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-es-pe
```

Be sure to setup faker with the `es_PE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('es_PE');
```

## Address

#### Region
```php
$faker->region(); // Costa
```

#### Department
Generates a Peruvian department as an array keyed by its UBIGEO code.
```php
$faker->department(); // {"07":"Callao"}
```

#### City
```php
$faker->city(); // Huaraz
```

#### Post code
```php
$faker->postcode(); // 12883
```

#### House Number
```php
$faker->houseNumber(); // 2952
```

#### Street Name
```php
$faker->streetName(); // Avenida San Martín
```

#### Street Address
```php
$faker->streetAddress(); // Jirón Primavera 1826
```

#### Full Address
```php
$faker->fullAddress(); // Prolongación Pardo 440, Huánuco 10707
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Aguamarina
```

#### Color Name
```php
$faker->colorName(); // Dorado
```

## Company

#### Company
```php
$faker->company(); // Seguros del Pacífico Sur S.A.
```

#### RUC
Generates a RUC (Registro Único de Contribuyentes) with a valid mod 11 check digit.
```php
$faker->ruc(); // 20861379168
```

## Financial

#### CCI
Generates a CCI (Código de Cuenta Interbancario): bank, branch, account and two check digits.
```php
$faker->cci(); // 05375279627181001827
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an IBAN-like number built around a CCI, Peru having no IBAN.
```php
$faker->iban(countryCode: null, format: null); // PE7100301093763508945366
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Luz Morales
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Haydée
```

#### Lastname
```php
$faker->lastName(); // García
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ing.
```

#### DNI
Generates an eight-digit DNI (Documento Nacional de Identidad) number.
```php
$faker->dni(); // 38386483
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 914836912
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 940684415
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 74238184
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +51 961 160 683
```

## Text

#### Words
```php
$faker->words(words: 3); // prioridad proyecto las
```

#### Sentences
```php
$faker->sentences(sentences: 3); // La calidad de la atención sigue siendo una prioridad para las empresas peruanas. El manejo responsable de los...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La calidad de la atención sigue siendo una prioridad para las empresas peruanas. Cada proyecto necesita una...
```
