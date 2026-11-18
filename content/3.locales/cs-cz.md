---
title: Czech (Czechia)
description: Czech (Czechia) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-cs-cz
```

Be sure to setup faker with the `cs_CZ` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('cs_CZ');
```

## Address

#### Region
Returns a random Czech region (kraj).
```php
$faker->region(); // Královéhradecký kraj
```

#### City
```php
$faker->city(); // Ostrava
```

#### Post code
```php
$faker->postcode(); // 180 72
```

#### House Number
```php
$faker->houseNumber(); // 2571/13
```

#### Street Name
```php
$faker->streetName(); // Lidická
```

#### Street Address
```php
$faker->streetAddress(); // Jiráskova 1219/108
```

#### Full Address
```php
$faker->fullAddress(); // Slunečná 1598/16, 793 52 Brno
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Modrá
```

#### Color Name
```php
$faker->colorName(); // TmavěOranžová
```

## Company

#### Company
```php
$faker->company(); // Datová centra Morava a.s.
```

#### IČO
Generates a Czech company identification number (IČO): 8 digits with a valid modulo 11 check digit.
```php
$faker->ico(); // 21419361
```

#### VAT number
Generates a Czech VAT number (DIČ) of a legal entity: "CZ" followed by its IČO.
```php
$faker->vat(); // CZ70934797
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Generates a Czech IBAN (CZkk + 20 digits). The default BBAN is a 4-digit bank code, a 6-digit account prefix and a 10-digit account number passing the national modulo 11 check.
```php
$faker->iban(countryCode: 'CZ', format: null); // CZ8027000000000619666850
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Klára Bartošová
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Jitka
```

#### Lastname
```php
$faker->lastName(); // Horák
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Paní
```

#### Rodné číslo
Generates a Czech birth number (rodné číslo), formatted as YYMMDD/XXXX.
```php
$faker->rodneCislo(gender: 'F'); // 975430/7189
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 452050088
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 798811144
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 447128235
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +420 705 084 575
```

## Text

#### Words
```php
$faker->words(words: 3); // a dalšího rychle
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Otevřená komunikace mezi kolegy zvyšuje produktivitu i vzájemnou důvěru. Správa zdrojů je klíčovým prvkem...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Správa zdrojů je klíčovým prvkem celkové výkonnosti. Pracovní postupy se vyvíjejí podle potřeb a nových...
```
