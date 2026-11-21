---
repo: "kslazarev/numbers_and_words"
name: "numbers_and_words"
description: "Convert numbers to words using I18N."
readmeQualityOk: true
url: "https://github.com/kslazarev/numbers_and_words"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 336
forks: 121
openIssues: 12
closedIssues: 83
watchers: 13
contributors: 38
recentReleases: 0
createdAt: "2011-07-27T14:53:16Z"
lastCommitAt: "2026-11-21T13:34:00Z"
lastReleaseAt: "2020-06-06T08:51:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 38
maintainers: ["dblock", "bardrop"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0898481778e4a8d0376215f61fd4ad7ab52f6874aec1eafa366db8e16ede7f1/kslazarev/numbers_and_words"
---

# numbers_and_words

Spell out numbers in several languages using the I18n gem.

Перевод чисел в слова при помощи библиотеки I18n.

Convertit les nombres en lettres en utilisant la librairie I18n.

Számok betűvel írva az I18n könyvtár segítségével.

I18n kütüphanesi ile sayıları yazıya çevirir.

Soletra números em vários idiomas utilizando a biblioteca I18n.

Deletrea números en varios idiomas utilizando la gema I18n.

## Installation / Установка / Installation

```
gem install numbers_and_words
```

Or add it to your Gemfile:

```ruby
gem 'numbers_and_words'
```

## Usage / Использование / Utilisation

Call `to_words` on an integer, a float or an array within the locale of your choice.

```ruby
require 'numbers_and_words'

I18n.with_locale(:en) { 42.to_words }
# => "forty-two"

I18n.with_locale(:es) { 42.to_words }
# => "cuarenta y dos"

I18n.with_locale(:ru) { 42.to_words }
# => "сорок два"

I18n.with_locale(:fr) { 42.to_words }
# => "quarante-deux"

I18n.with_locale(:de) { 42.to_words }
# => "zweiundvierzig"

I18n.with_locale(:en) { [1, 2, 3].to_words }
# => ["one", "two", "three"]

I18n.with_locale(:en) { 21.77.to_words }
# => "twenty-one and seventy-seven hundredths"
```
