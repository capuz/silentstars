---
repo: "NodeJSmith/hassette"
name: "hassette"
description: "Modern, async-first Python framework for building Home Assistant automations"
readmeQualityOk: true
url: "https://github.com/NodeJSmith/hassette"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["home-assistant", "home-automation", "homeassistant"]
stars: 81
forks: 6
openIssues: 568
closedIssues: 1447
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-09-01T22:24:07Z"
lastCommitAt: "2026-10-23T12:04:20Z"
lastReleaseAt: "2025-09-12T15:23:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 46
maintainers: ["NodeJSmith", "nodejsmith-release-please[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af375ca86356070b5b21222d665380ab43f5bddda4afe172b2f979072490afe9/NodeJSmith/hassette"
discussionCount: 1
---

# Hassette

Hassette is a Python framework for writing Home Assistant automations as typed, testable code. It connects to Home Assistant, runs your apps, and shows you what each one is doing.

**Documentation:** https://hassette.readthedocs.io

In `apps/motion_lights.py`:

```python
from hassette import App, AppConfig

class MotionLightsConfig(AppConfig):
    motion_sensor: str = "binary_sensor.hallway_motion"
    light: str = "light.hallway"

class MotionLights(App[MotionLightsConfig]):
    async def on_initialize(self):
        cfg = self.app_config
        await self.bus.on_state_change(cfg.motion_sensor, changed_to="on", handler=self.lights_on, name="motion_on")
        await self.bus.on_state_change(
            cfg.motion_sensor, changed_to="off", duration=120, handler=self.lights_off, name="motion_off"
        )

    async def lights_on(self):
        await self.api.turn_on(self.app_config.light, brightness=200)

    async def lights_off(self):
        await self.api.turn_off(self.app_config.light)
```

The light turns on when motion starts. It turns off once the sensor has stayed clear for 120 seconds: `duration` fires the handler only if the new state holds that long, so…
