---
repo: "OpenVoiceOS/ovos-workshop"
name: "ovos-workshop"
description: "frameworks, templates and patches for the OpenVoiceOS universe"
url: "https://github.com/OpenVoiceOS/ovos-workshop"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["openvoiceos"]
stars: 6
forks: 15
openIssues: 10
closedIssues: 28
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2021-04-02T15:15:29Z"
lastCommitAt: "2026-06-28T03:11:11Z"
lastReleaseAt: "2022-05-09T19:46:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 86
maintainers: ["JarbasAl", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a48e36efc169d1728430abe5fbe3eef1f2b4b3647405bf67535aaffd9472edf/OpenVoiceOS/ovos-workshop"
fundingLinks: ["GITHUB:https://github.com/OpenVoiceOS", "PATREON:https://patreon.com/openvoiceos", "LIBERAPAY:https://liberapay.com/OpenVoiceOS-Foundation", "CUSTOM:https://paypal.me/openvoiceos"]
---

# OVOS Workshop

Base classes, decorators, and helpers for building skills and applications for OpenVoiceOS.

## Install

```bash
pip install ovos-workshop
```

Runtime dependencies include `ovos-yes-no-plugin` and `ovos-option-matcher-fuzzy-plugin`, which back the `ask_yesno` and `ask_selection` skill methods.

## Quick Start

```python
from ovos_workshop.skills.ovos import OVOSSkill
from ovos_workshop.decorators import intent_handler

class HelloWorldSkill(OVOSSkill):

    @intent_handler("hello.intent")
    def handle_hello(self, message):
        self.speak_dialog("hello.response")

def create_skill():
    return HelloWorldSkill()
```

Register in `pyproject.toml`:

```toml
[project.entry-points."opm.skills"]
hello-world-skill = "hello_world_skill:HelloWorldSkill"
```

## Configuration

Key settings a skill can accept in its `settings.json`:

| Key | Default | Description |
|-----|---------|-------------|
| `ask_yesno_plugin` | `ovos-solver-yes-no-plugin` | YesNoEngine plugin used by `ask_yesno()` |
| `ask_selection_plugin` | `ovos-option-matcher-fuzzy-plugin` | OptionMatcherEngine plugin used by `ask_selection()` |

Both keys can also be set system-wide under the `skills`…
