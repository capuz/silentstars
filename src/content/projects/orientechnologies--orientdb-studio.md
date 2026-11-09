---
repo: "orientechnologies/orientdb-studio"
name: "orientdb-studio"
description: "Studio web tool"
readmeQualityOk: true
url: "https://github.com/orientechnologies/orientdb-studio"
language: "HTML"
languages: ["HTML", "JavaScript", "TypeScript"]
languagePcts: [41, 34, 20]
stars: 126
forks: 50
openIssues: 100
closedIssues: 443
watchers: 21
contributors: 16
recentReleases: 0
createdAt: "2013-07-02T15:35:17Z"
lastCommitAt: "2026-11-09T11:59:12Z"
lastReleaseAt: "2014-10-13T08:46:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 27
maintainers: ["tglman"]
openGraphImageUrl: "https://opengraph.githubassets.com/bad25689d5fc4d511c7d59cec05946e6e4fa9c4d7d66ffad49bf8f848779f15c/orientechnologies/orientdb-studio"
---

# [OrientDB Studio](https://github.com/orientechnologies/orientdb-studio)

## Developers

### Quick Start

0. Install [Node.js](http://nodejs.org/) and NPM 

1. Clone the repository:

    ```bash
    $ git clone https://github.com/orientechnologies/orientdb-studio.git
    ```

2. Install [yarn](https://yarnpkg.com) 

3. Install local dependencies:

    ```bash
    $ cd orientdb-studio
    $ yarn install
    ```

4. Start OrientDB server.

5. Start webpack server and open your browser at `http://localhost:8080`:

    ```bash
	$ npm run watch
    ```
    
### Distribution

To create the Studio package just run

```
$ mvn clean install
```

and the package will be available in `target` directory

```
target/orientdb-studio.*.zip
```
