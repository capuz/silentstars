---
repo: "clopez/webkit-testhunter"
name: "webkit-testhunter"
description: "Parses the webkit Layout Test results history and prints all the results for a given test grouped by revision intervals."
readmeQualityOk: true
url: "https://github.com/clopez/webkit-testhunter"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 5
forks: 6
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2014-04-22T14:48:48Z"
lastCommitAt: "2026-08-01T06:14:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 84
maintainers: ["clopez"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ef899430c09d6bb6097271daa97afb1eab4f5e29ae22e9084a51a3d296b0d2e/clopez/webkit-testhunter"
---

# WebKit-TestHunter

Utilities to parse the WebKit Layout Test results history and print
the results for a given test grouped by revision intervals or detect
tests that are flaky.

Note: This tracks only the bots from the GTK and WPE ports of WebKit.
However, support for other ports should be really easy to add (open an issue
if you are interested).

The repository includes also the data from the bots that is updated daily.

However, before running wktesthunter is always a good idea to update
the json files.

# Update the json files

 * Execute: `./resync`
 * When updating if it prints warnings about not beeing able to
   fetch data for some revisions then is usually safe to ignore it.
   (probably that revisions failed to compile webkit, therefore
    there are no test results for them)

# Check history of past results for a test

* Typical usage:

  * `./wktesthunter testdir/testname.html`

* Use the `--bot` argument to select the bot you want to check.
* Check `./wktesthunter -h` for additional help.

# Detect flaky tests to be added to the TestExpectations file

* Typical usage:

  * `./flakyhunter`

* Use the `--bot` argument to select the bot you want to check.
* Use the…
