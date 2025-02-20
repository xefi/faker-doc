---
title: Custom
description: Custom extension for Xefi Faker PHP
---

You can easily create a customized Faker extension. To do so, simply define a PHP class that extends the `Xefi\Faker\Extensions\Extension` class, and define the functions you wish to make available.

You also need to load your extensions into your project using the `faker()->resolveExtensions([ExtensionsArray])` method.

## Example
```php
use Xefi\Faker\Extensions\Extension;

class CustomExtension extends Extension
{
    public function customMethod(): mixed
    {
        return 'My custom method !';
    }
}
```
