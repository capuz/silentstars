---
repo: "envato/safe_shell"
name: "safe_shell"
description: "Safely execute shell commands and get their output."
readmeQualityOk: true
url: "https://github.com/envato/safe_shell"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 76
forks: 7
openIssues: 0
closedIssues: 3
watchers: 91
contributors: 16
recentReleases: 1
createdAt: "2010-11-08T04:42:21Z"
lastCommitAt: "2026-11-22T11:46:57Z"
lastReleaseAt: "2026-11-22T06:03:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 100
undervaluedScore: 36
maintainers: ["orien"]
openGraphImageUrl: "https://opengraph.githubassets.com/796e68a526e3ea6c72dbed8e9e56d698021933da998c990323892f57d31fe02a/envato/safe_shell"
---

# SafeShell

SafeShell lets you execute shell commands and get the resulting output, but without the security problems of Ruby's backtick operator.

## Usage

Install gem:

```sh
gem install safe_shell
```

Use gem:

```ruby
require 'safe_shell'
SafeShell.execute("echo", "Hello, world!")
```

SafeShell sets the $? operator to the process status, in the same manner as the backtick operator.

If the call is interrupted, by a timeout or a signal, SafeShell sends the command TERM, then KILL if it is still running a second later, and reaps it, so $? describes the terminated command. The call returns once the command has been reaped, normally up to a second after the interruption. Only the command's own process is signalled, not any processes it started. The exceptions:
