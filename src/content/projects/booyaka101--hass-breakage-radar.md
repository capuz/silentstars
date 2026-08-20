---
repo: "Booyaka101/hass-breakage-radar"
name: "hass-breakage-radar"
description: "Which of your Home Assistant custom integrations stop working, and in which future release. Daily crawl of every HACS integration for deprecated HA APIs + a HACS-installable integration that reports on your own box."
readmeQualityOk: true
url: "https://github.com/Booyaka101/hass-breakage-radar"
homepage: "https://booyaka101.github.io/hass-breakage-radar/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["breaking-changes", "deprecation", "hacs", "home-assistant", "home-automation", "homeassistant-custom-component", "python", "static-analysis"]
stars: 14
forks: 0
openIssues: 7
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-08T05:52:58Z"
lastCommitAt: "2026-08-20T04:08:19Z"
lastReleaseAt: "2026-08-12T12:04:54Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 49
maintainers: ["Booyaka101", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/513fd1319338a7b1c64316d428e8609405bdd023b48be47ad504ba2817fa51aa/Booyaka101/hass-breakage-radar"
fundingLinks: ["GITHUB:https://github.com/Booyaka101"]
discussionCount: 0
---

# Breakage Radar for Home Assistant

**Which of my custom integrations stop working, and in which Home Assistant release?**

Home Assistant announces API removals a year ahead on the developer blog and marks
them in code with `breaks_in_ha_version=`. Core integrations get migrated. Custom
integrations mostly do not — and the author of the integration you installed from HACS
two years ago may not be reading the developer blog at all.

Worse, the warning never reaches *you*. In `homeassistant/helpers/frame.py`:

```python
def report_usage(
    what: str,
    *,
    breaks_in_ha_version: str | None = None,
    core_behavior: ReportBehavior = ReportBehavior.ERROR,
    core_integration_behavior: ReportBehavior = ReportBehavior.LOG,
    custom_integration_behavior: ReportBehavior = ReportBehavior.LOG,
    ...
) -> None:
```

`custom_integration_behavior` defaults to **LOG**. A custom integration that uses a
doomed API gets one line in `home-assistant.log` — while it still works. On upgrade
day it simply stops. And Repairs deliberately will not carry the warning; from the
architecture discussion that approved the legacy device tracker removal…
