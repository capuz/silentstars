---
repo: "mrcgrtz/postcss-opacity-percentage"
name: "postcss-opacity-percentage"
description: "🌗 PostCSS plugin to transform percentage-based opacity values to more compatible floating-point values."
readmeQualityOk: true
url: "https://github.com/mrcgrtz/postcss-opacity-percentage"
homepage: "https://www.npmjs.com/package/postcss-opacity-percentage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["postcss", "css", "postcss-plugin", "opacity", "css4"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-08T14:38:48Z"
lastCommitAt: "2026-08-01T06:12:44Z"
lastReleaseAt: "2024-09-03T16:23:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 52
maintainers: ["dependabot[bot]", "mrcgrtz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/425873754/b4a925fc-5065-4e0f-ae61-cb20af3172b1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061725Z&X-Amz-Expires=300&X-Amz-Signature=53da3251c3487948265c9bf5f213554895e0bcccc9f66b94ea593b3c978b01cc&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTM0NSwibmJmIjoxNzg1NTY1MDQ1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.RrXWtDLsmAMh8QW222JD9d_lmhSN2grSu_1xUyCJgDU"
fundingLinks: ["KO_FI:https://ko-fi.com/mrcgrtz", "LIBERAPAY:https://liberapay.com/mrcgrtz"]
---

# PostCSS Opacity Percentage

[PostCSS](https://github.com/postcss/postcss) plugin to transform [percentage-based opacity values](https://www.w3.org/TR/css-color-4/#transparency) to more compatible floating-point values.

## Install

Using [npm](https://www.npmjs.com/get-npm):

```bash
npm install --save-dev postcss postcss-opacity-percentage
```

Using [yarn](https://yarnpkg.com/):

```bash
yarn add --dev postcss postcss-opacity-percentage
```

## Example

```css
/* Input */
.foo {
  opacity: 45%;
}
```

```css
/* Output */
.foo {
  opacity: 0.45;
}
```

## Usage

```js
postcss([
  require('postcss-opacity-percentage'),
]);
```

See [PostCSS](https://github.com/postcss/postcss) documentation for examples for your environment.

### `postcss-preset-env`

If you are using [`postcss-preset-env@>=7.3.0`](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/CHANGELOG.md#730-january-31-2022), you already have this plugin installed via this package.

## Options

### `preserve`

The `preserve` option determines whether the original percentage value is preserved. By default, it is not preserved.

```js
// Keep the original notation
postcss([…
