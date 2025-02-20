---
title: Custom
description: Custom extension for Xefi Faker PHP
---

Please be aware that the base package only provide latin text, if you want to have more specialized content please install a locale.

You can easily create a customized Faker extension. To do so, simply define a PHP class that extends the Xefi\Faker\Extensions\Extension class, and define the functions you wish to make available.

You also need to load your extensions into your project using the
```php
faker()->resolveExtensions([ExtensionsArray]) method.
``` 
method.
