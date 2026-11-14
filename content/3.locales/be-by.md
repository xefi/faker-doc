---
title: Belarusian (Belarus)
description: Belarusian locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-be-by
```

Be sure to setup faker with the `be_BY` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('be_BY');
```

## Address

#### Region
```php
$faker->region(); // Гомельская вобласць
```

#### City
```php
$faker->city(); // Жлобін
```

#### Post code
```php
$faker->postcode(); // 222144
```

#### House Number
```php
$faker->houseNumber(); // 34
```

#### Street Name

Adjective street names always come with "вул." so the grammatical gender agrees.

```php
$faker->streetName(); // пр-т Пятра Глебкі
```

#### Street Address
```php
$faker->streetAddress(); // вул. Цэнтральная, 185
```

#### Full Address
```php
$faker->fullAddress(); // вул. Янкі Купалы, 28, 220030, Мінск
```

## Colors

#### Safe Color Name

```php
$faker->safeColorName(); // Серабрысты
```

#### Color Name
```php
$faker->colorName(); // Індыга
```

## Company

#### Company
```php
$faker->company(); // ТАА «Мінскбудсэрвіс»
```

#### УНП (payer account number)

The 9 digit payer account number of a legal entity, with a valid check digit.

```php
$faker->unp(); // 292113015
```

## Financial

#### Iban

Please see [base method](/extensions/financial#iban) for details

```php
$faker->iban(countryCode: 'BY', format: 'See code'); // BY60XEPB01979826101994987820
```

## Person

Belarusian surnames often change with gender (Кавалёў, Кавалёва), so the surname always matches the requested gender.

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Кацярына Шыманская
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Любоў
```

#### Lastname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->lastName(gender: 'F'); // Кісялёва
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // спадарыня
```

## Text

#### Words

```php
$faker->words(words: 3); // замовы разглядаюцца тэрміны
```

#### Sentences

```php
$faker->sentences(sentences: 3); // Наша кампанія прапаноўвае кліентам якасныя паслугі па ўсёй тэрыторыі Рэспублікі Беларусь...
```

#### Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Дагавор вызначае правы і абавязкі бакоў, а таксама парадак разлікаў...
```
