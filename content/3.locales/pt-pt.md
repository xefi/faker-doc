---
title: Portuguese (Portugal)
description: Portuguese (Portugal) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-pt-pt
```

Be sure to setup faker with the `pt_PT` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('pt_PT');
```

## Address

#### Region
```php
$faker->region(); // Alentejo
```

#### District
```php
$faker->district(); // Setúbal
```

#### City
```php
$faker->city(); // Bragança
```

#### Post code
```php
$faker->postcode(); // 5211-691
```

#### House Number
```php
$faker->houseNumber(); // 338
```

#### Street Name
```php
$faker->streetName(); // Avenida Elias Garcia
```

#### Street Address
```php
$faker->streetAddress(); // Rua Marquês de Pombal, 323
```

#### Full Address
```php
$faker->fullAddress(); // Largo Alexandre Herculano, 48, 5380-396 Funchal
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Amarelo
```

#### Color Name
```php
$faker->colorName(); // Lavanda
```

## Company

#### Company
```php
$faker->company(); // Alentejo Agrícola, S.A.
```

#### NIF
Generates a company NIF (NIPC, Número de Identificação de Pessoa Coletiva) with a valid check digit.
```php
$faker->nif(); // 644632020
```

#### VAT number
Generates an intra-community VAT number (PT followed by the company NIF).
```php
$faker->vat(); // PT918242703
```

## Financial

#### NIB
Generates a NIB (Número de Identificação Bancária): bank, branch, account and two check digits.
```php
$faker->nib(); // 026984875227654948468
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Portuguese IBAN built around a valid NIB.
```php
$faker->iban(countryCode: null, format: null); // PT50003559469200216668422
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Margarida Ribeiro
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Íris
```

#### Lastname
```php
$faker->lastName(); // Nunes
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Eng.ª
```

#### Personal NIF
Generates a personal NIF (Número de Identificação Fiscal) with a valid check digit.
```php
$faker->personalNif(); // 116778890
```

#### Cartão de Cidadão
Generates a Cartão de Cidadão document number (civil ID, its check digit, version and final check digit).
```php
$faker->cartaoCidadao(formatted: true); // 14154192 0 ZY3
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 294992152
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 964926930
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 266905426
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +351 965 526 125
```

## Text

#### Words
```php
$faker->words(words: 3); // produtividade para crescimento
```

#### Sentences
```php
$faker->sentences(sentences: 3); // A formação contínua dos utilizadores é uma prioridade para a direção. A análise de dados ajuda a identificar...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // A gestão dos recursos é um fator decisivo para o desempenho global. Os métodos de trabalho evoluem consoante...
```
