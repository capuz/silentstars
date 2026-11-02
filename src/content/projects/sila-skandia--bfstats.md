---
repo: "sila-skandia/bfstats"
name: "bfstats"
description: "bfstats.io"
readmeQualityOk: true
url: "https://github.com/sila-skandia/bfstats"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [43, 29]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2026-03-09T10:56:16Z"
lastCommitAt: "2026-11-02T11:36:21Z"
lastReleaseAt: "2026-10-28T06:39:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 64
maintainers: ["sila-skandia"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c2f91d43d0229f9adf66347d5400415884d849ce8f65c1705e121e7228161dc/sila-skandia/bfstats"
---

# bfstats.io

Code for [bfstats.io](https://bfstats.io) – Player and server tracking for BF42

## License

[MIT](https://github.com/sila-skandia/bfstats/blob/HEAD/LICENSE). Use it for whatever you like — if you build something with it, a
link back to [bfstats.io](https://bfstats.io) is appreciated.

The license covers the code in this repository only. Battlefield 1942 game assets
(models, textures, maps, sounds, and anything the extraction pipeline produces from
the game archives) are the property of EA/DICE and are not covered — you need your
own copy of the game to extract them.

## Running Locally
- .NET 10+ SDK
- Docker & Docker Compose
- node 18+

1. Start dev dependencies
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

2. Run the API
   ```bash
   cd api
   dotnet run
   ```

   The API will be available at http://localhost:9222/stats.

3. Run the UI
    ```bash
   cd ui
   npm run dev
   ```
    The UI will be available at http://localhost:5173/.

### Configuration

Run `dotnet user-secrets set <Secret Name>` from the `api/` directory:

| Secret Name                         | Description…
