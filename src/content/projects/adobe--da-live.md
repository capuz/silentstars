---
repo: "adobe/da-live"
name: "da-live"
description: "Edge Delivery Authoring"
readmeQualityOk: true
url: "https://github.com/adobe/da-live"
homepage: "https://da.live"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 34
forks: 71
openIssues: 204
closedIssues: 314
watchers: 13
contributors: 287
recentReleases: 0
createdAt: "2023-11-26T19:03:07Z"
lastCommitAt: "2026-09-15T08:54:53Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["sharanyavinod", "mhaack", "hannessolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/84059a9a45f1d216853e8679e6ef59d5889a09ac4e509037216c73e77eae2564/adobe/da-live"
discussionCount: 10
---

# Edge Delivery Authoring
This repo provides the author experience for https://da.live.

## Developing
### Run
1. Clone this repo to your computer.
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. In a terminal, run `aem up` this repo's folder.
1. Start building.

### Authentication
DA requires an Adobe Identity. You will need a _Stage_ Adobe Identity to work on `localhost` or `aem.page`.

#### DA to IMS environment mapping
| Domain | IMS Tier |
| :--- | :--- |
| `localhost` | IMS Stage |
| `aem.page` | IMS Stage |
| `aem.live` | IMS Prod |
| `da.live` | IMS Prod |

### Content
Local development will use DA's stage content repository. If you don't have any content or configs there, make some.

### Admin & Collab
You will want to point your local to stage admin & collab or run these services locally. We recommend using stage.

1. Stage - `localhost:3000/?da-admin=stage&da-collab=stage`
2. Local - `localhost:3000/?da-admin=local&da-collab=local`
3. Reset - `localhost:3000/?da-admin=reset&da-collab=reset`

#### NX

In order to also use the local `nx` scripts, run `npm run local` in the `da-nx` checkout and then enable it via:…
