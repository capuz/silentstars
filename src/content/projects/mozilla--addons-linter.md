---
repo: "mozilla/addons-linter"
name: "addons-linter"
description: "🔍 Firefox Add-ons linter, written in JavaScript. 👁"
readmeQualityOk: true
url: "https://github.com/mozilla/addons-linter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["web-extensions", "cli"]
stars: 367
forks: 164
openIssues: 58
closedIssues: 1046
watchers: 33
contributors: 184
recentReleases: 0
createdAt: "2015-09-14T08:34:44Z"
lastCommitAt: "2026-11-10T11:38:54Z"
lastReleaseAt: "2015-12-15T19:16:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["dependabot[bot]", "willdurand", "diox"]
openGraphImageUrl: "https://opengraph.githubassets.com/a572f6fcc3745da94c1e736481c99e22d88655ae504b2f1abd9b5d0ce019cc6c/mozilla/addons-linter"
---

# addons-linter

The Add-ons Linter is being used by [web-ext](https://github.com/mozilla/web-ext/) and [addons.mozilla.org](https://github.com/mozilla/addons-server/) to lint [WebExtensions](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions).

It can also be used as a standalone binary and library.

You can find more information about the linter and it's implemented rules in our [documentation](https://mozilla.github.io/addons-linter/).

## Usage

### Command Line

You need Node.js to use the add-ons linter.

To validate your add-on locally, install the linter from [npm](http://nodejs.org/):

```sh
# Install globally so you can use the linter from any directory on
# your machine.
npm install -g addons-linter
```

After installation, run the linter and direct it to your add-on file:

```sh
addons-linter my-addon.zip
```

Alternatively you can point it at a directory:

```sh
addons-linter my-addon/src/
```

The addons-linter will check your add-on and show you errors, warnings, and friendly messages for your add-on. If you want more info on the options you can enable/disable for the command-line app, use the `--help` option:

```sh
addons-linter --help
```

####…
