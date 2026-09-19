---
repo: "balena-io/sshproxy"
name: "sshproxy"
description: "sshproxy is a simple ssh server library exposing an even simpler API"
readmeQualityOk: true
url: "https://github.com/balena-io/sshproxy"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["ssh-server"]
stars: 34
forks: 12
openIssues: 3
closedIssues: 21
watchers: 20
contributors: 16
recentReleases: 0
createdAt: "2017-04-06T14:05:21Z"
lastCommitAt: "2026-09-19T08:14:49Z"
lastReleaseAt: "2017-11-30T09:00:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 55
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f713ad989c11ee0e7945dfa456de7bf89de7881efe9509600f6c379d76de9d/balena-io/sshproxy"
---

# sshproxy

Configuration is possible via commandline flags, environment variables
and config files.

Config files should be named `sshproxy.<ext>` and exist in the sshproxy
work dir. The following config file formats are supported:

* [YAML](http://yaml.org) (`sshproxy.yml`)
* [JSON](http://www.json.org) (`sshproxy.json`)
* [TOML](https://github.com/toml-lang/toml) (`sshproxy.toml`)
* [HCL](https://github.com/hashicorp/hcl) (`sshproxy.hcl`)
* [Java .properties](https://en.wikipedia.org/wiki/.properties) (`sshproxy.properties`)

There are a total of 15 configuration options and with the exception of `dir`
they can all be set via commandline, environment or config file.

| Name               | Commandline                 | Environment                   | Config               |
|--------------------|-----------------------------|-------------------------------|----------------------|
| Allow Env          | `--allow-env` `-E`          | `SSHPROXY_ALLOW_ENV`          | `allow-env`          |
| API Host           | `--apihost`, `-H`           | `BALENA_API_HOST`             | `apihost`            |
| API Key            | `--apikey`, `-K`            | `SSHPROXY_API_KEY`            |…
