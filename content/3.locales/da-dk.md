---
title: Danish (Denmark)
description: Danish (Denmark) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-da-dk
```

Be sure to setup faker with the `da_DK` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('da_DK');
```

## Address

#### Region
```php
$faker->region(); // Region Syddanmark
```

#### City
```php
$faker->city(); // Holstebro
```

#### Post code
```php
$faker->postcode(); // 3863
```

#### House Number
```php
$faker->houseNumber(); // 134
```

#### Street Name
```php
$faker->streetName(); // Klokkervej
```

#### Street Address
```php
$faker->streetAddress(); // Torvegade 73
```

#### Full Address
```php
$faker->fullAddress(); // Stationsvej 105, 4670 Fredericia
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Limegrøn
```

#### Color Name
```php
$faker->colorName(); // Havgrøn
```

## Company

#### Company
```php
$faker->company(); // Pedersen VVS ApS
```

#### Company number
Get a random CVR number passing the modulus 11 check.
```php
$faker->companyNumber(); // 40421890
```

#### VAT number
Get a random VAT number (momsnummer), built on a CVR number.
```php
$faker->vat(); // DK53492789
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Danish one (four digits registration number and ten digits account number) by default.
```php
$faker->iban(countryCode: null, format: null); // DK0790155694201677
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Anna Olsen
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Karoline
```

#### Lastname
```php
$faker->lastName(); // Thomsen
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Dr.
```

#### CPR
Get a random CPR number (personnummer) whose last digit is odd for men and even for women.
```php
$faker->cpr(gender: 'F', formatted: false); // 3110109988
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 40353245
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 61134293
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 98014899
```

## Text

#### Words
```php
$faker->words(words: 3); // for træffes gør
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Kvaliteten af ydelserne er fortsat et centralt mål i erhvervslivet. Nøgletal bruges til at måle resultaterne...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Kvaliteten af ydelserne er fortsat et centralt mål i erhvervslivet. Hvert projekt kræver særlig opmærksomhed...
```
