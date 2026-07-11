---
repo: "freshworkstudio/ChileanBundle"
name: "ChileanBundle"
description: "A PHP composer package with Chilean validations, common variables, etc.  (RUT, IVA, ETC). Ready for Laravel 5. Grande chile ctm :)"
readmeQualityOk: true
url: "https://github.com/freshworkstudio/ChileanBundle"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 98
forks: 11
openIssues: 1
closedIssues: 10
watchers: 7
contributors: 4
recentReleases: 1
createdAt: "2014-08-06T22:25:49Z"
lastCommitAt: "2026-07-11T05:57:43Z"
lastReleaseAt: "2026-07-11T05:57:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 29
maintainers: ["gdespirito"]
openGraphImageUrl: "https://opengraph.githubassets.com/34be30e74d86606f627aa5488f59a3ce828016724b21756df684c13339e4c934/freshworkstudio/ChileanBundle"
---

</p>

# Chilean Bundle

A PHP composer package with Chilean validations, formatters and utilities.
Viva Chile Mier...

```php
use Freshwork\ChileanBundle\{Rut, Iva, Clp, Phone, Region};

Rut::check('12.345.678-5'); // true
Iva::add(10000); // 11900
Clp::format(1234567); // '$1.234.567'
Phone::check('+56 9 8765 4321'); // true
Region::Metropolitana->capital(); // 'Santiago'
```

## This package includes

| Feature | Class | Description |
|---|---|---|
| **R.U.T.** | `Rut` | Validation, formatting, parsing and generation of Chilean RUTs |
| **I.V.A.** | `Iva` | Chilean VAT (19%) constants and calculations |
| **Pesos (CLP)** | `Clp` | Format and parse Chilean peso amounts |
| **Phones** | `Phone` | Validate, normalize and format Chilean phone numbers |
| **Regions** | `Region` | Enum with the 16 regions of Chile (names, numerals, capitals) |
| **Comunas** | `Comuna` | Enum with the 346 comunas backed by their official CUT code |
| **Laravel** | — | `cl_rut` / `cl_phone` validation rules, Rule object, Facade and Eloquent cast |

## Requirements

* PHP 8.2+
* Laravel 10+ (optional, only for the Laravel integration — the test suite runs against Laravel 11 and 12)

> Using PHP 5.x/7.x…
