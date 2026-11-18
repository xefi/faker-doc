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
$faker->region(); // Нижегородская область
```

#### Region code
Returns a random two-digit federal subject code.
```php
$faker->regionCode(); // 23
```

#### City
```php
$faker->city(); // Хабаровск
```

#### Post code
```php
$faker->postcode(); // 620898
```

#### House Number
```php
$faker->houseNumber(); // 25
```

#### Street Name
```php
$faker->streetName(); // ш. Чайковского
```

#### Street Address
```php
$faker->streetAddress(); // пр-т Жукова, д. 58
```

#### Full Address
```php
$faker->fullAddress(); // проезд Ломоносова, д. 93, кв. 191, г. Улан-Удэ, Республика Бурятия, 670535
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Цвет морской волны
```

#### Color Name
```php
$faker->colorName(); // Небесно-голубой
```

## Company

#### Company
```php
$faker->company(); // ООО «Берёзка»
```

#### Company INN
Returns a legal entity taxpayer number (ИНН, 10 digits with one check digit).
```php
$faker->companyInn(); // 6392898263
```

#### OGRN
Returns a primary state registration number of a legal entity (ОГРН, 13 digits).
```php
$faker->ogrn(); // 1221552169090
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Russia does not use IBAN: build an IBAN-shaped value from a BIK (9 digits) and an account number (20 digits).
```php
$faker->iban(countryCode: null, format: null); // RU2404193207073664482730585434260
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Зоя Степанова
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Ксения
```

#### Lastname
```php
$faker->lastName(); // Егорова
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // проф.
```

#### Individual INN
Returns an individual taxpayer number (ИНН, 12 digits with two check digits).
```php
$faker->individualInn(); // 839461559768
```

#### SNILS
Returns a pension insurance number (СНИЛС) formatted as XXX-XXX-XXX YY.
```php
$faker->snils(); // 090-454-185 60
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 89522562711
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 89857793560
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 83568573797
```

## Text

#### Words
```php
$faker->words(words: 3); // требованиям улучшения исправления
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Команды работают вместе, чтобы достигать общих целей. Удовлетворённость клиентов зависит от качества...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Управление ресурсами является ключевым фактором общего успеха. Методы работы меняются вместе с потребностями...
```
