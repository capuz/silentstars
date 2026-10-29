---
repo: "jonahsnider/frc-colors.com"
name: "frc-colors.com"
description: "A web app & API to get the team colors for an FRC team's logo."
readmeQualityOk: true
url: "https://github.com/jonahsnider/frc-colors.com"
homepage: "https://frc-colors.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["api", "frc", "nextjs"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-24T04:03:08Z"
lastCommitAt: "2026-10-29T21:04:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 64
maintainers: ["jonahsnider[bot]", "jonahsnider"]
openGraphImageUrl: "https://opengraph.githubassets.com/b826b682d62c327c0fe61db1e847c171e11a262d0db26d2f2246448488106002/jonahsnider/frc-colors.com"
fundingLinks: ["PATREON:https://patreon.com/jonahsnider", "KO_FI:https://ko-fi.com/jonahsnider"]
discussionCount: 0
---

# FRC Colors

**[frc-colors.com](https://frc-colors.com)**

A web app & API to get the primary & secondary/accent colors for an FRC team's logo.

Automatically extracts colors from team avatars uploaded to FIRST if verified colors aren't stored in our database.

## API Usage

### Base URL

The API is publicly available at `https://api.frc-colors.com`.

An OpenAPI 3.1 document is available at `https://api.frc-colors.com/openapi.json`.

### `GET /v1/team/:teamNumber`

Get the colors for a team by number.

#### Example

`GET /v1/team/581`

```json
{
	"primaryHex": "#591616",
	"secondaryHex": "#e86d38",
	"verified": true
}
```

### `GET /v1/team`

Get the colors for several teams by number.

#### Example

`GET /v1/team?team=581&team=751&team=9408`

```json
{
	"teams": {
		"581": {
			"teamNumber": 581,
			"colors": {
				"primaryHex": "#591616",
				"secondaryHex": "#e86d38",
				"verified": true
			}
		},
		"751": {
			"teamNumber": 751,
			"colors": null
		},
		"9408": {
			"teamNumber": 9408,
			"colors": {
				"primaryHex": "#1d2e3b",
				"secondaryHex": "#ffffff",
				"verified": false
			}
		}
	}
}
```

### `GET /v1/event/:eventCode`

Get the colors for all teams at an event.…
