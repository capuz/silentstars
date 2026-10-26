---
repo: "ministryofjustice/help-with-prison-visits-external"
name: "help-with-prison-visits-external"
description: "Allows prison visitors to get help with the cost of visits"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/help-with-prison-visits-external"
homepage: "https://www.gov.uk/help-with-prison-visits"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["hmpps", "frontend"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 130
watchers: 43
contributors: 26
recentReleases: 0
createdAt: "2016-10-07T10:36:48Z"
lastCommitAt: "2026-10-26T09:17:27Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 97
undervaluedScore: 59
maintainers: ["renovate[bot]", "psoleckimoj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8adb3f2b68e790882cd97cf960ae6c99c00c044703e2080e58eb5d884e235d3f/ministryofjustice/help-with-prison-visits-external"
---

# Get help with the cost of prison visits

Help With Prison Visits external, public facing web application.

## Requirements

* Docker (Including Docker Compose)
* Node 24 (Including NPM) - If running locally

## Run

### Locally
The application uses node's `--env-file=.env` to pick up a local file containing settings for environment variables called `.env`. This file will not be checked into Git. Speak to a member of the Visits dev team (#visits-dev on Slack) to populate.

#### Database
It is possible to use the dev instance of the database which can then be used to set some of the above environment variables. This can be achieved by setting up a port-forwarding pod in Kubernetes so that the dev database can be forwarded to a local port. i.e. `kubectl run port-forward-pod --image=ministryofjustice/port-forward  --port=1433 --env="REMOTE_HOST=<RDS_DB>" --env="LOCAL_PORT=1433" --env="REMOTE_PORT=1433"` followed by setting up the port forward itself `kubectl port-forward pod/port-forward-pod 1433:1433`

Then install dependencies and run on port 3000.

```
npm run setup
npm run dev
```
 
### Docker Compose
This enables the application to run as a docker image locally and also…
