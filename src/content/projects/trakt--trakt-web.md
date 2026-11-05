---
repo: "trakt/trakt-web"
name: "trakt-web"
description: "Unlock the secrets of your watch history, explore hidden connections between films, and delve into the depths of personalized recommendations. But tread carefully, for the Trakt API holds powers that could reshape your very perception of entertainment..."
readmeQualityOk: true
url: "https://github.com/trakt/trakt-web"
homepage: "https://app.trakt.tv"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [54, 44]
stars: 313
forks: 47
openIssues: 228
closedIssues: 728
watchers: 11
contributors: 26
recentReleases: 0
createdAt: "2024-10-24T09:41:36Z"
lastCommitAt: "2026-11-05T11:25:04Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 39
maintainers: ["seferturan", "crowdin-bot", "vladjerca"]
openGraphImageUrl: "https://opengraph.githubassets.com/e498d3987b47b151208ae4d452120482a077b6244fd255972c780357496fa385/trakt/trakt-web"
---

# trakt-web

---

**Contributions are welcome!** Whether you want to fix a bug, improve a
translation, or build something new - PRs are open and encouraged. No need to
ask for permission first, just dive in. See
[CONTRIBUTING.md](https://github.com/trakt/trakt-web/blob/HEAD/.github/CONTRIBUTING.md) for the details.

---

## Project Structure

This [workspace](https://bun.com/docs/install/workspaces) is
composed the following projects:

- **`client`:** The frontend of our application. This project houses the Trakt
  Web client, built with Bun and SvelteKit. It's designed to be efficient and
  user-friendly, providing quick access to media insights.

## Environment Variables

The following environment variables are required for the workspace to function
properly:

### Development

- **`TRAKT_CLIENT_ID`:** The client ID for the Trakt API.
- **`TRAKT_CLIENT_SECRET`:** The client secret for the Trakt API.

### External Contribution - Get Involved!

Want to contribute to Trakt Web? Great! Here's how to get set up:

1. **Create a Trakt Application:** Go to
   [Trakt Settings](https://trakt.tv/oauth/applications) and create a new
   application.
1. **Set the `Redirect uri:`:** Add the…
