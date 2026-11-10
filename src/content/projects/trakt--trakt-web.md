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
stars: 315
forks: 47
openIssues: 207
closedIssues: 754
watchers: 11
contributors: 26
recentReleases: 0
createdAt: "2024-10-24T09:41:36Z"
lastCommitAt: "2026-11-10T14:49:41Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 39
maintainers: ["vladjerca", "seferturan", "crowdin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fd1629313c1eb2928c5db8ab45d63fead5abd57de61da73dd6df8408ae527b8/trakt/trakt-web"
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
