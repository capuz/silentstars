---
repo: "KDE/kaichat"
name: "kaichat"
description: "Chat interface for AI models such as ollama"
readmeQualityOk: true
url: "https://github.com/KDE/kaichat"
homepage: "https://invent.kde.org/utilities/kaichat"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2025-05-12T09:57:06Z"
lastCommitAt: "2026-11-22T02:05:31Z"
status: "thriving"
tags: ["funded"]
healthScore: 79
undervaluedScore: 64
maintainers: ["Montel", "nmariusp"]
openGraphImageUrl: "https://opengraph.githubassets.com/80ca9a1c3a373c2b94d688de04841e1afd5e28f374be33e26a2d7a2966f564fe/KDE/kaichat"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KAIChat

An application that lets you chat with AI language models, either running locally
with Ollama or provided by an online AI service.

## Overview

KAIChat is a KDE desktop client for large language models. It keeps your
conversations in a local database, so chats survive restarts and can be searched,
archived, imported and exported.

The AI back-ends themselves are not implemented in this repository: they come from
the `textautogeneratetext` library of [ktextaddons](https://invent.kde.org/libraries/ktextaddons),
which KAIChat wraps into a regular KXmlGui application. KAIChat adds the main window,
the menus and actions, the import/export jobs, the command-line and D-Bus interfaces,
a System Settings module and a few plugins.
