---
repo: "idiv-biodiversity/mmdu"
name: "mmdu"
description: "disk usage for IBM Storage Scale file systems"
readmeQualityOk: true
url: "https://github.com/idiv-biodiversity/mmdu"
homepage: "https://crates.io/crates/mmdu"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 12
forks: 4
openIssues: 4
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-03-13T10:04:28Z"
lastCommitAt: "2026-08-05T06:08:05Z"
lastReleaseAt: "2026-02-23T11:05:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 50
maintainers: ["dependabot[bot]", "wookietreiber"]
openGraphImageUrl: "https://opengraph.githubassets.com/b121b6c0f954ba94eb22a17b79f32771cea774681d2c30ff1ce8302bbb30a30e/idiv-biodiversity/mmdu"
---

mmdu
====

Disk usage for [IBM Storage Scale][] (formerly Spectrum Scale, formerly GPFS)
file systems.

-   uses `mmapplypolicy` instead of universal directory traversal

    This can be considerably faster, especially for large directories, because
    it uses file system internals and can use extensive parallelism. See the
    respective command-line options in `--help` output for more information.

-   aims to be CLI compatible with `du` from [coreutils][]

    Not all options of `du` are supported yet. Some defaults are still
    different.

Run with `-?` for concise help and `--help` for full help.

Motivation and Usage
--------------------

The main motivation is a speedy alternative to `du` due to `mmapplypolicy`
being much faster then universal directory traversal.

But because `mmapplypolicy` can not be run as a regular user, it is advisable
to set up timer or cron jobs to run this as a service for users and groups. You
could set up timers that run `mmdu --max-depth x` for each `/data/dir` and save
the output to `/data/dir/disk-usage.txt`. Users could configure the depth and
then check the output with `sort -h /data/dir/disk-usage.txt`. This avoids that
users have to do…
