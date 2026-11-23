---
repo: "LokiExtensions/Loki_AdminComponents"
name: "Loki_AdminComponents"
description: "A brand new way to create Magento 2 Admin Panel grids and forms with ease and performance"
readmeQualityOk: true
url: "https://github.com/LokiExtensions/Loki_AdminComponents"
homepage: "https://loki-extensions.com/admin-components"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [71, 29]
topics: ["loki", "magento", "magento2", "yireo", "loki-components", "loki-checkout-plan-free", "loki-checkout-plan-professional", "loki-checkout-plan-standard", "loki-checkout-plan-trial"]
stars: 17
forks: 6
openIssues: 1
closedIssues: 10
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-05-02T14:49:40Z"
lastCommitAt: "2026-11-23T10:11:42Z"
lastReleaseAt: "2025-06-18T11:01:56Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 71
maintainers: ["jissereitsma", "lbajsarowicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eeef8a10c85a4b6abeffe71f8f7550576c9cc7c7a79b0f7ef80761824b1d23c/LokiExtensions/Loki_AdminComponents"
fundingLinks: ["GITHUB:https://github.com/yireo", "CUSTOM:https://www.paypal.me/yireo"]
---

# Loki_AdminComponents

**This Magento 2 module allows for developers to build admin grids and admin forms in the Magento 2 Admin Panel in
a faster way. No more ugly UiComponents that nobody understands. Create grids and forms quickly. And gradually add
features to them, without getting stuck.**

The LokiAdminComponents are based on the [Loki Components](https://github.com/LokiExtensions/Loki_Components) module which is also used in the [LokiCheckout](https://loki-checkout.com/). However, this admin tool shows that the Loki Extension suite can be applied in many more places.

*Note that this library makes use of Alpine.js in the Magento Admin Panel. As for CSS, we stick to the native Magento Admin Panel classes instead: Everything looks the same.*

## Installation
```bash
composer require loki/magento2-admin-components
bin/magento module:enable Loki_AdminComponents Loki_Components Loki_CssUtils Loki_Base
```

## Getting started with a grid
First create a module that generates a page in the Admin Panel (`etc/module.xml`, `registration.php`, a backend controller action class, perhaps `acl.xml` and `menu.xml`). 

In your new XML layout file, add the following:
