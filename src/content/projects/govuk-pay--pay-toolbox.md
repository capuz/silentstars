---
repo: "govuk-pay/pay-toolbox"
name: "pay-toolbox"
description: "Internal administrative tools service for GOV.UK Pay products."
readmeQualityOk: true
url: "https://github.com/govuk-pay/pay-toolbox"
language: "TypeScript"
languages: ["TypeScript", "Nunjucks"]
languagePcts: [48, 41]
stars: 11
forks: 6
openIssues: 17
closedIssues: 13
watchers: 13
contributors: 40
recentReleases: 0
createdAt: "2018-12-20T11:51:35Z"
lastCommitAt: "2026-08-28T14:22:27Z"
lastReleaseAt: "2020-06-23T08:33:31Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["hjvoid", "benjamb", "SandorArpa"]
openGraphImageUrl: "https://opengraph.githubassets.com/483916137b9708838c12ecb6b552332a721d6919af7c981005d918027bef0155/govuk-pay/pay-toolbox"
---

# Pay Toolbox

Internal administrative tools service for GOV.UK Pay products.

## Running in a support role

Toolbox runs alongside other GOV.UK Pay services in `production`, `staging` and `test` environments.

## Setting up local development

Getting Toolbox up and running for development.

```bash
npm install

# build server and browser assets
npm run build

# generate a dev environment file - run the version according to your needs
node scripts/generate-dev-environment.js # default - target services running through SSH tunnel
node scripts/generate-dev-environment.js local # target services running locally on your machine
node scripts/generate-dev-environment.js docker # for docker deployment - talk to external network

# this will watch javascript files for changes and restart the server accordingly
npm run dev
```

### Debug using Visual Studio Code

* In VSCode, go to the `Debug` view (on MacOS, use shortcut `CMD + shift + D`).
* From the **Run** toolbar, select the launch config `Toolbox`.
* Press The `green play` button (`F5` MacOS). This will run the app in debug mode.
* Add breakpoints to any file you want to debug - click in the left hand column and a red dot will…
