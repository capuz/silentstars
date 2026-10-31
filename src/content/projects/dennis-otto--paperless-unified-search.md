---
repo: "Dennis-Otto/paperless-unified-search"
name: "paperless-unified-search"
description: "Nextcloud app: Paperless-ngx OCR full-text search in Nextcloud's unified search, with no extra index; results open in the Nextcloud viewer"
readmeQualityOk: true
url: "https://github.com/Dennis-Otto/paperless-unified-search"
homepage: "https://dennis-otto.github.io/paperless-unified-search/"
language: "PHP"
languages: ["PHP"]
languagePcts: [58]
topics: ["document-management", "full-text-search", "nextcloud", "ocr", "paperless-ngx", "php", "search", "dms", "document-search", "homelab"]
stars: 7
forks: 1
openIssues: 6
closedIssues: 57
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-25T13:02:33Z"
lastCommitAt: "2026-10-31T19:00:55Z"
lastReleaseAt: "2026-10-05T02:27:43Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["Dennis-Otto", "dennis-otto-release-automation[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1346141693/2360344b-59d9-41f7-883a-054c8194633e"
fundingLinks: ["GITHUB:https://github.com/Dennis-Otto"]
discussionCount: 14
---

# Paperless Unified Search

**Find Paperless-ngx documents by the words inside them, right in Nextcloud's search.**

**English** · [Deutsch](https://github.com/Dennis-Otto/paperless-unified-search/blob/HEAD/README.de.md)

Paperless Unified Search brings Paperless-ngx OCR and full-text search into Nextcloud's global search, without Elasticsearch, a second index or another container: Paperless answers, Nextcloud decides who sees the file. Search results open the matching synchronized file directly in Nextcloud's viewer.

Two apps, one archive: [Paperless Sync](https://github.com/Dennis-Otto/paperless-sync) writes every document of Paperless-ngx as a file of one Nextcloud account, the archive account, with the marker `[P<ID>]` in its name. Paperless Unified Search asks Paperless for the documents that match a search and shows each one to whoever can open its file.

Paperless Sync is the companion, not a must: [any synchronization](#works-with-any-synchronization) that writes the files with their marker into the archive account works as well, Paperless-ngx's own file names included.

The [documentation website](https://dennis-otto.github.io/paperless-unified-search/) has this…
