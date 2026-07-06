---
repo: "trakt/trakt-web"
name: "trakt-web"
description: "Unlock the secrets of your watch history, explore hidden connections between films, and delve into the depths of personalized recommendations. But tread carefully, for the Trakt API holds powers that could reshape your very perception of entertainment..."
readmeQualityOk: true
url: "https://github.com/trakt/trakt-web"
homepage: "https://app.trakt.tv"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [52, 47]
stars: 254
forks: 31
openIssues: 267
closedIssues: 484
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2024-10-24T09:41:36Z"
lastCommitAt: "2026-07-06T07:04:13Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 39
maintainers: ["vladjerca", "seferturan", "crowdin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcbf5526f1f2c9818043050c7a572f42174fe18008bb5309ca8d7a80d10038a9/trakt/trakt-web"
---

# trakt-web

---

**Contributions are welcome!** Whether you want to fix a bug, improve a
translation, or build something new - PRs are open and encouraged. No need to
ask for permission first, just dive in. See
[CONTRIBUTING.md](https://github.com/trakt/trakt-web/blob/HEAD/.github/CONTRIBUTING.md) for the details.

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
1. **Set the `Redirect…
