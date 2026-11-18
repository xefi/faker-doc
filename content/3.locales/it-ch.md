---
title: Italian (Switzerland)
description: Italian (Switzerland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-it-ch
```

Be sure to setup faker with the `it_CH` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('it_CH');
```

## Address

#### Region
```php
$faker->region(); // Svizzera romanda
```

#### Province
```php
$faker->province(); // Uri
```

#### Province code
Returns a random two-letter canton code.
```php
$faker->provinceCode(); // UR
```

#### City
```php
$faker->city(); // Caslano
```

#### Post code
```php
$faker->postcode(); // 6719
```

#### House Number
```php
$faker->houseNumber(); // 69
```

#### Street Name
```php
$faker->streetName(); // Largo Stefano Franscini
```

#### Street Address
```php
$faker->streetAddress(); // Largo Canova 25
```

#### Full Address
```php
$faker->fullAddress(); // Riva Generoso 72, 6587 Lugano
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Blu
```

#### Color Name
```php
$faker->colorName(); // Mattone
```

## Company

#### Company
```php
$faker->company(); // Ticinese Orologi SA
```

#### Company number
Returns a Swiss enterprise identification number (UID) with a valid check digit, such as "CHE-123.456.789".
```php
$faker->companyNumber(); // CHE-107.042.170
```

#### VAT number
Returns a Swiss VAT number, such as "CHE-123.456.789 IVA".
```php
$faker->vat(); // CHE-108.655.961 IVA
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns a Swiss IBAN: a 5-digit bank clearing number followed by a 12-digit account number.
```php
$faker->iban(countryCode: null, format: null); // CH2174192983845878599
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Alessia Delcò
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Marta
```

#### Lastname
```php
$faker->lastName(); // Pellandini
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Prof.ssa
```

#### AVS
Returns a Swiss social security number (AVS) with a valid EAN-13 check digit.
```php
$faker->avs(formatted: false); // 7568160386066
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0818782348
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0776346122
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0916155036
```

## Text

#### Words
```php
$faker->words(words: 3); // favorisce lavoro precise
```

#### Sentences
```php
$faker->sentences(sentences: 3); // I metodi di lavoro cambiano secondo le esigenze e le tecnologie disponibili. La flessibilità permette alle...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // La gestione delle risorse è un elemento chiave del successo. I metodi di lavoro cambiano secondo le esigenze...
```
