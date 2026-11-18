---
title: Finnish (Finland)
description: Finnish (Finland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fi-fi
```

Be sure to setup faker with the `fi_FI` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fi_FI');
```

## Address

#### Region
Returns a random Finnish region (maakunta).
```php
$faker->region(); // Keski-Suomi
```

#### City
```php
$faker->city(); // Nurmijärvi
```

#### Post code
```php
$faker->postcode(); // 20944
```

#### House Number
```php
$faker->houseNumber(); // 98
```

#### Street Name
```php
$faker->streetName(); // Järvipolku
```

#### Street Address
```php
$faker->streetAddress(); // Runeberginkatu 119 D 38
```

#### Full Address
```php
$faker->fullAddress(); // Kalevanpolku 65, 31778 Nurmijärvi
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Valkoinen
```

#### Color Name
```php
$faker->colorName(); // Hiekanruskea
```

## Company

#### Company
```php
$faker->company(); // Virtasen Putki Ay
```

#### Y-tunnus
Generates a Finnish business ID (Y-tunnus), formatted as 1234567-8 with a valid modulo 11 check digit.
```php
$faker->yTunnus(); // 6042578-0
```

#### VAT number
Generates a Finnish VAT number (ALV-numero): "FI" followed by the Y-tunnus without its hyphen.
```php
$faker->vat(); // FI06547517
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Finnish IBAN (FIkk + 14 digits). The default BBAN is a 6-digit bank and branch code followed by a 7-digit account number and its Luhn check digit.
```php
$faker->iban(countryCode: 'FI', format: null); // FI3547572851753692
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Linnea Nieminen
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Johanna
```

#### Lastname
```php
$faker->lastName(); // Väisänen
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Maisteri
```

#### Henkilötunnus
Generates a Finnish personal identity code (henkilötunnus), formatted as DDMMYYCZZZQ.
```php
$faker->henkilotunnus(gender: 'F'); // 020201A0260
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 061628378
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0444436271
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 039405991
```

## Text

#### Words
```php
$faker->words(words: 3); // kehittyvät sekä yhteisön
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Prosesseja tarkastellaan säännöllisesti, jotta tulokset paranisivat ja markkinoiden vaatimuksiin voitaisiin...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Palvelujen laatu on edelleen keskeinen tavoite koko alalla. Jokainen projekti vaatii huolellista suunnittelua...
```
