---
title: Images
description: Images extension for Xefi Faker PHP
---

## Requirement

This extension is not included with the base faker php package, you'll need to require it:

```bash
composer require --dev xefi/faker-php-images
```

## Image

Returns a [Image](https://github.com/Intervention/image/blob/develop/src/Image.php) object from the intervention/image package ([documentation](https://image.intervention.io/v3)).

Example : ![1280 x 720 example](/img/images-extension-1280x720.png)

```php
$faker->image(width: 1280, height: 720, backgroundColor: '#cccccc', textColor: '#333333');

// Examples for saving the image
$image = $faker->image();
$image->toPng()->save('images/foo.png');
```

## Image URL

```php
$faker->imageUrl(width: 1280, height: 720); // https://placehold.co/1280x720
```
