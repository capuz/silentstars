---
repo: "hallowelt/migrate-confluence"
name: "migrate-confluence"
description: "Tool to migrate content from Confluence export files into a MediaWiki compatible import source"
url: "https://github.com/hallowelt/migrate-confluence"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
stars: 44
forks: 12
openIssues: 10
closedIssues: 61
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2020-11-10T08:31:32Z"
lastCommitAt: "2026-07-03T06:23:31Z"
lastReleaseAt: "2023-08-31T06:29:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 55
maintainers: ["DvogelHallowelt", "Boldewyn", "danielriedmueller"]
openGraphImageUrl: "https://opengraph.githubassets.com/c456ed887d2525e0a15b027d0f72ddfd6be26ccedc2a16c64674a7157140f837/hallowelt/migrate-confluence"
---

# Migrate Confluence XML export to MediaWiki import data

This is a command line tool to convert the contents of a Confluence space into a MediaWiki import data format. See also the [official BlueSpice Helpdesk entry](https://en.wiki.bluespice.com/wiki/Confluence_migration).

## Docker
 The migrate confluence tool is available as docker image.

## Workflow

### Export "space" from Confluence
1. Create an export of your confluence space (one export xml for each space).

Step 1:

Step 2:

Step 3:

2. Save it to a location that is accessbile by this tool (e.g. `/tmp/confluence/input/Confluence-export.zip`)
3. Create the input directory (e.g. `/tmp/confluence/input`)
4. Extract the ZIP file (e.g. `/tmp/confluence/input/Confluence-export`)
	1. The folder should contain the files `entities.xml` and `exportDescriptor.properties`, as well as the folder `attachments`

### Migrate the contents
1. Create the "workspace" directory (e.g.…
