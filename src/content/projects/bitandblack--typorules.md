---
repo: "BitAndBlack/typorules"
name: "typorules"
description: "Typographic improvements for professional-looking and easy-to-read texts written in PHP."
url: "https://github.com/BitAndBlack/typorules"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2024-04-30T12:17:36Z"
lastCommitAt: "2026-07-03T06:26:09Z"
lastReleaseAt: "2026-05-07T10:45:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 65
maintainers: ["Moskito89"]
openGraphImageUrl: "https://opengraph.githubassets.com/484eb98e0ecbcfcd1ee866af2ac5a9d2caf39f6dea2f48d020ca1c64fb76fcb2/BitAndBlack/typorules"
---

# Bit&Black TypoRules

Typographic improvements for professional-looking and easy-to-read texts written in PHP.

## TOC

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Using a single rule](#using-a-single-rule)
    -   [Using a rule set](#using-a-rule-set)
-   [Rules existing](#rules-existing)
    -   [Customization](#customization)
-   [Rule sets existing](#rule-sets-existing)
    -   [Customization](#customization-1)
-   [Display and check changes](#display-and-check-changes)
-   [Thanks](#thanks)
-   [Help](#help)

## Installation

This library is available for the use with [Composer](https://packagist.org/packages/bitandblack/typorules). Add it to your project by running `$ composer require bitandblack/typorules`.

## Usage

The Bit&Black TypoRules library comes with a lot of rules that help achieve a better typography. In addition, there are rule sets providing multiple rules at once. 

### Using a single rule

A single rule can be used like that:

```php
<?php

use BitAndBlack\TypoRules\Rule\RemoveDuplicatedWhitespaceRule;

$content = 'This is  my    sentence.';

$removeDuplicatedWhitespaceRule = new RemoveDuplicatedWhitespaceRule();

/**
 * This will return…
