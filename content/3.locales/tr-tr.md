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
$faker->province(); // Iğdır
```

#### Province code
Returns a random province plate code, from 01 to 81.
```php
$faker->provinceCode(); // 69
```

#### City
```php
$faker->city(); // Kahramanmaraş
```

#### Post code
```php
$faker->postcode(); // 48799
```

#### House Number
```php
$faker->houseNumber(); // 84
```

#### Street Name
```php
$faker->streetName(); // Fevzi Çakmak Caddesi
```

#### Street Address
```php
$faker->streetAddress(); // Güneş Caddesi No: 154
```

#### Full Address
```php
$faker->fullAddress(); // Akasya Bulvarı No: 163 Daire: 9, 01483 Adana
```

## Colors

#### Safe Color Name
```php
$faker->safeColorName(); // Zeytin Yeşili
```

#### Color Name
```php
$faker->colorName(); // Deniz Yeşili
```

## Company

#### Company
```php
$faker->company(); // Kardelen İlaç A.Ş.
```

#### VKN
Returns a tax identification number (Vergi Kimlik Numarası, 10 digits with one check digit).
```php
$faker->vkn(); // 7367222328
```

## Financial

#### Iban
Please see [base method](/extensions/financial#iban) for details. Returns a Turkish IBAN: 5-digit bank code, a reserved 0 digit and a 16-digit account number.
```php
$faker->iban(countryCode: 'TR', format: null); // TR920007601088425263658424
```

## Person

#### Name
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->name(gender: 'F'); // Yasemin Doğan
```

#### Firstname
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->firstName(gender: 'F'); // Fatma
```

#### Lastname
```php
$faker->lastName(); // Kara
```

#### Title
```php
// Gender: null(both), "M" (male) or "F" (female)
$faker->title(gender: 'F'); // Av.
```

#### TC Kimlik No
Returns a Turkish identity number (T.C. Kimlik No, 11 digits with two check digits).
```php
$faker->tcKimlikNo(); // 18496646060
```

## Phone

Please see [base methods](/extensions/phone) for every format variant.

#### Phone number
```php
$faker->phoneNumber(); // 02362330383
```

#### Cell phone number
```php
$faker->cellPhoneNumber(); // 05821695666
```

#### Landline phone number
```php
$faker->landlinePhoneNumber(); // 03012528312
```

## Text

#### Words
```php
$faker->words(words: 3); // arasındaki artırır ilerlemenin
```

#### Sentences
```php
$faker->sentences(sentences: 3); // Esneklik, kurumların rekabetçi ve yenilikçi kalmasını sağlar. Sürekli iyileştirme stratejileri riskleri...
```

#### Paragraphs
```php
$faker->paragraphs(paragraphs: 3); // Hizmet kalitesi her modern şirket için temel bir hedef olmaya devam ediyor. Her proje başarıya ulaşmak için...
```
