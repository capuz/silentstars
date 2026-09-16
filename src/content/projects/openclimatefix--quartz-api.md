---
repo: "openclimatefix/quartz-api"
name: "quartz-api"
description: "Quartz API for solar and wind data"
readmeQualityOk: true
url: "https://github.com/openclimatefix/quartz-api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 32
openIssues: 29
closedIssues: 88
watchers: 3
contributors: 22
recentReleases: 3
createdAt: "2023-12-20T17:13:02Z"
lastCommitAt: "2026-09-16T08:47:42Z"
lastReleaseAt: "2026-07-15T15:49:51Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 88
maintainers: ["suvanbanerjee", "peterdudfield", "braddf"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55d25b15c510cbd0ff55119ff6321f4727e623d783e935959b143333bb81518/openclimatefix/quartz-api"
fundingLinks: ["GITHUB:https://github.com/openclimatefix", "OPEN_COLLECTIVE:https://opencollective.com/openclimatefix"]
---

# Quartz API

API providing external access to Quartz forecast data.

## Running the service

### Configuration

The application is configured via the use of environment variables.
See `src/quartz_api/cmd/server.conf` for the full specification of available environmental
configuration.

### Using Docker

Run the latest image from GitHub container registry:

```sh
$ docker run 
    -p 8000:8000 \
    -e <ENV_KEY>=<ENV_VALUE> \
    ghcr.io/openclimatefix/quartz-api:latest
```

## Development

Clone the repository. Install all the dependencies with

```
$ uv sync
```

### Running the service

To run the API locally, use the command

```
$ uv run quartz-api
```

The API should then be accessible at `http://localhost:8000`, and the docs at
`http://localhost:8000/docs` (or whatever port you have configured).

### Running Tests

Make sure that you have install the development dependencies (`uv sync` will do this for you).
Then run the tests using

```
uv run pytest
```

## Known Bugs

There may be some issues when installing this with windows.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tbody>…
