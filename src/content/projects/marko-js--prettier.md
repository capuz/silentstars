---
repo: "marko-js/prettier"
name: "prettier"
description: "A prettier plugin for parsing and printing Marko files."
readmeQualityOk: true
url: "https://github.com/marko-js/prettier"
language: "Marko"
languages: ["Marko", "TypeScript"]
languagePcts: [61, 38]
stars: 13
forks: 7
openIssues: 1
closedIssues: 33
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2021-08-30T18:07:02Z"
lastCommitAt: "2026-08-21T04:10:01Z"
lastReleaseAt: "2022-07-18T23:23:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 51
maintainers: ["DylanPiercey", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/278b812686d2196aa99515c39a4a80c7807b07813c21141228ef2901a3b955ca/marko-js/prettier"
---

<h1 align="center">
  
  <br/>
  prettier-plugin-marko
	<br/>

  
  </a>
  
  </a>
  
  </a>
  
  </a>
  
  </a>
  
  </a>
</h1>

> Note:
> For prettier@2 or below use `prettier-plugin-marko@2`.

A [Prettier](https://prettier.io/) plugin for parsing and printing Marko files.

# Installation

### npm

```console
npm install prettier prettier-plugin-marko -D
```

# Usage

See the Prettier ["using plugins"](https://prettier.io/docs/plugins#using-plugins) guide.

```console
npm exec -- prettier --write "**/*.marko" --plugin=prettier-plugin-marko
```

Or via [prettier configuration](https://prettier.io/docs/configuration) like:

```json
{
  "plugins": ["prettier-plugin-marko"]
}
```

## Editors

Editors such as [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) provide plugins for calling [Prettier](https://prettier.io/) directly from your editor.

# Options

On top of [Prettier's options](https://prettier.io/docs/en/options.html), there are a few additional options picked up by this plugin.

## `markoSyntax: "auto" | "html" | "concise"`

Marko supports both an [html like](https://markojs.com/docs/syntax/) and…
