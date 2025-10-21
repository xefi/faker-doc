---
title: DateTime
description: DateTime extension for Xefi Faker PHP
---

## Date Time

```php
$faker->dateTime(fromTimestamp: '-30 years', toTimestamp: 'now'); // DateTime { date: 2019-08-07 15:01:28.0 +00:00 }
```

## Timestamp

```php
$faker->timestamp(fromTimestamp: '-30 years', toTimestamp: 'now'); // 1584424687
```

## Timezone

```php
$faker->timezone(); // Europe/Stockholm
```
