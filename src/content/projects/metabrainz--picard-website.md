---
repo: "metabrainz/picard-website"
name: "picard-website"
description: "Website for MusicBrainz Picard"
url: "https://github.com/metabrainz/picard-website"
homepage: "https://picard.musicbrainz.org"
language: "Less"
languages: ["Less"]
languagePcts: [68]
topics: ["flask", "musicbrainz-picard", "python"]
stars: 24
forks: 37
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 51
recentReleases: 0
createdAt: "2014-05-27T12:38:25Z"
lastCommitAt: "2026-06-30T06:46:48Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 86
undervaluedScore: 69
maintainers: ["zas", "phw", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/20219476/e487158e-9524-4a4e-aace-11eb126efde0"
fundingLinks: ["GITHUB:https://github.com/metabrainz", "CUSTOM:https://metabrainz.org/donate"]
---

# MusicBrainz Picard's Website

Website for MusicBrainz [Picard](https://picard.musicbrainz.org/).

Please report issues here: https://tickets.musicbrainz.org/browse/PW

Docker image is available at: https://hub.docker.com/r/metabrainz/picard-website

Translations: https://translations.metabrainz.org/projects/picard/website/

## Development Scripts

### Testing and Running

`./test.sh` - Run tests and start the development server. This script:
- Checks for `website/config.py` (required)
- Installs Python dependencies with uv
- Installs npm dependencies
- Builds static assets
- Runs pytest tests
- Starts the local development server

Note: To serve plugin data locally, run `uv run python plugins-generate.py` separately (requires network access to download from [picard-plugins](https://github.com/metabrainz/picard-plugins) repository). Without it, plugin pages will return 503.

### Translation Management

`npm run extract_strings` - Extract translatable strings from Python source files to `website/frontend/messages.pot`

`npm run resync_po_files_from_pot` - Update translation files (.po) from the messages.pot template

`npm run translate` - Compile translation files (.po) to binary…
