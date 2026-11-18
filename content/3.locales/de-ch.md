---
title: German (Switzerland)
description: German (Switzerland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-de-ch
```

Be sure to setup faker with the `de_CH` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('de_CH');
```

## Address

#### Region
```php
$faker->region(); // Italienische Schweiz
```

#### Province
```php
$faker->province(); // Genf
```

#### Province code
Returns a random two-letter canton code.
```php
$faker->provinceCode(); // LU
```

#### City
```php
$faker->city(); // Rapperswil
```

#### House Number
```php
$faker->houseNumber(); // 83
```

#### Street Name
```php
$faker->streetName(); // Aaregasse
```

#### Street Address
```php
$faker->streetAddress(); // Furkagasse 147
```

#### Post code
```php
$faker->postcode(); // 1206
```

#### Full Address
```php
$faker->fullAddress(); // Limmatallee 47, 7346 Köniz
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Grün
```

#### Color Name
```php
$faker->colorName(); // Schnee
```

## Company

#### Company
```php
$faker->company(); // Matterhorn Industries
```

#### Company number
Returns a Swiss enterprise identification number (UID) with a valid check digit, such as "CHE-123.456.789".
```php
$faker->companyNumber(); // CHE-144.753.861
```

#### VAT number
Returns a Swiss VAT number, such as "CHE-123.456.789 MWST".
```php
$faker->vat(); // CHE-495.096.561 MWST
```

#### Handelsregisternummer
Returns a commercial register number in the legacy format, such as "CH-020.3.012.345-6".
```php
$faker->handelsregisternummer(); // CH-243.2.133.643-0
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. 
```php
$faker->iban(countryCode: null, format: null); // CH9036174312274496636
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Ruth Roth
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Tanja
```

#### Lastname
```php
$faker->lastName(); // Imhof
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Dr.
```

#### AVS
Returns a Swiss social security number (AHV) with a valid EAN-13 check digit.
```php
$faker->avs(formatted: false); // 7562932259411
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0436644870
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0778052426
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0434373180
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +41 79 022 14 58
```

## Text

#### Words
```php
$faker->words(words: 3); // bleibt schnelle strategien
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Tägliche Herausforderungen werden durch Teamarbeit und innovative Lösungen überwunden. Regelmässige...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Ressourcenmanagement ist essentiell für die Erreichung organisatorischer Ziele. Kontinuierliche Verbesserung...
```
