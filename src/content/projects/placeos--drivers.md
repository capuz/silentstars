---
repo: "PlaceOS/drivers"
name: "drivers"
description: "PlaceOS integrations and automations."
readmeQualityOk: true
url: "https://github.com/PlaceOS/drivers"
homepage: "https://placeos.com"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
stars: 13
forks: 18
openIssues: 30
closedIssues: 159
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2019-03-18T07:21:25Z"
lastCommitAt: "2026-08-03T22:25:45Z"
lastReleaseAt: "2020-11-12T00:40:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 78
maintainers: ["stakach", "chillfox", "MrYuion"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/176226062/b3725100-952a-11ea-9c15-2e54f8559a77"
postedAt: "2026-06-29T07:29:31.581Z"
---

# PlaceOS Drivers

Manage and test [PlaceOS](https://place.technology) drivers.

## Development

### `harness`

`harness` is a helper for easing development of PlaceOS Drivers.

```
Usage: ./harness [-h|--help] [command]

Helper script for interfacing with the PlaceOS Driver spec runner

Command:
    report                  check all drivers' compilation status
    up                      starts the harness
    down                    stops the harness
    build                   builds drivers and uploads them to S3
    format                  formats driver code
    help                    display this message
```

To spin up the test harness, clone the repository and run...

```shell-session
$ ./harness up
```

Point a browser to [localhost:8085/index.html](http://localhost:8085/index.html), and you're good to go.

When the environment is not in use, remember to run...

```shell-session
$ ./harness down
```

Before committing, please run...

```shell-session
$ ./harness format
```

## Documentation

- [Existing Driver Docs](https://placeos.github.io/drivers/)
- [Writing a PlaceOS Driver](https://docs.placeos.com/tutorials/backend/write-a-driver)
- [Testing a PlaceOS…
