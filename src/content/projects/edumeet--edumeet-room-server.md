---
repo: "edumeet/edumeet-room-server"
name: "edumeet-room-server"
description: "This is the room server service for the Edumeet project"
readmeQualityOk: true
url: "https://github.com/edumeet/edumeet-room-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 27
openIssues: 1
closedIssues: 27
watchers: 8
contributors: 14
recentReleases: 0
createdAt: "2022-10-22T19:29:29Z"
lastCommitAt: "2026-11-18T12:05:12Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["Astagor", "so010", "N7Remus"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c600386ccb106a4b3eb6ccba3e45c51bbeb977c563d3b7272f3dea7578c7a50/edumeet/edumeet-room-server"
discussionCount: 3
---

# Edumeet room server

This is the room server service for the Edumeet project.
It handles signaling to and from client and media node services.

## Usage

Make a file called `config.json` in the `/config` folder. An example configuration file with all properties set to default values can be found here:
[config.example.json](https://github.com/edumeet/edumeet-room-server/blob/HEAD/config/config.example.json)

Note that if you don't provide a value for `tls.cert` and `tls.key` the server will start in HTTP mode.

### Reverse proxy
We use geo position based on client ipv4 address when doing load balancing.
If you're running room-server service behind a reverse proxy, you need to forward client ipv4 address in http header `x-forwarded-for`.

As ipv6 is not supported in [the library we use for geoip lookup](https://github.com/geoip-lite/node-geoip), deploying edumeet using ipv6 is not recommend.

### Running the service manually

```bash
$ corepack enable
$ yarn install --immutable
$ MANAGEMENT_USERNAME=username MANAGEMENT_PASSWORD=password yarn start
```
