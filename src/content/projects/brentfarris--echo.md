---
repo: "BrentFarris/echo"
name: "echo"
description: "Local AI / LLM harness for professional programmers"
readmeQualityOk: true
url: "https://github.com/BrentFarris/echo"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [57, 39]
topics: ["ai", "coding", "programming", "ai-agents", "ai-assistant", "ai-harness"]
stars: 12
forks: 1
openIssues: 3
closedIssues: 46
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-06-02T14:21:06Z"
lastCommitAt: "2026-11-06T02:17:50Z"
lastReleaseAt: "2026-06-20T09:29:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["BrentFarris", "BrentTripwire"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257272743/cf65b42a-ac62-48aa-875e-53996ede48b8"
---

# Echo

The chat-first Echo application now lives at the repository root. Echo, named bots, model streaming, scoped file operations and deterministic bot coordination form the core. Features are installed plugins. The previous application is kept temporarily in the Git-ignored `OLD/` folder for reference; its source, scripts, dependencies and local files are archived there.

Deleted chats with saved history remain available for **30 days** in **Deleted** at the bottom of the sidebar, grouped by their original bots. Blank chats with no saved messages are permanently removed immediately, including any pending uploads; they do not appear in Deleted. Deleted and its nested groups start collapsed on reload. The muted chat rows can still be opened to read the conversation and view or download its media. The banner shows the removal date and offers **Restore** or **Delete permanently**, which asks for confirmation. Restore returns the same chat to its active group; it does not restart stopped work. Sending, editing, rerunning, and forking require restoration first. Deleting individual messages is unchanged.

Retention belongs to the chat's home machine. Remote chats require an updated…
