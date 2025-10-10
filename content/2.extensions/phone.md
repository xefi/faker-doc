---
title: Phone
description: Phone extension for Xefi Faker PHP
---

## Phone number

Please be aware that the base package only provide random fake phone numbers, if you want to have more specialized content please create your own formats (locales are coming soon).  
Format: Specify in a string the format you want, `{d}` for digit, `{l}` for letter, `{a}` for any. Other characters are used as-is. For example: `{d}{d}.{a}{a} {l}` gives `83.a2 k`.

```php
$faker->phoneNumber(format: null); // +562947933
```
