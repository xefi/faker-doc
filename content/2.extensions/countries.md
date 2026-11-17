---
title: Countries
description: Countries extension for Xefi Faker PHP
---

## Requirement

This extension is not included with the base faker php package, you'll need to require it:

```bash
composer require --dev xefi/faker-php-countries
```

## Country

```php
$faker->country() // Belarus
```

## Country code (ISO 3166-1 alpha-2)

```php
$faker->countryCodeISOAlpha2() // TG
```

## Country code (ISO 3166-1 alpha-3)

```php
$faker->countryCodeISOAlpha3() // SWE
```

Each method picks its own random country: the name and the codes returned by separate calls do not refer to the same country.
