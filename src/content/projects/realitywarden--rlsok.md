---
repo: "realitywarden/rlsok"
name: "rlsok"
description: "The audited gate between AI and the physical world. Every actuator command: allowed, blocked, logged — never silent."
readmeQualityOk: true
url: "https://github.com/realitywarden/rlsok"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["physical-ai", "robotics", "audit", "esp32", "runtime", "safety"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T11:54:30Z"
lastCommitAt: "2026-09-08T08:08:45Z"
lastReleaseAt: "2026-08-11T08:33:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["ZqiEE"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1272216110/6655cf6c-a029-4dde-9f38-8bc7ae5bdb4f"
discussionCount: 1
---

# RLSOK

RLSOK binds learned-policy execution to the exact release, robot, controller,
and approval intended to run. The robot-side gate rechecks Hosted Cloud before
ROS 2 dispatch and writes verifiable Evidence.

## Zero-to-Shadow

For reusable interface selection and field mapping, open the
[browser configuration wizard](https://rlsok.com/connect) and follow
[the interface onboarding guide](https://github.com/realitywarden/rlsok/blob/HEAD/docs/interface-onboarding.md). Files are
processed in the browser; exported workspaces are consumed by the local CLI.

For the FANUC/Humble composable workflow, download the separate
[v1.5.0-shadow.3 evaluation package](https://github.com/realitywarden/rlsok/releases/tag/v1.5.0-shadow.3)
and follow the [installation-to-Evidence guide](https://github.com/realitywarden/rlsok/blob/HEAD/docs/fanuc-shadow-self-service.md).
This locally reviewed/built prerelease has not been validated on Humble or a
physical FANUC. It does not change the stable Cloud or v1.4.5 installer below.

Start with [inputs, offline use and result interpretation](https://github.com/realitywarden/rlsok/blob/HEAD/docs/local-shadow-first-evaluation.md).

For configurable ROS 2…
