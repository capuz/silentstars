---
repo: "inkarkat/git-extensions"
name: "git-extensions"
description: "Additions and tweaks to the Git CLI."
url: "https://github.com/inkarkat/git-extensions"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
stars: 24
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-09-21T11:05:53Z"
lastCommitAt: "2026-06-29T07:13:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 62
maintainers: ["inkarkat"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9609b62a2d1ff4d6bc98e573e18c29dba12f8df99453a7501fddf40510547b5/inkarkat/git-extensions"
discussionCount: 0
---

# Git CLI extensions

_Additions and tweaks to the Git CLI._

These are some personal aliases, shortcuts, and extensions that make (my) work with the [Git distributed version control tool](https://git-scm.com/) easier and faster. Some of them may be specific to my environment and workflow, and especially the advanced commands often rely on other (potentially unpublished) scripts, but maybe someone finds a valuable nugget in there.

### Installation

Download all / some selected extensions (note that some have dependencies, though) and put them somewhere in your `PATH`, or just add the `./bin` subdirectory to `PATH`. You can then invoke them via `git-SUBCOMMAND`; those commands that don't override built-in ones or have case differences can also be invoked via `git SUBCOMMAND` (space instead of hyphen!).

Additionally, the `gitconfig` supplies many aliases and shortcuts. You can mix and match those within your own `.gitconfig`, or import all of it (beware this is highly personal and still very much in flux!) via the following fragment in there:

    [include]
            path = PATH/TO/git-extensions/gitconfig

To use system-local configuration (like `.gitconfig`, but in a separate…
