---
repo: "chainguard-dev/edu"
name: "edu"
description: "Docs and Tutorials for Chainguard"
readmeQualityOk: true
url: "https://github.com/chainguard-dev/edu"
homepage: "https://edu.chainguard.dev"
language: "SCSS"
languages: ["SCSS", "HTML", "Python"]
languagePcts: [28, 26, 23]
stars: 96
forks: 128
openIssues: 1
closedIssues: 485
watchers: 4
contributors: 172
recentReleases: 0
createdAt: "2022-06-03T12:17:59Z"
lastCommitAt: "2026-10-21T17:31:57Z"
lastReleaseAt: "2026-04-29T13:44:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["matthewhelmke", "s-stumbo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ddf8258197ca3c0d999076230aa1a5c180f8ca87dff70dd0f01b33bd874776/chainguard-dev/edu"
---

Chainguard Academy is the documentation site for Chainguard products. It exists to help you succeed with Chainguard. Visit it at 🔗 [edu.chainguard.dev](https://edu.chainguard.dev)

You can find the educational resource files in Markdown under the `content` directory.

## Development

This site is based on the [Doks Hugo theme](https://github.com/h-enk/doks).

If you would like to develop this project, clone this repo and install dependencies with `npm`. We prefer `npm ci` (clean install) over `npm install`: it installs the exact dependency tree from `package-lock.json`, so your local versions match what our build automation and production use.

```sh
npm ci
```

To run a local version of this site, start the development server:

```sh
npm run start
```

While the server is running, open `http://localhost:1313` in your web browser. To stop the server, press `Ctrl+C` in the terminal.

## Testing

Any documentation published to Chainguard Academy is reviewed carefully for accuracy. GUI procedures, API commands, and CLI code snippets in a draft are run and tested thoroughly — by both the author and the reviewer — to confirm they work exactly as written. This helps ensure that readers…
