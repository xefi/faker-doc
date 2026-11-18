---
title: Romanian (Romania)
description: Romanian (Romania) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-ro-ro
```

Be sure to setup faker with the `ro_RO` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('ro_RO');
```

## Address

#### Region
Returns a random Romanian development region (regiune de dezvoltare).
```php
$faker->region(); // Nord-Vest
```

#### County
Returns a random Romanian county (județ) as [code => name], e.g. ['CJ' => 'Cluj'].
```php
$faker->county(); // {"GR":"Giurgiu"}
```

#### City
```php
$faker->city(); // Târgu Mureș
```

#### Post code
```php
$faker->postcode(); // 140213
```

#### House Number
```php
$faker->houseNumber(); // 167
```

#### Street Name
```php
$faker->streetName(); // Șoseaua Decebal
```

#### Street Address
```php
$faker->streetAddress(); // Aleea Unirii nr. 8
```

#### Full Address
```php
$faker->fullAddress(); // Aleea Lucian Blaga nr. 139, 726350 Brăila
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Galben
```

#### Color Name
```php
$faker->colorName(); // Argintiu
```

## Company

#### Company
```php
$faker->company(); // Bucovina Mobila S.R.L.
```

#### CUI
Generates a Romanian fiscal identification code (CUI / CIF) of 8 or 9 digits, the last one being the control digit computed with the 753217532 key.
```php
$faker->cui(); // 940384660
```

#### VAT number
Generates a Romanian VAT number (cod de TVA): "RO" followed by a CUI.
```php
$faker->vat(); // RO14849937
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Romanian IBAN (ROkk + 4-letter bank code + 16 alphanumeric characters).
```php
$faker->iban(countryCode: 'RO', format: null); // RO19BRELQV02SSO1U9EI668Y
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Monica Matei
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Diana
```

#### Lastname
```php
$faker->lastName(); // Ion
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Ing.
```

#### CNP
Generates a Romanian personal numeric code (CNP), formatted as SYYMMDDJJNNNC.
```php
$faker->cnp(gender: 'F'); // 2380904055251
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0210275464
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0775423343
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0256621325
```

## Text

#### Words
```php
$faker->words(words: 3); // dintre potrivite unor
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Calitatea serviciilor rămâne un obiectiv central în întregul sector profesional. Fiecare proiect necesită o...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Gestionarea resurselor este un element esențial pentru performanța globală. Metodele de lucru evoluează în...
```
