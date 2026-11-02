---
repo: "vexl-it/vexl"
name: "vexl"
description: "Vexl app"
readmeQualityOk: true
url: "https://github.com/vexl-it/vexl"
homepage: "https://vexl.it"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 127
forks: 17
openIssues: 57
closedIssues: 1180
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-12-05T16:57:38Z"
lastCommitAt: "2026-11-02T11:36:59Z"
lastReleaseAt: "2025-08-18T14:01:31Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 48
maintainers: ["kaladivo", "SamTremko", "jarvisonsmart"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fb00e30654d5c00f61cb903d51d997402ea4e0e3d0f11887677442dd9aeb8b3/vexl-it/vexl"
---

# Vexl

Vexl is a mobile app giving its users a simple, accessible and safe way to trade bitcoin as it was intended - peer-to-peer and without KYC.

## How to build and run the mobile app

The app lives in `apps/mobile` directory. All following instructions should be ran in that repository.

To run the app, you need to setup env file. Create `.env` file with following content (maps need no API key — tiles come from OpenFreeMap):

```
SENTRY_DISABLE_AUTO_UPLOAD=true
ENV_PRESET=prod
```

To run the app in dev mode run following commands

```
pnpm install
pnpm --filter @vexl-next/mobile-app exec expo prebuild --clean
pnpm --filter @vexl-next/mobile-app ios  ## for ios
pnpm --filter @vexl-next/mobile-app android ## for android
```

## Help us translate the app

See [this guide](https://github.com/vexl-it/vexl/blob/HEAD/docs/how_to_help_translate.md) for details.

## Other

This project is tested with BrowserStack.

## APK Signature Verification

For Android, you can download the app from the [Google Play Store](https://play.google.com/store/apps/details?id=your.package.id) or use the APK files provided in the [Releases](https://github.com/vexl-it/vexl/releases) section.

If you choose…
