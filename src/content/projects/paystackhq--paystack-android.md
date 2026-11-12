---
repo: "PaystackHQ/paystack-android"
name: "paystack-android"
description: "Paystack SDK for Android. Accept payments on Android"
readmeQualityOk: true
url: "https://github.com/PaystackHQ/paystack-android"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [74, 26]
stars: 129
forks: 104
openIssues: 4
closedIssues: 96
watchers: 24
contributors: 19
recentReleases: 0
createdAt: "2015-10-06T14:52:52Z"
lastCommitAt: "2026-11-12T11:36:23Z"
lastReleaseAt: "2017-06-20T00:35:40Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 31
maintainers: ["michael-paystack"]
openGraphImageUrl: "https://opengraph.githubassets.com/65341cac20a06bd261b84eb90468fd8eb28a54db59c011a071caa4a5e226275b/PaystackHQ/paystack-android"
---

## Paystack Android

This is a library for easy integration of [Paystack](https://paystack.com) with your Android application. Use this
library in your Android app so we shoulder the burden of PCI compliance by helping you
avoid the need to send card data directly to your server. Instead, this library sends credit
card data directly to our servers.

## Summarized flow

1. Collect user's card details

2. Initialize the transaction
    - App prompts your backend to initialize a transaction
    - Your backend returns `access_code` we return when it calls the [Initialize Transaction](https://paystack.com/docs/api/#transaction-initialize) endpoint
    - App provides the `access_code` and card details to our SDK's `chargeCard` function via `Charge` object

3. SDK prompts user for PIN, OTP or Bank authentication as required

4. Once successful, we'll send an event to your webhook URL and call `onSuccess` callback. You should give value via webhook.

## Requirements
- Android SDKv16 (Android 4.1 "Jelly Bean") - This is the first SDK version that includes
`TLSv1.2` which is required by our servers. Native app support for user devices older than
API 16 will not be available.

##…
