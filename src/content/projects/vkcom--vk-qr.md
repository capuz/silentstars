---
repo: "VKCOM/vk-qr"
name: "vk-qr"
description: "VK QR Code generator library"
readmeQualityOk: true
url: "https://github.com/VKCOM/vk-qr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["vk", "qr", "qrcode", "qr-generator", "qr-code"]
stars: 64
forks: 12
openIssues: 4
closedIssues: 6
watchers: 15
contributors: 54
recentReleases: 1
createdAt: "2019-02-19T11:25:52Z"
lastCommitAt: "2026-07-13T06:37:27Z"
lastReleaseAt: "2026-04-22T15:39:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 48
maintainers: ["dependabot[bot]", "github-actions[bot]", "SevereCloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a23fd72118bd5bc901ce75d2df0fc73995418cbc7bb48d4ddf8e128ef4b0bad/VKCOM/vk-qr"
---

[<img width="150" height="150" src="https://user-images.githubusercontent.com/45998835/154472026-cae3934d-8013-4898-b7f0-cef7476a6424.png">](https://github.com/VKCOM/vk-qr)

</div>

# VK-QR

JavaScript library for generating SVG code of VK-style QR codes.

## Usage

Install via yarn

```
yarn add @vkontakte/vk-qr
```

or npm

```
npm install @vkontakte/vk-qr
```

And use in your code

```js
import * as vkQr from '@vkontakte/vk-qr';

// Returns SVG code of generated 256x256 QR code with VK logo
const qrSvg = vkQr.createQR('Text to encode', {
  qrSize: 256,
  isShowLogo: true
});
```

## API Reference

### Syntax

```js
generatedSvgCode = vkQr.createQR(text[, qrOptions]);
```

### Parameters

- `text` _required_
  String to generate a QR code

- `options` _optional_
  An options object containing any custom settings that you want to apply to the generated QR code. The possible options are:

  - `qrSize`: Size of QR code.
    Default is 128

  - `className`: Class name of root SVG element

  - `isShowLogo`: Show VK logo in center of QR code
    Default is false

  - `isShowBackground`: Show QR background. Default is false

  - `backgroundColor`: QR code background HEX color. Works if…
