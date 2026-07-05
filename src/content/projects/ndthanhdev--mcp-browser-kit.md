---
repo: "ndthanhdev/mcp-browser-kit"
name: "mcp-browser-kit"
description: "An MCP Server that enables AI assistants to interact with your local browsers."
readmeQualityOk: true
url: "https://github.com/ndthanhdev/mcp-browser-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 54
forks: 10
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-04-01T21:37:58Z"
lastCommitAt: "2026-07-05T20:55:18Z"
lastReleaseAt: "2025-10-21T20:17:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 50
maintainers: ["ndthanhdev", "dependabot[bot]", "ElishaKay"]
openGraphImageUrl: "https://opengraph.githubassets.com/0914aca81e9948c5e293509201e87098916e582431d9eda4daf00513bc78723c/ndthanhdev/mcp-browser-kit"
---

# MCP Browser Kit

> 🚀 **On the `main` branch?** You're viewing the bleeding-edge dev docs! For other versions, check out the `release/*` branches.

An MCP Server that enables AI assistants to interact with your local browsers.

https://github.com/user-attachments/assets/1fbf87fd-06d1-42bf-a06f-cc2bbdf375a8

## Usage

1. Add MCP Browser Kit to your MCP Client:

   ```json
   {
   	"mcpServers": {
   		"browser-kit": {
   			"command": "npx",
   			"args": ["@mcp-browser-kit/server@latest"]
   		}
   	}
   }
   ```

2. Choose the right extension build for your browser:

   - Check the [Compatibility table](#compatibility-table) below to see which build (M2 or M3) is compatible with your browser
   - Note that M2 builds offer more functionality than M3 builds, so prefer M2 if your browser supports both

3. Download the latest compatible build from [The Latest Release](https://github.com/ndthanhdev/mcp-browser-kit/releases/latest).

4. [Load the extension](#load-extension) into a compatible browser and enable it.

5. Refresh open tabs to ensure extension scripts are loaded.

6. Start messaging on your MCP Client:

   ```
   Use browser-kit, star the last open GitHub repo on my…
