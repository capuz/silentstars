---
repo: "acl-services/paprika"
name: "paprika"
description: "🌶 A robust + accessible UI component library for React applications by Galvanize."
readmeQualityOk: true
url: "https://github.com/acl-services/paprika"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 54
forks: 10
openIssues: 46
closedIssues: 154
watchers: 39
contributors: 47
recentReleases: 0
createdAt: "2018-08-31T22:04:41Z"
lastCommitAt: "2026-10-03T22:03:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 47
maintainers: ["etroinov", "paprika-ci"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/146946201/ffc32e00-6a9a-11e9-90d4-e6fd9e8b25ba"
discussionCount: 0
---

Quick Links: 

---

## Getting Started Using Paprika

#### Dependencies

If you want to spice up your application with Paprika, you will need to start by adding the required dependencies. Paprika has a `peerDependency` on `React v16.8`, `styled-components` and most packages also have a `peerDependency` on the [Paprika L10n component](https://github.com/acl-services/paprika/blob/master/packages/L10n/README.md) (`@paprika/l10n`) for localization.

You will need to include them as dependencies in your project.

```sh
$ yarn add react styled-components @paprika/l10n
```

#### Adding a Component

For example, to install the `<Button>` component:

```sh
$ yarn add @paprika/button
```

Then, to use the component in your project:

```js
import React from "react";
import Button from "@paprika/button";

export default () => <Button>Hello</Button>;
```

#### More Information

For more information about using Paprika in your project, including code examples and FAQs, visit the [Using Paprika wiki pages](https://github.com/acl-services/paprika/wiki/Using-Paprika).

## Components

Paprika components are individually versioned and distributed packages in a Lerna monorepo.
To browse a list of…
