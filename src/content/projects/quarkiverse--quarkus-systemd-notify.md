---
repo: "quarkiverse/quarkus-systemd-notify"
name: "quarkus-systemd-notify"
description: "This extension enables integrating systemd-notify with Quarkus"
readmeQualityOk: true
url: "https://github.com/quarkiverse/quarkus-systemd-notify"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["linux", "quarkus", "quarkus-extension", "systemd", "systemd-notify"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2022-11-30T13:25:05Z"
lastCommitAt: "2026-10-06T10:42:34Z"
lastReleaseAt: "2023-08-29T04:32:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 46
maintainers: ["Eng-Fouad", "dependabot[bot]", "gastaldi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0854121a228b7db678b6c34e8ed80a25d8546e186864bcee3b5b1573b5f90e4a/quarkiverse/quarkus-systemd-notify"
---

# Quarkus Systemd Notify Extension

## Introduction

This extension is used to notify Linux service manager (systemd) about start-up completion and other service status changes.

## Usage

To use the extension, add the dependency to the target project:

```
<dependency>
    <groupId>io.quarkiverse.systemd.notify</groupId>
    <artifactId>quarkus-systemd-notify</artifactId>
    <version>${quarkus.systemd.notify.version}</version>
</dependency>
```

and configure the service unit file with the following minumum configurations:

```
...

[Service]
Type=notify
AmbientCapabilities=CAP_SYS_ADMIN

...
```

## Systemd Service Example

Assuming `quarkus-run.jar` is located at `/opt/quarkus-app/quarkus-run.jar`:

- Create a unit configuration file at `/etc/systemd/system/quarkus.service`:

```
[Unit]
Description=Quarkus Server
After=network.target
Wants=network.target

[Service]
Type=notify
NotifyAccess=all
AmbientCapabilities=CAP_SYS_ADMIN
ExecStart=/bin/java -jar /opt/quarkus-app/quarkus-run.jar
SuccessExitStatus=0 143

[Install]
WantedBy=multi-user.target
```
- Enable the service (this will make it to run at system start-up as well):

```
sudo systemctl enable quarkus
```

-…
