---
repo: "orieg/php-judy"
name: "php-judy"
description: "PHP Extension for libJudy"
readmeQualityOk: true
url: "https://github.com/orieg/php-judy"
homepage: "http://pecl.php.net/package/Judy"
language: "PHP"
languages: ["PHP", "C"]
languagePcts: [58, 41]
topics: ["extension", "judy-arrays", "memory", "performance-optimization", "php", "php8", "sparse-arrays", "data-structures", "pecl"]
stars: 74
forks: 10
openIssues: 0
closedIssues: 21
watchers: 6
contributors: 8
recentReleases: 1
createdAt: "2010-08-13T18:05:05Z"
lastCommitAt: "2026-08-14T05:14:31Z"
lastReleaseAt: "2026-08-14T05:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["orieg", "remicollet"]
openGraphImageUrl: "https://opengraph.githubassets.com/af4cb7eb8fae0dfd5f05a85f27282a0b76286e2e1666de42e0bf8c44cf3dd694/orieg/php-judy"
---

# PHP Judy

**PHP Judy** - Extension for creating and accessing dynamic arrays

## Table of Contents

1. [Introduction](#introduction)
2. [Directory Contents](#directory-contents)
3. [Installation](#installation)
4. [Usage Examples](#usage-examples)
5. [Reporting Bugs](#reporting-bugs)
6. [Roadmap](#roadmap)

## Introduction

**php-judy** is an extension by Nicolas Brousse for the Judy C library. It is compatible with PHP 8.0 and newer.

- **PECL Package**: [http://pecl.php.net/package/Judy](http://pecl.php.net/package/Judy)
- **Packagist Package**: [https://packagist.org/packages/orieg/judy](https://packagist.org/packages/orieg/judy)
- **GitHub Repository**: [http://github.com/orieg/php-judy](http://github.com/orieg/php-judy)

A Judy array is a complex but very fast associative array data structure for storing and looking up values using integer or string keys. Unlike normal arrays, Judy arrays may be sparse; that is, they may have large ranges of unassigned indices.

- **Wikipedia**: [http://en.wikipedia.org/wiki/Judy_array](http://en.wikipedia.org/wiki/Judy_array)

The PHP extension is based on the Judy C library that implements a dynamic array. A Judy array consumes memory…
