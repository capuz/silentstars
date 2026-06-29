---
repo: "3AP-AG/payrexx-sdk"
name: "payrexx-sdk"
description: "A NodeJS library for the Payrexx payment provider"
url: "https://github.com/3AP-AG/payrexx-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 1
closedIssues: 4
watchers: 15
contributors: 56
recentReleases: 0
createdAt: "2023-07-21T07:01:02Z"
lastCommitAt: "2026-06-29T07:23:06Z"
lastReleaseAt: "2023-08-03T07:27:02Z"
status: "watched"
tags: ["community_watch"]
healthScore: 96
undervaluedScore: 36
maintainers: ["dcvetanovic"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7879721102a88a27545102a368b78ca48804073be721a87beea2e2fe11a838/3AP-AG/payrexx-sdk"
---

# Payrexx SDK

**Payrexx SDK** for NodeJS with TypeScript support.

Supported **Payrexx API** functionalities:

- **Paylink**
- **Gateway**
- **QR code**
- **Payment Provider**
- **Payment Method**
- **Payout**
- **Transaction**
- **Design**

Unsupported **Payrexx API** functionalities:

- **Subscription** API is still in experimental state on the Payrexx, hence it will not be supported by this library

Visit the [Payrexx](https://payrexx.com/) for more information.

## Disclaimer 🚧

This library is unofficial and is developed independently from the Payrexx payment provider.

Please note that **QR code** is not fully tested.

## How to use 🖥️

Install library by running command

```shell
npm i payrexx-sdk
```

Start by creating the Payrexx client. You will need to provide your **Payrexx** instance and API secret.

```ts
const client = new PayrexxClient('PAYREXX_INSTANCE', 'API_SECRET')
```

### API

API is grouped by Payrexx functionalities:

```ts
client.api.paylink
client.api.gateway
client.api.qrCode
client.api.paymentProvider
client.api.paymentMethod
client.api.payout
client.api.transaction
client.api.design
```

#### Use examples

##### Retrieve a paylink

```ts
await…
