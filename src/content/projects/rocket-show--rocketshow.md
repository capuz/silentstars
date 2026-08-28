---
repo: "Rocket-Show/rocketshow"
name: "rocketshow"
description: "A system to automate your backtracks, lighting- and videoshow."
readmeQualityOk: true
url: "https://github.com/Rocket-Show/rocketshow"
homepage: "http://www.rocketshow.net"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [57, 24]
topics: ["dmx", "raspberry-pi", "video", "audio"]
stars: 20
forks: 4
openIssues: 30
closedIssues: 43
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2017-07-22T08:33:56Z"
lastCommitAt: "2026-08-28T14:23:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 63
maintainers: ["moritzvieli", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc2a503ad8dc3fb58cd9fd54438691b84f6acb2e621ddacd7a2a21c8f153f60d/Rocket-Show/rocketshow"
---

# Rocket Show

Rocket Show is a system to automate and play shows including audio, video, lighting (e.g. DMX) and MIDI on Raspberry Pi
devices.

Check our website: https://rocketshow.net

## Usage

Refer to [the docs](https://github.com/Rocket-Show/rocketshow/blob/HEAD/docs/index.md) to find out how to use Rocket Show.

## Development

### Build

1. Build: `./mvnw clean package`
2. Start: `java -jar target/rocketshow.jar`
3. Open the web app on http://localhost:8080

Use this command to skip tests and NPM build:
```shell
./mvnw package -Dskip.npm -Dmaven.test.skip=true && java -jar target/rocketshow.jar
```

For frequent builds, you might want to comment out the frontend-maven-plugin in the POM and make use of the Maven
parameter `-DskipTests`.

### Local Angular frontend development

While developing the web app, it might be convenient to start an Angular server:

1. Add this entry to your hosts file (e.g. /etc/hosts on the Mac) to connect to a rocketshow.local server: `127.0.0.1 app.rocketshow.local`. If you connect to another device not behind mDNS rocketshow.local, you need to add the IP with rocketshow.local as well.
2. Install npm packages (force required because some…
