---
repo: "leancodepl/tandem"
name: "tandem"
description: "Let an AI agent work on your existing Flutter screen with the user, over AG-UI. It calls your own methods, keeping human in the loop conveniently."
readmeQualityOk: true
url: "https://github.com/leancodepl/tandem"
homepage: "https://pub.dev/packages/tandem"
language: "Dart"
languages: ["Dart"]
languagePcts: [90]
topics: ["ag-ui", "ai-agents", "copilot", "dart", "flutter", "flutter-package", "human-in-the-loop", "llm"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 2
createdAt: "2026-10-16T09:28:08Z"
lastCommitAt: "2026-10-21T08:49:52Z"
lastReleaseAt: "2026-10-19T10:23:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["wzslr321", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e57e5f3c9224dd0d7f9652e1914ff7604f13eb7295b2b33bb5d0a2beb265b22/leancodepl/tandem"
---

# tandem

Add an AI agent to your Flutter screens. It works on the screen together with the user, conveniently.

## How it works

The model does not run in the app. Your agent backend calls it and keeps the API key, and the app talks to the backend over [AG-UI](https://docs.ag-ui.com), an open protocol between agents and apps. Google ADK, LangChain, CrewAI, Mastra and many other agent frameworks support it. Tandem is the app's side.

Your state class lists what the agent may do:

```dart
  List<AgentCapability> get agentCapabilities => [
    .sees(draft),
    .calls(setQuantity),
    if (draft.lines.isNotEmpty) .callsWithApproval(placeOrder),
  ];
```

- `.sees(draft)`: the agent sees the draft as it is at each turn, and nothing the class does not list.
- `.calls(setQuantity)`: the agent calls the method a button calls, so the same validation runs and the screen changes as after a tap.
- `.callsWithApproval(placeOrder)`: the method runs only after the user approves the call.

> [!NOTE]
> Tandem is experimental. Its API can change before 1.0.

## Quick start

Requires Dart 3.13 (Flutter 3.47) or newer.

1. Add the packages. Keep both on the same minor version: the generated code…
