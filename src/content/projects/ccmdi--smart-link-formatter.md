---
repo: "ccmdi/smart-link-formatter"
name: "smart-link-formatter"
description: "Obsidian plugin that automatically formats links with information from dynamic websites"
url: "https://github.com/ccmdi/smart-link-formatter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["obsidian", "obsidian-md", "obsidian-plugin"]
stars: 16
forks: 1
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-13T19:33:48Z"
lastCommitAt: "2026-06-25T02:07:23Z"
lastReleaseAt: "2025-10-26T18:31:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["ccmdi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5bad07559a63b058150d88b3bbc22a73f7a9fe7f801bf87329c84c3994a3558/ccmdi/smart-link-formatter"
---

# Smart Link Formatter
A plugin for Obsidian that automatically formats pasted links with metadata.

It has explicit support for:
* YouTube
* Twitter/X
* Reddit
* YouTube Music
* GitHub
* Image links

## Features
- Automatically formats pasted links
- Supports custom formatting for all clients, as well as regular links
- Blacklist domains to prevent automatic formatting
- Toggle auto-linking on/off

## Formatting
Variables are replaced dynamically by the plugin. The first instance of square brackets `[]` will be a hyperlink for the clipboard content.

For default links, the following variables are available:

- `{title}` - Page title
- `{url}` - The URL of the page

Example format: `[{title}]`

If you need to format a date (e.g. `upload_date`), you can use moment.js date formats: `{upload_date|MMMM Do, YYYY}`

### Capturing

Clients in the plugin have unique variables you can capture. For instance, when pasting a **YouTube** link, the following variables are available for formatting:

- `{title}` - Video title
- `{channel}` - Channel name
- `{uploader}` - Uploader name (which can sometimes differ from channel)
- `{duration}` - Length of the video
- `{views}` - Number of views
-…
