---
repo: "yireo/Yireo_CheckoutTester2"
name: "Yireo_CheckoutTester2"
description: "Checkout test for Magento 2"
readmeQualityOk: true
url: "https://github.com/yireo/Yireo_CheckoutTester2"
language: "PHP"
languages: ["PHP"]
languagePcts: [88]
topics: ["magento2-module"]
stars: 93
forks: 22
openIssues: 2
closedIssues: 12
watchers: 7
contributors: 9
recentReleases: 1
createdAt: "2016-08-22T08:19:40Z"
lastCommitAt: "2026-11-24T13:50:51Z"
lastReleaseAt: "2026-11-23T18:52:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 44
maintainers: ["jissereitsma"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f6cf9295917a0568fe645ef424af92e2d0b2d9f4611f38226b9ea7fcb028dfa/yireo/Yireo_CheckoutTester2"
fundingLinks: ["GITHUB:https://github.com/yireo", "CUSTOM:https://www.paypal.me/yireo"]
---

# CheckoutTester module for Magento 2

## Installation
We recommend `composer` to install this package. Install our module using the following command:

```bash
composer require yireo/magento2-checkouttester2
```

Next, install the new module into Magento itself. The following steps assume you are using the Developer Mode for installing modules. If you are using the Production Mode, consult your developer for help.

```bash
bin/magento module:enable Yireo_CheckoutTester2
bin/magento setup:upgrade
```

* Flush the Magento cache
* Configure settings under **Stores > Configuration > Yireo > Yireo CheckoutTester**
* Enable the module with the setting **Enabled** (the module is disabled by default), or via the CLI:

```bash
bin/magento config:set checkouttester2/settings/enabled 1
```

* Done

## Usage
When you customize Magento 2 to your needs, conversion is everything. So part of the customization process will definitely include the checkout process, including the success page that is visited once the checkout
is completed. But when you refresh the success page, the session is cleaned up and you are redirected back to the cart.
