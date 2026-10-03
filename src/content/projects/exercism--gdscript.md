---
repo: "exercism/gdscript"
name: "gdscript"
description: "Exercism exercises in GDScript."
readmeQualityOk: true
url: "https://github.com/exercism/gdscript"
homepage: "https://exercism.org/tracks/gdscript"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [95]
topics: ["exercism-track", "wip-track", "community-contributions-accepted"]
stars: 8
forks: 10
openIssues: 4
closedIssues: 7
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2023-02-22T12:03:28Z"
lastCommitAt: "2026-10-03T22:04:13Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 87
maintainers: ["IsaacG", "codingthat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e1fe5b51586f24a86055c6e24ad165fbc0f42fa0ad955c21bf33321632ba94c/exercism/gdscript"
fundingLinks: ["GITHUB:https://github.com/exercism", "CUSTOM:https://exercism.org/donate"]
---

# Exercism GDScript Track

Exercism exercises in GDScript.

## Testing

There are two options for iterating over all exercises to see if their exemplar/example implementation passes all the tests.  Option B also allows single-exercise verification and overriding which Docker image to use for the test runner.

### Option A: Via local `godot`

To set up for testing, clone https://github.com/exercism/gdscript-test-runner and move its contents to `/opt/test-runner`:

```sh
git clone https://github.com/exercism/gdscript-test-runner.git
sudo mkdir -p /opt/
sudo mv gdscript-test-runner/ /opt/test-runner/
```

To test the exercises, run `godot --headless -s bin/verify-exercises.gd` from the present repo's root (not the gdscript-test-runner repo root).

### Option B: Via docker

The docker verifier is included in the present repo, just run this from its root:

```sh
bin/verify-exercises-in-docker
```

If you want to verify a single exercise:

```sh
bin/verify-exercises-in-docker two-fer
```

If you want to verify all exercises against a specified test runner:

```sh
bin/verify-exercises-in-docker -i my-local-image
```

This allows maintainers to preview upgrades to the test runner.

###…
