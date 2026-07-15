---
repo: "oott123/tdlib-json-cli"
name: "tdlib-json-cli"
description: "A CLI Wrapper of TdLib"
readmeQualityOk: true
url: "https://github.com/oott123/tdlib-json-cli"
language: "Ruby"
languages: ["Ruby", "C++"]
languagePcts: [64, 27]
stars: 34
forks: 17
openIssues: 2
closedIssues: 9
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2018-01-04T15:09:22Z"
lastCommitAt: "2026-07-15T05:54:09Z"
lastReleaseAt: "2021-02-27T14:02:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 39
maintainers: ["oott123"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5d21cf9d9b3b628d4fa377bd8fd40b56f2a082d22a4a9d2daaa52e10c6ab459/oott123/tdlib-json-cli"
---

# TDLib JSON CLI

## About

TDLib JSON CLI is a simple command line tool uses stdin & stdout as input & output of tdlib's [td_json_client][td-json].

You can use this to replace the buggy, weird [tg-cli](https://github.com/vysheng/tg) and it's json interface.

This project is licensed under AGPL v3.0, but you can distribute it separately so you are not required to make your project open source under AGPL compatible license.

## Usage

```bash
./bin/tdlib-json-cli [verbosity]
```
[verbosity] = 0123456789
Set TDLib's verbosity level at startup.
- 0 - fatal errors;
- 1 - errors;
- 2 - warnings and debug warnings;
- 3 - informational;
- 4 - debug;
- 5 - verbose debug;
- greater than 5 and up to 1024 can be used to enable even more logging.

tdlib-json-cli will use stdin & stdout to process data.

Request will be send to tdlib line by line, so make sure you have your json string in one line.

Response will be recieve from tdlib to stdout line by line.

See [TDLib Documention][td-json] for more information.

### Commands

We provide 2 extra command to control tdlib-json-cli behaviors.

#### verbose [int]

Change the verbose level of the tdlib.

#### exit

exit the tdlib-json-cli.

###…
