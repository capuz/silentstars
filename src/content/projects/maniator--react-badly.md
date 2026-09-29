---
repo: "maniator/react-badly"
name: "react-badly"
description: "Error boundary react component"
readmeQualityOk: true
url: "https://github.com/maniator/react-badly"
homepage: "https://www.npmjs.com/package/react-badly"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["react", "error-boundaries", "react-16", "catch", "tree"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-01-11T16:06:23Z"
lastCommitAt: "2026-09-29T10:04:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 68
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/690f16e97f57c24a16ef62695f413f2ce6ad59a4c7eba64424766c436e8dac62/maniator/react-badly"
fundingLinks: ["GITHUB:https://github.com/maniator", "OPEN_COLLECTIVE:https://opencollective.com/serveside"]
---

# react-badly

Take hold of your react lifecycle hooks with `react-badly`

You can install off of npm with

```shell
npm install react-badly

# or yarn

yarn add react-badly
```

This component is a wrapper for any of your React 16+ plus components that may have an error in them.

### How to use

The simplest way is to just wrap any component that you think may error with `ReactBadly`

This will prevent the component from rendering (also will stop any children in the tree as well).
This is to make sure that your **whole** component tree does not dismount as React 16+ does.

```jsx harmony
import ReactBadly from 'react-badly';

// some code later on

<ReactBadly>
  <SomeComponentThatMayHaveAnError>
    ...
  </SomeComponentThatMayHaveAnError>
</ReactBadly>
```

If you want to handle your error with some functionality (like sending to analytics etc) you can pass an `onError` 
property which will get the error and any info as parameters from react.

```jsx harmony
import ReactBadly from 'react-badly';

const errorFunction = (error, info) => {
  // can handle the error here and do what you will with it
};

// some code later on

<ReactBadly onError={errorFunction}>…
