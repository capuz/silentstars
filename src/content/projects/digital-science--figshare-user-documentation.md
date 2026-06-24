---
repo: "digital-science/figshare-user-documentation"
name: "figshare-user-documentation"
description: "The home of figshare's API documentation."
url: "https://github.com/digital-science/figshare-user-documentation"
homepage: "https://docs.figshare.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 29
forks: 13
openIssues: 4
closedIssues: 12
watchers: 26
contributors: 43
recentReleases: 0
createdAt: "2015-05-11T16:29:42Z"
lastCommitAt: "2026-06-24T06:39:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 40
maintainers: ["birocorneliu", "cristian-delinschi", "sorinb-figshare"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e7e3044364568de3fcf4dffebe02a7f8db25f07cae81f855b534f06f760da05/digital-science/figshare-user-documentation"
---

# figshare API User Documentation

The home of figshare's API user documentation.

During the evolution of the API documentation there have been various iterations
and in this latest form we use Swagger to generate the pages and examples.

This system requires the `swagger.json` file (which can be found in the _swagger_documentation_
directory) to be in sync with the one found in the [Rest API](https://github.com/figshare/apiv1)
repository at `figshare_api2/api_docs/`.

## Contributing

In order to contribute you need to send a [pull request](https://help.github.com/articles/using-pull-requests/).

### Git workflow

Any development will be done on the developer branch which should follow
the `developer/feature` naming format. Feature identifier should contain only
words split with `'-'` (ex. `greatest-feature-ever-whatever`).

Code will be sent to be reviewed before merging it to `master` by other
colleagues and _Approved_ by at least two.

The description of a git commit should look like the following:

    FIG-12345: Commit message

The **FIG-12345** part is the JIRA FIG number. This should generally not be missing.
The commit message should describe the feature you're working…
