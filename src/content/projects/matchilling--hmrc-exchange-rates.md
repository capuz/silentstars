---
repo: "matchilling/hmrc-exchange-rates"
name: "hmrc-exchange-rates"
description: "🇬🇧 HMRC Exchange Rates API for Customs & VAT 💸"
readmeQualityOk: true
url: "https://github.com/matchilling/hmrc-exchange-rates"
homepage: "https://hmrc.matchilling.com"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [48, 35]
topics: ["hmrc", "exchange-rates", "vat", "api", "united-kingdom", "git-scraping"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-03-22T17:07:05Z"
lastCommitAt: "2026-11-25T03:13:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 63
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/249231853/42d76100-6d3f-11ea-86cc-136148418c54"
---

# 🇬🇧 HMRC Exchange Rates API for Customs & VAT [](https://github.com/matchilling/hmrc-exchange-rates/actions/workflows/update_rates_cron_job.yml)
Find foreign exchange rates issued by [His Majesty's Revenue and Customs][hmrc-url]
in JSON format from __Jan 2015__ till __Dec 2026__.

__Last update: Wed Nov 25 03:13:43 UTC 2026__

## Usage

```sh
# Get the latest rates
$ curl -X GET https://hmrc.matchilling.com/rate/latest.json
{
  "base": "GBP",
  "period": {
    "start": "2020-01-01",
    "end": "2020-01-31"
  },
  "rates": {
    "AED": "4.8012",
    "ALL": "143.53",
    "AMD": "624.19",
    "AOA": "598.72",
    "ARS": "78.18",
    "AUD": "1.905",
    ...
  }
}

# Get rates by month (e.g. March 2020)
$ curl -X GET https://hmrc.matchilling.com/rate/2020/03.json
```

## 💷 Details

You should use these exchanges rates if you have to convert any foreign currency to sterling for customs and VAT purposes.

The EU rate includes the following countries:

- Austria
- Belgium
- Cyprus
- Estonia
- Finland
- France
- Germany
- Greece
- Ireland
- Italy
- Latvia
- Lithuania
- Luxembourg
- Malta
- Netherlands
- Portugal
- Slovakia
- Slovenia
- Spain
