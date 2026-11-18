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
$faker->region(); // Region Sjælland
```

#### City
```php
$faker->city(); // Sønderborg
```

#### Post code
```php
$faker->postcode(); // 1223
```

#### House Number
```php
$faker->houseNumber(); // 110
```

#### Street Name
```php
$faker->streetName(); // Klokkerstræde
```

#### Street Address
```php
$faker->streetAddress(); // Egevej 231
```

#### Full Address
```php
$faker->fullAddress(); // Havnevejen 211, 4746 Hjørring
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Sort
```

#### Color Name
```php
$faker->colorName(); // Skovgrøn
```

## Company

#### Company
```php
$faker->company(); // Limfjordens Rederi A/S
```

#### Company number
Get a random CVR number passing the modulus 11 check.
```php
$faker->companyNumber(); // 40409149
```

#### VAT number
Get a random VAT number (momsnummer), built on a CVR number.
```php
$faker->vat(); // DK14617167
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Get a random IBAN, a Danish one (four digits registration number and ten digits account number) by default.
```php
$faker->iban(countryCode: null, format: null); // DK0266456257173686
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Malene Christiansen
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Ida
```

#### Lastname
```php
$faker->lastName(); // Frederiksen
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Prof.
```

#### CPR
Get a random CPR number (personnummer) whose last digit is odd for men and even for women.
```php
$faker->cpr(gender: 'F', formatted: false); // 3006524906
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 81672675
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 53030636
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 31889979
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +45 42 20 57 12
```

## Text

#### Words
```php
$faker->words(words: 3); // et god finde
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Hvert projekt kræver særlig opmærksomhed for at sikre et godt resultat. Arbejdsmetoderne udvikler sig i takt...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Kvaliteten af ydelserne er fortsat et centralt mål i erhvervslivet. Hvert projekt kræver særlig opmærksomhed...
```
