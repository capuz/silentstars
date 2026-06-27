---
repo: "ys/bonjour"
name: "bonjour"
description: "🌊"
url: "https://github.com/ys/bonjour"
homepage: "https://yannickschutz.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [72]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2018-02-13T19:22:07Z"
lastCommitAt: "2026-06-27T00:35:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 87
maintainers: ["actions-user", "ys"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ae98a75e67728b92d4b6161887dcd5898718ae7ab6a95546bd14fb0776f7610/ys/bonjour"
---

# This is yannickschutz.com

This is automatically synced with vercel

License
=======
The following directories and their contents are Copyright Yannick Schutz.
You may not reuse anything therein without my permission:

*   content/

All other directories and files are MIT Licensed.

## Shop

The shop uses [Stripe Checkout](https://checkout.stripe.com)

### Functions

It is a set of 2 serverless functions running on Vercel, a data file and a template.

- [`api/checkout.js`](api/checkout.js) : Responsible for creating a session on stripe checkout.
  It uses data/shop.json file to map the SKU invented code to the Stripe `price_id`.
  Right now a lot is hardcoded in the function.
- [`api/success.js`](api/success.js) : Used to retrieve customer information on the callback after a sale.
  Goal is to show a banner thanking the user.

### Template

The [template](theme/simple/layouts/shop/single.html) has a form handled by JS in [`main.js`](theme/simple/assets/js/main.js) where we first post to the checkout serverless function. Then with the `session_id`, we redirect to stripe for the payment. We are not handling any money data down here.

The frontmatter of a shop item requires…
