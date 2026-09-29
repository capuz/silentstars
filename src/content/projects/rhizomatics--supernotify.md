---
repo: "rhizomatics/supernotify"
name: "supernotify"
description: "Advanced notification grouping, routing and alternative channels for Home Assistant"
readmeQualityOk: true
url: "https://github.com/rhizomatics/supernotify"
homepage: "https://supernotify.rhizomatics.org.uk/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["hacs", "hacs-integration", "home-assistant", "home-automation", "homeassistant", "notification"]
stars: 22
forks: 1
openIssues: 7
closedIssues: 26
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-25T12:49:16Z"
lastCommitAt: "2026-09-29T08:10:30Z"
lastReleaseAt: "2025-11-10T17:50:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["jeyrb", "lollox80", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1083148129/c9c8af55-e53b-4947-bcf2-0e031edf0cad"
discussionCount: 5
---

{ align=left }

# Supernotify - Unified Notifications for Home Assistant

   </a>
<br/>
<br/>
<br/>

**Unified Notification for Home Assistant**

### v2 MAJOR CHANGE - Set up from Home Assistant UI

>> `2.0.0` of SuperNotify moves to a native Home Assistant UI configuration ('ConfigFlow'). If you have an existing simple configuration, everything will be migrated for you and there will be no YAML needed.

>> A *Repair* will be raised to move any advanced configuration (deliveries, scenarios, cameras, persons, actions etc) to a new `supernotify:` section, which can be a `supernotify.yaml` file with an `include` statement to your `configuration.yaml` or however you choose to organize your configuration. Nothing will be deleted or commented out, so remove the old config when you are comfortable the new version is working for you, and this will also clear up warnings from the log about the older notification service.

>> An alternative `supernotify.notify` action is now available that is much easier to configure from automations, and works identically to the existing actions.

A **unified notification interface** on top of HomeAssistant's `notify` platform, to greatly simplify…
