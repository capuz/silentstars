---
repo: "AbsaOSS/login-service"
name: "login-service"
description: "AbsaOSS Common Login gateway using JWT Public key signatures"
url: "https://github.com/AbsaOSS/login-service"
language: "Scala"
languages: ["Scala"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 6
closedIssues: 78
watchers: 5
contributors: 20
recentReleases: 0
createdAt: "2023-01-27T13:58:20Z"
lastCommitAt: "2026-06-24T06:39:24Z"
lastReleaseAt: "2026-02-05T11:53:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 74
maintainers: ["tmikula-dev", "oto-macenauer-absa", "dk1844"]
openGraphImageUrl: "https://opengraph.githubassets.com/c763f3baf61485b344960db672366ea940e7c8aec682ed98a6bd055c4ebab4b4/AbsaOSS/login-service"
---

# login-service
AbsaOSS Common Login service using JWT Public key signatures

## Basic use-case schematics
![login-gw-basic-usecase2](https://user-images.githubusercontent.com/4457378/219037599-5674b63b-403c-4c02-8a54-a6e12dc01d47.png)

### Usage & Integration
To interact with the service, most notable endpoints are
 - `/token/generate` to generate access & refresh tokens
 - `/token/refresh` to obtain a new access token with a still-valid refresh token
 - `/token/public-key` to obtain the currently signing public key to verify tokens including their validity window
 - `/token/public-keys` to obtain all available public keys including the current and previously rotated keys.
 - `/token/public-key-jwks` gives same data as `/token/public-keys` but in the form of a JSON Web Key Set.

Please, refer to the [API documentation](#api-documentation) below for details of the endpoints.

#### Generate tokens
Once you request your token at `/token/generate` endpoint, you will receive both an access token and a refresh token
```json
{
  "token": "...",
  "refresh": "..."
}
```
Both tokens are signed by LS public key and carry the username (`sub`), `type` (`access`/`refresh`) and creation/expiry…
