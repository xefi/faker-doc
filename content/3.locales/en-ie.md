---
title: English (Ireland)
description: English (Ireland) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-en-ie
```

Be sure to setup faker with the `en_IE` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('en_IE');
```

## Address

#### Province
```php
$faker->province(); // Connacht
```

#### County
```php
$faker->county(); // Westmeath
```

#### City
```php
$faker->city(); // Sligo
```

#### Post code
```php
$faker->postcode(); // V93 AK15
```

#### House Number
```php
$faker->houseNumber(); // 173
```

#### Street Name
```php
$faker->streetName(); // O'Connell Drive
```

#### Street Address
```php
$faker->streetAddress(); // 164 Ormond Crescent
```

#### Full Address
```php
$faker->fullAddress(); // 131 Thomas Row, Portlaoise, Co. Laois, R32 N72Y
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Maroon
```

#### Color Name
```php
$faker->colorName(); // Beige
```

## Company

#### Company
```php
$faker->company(); // Midlands Peat Products Ltd
```

#### Company number
Generates a Companies Registration Office (CRO) number.
```php
$faker->companyNumber(); // 565974
```

#### VAT number
Generates an Irish VAT number ("IE" + 7 digits + check letter + optional letter) with a valid modulus 23 check letter.
```php
$faker->vat(newFormat: true); // IE9342967EG
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates an Irish IBAN: 4-letter bank code, 6-digit sort code and 8-digit account number.
```php
$faker->iban(countryCode: null, format: null); // IE37EBSI93921869254281
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Orla Gallagher
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Ailbhe
```

#### Lastname
```php
$faker->lastName(); // Murray
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Miss
```

#### PPSN
Generates a Personal Public Service Number (PPSN) with a valid modulus 23 check character.
```php
$faker->ppsn(newFormat: true); // 6962849UA
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 0861908984
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 0860931811
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 0212367896
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +353 91 302 622
```

## Text

#### Words
```php
$faker->words(words: 3); // a arrangements and
```

#### Sentences
```php
$faker->sentences(sentences: 3); // The programme is reviewed every spring to reflect new needs. Labour costs and travel expenses are reviewed...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Every organisation needs a clear plan and a good sense of humour. Teams in every county share their progress...
```
