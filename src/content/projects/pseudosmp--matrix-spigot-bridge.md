---
repo: "pseudosmp/matrix-spigot-bridge"
name: "matrix-spigot-bridge"
description: "Link a Minecraft server chat with a Matrix.org room - Forked from Lautriva"
readmeQualityOk: true
url: "https://github.com/pseudosmp/matrix-spigot-bridge"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-05-27T00:47:15Z"
lastCommitAt: "2026-07-25T06:01:05Z"
lastReleaseAt: "2025-11-21T13:33:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 51
maintainers: ["ilamparithi-in", "Aceroph"]
openGraphImageUrl: "https://opengraph.githubassets.com/789c26471e9f31b2235496a33da24db1daf172f8de7cec80b12ac11450dcbf66/pseudosmp/matrix-spigot-bridge"
---

# MatrixSpigotBridge v2

&ensp; 

MatrixSpigotBridge is a Spigot plugin that uses [matrix.org](https://matrix.org), an instant messaging protocol, to let interact with the players without logging onto the Minecraft server.

This is a fork of MatrixSpigotBridge that aims to continue support and add new features. Currently, this fork adds these features:
- Asynchronous connection to Matrix Server, so that your server isnt prevented from starting if the plugin is unable to connect.
- Format messages in config with HTML tags
- Matrix room commands: <br><br><br><br>
- In-game commands: `/msb [ping | reload | restart]` <br><br><br><br>
- Reserialization (preserves formatting) across the two chats<br><br><br><br>

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245 'Plugin PlaceholderAPI by clip') is supported so if you have it, you can add fancy placeholders in all plugin's messages :D Here is an example usage

Config:

```yaml
format:
    player:
        join: '➕ {MESSAGE}'
        quit: '➖ {MESSAGE}'
        death: '🪦 {MESSAGE}'
        chat: <blockquote><b>{PLAYERNAME}</b> from %playerbiomes_biome_name_english%</blockquote>{MESSAGE}
```

Matrix Chat:

(pssst,…
