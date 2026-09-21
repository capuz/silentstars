---
repo: "department-for-transport-BODS/bods"
name: "bods"
description: "Bus Open Data Service"
readmeQualityOk: true
url: "https://github.com/department-for-transport-BODS/bods"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 65
forks: 16
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 41
recentReleases: 0
createdAt: "2021-05-26T12:17:32Z"
lastCommitAt: "2026-09-21T09:14:55Z"
lastReleaseAt: "2023-03-09T17:01:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 47
maintainers: ["HarrisonDuffield", "RhiannaReid", "ljones92"]
openGraphImageUrl: "https://opengraph.githubassets.com/2db295234357dee9564f61bc1a7c10cf23d06c479ca8108cbbeb96ffc5de7530/department-for-transport-BODS/bods"
---

# BODS

Bus Open Data Service

## Contributing

Please read the [CONTRIBUTING.md](https://github.com/department-for-transport-BODS/bods/blob/HEAD/CONTRIBUTING.md) document if you wish to setup
a development environment.

## Deployment

We now have 4 environments:

- dev
- test
- uat
- prod

Your branch should be merged in the following order:
Feature_branch -> dev -> test -> main -> tagging (with the relevant version)

- The dev branch deploys into the dev environment
- The test branch deploys into the test environment
- The main branch deploys into the uat environment
- Tags deploy to the prod environment

When pushing to the dev branch, an image will be built and pushed up the ECR,
tagging it with the version specified in 'version.txt' (so make sure you change
this when pushing your code up, otherwise the pipeline will not be triggered).
The services will then be updated to use this latest version.

When pushing to the other environments (test, uat or prod), it will use the version.txt
file to find the image version and update the services accordingly.
All deployments are automated other than the prod deployment, which requires an
approval from the KPMG infrastructure team.

##…
