---
repo: "Judopay/JudoKit-ReactNative"
name: "JudoKit-ReactNative"
description: "Judopay's React Native module and sample app"
readmeQualityOk: true
url: "https://github.com/Judopay/JudoKit-ReactNative"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [60]
stars: 5
forks: 1
openIssues: 1
closedIssues: 10
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2019-05-19T17:23:03Z"
lastCommitAt: "2026-10-22T08:52:15Z"
lastReleaseAt: "2021-04-29T14:09:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 44
maintainers: ["stefan-tudor", "RafalOzogJudopay", "eugenezhernakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3863524d1d83230243f39d8233bd75831575e7c8cf07875d78076c21a9f9f9b9/Judopay/JudoKit-ReactNative"
---

# JudoKit-ReactNative

A React Native module for the Judopay native [JudoKit-iOS](https://github.com/Judopay/JudoKit-iOS) and [JudoKit-Android](https://github.com/Judopay/JudoKit-Android) to process payments on iOS and Android.

## Installation

```sh
yarn add judokit-react-native
```

## Usage
```ts
import JudoPay, {JudoTransactionType} from 'judokit-react-native';

const judoKit = new JudoPay({
  token: 'your-judo-token',
  paymentSession: 'your-payment-session',
});

judoKit
  .invokeTransaction(JudoTransactionType.Payment, {
    judoId: '123456',
    amount: {
      value: '1.50',
      currency: 'GBP',
    },
    reference: {
      paymentReference: 'your-payment-reference',
      consumerReference: 'your-consumer-reference',
    },
  })
  .then(
    response => {
      console.log(response);
    },
    error => {
      console.error(error);
    },
  );

```
## Example
Below is a simple example to showcase the basic usage of the library.
```tsx
import JudoPay, {
  JudoAmount,
  JudoAuthorization,
  JudoConfiguration,
  JudoReference,
  JudoTransactionType,
} from 'judokit-react-native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const…
