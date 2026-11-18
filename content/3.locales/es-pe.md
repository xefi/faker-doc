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
$faker->region(); // Selva
```

#### Department
Generates a Peruvian department as an array keyed by its UBIGEO code.
```php
$faker->department(); // {"25":"Ucayali"}
```

#### City
```php
$faker->city(); // Juliaca
```

#### Post code
```php
$faker->postcode(); // 05100
```

#### House Number
```php
$faker->houseNumber(); // 1169
```

#### Street Name
```php
$faker->streetName(); // Calle Bolognesi
```

#### Street Address
```php
$faker->streetAddress(); // Calle Salaverry 3594
```

#### Full Address
```php
$faker->fullAddress(); // Calle San Martín 2322, Cerro de Pasco 19116
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // VerdeAzulado
```

#### Color Name
```php
$faker->colorName(); // Magenta
```

## Company

#### Company
```php
$faker->company(); // Textiles Arequipa S.A.A.
```

#### RUC
Generates a RUC (Registro Único de Contribuyentes) with a valid mod 11 check digit.
```php
$faker->ruc(); // 20886109238
```

## Financial

#### CCI
Generates a CCI (Código de Cuenta Interbancario): bank, branch, account and two check digits.
```php
$faker->cci(); // 02350229255748653487
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an IBAN-like number built around a CCI, Peru having no IBAN.
```php
$faker->iban(countryCode: null, format: null); // PE7802366074381045103045
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Elizabeth Fernández
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Nelly
```

#### Lastname
```php
$faker->lastName(); // Medina
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Srta.
```

#### DNI
Generates an eight-digit DNI (Documento Nacional de Identidad) number.
```php
$faker->dni(); // 15530810
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 927513564
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 931919637
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 74227600
```

## Text

#### Words
```php
$faker->words(words: 3); // mejorar equipo nacional
```

#### Sentences
```php
$faker->sentences(sentences: 3); // La capacidad de adaptación permite a la organización seguir siendo competitiva. Los programas de formación...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La satisfacción del cliente depende de un servicio rápido y confiable. Los indicadores de gestión orientan...
```
