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
$faker->region(); // Guayana
```

#### State
Generates a Venezuelan state (or the Distrito Capital).
```php
$faker->state(); // Carabobo
```

#### City
```php
$faker->city(); // Caracas
```

#### Post code
```php
$faker->postcode(); // 7935
```

#### House Number
```php
$faker->houseNumber(); // 176
```

#### Street Name
```php
$faker->streetName(); // Prolongación Páez
```

#### Street Address
```php
$faker->streetAddress(); // Transversal Sucre, Nº 127
```

#### Full Address
```php
$faker->fullAddress(); // Callejón Lecuna, Nº 39, El Tigre 4382
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Azul
```

#### Color Name
```php
$faker->colorName(); // Lima
```

## Company

#### Company
```php
$faker->company(); // Arepera Los Cuatro Vientos C.A.
```

#### RIF
Generates a RIF (Registro de Información Fiscal) with a valid check digit, such as J-12345678-9.
```php
$faker->rif(); // J-36471366-4
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an IBAN-like number built around a 20-digit Venezuelan bank account, Venezuela having no IBAN.
```php
$faker->iban(countryCode: null, format: null); // VE0901051407366048206021
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Patricia Morales
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Elena
```

#### Lastname
```php
$faker->lastName(); // Peña
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ing.
```

#### Cédula
Generates a cédula de identidad number, prefixed by V- (Venezuelan) or E- (foreign resident).
```php
$faker->cedula(); // V-22226576
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 04221651845
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 04124410992
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 02746242342
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +58 424 309 9510
```

## Text

#### Words
```php
$faker->words(words: 3); // cada del están
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Los problemas cotidianos se resuelven con creatividad y constancia. Los objetivos se adaptan a la realidad...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La administración cuidadosa de los recursos garantiza la estabilidad del negocio. Los métodos de trabajo se...
```
