---
title: Strings
description: Strings extension for Xefi Faker PHP
---

## Letter

```php
$faker->letter(); // c
```

## Shuffle String

```php
$faker->shuffleString(needle: 'my sentence to shuffle'); // ncfs  ehl eteutmenfyso
```

## Shuffle Array

```php
$faker->shuffleArray(needle: [1, 2, 3, 4, 5]); // [2, 1, 5, 3, 4]
```

## Convert Characters
String: `#` for digit, `?` for letter and `*` for any
```php
$faker->convertCharacters(string: '#?**'); // 7jm2
```

## Semver

```php
$faker->semver(); // 2.80.93
```

## Emoji

```php
$faker->emoji(); // 😄
```
