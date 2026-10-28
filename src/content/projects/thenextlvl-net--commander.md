---
repo: "TheNextLvl-net/commander"
name: "commander"
description: "Remove, hide or change or query permissions of commands"
readmeQualityOk: true
url: "https://github.com/TheNextLvl-net/commander"
homepage: "https://modrinth.com/project/USLuwMUi"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["minecraft", "minecraft-plugin", "paper-plugin", "paper"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-07T13:16:15Z"
lastCommitAt: "2026-10-28T09:56:49Z"
lastReleaseAt: "2024-04-22T21:12:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 83
maintainers: ["NonSwag", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e76c318c9fb2ec2f1a795ff043d5bdc9ce060213fbb821d732f13180f722a24a/TheNextLvl-net/commander"
fundingLinks: ["GITHUB:https://github.com/NonSwag"]
---

# A Powerful Command Management Tool

A must-have command management system for your minecraft server.<br/>
With **Commander** you can _remove_ or _hide_ commands you don't want,<br/>
_change_; _remove_ or _add_ permissions to existing commands.<br/>
Every message is localized and can be customized.

## Usage

_In order to use `/command` the permission `commander.admin` is required_<br/>
_To bypass the command hiding feature the explicit permission `commander.bypass` is required_

### Permissions

- To change the permission of a command, use: `/command permission set [command] [permission]`<br/>
- To completely remove a permission from a command, use: `/command permission set [command] null`<br/>
- To reset the permission of a command to its default value, use: `/command permission reset [command]`<br/>
- To see what the permission of a certain command is, use: `/command permission query [command]`

### Commands

To remove a command for everyone, use: `/command unregister [command]`<br/>
To add a removed command back, use: `/command register [command]`<br/>
To hide a command, use: `/command hide [command]`<br/>
To reveal a command again, use: `/command reveal [command]`<br/>
To…
