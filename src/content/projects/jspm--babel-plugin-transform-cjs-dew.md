---
repo: "jspm/babel-plugin-transform-cjs-dew"
name: "babel-plugin-transform-cjs-dew"
description: "CommonJS -> ES Deferred Execution Wrapper"
readmeQualityOk: true
url: "https://github.com/jspm/babel-plugin-transform-cjs-dew"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-06-02T10:06:39Z"
lastCommitAt: "2026-08-17T04:18:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 43
maintainers: ["guybedford"]
openGraphImageUrl: "https://opengraph.githubassets.com/11daab9be34f28006243fb7e053751a4321064e18a012eb5f63c34ad8d802345/jspm/babel-plugin-transform-cjs-dew"
fundingLinks: ["GITHUB:https://github.com/jspm", "OPEN_COLLECTIVE:https://opencollective.com/jspm"]
---

# Babel CommonJS -> ES Deferred Execution Wrapper Format

This plugin implements a deferred execution wodule format that allows supporting CommonJS execution semantics through an ES modules protocol.

_Modules converted in this way can only import from other modules converted to this format._

This project aims for accuracy and reliability transforming a tree of CommonJS modules into a spec-compliant tree of ES Modules.

```js
require('babel-core').transform('<source>', {
  parserOpts: {
    allowReturnOutsideFunction: true
  },
  plugins: [
    ['transform-cjs-dew', {
      filename: '"custom-filename.js"',
      dirname: '"/dirname"',
      define: {
        'process.env.NODE_ENV': '"development"'
      },
      resolve (name, { wildcard?, optional?, browserResolve? }) {
        if (name === 'process')
          return 'process-path';
        if (name === './x')
          return './x.js';
      },
      // for wildcard requires, return a string or array or null to indicate unknown resolution
      // '@empty' indicates an empty object resolution, where all named exports are undefined
      // by default, a null resolve embeds a Node require through a import 'module' path…
