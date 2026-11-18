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
$faker->region(); // Região Autónoma dos Açores
```

#### District
```php
$faker->district(); // Castelo Branco
```

#### City
```php
$faker->city(); // Rio Tinto
```

#### Post code
```php
$faker->postcode(); // 8883-249
```

#### House Number
```php
$faker->houseNumber(); // 454
```

#### Street Name
```php
$faker->streetName(); // Estrada da Boavista
```

#### Street Address
```php
$faker->streetAddress(); // Estrada Cidade de Coimbra, 61
```

#### Full Address
```php
$faker->fullAddress(); // Rua Vasco da Gama, 144, 1240-642 Lisboa
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Amarelo
```

#### Color Name
```php
$faker->colorName(); // AzulClaro
```

## Company

#### Company
```php
$faker->company(); // Ribatejo Metalomecânica, Lda.
```

#### NIF
Generates a company NIF (NIPC, Número de Identificação de Pessoa Coletiva) with a valid check digit.
```php
$faker->nif(); // 681421126
```

#### VAT number
Generates an intra-community VAT number (PT followed by the company NIF).
```php
$faker->vat(); // PT690625910
```

## Financial

#### NIB
Generates a NIB (Número de Identificação Bancária): bank, branch, account and two check digits.
```php
$faker->nib(); // 001028601990914676952
```

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Portuguese IBAN built around a valid NIB.
```php
$faker->iban(countryCode: null, format: null); // PT50003511259252221615450
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Inês Antunes
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Inês
```

#### Lastname
```php
$faker->lastName(); // Vieira
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Sra.
```

#### Personal NIF
Generates a personal NIF (Número de Identificação Fiscal) with a valid check digit.
```php
$faker->personalNif(); // 304916978
```

#### Cartão de Cidadão
Generates a Cartão de Cidadão document number (civil ID, its check digit, version and final check digit).
```php
$faker->cartaoCidadao(formatted: true); // 17656907 3 ZY4
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 913104550
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 926947431
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 292602612
```

## Text

#### Words
```php
$faker->words(words: 3); // produtividade incentivados regular
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Uma comunicação eficaz entre os colaboradores favorece a produtividade. A avaliação periódica das práticas...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // A qualidade do serviço continua a ser um objetivo central para as empresas portuguesas. Cada projeto exige...
```
