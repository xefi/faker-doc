---
title: Spanish (Spain)
description: Spanish locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-es-es
```

Be sure to setup faker with the `es_ES` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('es_ES');
```

## Address

#### Region
```php
$faker->region(); // Andalucía
```

#### Province
```php
$faker->province(); // Sevilla
```

#### City

```php
$faker->city(); // Bilbao
```

#### Post code
```php
$faker->postCode(); // 18493
```

#### House Number
```php
$faker->houseNumber(); // 140
```

#### Street Name
```php
$faker->streetName(); // Avenida Sanchinarro
```

#### Street Address
```php
$faker->streetAddress(); // 140 Avenida Sanchinarro
```

#### Full Address
```php
$faker->fullAddress(); // 140 Avenida Sanchinarro, 18493 Bilbao
```

## Colors
#### Safe Color Name
```php
$faker->safeColorName(); // Azul
```
#### Color Name
```php
$faker->colorName() // BlancoFloral
```

## Company
#### Company
```php
$faker->company(); // Grupo Mango
```

#### Company number
```php
$faker->companyNumber(); // 0226229578
```

#### VAT
```php
$faker->vat(); // ES0049721814
```

## Financial
#### Iban
Please see [base method](/extensions/financial#iban) for details
```php
$faker->iban(countryCode: 'ES', format: 'See code') // ES5690896202869356118608
```


## Person


#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F') // Eva Delgado
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F') // Eva
```

#### Lastname
```php
$faker->lastName() // Delgado
```

#### Title
```php
$faker->title(gender: 'F') // Sra.
```

#### DNI
This field corresponds to "Documento Nacional de Identidad".
```php
$faker->dni() // 84725412J
```

#### NIE
This field corresponds to "Número de Identidad de Extranjero".
```php
$faker->nie() // X4394920B
```

## Text
#### Words
```php
$faker->words(words: 3); // La calidad de
```

#### Sentences
```php
$faker->sentences(sentences: 3); // La calidad de los servicios sigue siendo un objetivo central en el sector...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La calidad de los servicios sigue siendo un objetivo central en el sector...
```
