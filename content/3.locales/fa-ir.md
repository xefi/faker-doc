---
title: Persian (Iran)
description: Persian (Iran) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-fa-ir
```

Be sure to setup faker with the `fa_IR` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('fa_IR');
```

## Address

#### Province
Returns a random province (استان).
```php
$faker->province(); // گیلان
```

#### City
```php
$faker->city(); // سمنان
```

#### Post code
```php
$faker->postcode(); // 4999987798
```

#### House Number
```php
$faker->houseNumber(); // 14
```

#### Street Name
```php
$faker->streetName(); // بزرگراه کارگر
```

#### Street Address
```php
$faker->streetAddress(); // بلوار دماوند، پلاک 56
```

#### Full Address
```php
$faker->fullAddress(); // اصفهان، بزرگراه ونک، پلاک 108، واحد 1، کد پستی 7495693041
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // سبزآبی
```

#### Color Name
```php
$faker->colorName(); // نارنجی تیره
```

## Company

#### Company
```php
$faker->company(); // شرکت ماهور پخش (سهامی خاص)
```

#### Shenase Melli
Returns a legal entity national identifier (شناسه ملی, 11 digits with one check digit).
```php
$faker->shenaseMelli(); // 14747969052
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an Iranian IBAN (شبا): 3-digit bank code followed by a 19-digit account number.
```php
$faker->iban(countryCode: 'IR', format: null); // IR380658082552779132744372
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // سارا رستمی
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // سمیرا
```

#### Lastname
```php
$faker->lastName(); // هاشمی
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // استاد
```

#### Code Melli
Returns an Iranian national code (کد ملی, 10 digits with one check digit).
```php
$faker->codeMelli(); // 1565395654
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 05195862314
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 09507554574
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 01317434753
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +98 26 1097 1019
```

## Text

#### Words
```php
$faker->words(words: 3); // شرکت شرکت‌ها شناسایی
```

#### Sentences
```php
$faker->sentences(sentences: 3); // کیفیت خدمات همچنان هدف اصلی هر شرکت است. مدیریت منابع عامل کلیدی موفقیت کلی است. چالش‌های روزانه با مدیریت...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // کیفیت خدمات همچنان هدف اصلی هر شرکت است. هر پروژه برای موفقیت به توجه ویژه و برنامه‌ریزی دقیق نیاز دارد....
```
