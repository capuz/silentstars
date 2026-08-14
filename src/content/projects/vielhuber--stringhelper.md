---
repo: "vielhuber/stringhelper"
name: "stringhelper"
description: "⛏️ Collection of string related functions in php. ⛏️"
readmeQualityOk: true
url: "https://github.com/vielhuber/stringhelper"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-06-19T20:17:53Z"
lastCommitAt: "2026-08-14T05:15:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 58
maintainers: ["vielhuber"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddd5ec6b10d5ecd10d8d88cb432cdfd106314fbb026bbb9695716671c0e1a400/vielhuber/stringhelper"
---

# ⛏️ stringhelper ⛏️

## motivation

this package is a collection of various helpers for string manipulation, validation, and utility functions designed to simplify the life of php developers. it streamlines tasks like checking variable existence, comparing values, and handling dates, urls, and emails. this tool enhances efficiency by offering concise, reusable methods for everyday coding challenges.

## installation

```
composer require vielhuber/stringhelper
```

## usage

```php
// check existence
if (__x($var)) { }
if (__x(@$var)) { }

// check non-existence
if (__nx($var)) { }
if (__nx(@$var)) { }

// check existence (without stfu-operator)
if (__rx($var)) { }
if (__fx(fn() => $var)) { }
if (__fx(fn()=>$var) { }
if (__fx(fn()=>$var['foo']['bar']['baz']) { }
if (__fx(fn()=>$var()) { }
if (__fx(function () use (&$var) { return $var['foo']['bar']['baz']; })) { } // php <7.4

__rx($var) // false
__rx($var['foo']['bar']['baz']) // false (works with undefined variables, because of pass by reference
__nrx($var) // true
// be aware that undefined variables are defined as null by php after the check:
array_key_exists('foo', get_defined_vars()); // false
__rx($foo);…
