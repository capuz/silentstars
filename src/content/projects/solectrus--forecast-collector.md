---
repo: "solectrus/forecast-collector"
name: "forecast-collector"
description: "Collect solar forecast data from forecast.solar or solcast.com and push it to InfluxDB"
url: "https://github.com/solectrus/forecast-collector"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
topics: ["solar", "forecasting", "photovoltaics", "photovoltaic", "influxdb"]
stars: 10
forks: 2
openIssues: 4
closedIssues: 22
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2021-03-21T06:01:12Z"
lastCommitAt: "2026-06-24T06:39:47Z"
lastReleaseAt: "2024-08-30T10:34:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 69
maintainers: ["dependabot[bot]", "ledermann"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1778dcc526e7f71b57f9852717739dc4fce4b0799e5cd3502a772080fc2373/solectrus/forecast-collector"
fundingLinks: ["GITHUB:https://github.com/solectrus", "KO_FI:https://ko-fi.com/ledermann"]
---

# Forecast collector

Collect solar forecast data from various providers and store them into an InfluxDB database. Supported providers are:

- Forecast.Solar (https://forecast.solar)
- Solcast (https://solcast.com)
- Pvnode (https://pvnode.com) — API v1 and v2

## Usage

1. Depending on the provider you want to use, you need to sign up for their services and get an API key:

   - [Forecast.Solar API documentation](https://doc.forecast.solar/api:estimate) (no API key required)
   - [Solcast API documentation](https://docs.solcast.com.au/) in the Legacy/Hobbyist section (API key required)
   - [Pvnode API documentation](https://pvnode.com/docs/) (API key required)

2. Make sure your InfluxDB database is ready (not subject of this README)

3. Prepare an `.env` file (see `.env.example`) with your InfluxDB credentials and the provider-specific settings, e.g., API key.

4. Run the Docker container on your Linux box:

   ```bash
   docker run -it --rm \
              --env-file .env \
              ghcr.io/solectrus/forecast-collector
   ```

It's recommended to integrate the `forecast-collector` into your SOLECTRUS hosting. See more here:
https://github.com/solectrus/hosting

## License…
