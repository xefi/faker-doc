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
$faker->region(); // Sul
```

#### State
Generates a Brazilian state as an array keyed by its UF code.
```php
$faker->state(); // {"AC":"Acre"}
```

#### City
```php
$faker->city(); // Macapá
```

#### Post code
```php
$faker->postcode(); // 59802-061
```

#### House Number
```php
$faker->houseNumber(); // 2434
```

#### Street Name
```php
$faker->streetName(); // Ladeira São João
```

#### Street Address
```php
$faker->streetAddress(); // Avenida Augusta, 2207
```

#### Full Address
```php
$faker->fullAddress(); // Estrada Brigadeiro Faria Lima, 431, São Luís - MA, 74400-989
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Branco
```

#### Color Name
```php
$faker->colorName(); // Roxo
```

## Company

#### Company
```php
$faker->company(); // Paulista Logística S.A.
```

#### CNPJ
Generates a CNPJ (Cadastro Nacional da Pessoa Jurídica) with valid check digits.
```php
$faker->cnpj(formatted: true); // 68.036.467/0005-59
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Brazilian IBAN (bank ISPB, branch, account, account type and holder position).
```php
$faker->iban(countryCode: null, format: null); // BR3766297013045797789500938C3
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Cláudia Oliveira
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Ana
```

#### Lastname
```php
$faker->lastName(); // Silva
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Sra.
```

#### CPF
Generates a CPF (Cadastro de Pessoas Físicas) with valid check digits.
```php
$faker->cpf(formatted: true); // 288.123.001-62
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 11967060085
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 48944816387
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 4134742398
```

## Text

#### Words
```php
$faker->words(words: 3); // aumenta são oportunidades
```

#### Sentences
```php
$faker->sentences(sentences: 3); // As equipes trabalham juntas para alcançar metas em comum. Indicadores de desempenho orientam as decisões da...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // A qualidade dos serviços continua sendo uma prioridade para as empresas brasileiras. Cada projeto exige...
```
