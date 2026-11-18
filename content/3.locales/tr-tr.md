---
title: Turkish (Turkey)
description: Turkish (Turkey) locale for Xefi Faker PHP
---

You need to require the locale to be able to use it
```bash
composer require --dev xefi/faker-php-locales-tr-tr
```

Be sure to setup faker with the `tr_TR` locale to be able to use this:

```php
$faker = new Xefi\Faker\Faker('tr_TR');
```

## Address

#### Province
Returns a random province (il).
```php
$faker->province(); // Antalya
```

#### Province code
Returns a random province plate code, from 01 to 81.
```php
$faker->provinceCode(); // 81
```

#### City
```php
$faker->city(); // İzmit
```

#### Post code
```php
$faker->postcode(); // 44996
```

#### House Number
```php
$faker->houseNumber(); // 197
```

#### Street Name
```php
$faker->streetName(); // Millet Caddesi
```

#### Street Address
```php
$faker->streetAddress(); // Papatya Caddesi No: 135
```

#### Full Address
```php
$faker->fullAddress(); // Menekşe Sokak No: 184 Daire: 28, 62292 Tunceli
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Lacivert
```

#### Color Name
```php
$faker->colorName(); // Açık Yeşil
```

## Company

#### Company
```php
$faker->company(); // Kardelen İlaç A.Ş.
```

#### VKN
Returns a tax identification number (Vergi Kimlik Numarası, 10 digits with one check digit).
```php
$faker->vkn(); // 8675298287
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns a Turkish IBAN: 5-digit bank code, a reserved 0 digit and a 16-digit account number.
```php
$faker->iban(countryCode: 'TR', format: null); // TR900005003024902592351986
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Damla Kara
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Melis
```

#### Lastname
```php
$faker->lastName(); // Aydın
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Dr.
```

#### TC Kimlik No
Returns a Turkish identity number (T.C. Kimlik No, 11 digits with two check digits).
```php
$faker->tcKimlikNo(); // 74945657490
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 02171939503
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 05415524711
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 02725532625
```

#### International format
```php
$faker->spacedIndicatoredPhoneNumber(); // +90 580 100 20 18
```

## Text

#### Words
```php
$faker->words(words: 3); // performansın aşılır iyileştirme
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Hizmet kalitesi her modern şirket için temel bir hedef olmaya devam ediyor. Kaynak yönetimi genel...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Hizmet kalitesi her modern şirket için temel bir hedef olmaya devam ediyor. Her proje başarıya ulaşmak için...
```
