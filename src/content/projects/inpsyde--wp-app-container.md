---
repo: "inpsyde/wp-app-container"
name: "wp-app-container"
description: "DI Container and related tools to be used at website level."
url: "https://github.com/inpsyde/wp-app-container"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["dependency-injection", "dependency-injection-container", "dic", "pimple", "wordpress", "wp"]
stars: 41
forks: 3
openIssues: 1
closedIssues: 2
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2020-04-24T12:02:29Z"
lastCommitAt: "2026-06-24T06:38:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 73
undervaluedScore: 29
maintainers: ["gmazzap", "daniloalvess", "dottxado"]
openGraphImageUrl: "https://opengraph.githubassets.com/691b38c61a59143b3deb268bd0d6f523c472c8fe8335f3eb281b27374eb725e4/inpsyde/wp-app-container"
---

# WP App Container

_DI Container and related tools to be used at website level_.

![PHP Quality Assurance](https://github.com/inpsyde/wp-app-container/workflows/PHP%20Quality%20Assurance/badge.svg)

---

## Table of Contents

- [What is and what is not](#what-is-and-what-is-not)
- [Concepts overview](#concepts-overview)
    - [App](#app)
    - [Service provider](#service-provider)
    - [Container](#container)
    - [Env config](#env-config)
    - [Context](#context)
- [Decisions](#decisions)
- [Usage at website level](#usage-at-website-level)
    - [Customizing site config](#customizing-site-config)
    - [Hosting provider](#posting-provider)
    - [Locations](#locations)
        - [Access locations](#access-locations)
        - [Adjust locations](#adjust-locations)
        - [Custom locations](#custom-locations)
        - [Set locations via environment variables](#set-locations-via-environment-variables)
- [Usage at package level](#usage-at-package-level)
    - [Contextual registration](#contextual-registration)
    - [Package-dependant registration](#package-dependant-registration)
    - [Providers workflow](#providers-workflow)
        - [Available service provider abstract…
