---
title: Portuguese (Brazil)
description: Portuguese (Brazil) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-pt-br
```

Be sure to setup faker with the `pt_BR` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('pt_BR');
```

## Address

#### Region
```php
$faker->region(); // Centro-Oeste
```

#### State
Generates a Brazilian state as an array keyed by its UF code.
```php
$faker->state(); // {"PI":"Piauí"}
```

#### City
```php
$faker->city(); // Uberlândia
```

#### Post code
```php
$faker->postcode(); // 53025-328
```

#### House Number
```php
$faker->houseNumber(); // 1721
```

#### Street Name
```php
$faker->streetName(); // Avenida Visconde de Mauá
```

#### Street Address
```php
$faker->streetAddress(); // Alameda Barão do Rio Branco, 1844
```

#### Full Address
```php
$faker->fullAddress(); // Rodovia Joaquim Nabuco, 1656, Aracaju - SE, 74297-598
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Branco
```

#### Color Name
```php
$faker->colorName(); // Coral
```

## Company

#### Company
```php
$faker->company(); // Pantanal Transportes Ltda.
```

#### CNPJ
Generates a CNPJ (Cadastro Nacional da Pessoa Jurídica) with valid check digits.
```php
$faker->cnpj(formatted: true); // 72.730.067/0003-54
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Brazilian IBAN (bank ISPB, branch, account, account type and holder position).
```php
$faker->iban(countryCode: null, format: null); // BR5359986225355907051055496P9
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Renata Pereira
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Camila
```

#### Lastname
```php
$faker->lastName(); // Moreira
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Profa.
```

#### CPF
Generates a CPF (Cadastro de Pessoas Físicas) with valid check digits.
```php
$faker->cpf(formatted: true); // 022.144.733-43
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 71947699301
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 11978184932
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 2123112317
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +55 31 3026 6303
```

## Text

#### Words
```php
$faker->words(words: 3); // e trabalham de
```

#### Sentences
```php
$faker->sentences(sentences: 3); // As equipes trabalham juntas para alcançar metas em comum. Avaliações periódicas ajudam a identificar...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // A qualidade dos serviços continua sendo uma prioridade para as empresas brasileiras. Cada projeto exige...
```
