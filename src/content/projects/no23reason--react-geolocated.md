---
repo: "no23reason/react-geolocated"
name: "react-geolocated"
description: "React hook for using Geolocation API"
readmeQualityOk: true
url: "https://github.com/no23reason/react-geolocated"
homepage: "https://no23reason.github.io/react-geolocated/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["geolocation-api", "react", "gps", "geolocation", "hooks", "react-hook", "react-hooks", "typescript"]
stars: 328
forks: 76
openIssues: 0
closedIssues: 77
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2016-07-03T17:13:59Z"
lastCommitAt: "2026-09-24T08:42:16Z"
lastReleaseAt: "2016-11-06T17:16:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 41
maintainers: ["no23reason", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c01a31686da5efe93a2a87d6554005ed148b4568aed366ad9f5b0337ff2a2c30/no23reason/react-geolocated"
---

[](https://www.npmjs.com/package/react-geolocated) [](https://github.com/semantic-release/semantic-release)

# react-geolocated - React hook for using [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

## Demo

Basic demo can be found at the [demo page](https://no23reason.github.io/react-geolocated/).

## HOC version

This package used to be a HOC, not a hook. If you want to use the HOC version, please stick with versions < 4.

## Basic Usage

Install using `npm`:

```bash
npm install react-geolocated --save
```

Then use in your application like this:

```jsx
import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
    ) : !isGeolocationEnabled ? (
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>…
