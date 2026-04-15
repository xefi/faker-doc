---
title: Phone
description: Phone extension for Xefi Faker PHP
---

Please be aware that the base package only provide random fake phone numbers, if you want to have more specialized content please create your own formats (locales are coming soon).  

**Format syntax:**  
Use the following placeholders inside a format string:
- `{d}` → digit
- `{l}` → letter
- `{a}` → any character (digit or letter)
- `{separator}` → replaced by the separator argument
- Any other character is used literally

## Classic

### Phone number

```php
$faker->phoneNumber(format: null, separator: null, prefix: null); // TODO
```

### Indicatored Phone Number

```php
$faker->indicatoredPhoneNumber(format: null, separator: null); // TODO
```

### Spaced Phone Number

```php
$faker->spacedPhoneNumber(format: null, prefix: null); // TODO
```

### Spaced Indicatored Phone Number

```php
$faker->spacedIndicatoredPhoneNumber(format: null); // TODO
```

### Dotted Phone Number

```php
$faker->dottedPhoneNumber(format: null, prefix: null); // TODO
```

### Dotted Indicatored Phone Number

```php
$faker->dottedIndicatoredPhoneNumber(format: null); // TODO
```

### Dashed Phone Number

```php
$faker->dashedPhoneNumber(format: null, prefix: null); // TODO
```

### Dashed Indicatored Phone Number

```php
$faker->dashedIndicatoredPhoneNumber(format: null); // TODO
```

## Cell

### Cell Phone Number

```php
$faker->cellPhoneNumber(separator: null, prefix: null); // TODO
```

### Indicatored Cell Phone Number

```php
$faker->indicatoredCellPhoneNumber(separator: null); // TODO
```

### Spaced Cell Phone Number

```php
$faker->spacedCellPhoneNumber(prefix: null); // TODO
```

### Spaced Indicatored Cell Phone Number

```php
$faker->spacedIndicatoredCellPhoneNumber(); // TODO
```

### Dotted Cell Phone Number

```php
$faker->dottedCellPhoneNumber(prefix: null); // TODO
```

### Dotted Indicatored Cell Phone Number

```php
$faker->dottedIndicatoredCellPhoneNumber(); // TODO
```

### Dashed Cell Phone Number

```php
$faker->dashedCellPhoneNumber(prefix: null); // TODO
```

### Dashed Indicatored Cell Phone Number

```php
$faker->dashedIndicatoredCellPhoneNumber(); // TODO
```

## Landline

### Landline Phone Number

```php
$faker->landlinePhoneNumber(separator: null, prefix: null); // TODO
```

### Indicatored Landline Phone Number

```php
$faker->indicatoredLandlinePhoneNumber(separator: null); // TODO
```

### Spaced Landline Phone Number

```php
$faker->spacedLandlinePhoneNumber(prefix: null); // TODO
```

### Spaced Indicatored Landline Phone Number

```php
$faker->spacedIndicatoredLandlinePhoneNumber(); // TODO
```

### Dotted Landline Phone Number

```php
$faker->dottedLandlinePhoneNumber(prefix: null); // TODO
```

### Dotted Indicatored Landline Phone Number

```php
$faker->dottedIndicatoredLandlinePhoneNumber(); // TODO
```

### Dashed Landline Phone Number

```php
$faker->dashedLandlinePhoneNumber(prefix: null); // TODO
```

### Dashed Indicatored Landline Phone Number

```php
$faker->dashedIndicatoredLandlinePhoneNumber(); // TODO
```
