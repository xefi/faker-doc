---
title: DateTime
description: DateTime extension for Xefi Faker PHP
---

The `fromTimestamp` and `toTimestamp` bounds accept a `DateTimeInterface` — so both `DateTime` and `DateTimeImmutable` — a unix timestamp as an `int`, or any string understood by [strtotime](https://www.php.net/manual/en/function.strtotime.php).

```php
$faker->timestamp(fromTimestamp: new DateTimeImmutable('2020-01-01'), toTimestamp: 1735689600); // 1687945312
```

## Date Time

```php
$faker->dateTime(fromTimestamp: '-30 years', toTimestamp: 'now'); // DateTime { date: 2019-08-07 15:01:28.0 +00:00 }
```

## Date Time Immutable

```php
$faker->dateTimeImmutable(fromTimestamp: '-30 years', toTimestamp: 'now'); // DateTimeImmutable { date: 2019-08-07 15:01:28.0 +00:00 }
```

## Timestamp

```php
$faker->timestamp(fromTimestamp: '-30 years', toTimestamp: 'now'); // 1584424687
```

## Timezone

```php
$faker->timezone(); // Europe/Stockholm
```
