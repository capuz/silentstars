---
repo: "trakt/trakt-web"
name: "trakt-web"
description: "Unlock the secrets of your watch history, explore hidden connections between films, and delve into the depths of personalized recommendations. But tread carefully, for the Trakt API holds powers that could reshape your very perception of entertainment..."
url: "https://github.com/trakt/trakt-web"
homepage: "https://app.trakt.tv"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [52, 47]
stars: 246
forks: 30
openIssues: 268
closedIssues: 474
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2024-10-24T09:41:36Z"
lastCommitAt: "2026-06-30T06:49:40Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 39
maintainers: ["seferturan", "vladjerca", "crowdin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae524aa8f0640c580ccae217ffea389bb17106690ff5e29f9be870e4a1186e3e/trakt/trakt-web"
---

# trakt-web

---

**Contributions are welcome!** Whether you want to fix a bug, improve a
translation, or build something new - PRs are open and encouraged. No need to
ask for permission first, just dive in. See
[CONTRIBUTING.md](.github/CONTRIBUTING.md) for the details.

---

## Project Structure

This [workspace](https://docs.deno.com/runtime/fundamentals/workspaces/) is
composed the following projects:

- **`client`:** The frontend of our application. This project houses the Trakt
  Web client, built with Deno and SvelteKit. It's designed to be efficient and
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
1. **Set the `Redirect uri:`:** Add the following URIs (one per line):…
