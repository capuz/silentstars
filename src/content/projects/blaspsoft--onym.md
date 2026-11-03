---
repo: "Blaspsoft/onym"
name: "onym"
description: "📂 🎨 A flexible Laravel package for generating structured, unique, and customizable filenames using various strategies."
readmeQualityOk: true
url: "https://github.com/Blaspsoft/onym"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["file-management", "filename-conversion", "filenames", "generator", "hash", "laravel", "laravel-framework", "laravel-package", "php", "random"]
stars: 123
forks: 10
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2025-03-04T09:53:14Z"
lastCommitAt: "2026-11-03T11:14:52Z"
lastReleaseAt: "2026-11-03T11:15:06Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 24
maintainers: ["deemonic", "SimonBarrettACT"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aa4202d832692356068b61de5827efbd64004c579314f010fae9ece8102520c/Blaspsoft/onym"
---

# Onym - Flexible Filename Generator

A flexible Laravel package for generating filenames using various strategies and options.

## 🚀 Features

- ✅ **Flexible Filename Generation** – Generate filenames dynamically using various strategies.
- 🎲 **Multiple Strategies** – Supports `random`, `uuid`, `timestamp`, `date`, `numbered`, `slug`, and `hash`.
- 🔧 **Customizable Output** – Specify filename, extension, and additional formatting options.
- 🎯 **Laravel-Friendly** – Designed to work seamlessly with Laravel's filesystem and configuration.
- 📂 **Human-Readable & Unique Names** – Ensures filenames are structured, collision-free, and easy to understand.
- ⚙️ **Configurable Defaults** – Define global settings in `config/onym.php` for consistency across your application.
- 🔌 **Extensible & Developer-Friendly** – Easily add custom filename strategies or modify existing ones.

## Installation

You can install the package via composer:

```bash
composer require blaspsoft/onym
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="onym-config"
```

## Usage

### Available Strategies

### Random Strategy

Generates a random string of characters for the…
