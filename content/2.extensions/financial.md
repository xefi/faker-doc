---
title: Financial
description: Financial extension for Xefi Faker PHP
---

Please be aware that the base package only provide random fake iban, if you want to have more specialized content please install a locale.

## Iban

Country code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2  
Format: Specify in a string the format you want, `{d}` for digit, `{l}` for letter, `{a}` for any. For example: `{d}{d}{a}{a}{l}` gives `83a2k`

```php
$faker->iban(countryCode: null, format: null); // PX41711762752955497163783543
```
