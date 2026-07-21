---
repo: "wp-cli/handbook"
name: "handbook"
description: "📖 Complete documentation for WP-CLI"
readmeQualityOk: true
url: "https://github.com/wp-cli/handbook"
homepage: "https://make.wordpress.org/cli/handbook/"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
topics: ["wp-cli", "documentation", "wordpress", "cli", "handbook", "documentations", "docs", "hacktoberfest"]
stars: 205
forks: 369
openIssues: 1
closedIssues: 109
watchers: 12
contributors: 225
recentReleases: 0
createdAt: "2017-01-19T16:52:02Z"
lastCommitAt: "2026-07-21T06:10:31Z"
lastReleaseAt: "2022-02-02T16:58:07Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 48
maintainers: ["swissspidy", "ekamran", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/368378a68cd583c5abb46794a4e0f7b3eb38fb0bc9559a079b4ed7ebf089a913/wp-cli/handbook"
---

wp-cli/handbook
===============

These files comprise the WP-CLI handbook ([make.wordpress.org/cli/handbook](https://make.wordpress.org/cli/handbook/)) and WP-CLI commands directory ([developer.wordpress.org/cli/commands](https://developer.wordpress.org/cli/commands/)).

The documentation is located in GitHub to enable a pull request-based editing workflow.

Long-form documentation (e.g. "Commands cookbook") can be edited directly.

Internal API docs and command pages are generated dynamically from the WP-CLI codebase using the `wp handbook` series of commands.

Before running these commands, the bash script `bin/install_packages.sh` should be run to install the latest versions of the non-bundled commands in `bin/packages`. Note that `wp` must point to the target WP-CLI instance (i.e., the phar or git version that contains the docblocks to be generated against) and should be run with `WP_CLI_PACKAGES_DIR=bin/packages` and `WP_CLI_CONFIG_PATH=/dev/null`.

So for instance to generate all dynamically created documentation against the nightly phar run:

```
wp cli update --nightly
bin/install_packages.sh
WP_CLI_PACKAGES_DIR=bin/packages WP_CLI_CONFIG_PATH=/dev/null wp handbook gen-all…
