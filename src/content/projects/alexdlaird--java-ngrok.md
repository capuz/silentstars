---
repo: "alexdlaird/java-ngrok"
name: "java-ngrok"
description: "The complete ngrok agent for Java: programmatic tunnels for ingress, inspection, webhooks, demos, and APIs"
readmeQualityOk: true
url: "https://github.com/alexdlaird/java-ngrok"
homepage: "https://java-ngrok.alexlaird.com"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["java", "tunnel", "webhook", "reverse-proxy", "ngrok", "localhost", "tunneling"]
stars: 61
forks: 8
openIssues: 0
closedIssues: 27
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2021-04-19T01:27:12Z"
lastCommitAt: "2026-11-05T14:05:19Z"
lastReleaseAt: "2021-08-25T21:04:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 55
maintainers: ["alexdlaird", "dependabot[bot]", "alexdlaird-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/359293310/53e99f3b-5c0a-4bf0-86c5-3d1ed6dbda89"
fundingLinks: ["GITHUB:https://github.com/alexdlaird", "PATREON:https://patreon.com/alexdlaird", "CUSTOM:https://www.paypal.me/alexdlaird"]
---

`java-ngrok` gives Java the complete [`ngrok` agent](https://ngrok.com/docs/gateway/agent), with programmatic tunnels
for ingress, inspection, webhooks, demos, and APIs. [`ngrok`](https://ngrok.com) is a reverse proxy that opens secure
tunnels from public URLs to localhost, and because `java-ngrok` runs the real agent, you get everything it offers, from
traffic policies and OAuth to its web inspector and request replay, all callable from Java.

## Installation

`java-ngrok` is available
on [Maven Central](https://central.sonatype.com/artifact/com.github.alexdlaird/java-ngrok).

If you want `ngrok` to be available from the command
line, [`pyngrok`](https://pyngrok.readthedocs.io/en/stable/#installation)
can be installed using `pip` to manage that for you.

## Basic Usage

### Open a Tunnel

To open a tunnel, use the [`NgrokClient`](https://javadoc.io/doc/com.github.alexdlaird/java-ngrok/latest/com.github.alexdlaird.ngrok/com/github/alexdlaird/ngrok/NgrokClient.html)'s [`connect()`](https://javadoc.io/doc/com.github.alexdlaird/java-ngrok/latest/com.github.alexdlaird.ngrok/com/github/alexdlaird/ngrok/NgrokClient.html#connect(com.github.alexdlaird.ngrok.protocol.CreateTunnel))
method,…
