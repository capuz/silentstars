---
repo: "andrewdavidmackenzie/meshchat"
name: "meshchat"
description: "An Iced GUI application to find, connect to and then use Meshtastic LoRa Radios to chat"
readmeQualityOk: true
url: "https://github.com/andrewdavidmackenzie/meshchat"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 43
forks: 5
openIssues: 17
closedIssues: 174
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-09-29T15:07:54Z"
lastCommitAt: "2026-10-08T10:52:37Z"
lastReleaseAt: "2026-03-04T17:00:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 53
maintainers: ["andrewdavidmackenzie", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0927ea81e5a7f0ddb6a5089ec83ab206b1f6e266956dcf7b13d1ba6412700edf/andrewdavidmackenzie/meshchat"
discussionCount: 11
---

#  MeshChat

Meshchat is a cross-platform GUI application to interact with Meshtastic and MeshCore LoRa radios:

- discover Bluetooth Low Energy attached compatible radios
- connect to one
- use it to chat with others using preset Channels or direct messages to Nodes
- it saves the last device connected to (and Channel/Node if chosen), and on re-start it will try to
  automatically reconnect to that device and channel/node and continue chatting

## Installers

Installers for macOS, Linux and Windows are available
at [Latest Release on GitHub](https://github.com/andrewdavidmackenzie/meshchat/releases/latest)

## Screenshots

On the left, the Device view, once you have connected to a BLE Radio, shows configured channels, a list of nodes
found and nodes you have marked as a favorite.

On the right, the Channel view, Once you have clicked on a channel or a node, shows you the ongoing chat messages with
it,
with your messages on the right and others on the left.

## The Thinking

My thinking was to keep the app as simple to look at and use as possible.

- avoid the app being an extremely geeky LoRa/Mesh app.
- try to give users a simple chat experience, similar to ones they will be…
