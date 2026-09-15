---
repo: "Tomeriko96/polyglotr"
name: "polyglotr"
description: "R package to translate text"
readmeQualityOk: true
url: "https://github.com/Tomeriko96/polyglotr"
homepage: "https://tomeriko96.github.io/polyglotr/"
language: "R"
languages: ["R"]
languagePcts: [97]
topics: ["language", "r", "rpackage", "rstats", "translation", "google-translate", "googletranslate", "pons", "mymemory-api", "mymemorytranslator"]
stars: 45
forks: 4
openIssues: 1
closedIssues: 20
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2022-09-01T13:52:49Z"
lastCommitAt: "2026-09-15T08:54:58Z"
lastReleaseAt: "2026-09-15T08:42:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["Tomeriko96"]
openGraphImageUrl: "https://opengraph.githubassets.com/f79ae03f4d641a3663a488af7c4d035b370aed5a5d523266df478ebb711e1b37/Tomeriko96/polyglotr"
---

# polyglotr <a href="https://tomeriko96.github.io/polyglotr/"><img src="man/figures/hex-polyglotr.svg" align="right" height="138" alt="polyglotr" /></a>

R package for text translation via free APIs — no API keys needed for most services.

Supports [Google Translate](https://translate.google.com/), [Apertium](https://apertium.org/apy/), [MyMemory](https://mymemory.translated.net/), [PONS](https://en.pons.com/translate), [QCRI](https://www.hbku.edu.qa/en/qcri), and [Wikimedia Translation](https://translate.wmcloud.org/).

## Installation

```r
install.packages("polyglotr")

# development version
remotes::install_github("Tomeriko96/polyglotr")
```

## Usage

```r
library(polyglotr)

google_translate("Hello, world!", target_language = "fr")

apertium_translate("Hello, world!", target_language = "es", source_language = "en")
```

Translate multiple texts into multiple languages at once:

```r
texts <- c("Hello, how are you?", "I love programming!", "This is a test.")
languages <- c("es", "fr", "de")

create_translation_table(texts, languages)

#>        Original_word                     es                          fr                       de
#> 1 Hello, how are you?     ¿Hola, cómo…
