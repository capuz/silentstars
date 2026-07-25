---
repo: "rubyatscale/packwerk-vscode"
name: "packwerk-vscode"
description: "Packwerk extension for Visual Studio Code"
readmeQualityOk: true
url: "https://github.com/rubyatscale/packwerk-vscode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 8
recentReleases: 0
createdAt: "2022-01-05T13:37:51Z"
lastCommitAt: "2026-07-25T06:01:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 29
maintainers: ["dduugg", "dkisselev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/528fbfbe1cc4021916f87ab7eca4fc9c89cdf87d4ed27581327fc028e4844ab6/rubyatscale/packwerk-vscode"
---

# Packwerk for Visual Studio Code

This extension provides an interface to packwerk for vscode.

[packwerk](https://github.com/Shopify/packwerk/) helps modularize large Rails monoliths

[packwerk-vscode in Code Market Place](https://marketplace.visualstudio.com/items?itemName=Gusto.packwerk-vscode)

## Stability

This is an alpha extension that is not guaranteed to work. We encourage you to experiment with it and provide feedback!

## Configuration

Specify configuration (via navigating to `File > Preferences > Workspace Settings` and editing file `settings.json):`

```javascript
{
  // If not specified, uses `bin/packwerk check` (default and recommended, as this is what the packwerk setup guide recommends for executing packwerk)
  // You may want to change this if, for example, you have a remote development environment that executes packwerk in a remote box.
  "ruby.packwerk.executable": "",

  // default true
  "ruby.packwerk.onSave": true
}
```

# Contribute with this extension

Please install packages with yarn.

    yarn install

You could install TSLint extension for .ts files.

Please format code using prettier.

```
yarn prettier src/* test/* --write
```

# License

This…
