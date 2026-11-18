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
$faker->region(); // Nord-Est
```

#### County
Returns a random Romanian county (județ) as [code => name], e.g. ['CJ' => 'Cluj'].
```php
$faker->county(); // {"AG":"Argeș"}
```

#### City
```php
$faker->city(); // Focșani
```

#### Post code
```php
$faker->postcode(); // 078389
```

#### House Number
```php
$faker->houseNumber(); // 175
```

#### Street Name
```php
$faker->streetName(); // Splaiul Vasile Alecsandri
```

#### Street Address
```php
$faker->streetAddress(); // Strada Primăverii nr. 24
```

#### Full Address
```php
$faker->fullAddress(); // Piața Constantin Brâncuși nr. 178, 456291 Cluj-Napoca
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Măsliniu
```

#### Color Name
```php
$faker->colorName(); // Auriu
```

## Company

#### Company
```php
$faker->company(); // Banatul Energie S.A.
```

#### CUI
Generates a Romanian fiscal identification code (CUI / CIF) of 8 or 9 digits, the last one being the control digit computed with the 753217532 key.
```php
$faker->cui(); // 371350052
```

#### VAT number
Generates a Romanian VAT number (cod de TVA): "RO" followed by a CUI.
```php
$faker->vat(); // RO959941230
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Romanian IBAN (ROkk + 4-letter bank code + 16 alphanumeric characters).
```php
$faker->iban(countryCode: 'RO', format: null); // RO44UGBI2XVB7MQPW28LJFM6
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Corina Dobre
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Elena
```

#### Lastname
```php
$faker->lastName(); // Dumitru
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Prof.
```

#### CNP
Generates a Romanian personal numeric code (CNP), formatted as SYYMMDDJJNNNC.
```php
$faker->cnp(gender: 'F'); // 6040902021324
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0211488348
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0784025707
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0310066634
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +40 21 927 9097
```

## Text

#### Words
```php
$faker->words(words: 3); // o reduc colectivă
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Strategiile de îmbunătățire continuă cresc eficiența și reduc riscurile. Programele de formare personalizate...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Calitatea serviciilor rămâne un obiectiv central în întregul sector profesional. Fiecare proiect necesită o...
```
