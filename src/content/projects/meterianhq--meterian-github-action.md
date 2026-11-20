---
repo: "MeterianHQ/meterian-github-action"
name: "meterian-github-action"
description: "Meterian Scanner GitHub action"
readmeQualityOk: true
url: "https://github.com/MeterianHQ/meterian-github-action"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
stars: 9
forks: 1
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2019-06-14T12:53:29Z"
lastCommitAt: "2026-11-20T12:24:07Z"
lastReleaseAt: "2020-07-24T10:09:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 69
undervaluedScore: 42
maintainers: ["n-insaidoo", "bbossola"]
openGraphImageUrl: "https://opengraph.githubassets.com/9398ec39b48e5296c882f31a1d9a09d7830f3149addc64d8ffdb55a4cac64233/MeterianHQ/meterian-github-action"
---

# Meterian Scanner GitHub Action

The Meterian Scanner GitHub action allows you to automatically scan for vulnerabilities right in your repository as part of your software development workflows.

A list of supported languages can be found [here](https://docs.meterian.io/languages-support/languages-intro).

## Usage

### Pre-required configuration

For usage on closed source repositories you require an authentication API token from Meterian which is only available for paid plans.

Once registered to Meterian with an eligible plan, you can generate an API token and set it as GitHub secret within the repository you wish to scan:

- Generate a Meterian API token
  - Create an account or log into your account on https://meterian.com
  - Create an new secret API token from the dashboard
- Add the above token as a GitHub secret by the name `METERIAN_API_TOKEN`
  - In your repository navigate to the Secrets page ( `Your repository > Settings > Secrets` )
  - Click on the `Add a new Secret`

### Inputs

#### `cli_args`

**Optional** Any additional Meterian CLI options. Find out more about these in the [Meterian documentation](https://docs.meterian.io/).
