---
repo: "scriptex/react-dropper"
name: "react-dropper"
description: "Pick a color from any image in React"
url: "https://github.com/scriptex/react-dropper"
homepage: "https://react-dropper.atanas.info"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [80, 20]
topics: ["react-component", "colorpicker"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-04-21T05:32:25Z"
lastCommitAt: "2026-06-30T06:50:25Z"
lastReleaseAt: "2022-10-03T08:13:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 63
maintainers: ["renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/182493989/32743580-dbbd-11ea-9af0-6e3f75387f75"
fundingLinks: ["GITHUB:https://github.com/scriptex", "PATREON:https://patreon.com/atanas", "KO_FI:https://ko-fi.com/scriptex", "LIBERAPAY:https://liberapay.com/scriptex", "ISSUEHUNT:https://issuehunt.io/r/scriptex", "CUSTOM:paypal.me/scriptex", "CUSTOM:revolut.me/scriptex"]
---

# React Dropper

> Pick a color from any image in React

## Visitor stats

## Code stats

## Install

```sh
npm i react-dropper

# or

yarn add react-dropper
```

## Demo

This component allows you to pick any color from any image rendered in a React application. See [the demo here](https://react-dropper.atanas.info).

## Usage

```javascript
import React from 'react';
import { Dropper } from 'react-dropper';

import MyImage from '../images/image.jpg';

ReactDOM.render(
  <Dropper
    width={400}
    height={400}
    image={MyImage}
    className="react-dropper"
    onChange={(color, event) => {
      // The color is the selected color
      // The event is the event type - click, mousemove, etc
    }}
  />,
  document.getElementById('demo')
);
```

## Props

| Prop        | Type       | Required | Default                                  | Description                                                           |
| ----------- | ---------- | -------- | ---------------------------------------- | --------------------------------------------------------------------- |
| `image`     | `string`   | true     | ''                                       | URL of the image asset (JPG or PNG)…
