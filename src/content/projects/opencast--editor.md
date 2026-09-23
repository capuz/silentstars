---
repo: "opencast/editor"
name: "editor"
description: "Web-based video editor for Opencast"
readmeQualityOk: true
url: "https://github.com/opencast/editor"
homepage: "https://editor.opencast.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["opencast", "editor", "hacktoberfest", "subtitles", "video"]
stars: 68
forks: 47
openIssues: 47
closedIssues: 294
watchers: 13
contributors: 28
recentReleases: 0
createdAt: "2020-10-21T12:10:16Z"
lastCommitAt: "2026-09-23T08:45:27Z"
lastReleaseAt: "2022-10-06T16:06:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 57
maintainers: ["gregorydlogan", "Arnei", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f7a1deb5babd277685e1ac7a174219e6b044338705133e1eeb6bef063812df/opencast/editor"
---

Opencast Video Editor
=====================

](https://github.com/opencast/opencast-editor/actions?query=workflow%3A%22Build+%26+Deploy%22)
](https://editor.opencast.org)

The Opencast Video Editor is a tool included by [Opencast](https://opencast.org) to cut and arrange recordings.

Quick Test
----------

To test locally, run:

    npm start

This will start a local test server in the development mode.
Open [http://localhost:3000](https://github.com/opencast/editor/blob/HEAD/localhost:3000) to view it in the browser.

The latest version connected to [develop.opencast.org](https://develop.opencast.org) is also publicly available
at [editor.opencast.org](https://editor.opencast.org).

To open a specific event with the editor, use the GET-Parameter `id` like so: `https://editor.opencast.org/?id=27cd7156-fda6-4b31-aab5-d56833012caf`.

Building the Editor
-------------------

To build the editor for production to the `build` folder, run:

    npm run build

To make the editor work in a sub-path, use:

    PUBLIC_URL=/path npm run build

To build a container image, run:

    DOCKER_BUILDKIT=1 docker build \
        --build-arg NODE_VERSION=16 \
        --build-arg CADDY_VERSION=2.5.1 \…
