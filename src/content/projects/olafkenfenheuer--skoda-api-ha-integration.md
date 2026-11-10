---
repo: "olafkenfenheuer/Skoda-api-HA-Integration"
name: "Skoda-api-HA-Integration"
description: "Home Assistant (HACS) integration for Škoda vehicles via the MyŠkoda API"
readmeQualityOk: true
url: "https://github.com/olafkenfenheuer/Skoda-api-HA-Integration"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["custom-component", "hacs", "home-assistant", "homeassistant-integration", "skoda"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-12T08:03:39Z"
lastCommitAt: "2026-11-10T11:38:37Z"
lastReleaseAt: "2026-10-30T10:49:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 60
maintainers: ["olafkenfenheuer", "frankyhun", "janreimen"]
openGraphImageUrl: "https://opengraph.githubassets.com/66fa9caee7a7deea25ff88f04e631dad997cfb0165c049d517e100dda233c656/olafkenfenheuer/Skoda-api-HA-Integration"
---

# Škoda API Connect for Home Assistant

[🇬🇧 English](https://github.com/olafkenfenheuer/Skoda-api-HA-Integration/blob/HEAD/README.md) | [🇩🇪 Deutsch](https://github.com/olafkenfenheuer/Skoda-api-HA-Integration/blob/HEAD/README.de.md) | [🇳🇱 Nederlands](https://github.com/olafkenfenheuer/Skoda-api-HA-Integration/blob/HEAD/README.nl.md)

A multi-language [Home Assistant](https://www.home-assistant.io/) custom integration for
Škoda vehicles, built on the official
[MyŠkoda Public API](https://public.api.connect.skoda-auto.cz/docs). It talks to the API
directly with an **API key** - no username/password and no third-party client library.

> **Unofficial project.** This integration is not affiliated with, endorsed by, or associated
> with Škoda Auto. Use at your own risk.

> **Developed with AI support.** The programming of this integration was done with the support of
> [Claude](https://claude.com), an AI assistant by Anthropic. Features are tested on the maintainer's own
> vehicle (an Enyaq) as far as this README says so; everything else is untested.

## Features

Built following Home Assistant's current integration best practices: a UI-only config flow,
a `DataUpdateCoordinator`…
