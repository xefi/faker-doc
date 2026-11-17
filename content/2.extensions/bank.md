---
title: Bank
description: Bank extension for Xefi Faker PHP
---

## Requirement

This extension is not included with the base faker php package, you'll need to require it:

```bash
composer require --dev xefi/faker-php-bank
```

## Iban

This extension replaces the [base iban method](/extensions/financial#iban) and keeps its signature.  
Without a format, it uses the real IBAN length of the country (70+ countries supported, 24 digits otherwise). With a format, it behaves like the base method.

Country code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2  
Format: Specify in a string the format you want, `{d}` for digit, `{l}` for letter, `{a}` for any.

```php
$faker->iban(countryCode: null, format: null) // FI6563858614887543
$faker->iban(countryCode: 'FR', format: null) // FR8553313931001119160278740
```

## Swift code

Country code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2  
Real codes are returned for FR, DE, GB, US, IT and ES. Other countries get a randomly generated code.

```php
$faker->swiftCode(countryCode: null) // POPUESMM
$faker->swiftCode(countryCode: 'DE') // BYLADEMA
```

## Bank name

Real bank names are returned for FR, DE, GB, US, IT and ES. Other countries get a generic name such as `National Bank`.

```php
$faker->bankName(countryCode: 'US') // Bank of America
$faker->bankName(countryCode: 'FR') // Banque de France
```

## Credit card number

Generates a number with a valid Luhn checksum.  
Supported types: `visa`, `mastercard`, `american_express`, `discover`, `jcb`, `diners_club`.

```php
$faker->creditCardNumber(type: null) // 6461208455924256
$faker->creditCardNumber(type: 'visa') // 4686842208763
```

## Credit card expiration date

Returns a `MM/YY` date, in the next 5 years when `valid` is `true`, in the past 10 years otherwise.

```php
$faker->creditCardExpirationDate(valid: true) // 12/30
$faker->creditCardExpirationDate(valid: false) // 05/16
```

## CVV

Length must be 3 or 4.

```php
$faker->cvv(length: 3) // 438
$faker->cvv(length: 4) // 6034
```
