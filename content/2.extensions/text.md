---
title: Text
description: Text extension for Xefi Faker PHP
---

Please be aware that the base package only provide latin text, if you want to have more specialized content please install a locale.

## Words

```php
$faker->words(words: 3); // varius lorem scelerisque
```

## Words As Array

```php
$faker->wordsAsArray(words: 3); // ['varius', 'Lorem', 'scelerisque.']
```

## Sentences

```php
$faker->sentences(sentences: 3); // Integer condimentum urna at lacus fermentum, nec sagittis purus venenatis. Praesent ...
```

## Sentences As Array

Each sentence is returned as an array of words:

```php
$faker->sentencesAsArray(sentences: 2); // [['Nulla', 'facilisi.'], ['Etiam', 'nec', 'ligula', 'felis.']]
```

## Paragraphs

```php
$faker->paragraphs(paragraphs: 3); // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc non mi al ...
```

## Paragraphs As Array

Each paragraph is returned as an array of sentences, each sentence being an array of words:

```php
$faker->paragraphsAsArray(paragraphs: 1); // [[['Nulla', 'facilisi.'], ['Etiam', 'nec', 'ligula', 'felis.'], ...]]
```
