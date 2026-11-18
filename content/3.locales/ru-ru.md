---
title: Russian (Russia)
description: Russian (Russia) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-ru-ru
```

Be sure to setup faker with the `ru_RU` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('ru_RU');
```

## Address

#### Region
Returns a random federal subject (republic, krai, oblast or federal city).
```php
$faker->region(); // Удмуртская Республика
```

#### Region code
Returns a random two-digit federal subject code.
```php
$faker->regionCode(); // 74
```

#### City
```php
$faker->city(); // Омск
```

#### Post code
```php
$faker->postcode(); // 656100
```

#### House Number
```php
$faker->houseNumber(); // 90
```

#### Street Name
```php
$faker->streetName(); // ул. Энтузиастов
```

#### Street Address
```php
$faker->streetAddress(); // проезд Гоголя, д. 18
```

#### Full Address
```php
$faker->fullAddress(); // б-р Победы, д. 141, кв. 5, г. Санкт-Петербург, 190473
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Цвет морской волны
```

#### Color Name
```php
$faker->colorName(); // Перу
```

## Company

#### Company
```php
$faker->company(); // АО «Алтайские продукты»
```

#### Company INN
Returns a legal entity taxpayer number (ИНН, 10 digits with one check digit).
```php
$faker->companyInn(); // 7603957346
```

#### OGRN
Returns a primary state registration number of a legal entity (ОГРН, 13 digits).
```php
$faker->ogrn(); // 5096450692311
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Russia does not use IBAN: build an IBAN-shaped value from a BIK (9 digits) and an account number (20 digits).
```php
$faker->iban(countryCode: null, format: null); // RU1704935788815839023644139263735
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Василиса Иванова
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Ирина
```

#### Lastname
```php
$faker->lastName(); // Григорьева
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // проф.
```

#### Individual INN
Returns an individual taxpayer number (ИНН, 12 digits with two check digits).
```php
$faker->individualInn(); // 896603760788
```

#### SNILS
Returns a pension insurance number (СНИЛС) formatted as XXX-XXX-XXX YY.
```php
$faker->snils(); // 095-310-517 53
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 83847016904
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 89022772058
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 83244231826
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +7 952 237 84 59
```

## Text

#### Words
```php
$faker->words(words: 3); // внимания снижают данных
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Качество услуг остаётся главной целью для каждой современной компании. Процессы регулярно пересматриваются,...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Качество услуг остаётся главной целью для каждой современной компании. Каждый проект требует особого внимания...
```
