---
repo: "pronamic/wp-pronamic-pay-mollie"
name: "wp-pronamic-pay-mollie"
description: "Mollie driver for the WordPress payment processing library."
readmeQualityOk: true
url: "https://github.com/pronamic/wp-pronamic-pay-mollie"
homepage: "http://www.wp-pay.org/gateways/mollie/"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["mollie", "php", "pay", "wordpress", "ideal", "wp-pronamic-pay-gateway"]
stars: 6
forks: 1
openIssues: 5
closedIssues: 57
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2014-06-24T13:25:11Z"
lastCommitAt: "2026-09-07T08:34:36Z"
lastReleaseAt: "2023-01-18T12:49:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 50
maintainers: ["remcotolsma", "rvdsteege"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0ddf81e06dbc94e782faae96adeb7cdf1aabc43abe58735938af9c4f4a9416/pronamic/wp-pronamic-pay-mollie"
---

</a>
</p>

<h1 align="center">WordPress Pay » Gateway » Mollie</h3>

	Mollie driver for the WordPress payment processing library.
</p>

## Table of contents

- [Status](#status)
- [Webhook URL](#webhook-url)
- [Simulate Requests](#simulate-requests)
- [REST API](#rest-api)
- [WP-CLI](#wp-cli)
- [WordPress Filters](#wordpress-filters)
- [Links](#links)
- [Documentation](#documentation)

## Status

## Webhook URL

Please note that an webhook URL with the host `localhost` or with the TLD `.dev` are not allowed,
this library will check on WordPress URL's on `localhost` or on the `.dev` TLD and will not pass 
the `webhookUrl` parameter to Mollie. If you want to test the Mollie webhook URL on an local 
development environment you could use a service like [ngrok](https://ngrok.com/).

> Beste Remco,
> 
> Ja dit is inderdaad het probleem. .dev URL's worden niet ondersteunt. Deze zal ook niet bereikbaar zijn.
> 
> Als je report URL niet publiekelijk bereikbaar is zou je een service als https://ngrok.com kunnen gebruiken. Dit is een programma die je lokaal draait en als proxy werkt. Misschien heb je er iets aan.
> 
> Met vriendelijke groet,
> 
> Lennard van Gunst
> Mollie

## Simulate…
