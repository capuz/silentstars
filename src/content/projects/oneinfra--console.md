---
repo: "oneinfra/console"
name: "console"
description: "oneinfra web console"
readmeQualityOk: true
url: "https://github.com/oneinfra/console"
language: "CSS"
languages: ["CSS"]
languagePcts: [70]
topics: ["kubernetes", "oneinfra", "kubernetes-as-a-service", "kaas"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-05-03T10:45:30Z"
lastCommitAt: "2026-07-24T06:12:51Z"
lastReleaseAt: "2020-05-17T15:11:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 59
maintainers: ["ereslibre", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d030ff5b38630de8803668e6955a91484119d576efa19882106058fa587deb83/oneinfra/console"
---

# oneinfra console

`oneinfra` console is the Web UI + proxy API to manage `oneinfra`
resources from your browser.

It is tightly tied to the [`oneinfra`
project](https://github.com/oneinfra/oneinfra).

## Developing

In order to launch a local environment you will need to follow these
instructions:

* Run `make run-kind` in the `oneinfra/oneinfra` project
  * This will start a `kind` single control plane cluster, deploying
    all backend required pieces and starting the `oneinfra` controller
    manager as a regular process in your machine. You will need it
    running if you want the reconcile cycles to execute while you
    alter resources.

* Run the `console` API backend
  * Inside the `api` folder execute:

      ```console
      SERVE_ARGS="--auth=kubernetes-secrets" JWT_KEY=thisisaverysecretjwtkey make run
      ```

    Where `JWT_KEY` is a key of your own. If it changes across
      executions, all user sessions will become invalid.

* Run the frontend
  * Inside the `frontend` folder execute: `yarn start`.

If you are going to create clusters, you will need to create some
hypervisors where `oneinfra` will schedule them. You can run the
following command to create some…
