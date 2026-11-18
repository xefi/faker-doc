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
$faker->province(); // اصفهان
```

#### City
```php
$faker->city(); // بیرجند
```

#### Post code
```php
$faker->postcode(); // 9645990189
```

#### House Number
```php
$faker->houseNumber(); // 159
```

#### Street Name
```php
$faker->streetName(); // بلوار فرشته
```

#### Street Address
```php
$faker->streetAddress(); // خیابان ابن سینا، پلاک 132
```

#### Full Address
```php
$faker->fullAddress(); // تهران، بزرگراه دماوند، پلاک 5، واحد 19، کد پستی 3337863597
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // ارغوانی
```

#### Color Name
```php
$faker->colorName(); // آلویی
```

## Company

#### Company
```php
$faker->company(); // شرکت کاوش داده (سهامی خاص)
```

#### Shenase Melli
Returns a legal entity national identifier (شناسه ملی, 11 digits with one check digit).
```php
$faker->shenaseMelli(); // 10198266374
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns an Iranian IBAN (شبا): 3-digit bank code followed by a 19-digit account number.
```php
$faker->iban(countryCode: 'IR', format: null); // IR940043959638588254342083
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // آزاده احمدی
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // ستاره
```

#### Lastname
```php
$faker->lastName(); // طاهری
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // دکتر
```

#### Code Melli
Returns an Iranian national code (کد ملی, 10 digits with one check digit).
```php
$faker->codeMelli(); // 3895068322
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 09101682478
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 09191346772
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 02616353150
```

## Text

#### Words
```php
$faker->words(words: 3); // موفقیت به اولویت
```

#### Sentences
```php
$faker->sentences(sentences: 3); // هر پروژه برای موفقیت به توجه ویژه و برنامه‌ریزی دقیق نیاز دارد. ارتباط مؤثر میان کارکنان بهره‌وری را افزایش...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // مدیریت منابع عامل کلیدی موفقیت کلی است. روش‌های کار با تغییر نیازها و فناوری‌ها تحول می‌یابند. انعطاف‌پذیری...
```
