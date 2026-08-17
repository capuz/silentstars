---
repo: "aptos-labs/aptos-framework"
name: "aptos-framework"
description: "Mirror repo for the Aptos framework packages"
readmeQualityOk: true
url: "https://github.com/aptos-labs/aptos-framework"
language: "Move"
languages: ["Move"]
languagePcts: [99]
stars: 22
forks: 7
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 62
recentReleases: 0
createdAt: "2024-07-11T23:17:45Z"
lastCommitAt: "2026-08-17T04:18:19Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 57
maintainers: ["rahxephon89", "georgemitenkov", "ibalajiarun"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce14a3231e63ce02c0544e72a59bb495bfc6dc23c2ef33d4128430b29cc0d5f0/aptos-labs/aptos-framework"
---

# The Aptos Framework Repo

This repository serves as a mirror for the Aptos Framework packages, including the Move standard library. The contents are synced from [aptos-core](https://github.com/aptos-labs/aptos-core) on an hourly basis.

By pulling dependencies from this mirror repository, developers can avoid downloading unnecessary data, reducing build time significantly.

## Usage
To use the packages in this repository as dependencies in your Move project, you can include them in your move.toml file by adding them as Git dependencies.

To add a dependency from this repository, include the following in your `move.toml` file:
```
[dependencies]
<package_name> = { git = "https://github.com/aptos-labs/aptos-framework.git", subdir = "<path_to_directory_containing_Move.toml>", rev = "<commit_hash_or_branch_name>" }
```
For example, to add `AptosFramework` from the `mainnet` branch, you would use:
```
AptosFramework = { git = "https://github.com/aptos-labs/aptos-framework.git", subdir = "aptos-framework", rev = "mainnet" }
```
Make sure to replace `subdir` with the appropriate path if you are referencing a different package within the framework.

## Contributing
If you want to…
