---
repo: "webtv-redialed/redialed-service"
name: "redialed-service"
description: "The WebTV Redialed service"
readmeQualityOk: true
url: "https://github.com/webtv-redialed/redialed-service"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [80, 20]
topics: ["msntv", "nodejs", "webtv"]
stars: 36
forks: 9
openIssues: 4
closedIssues: 13
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2024-07-05T17:21:55Z"
lastCommitAt: "2026-08-03T06:43:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["HIDEN64", "dependabot[bot]", "nitrate92"]
openGraphImageUrl: "https://opengraph.githubassets.com/37d98195b3c0fa1850f8fe713b4149a092796350d7f9686e90c5a6a32babf5c0/webtv-redialed/redialed-service"
---

# WebTV Redialed
This is a replacement service for WebTV/MSN TV (1st generation) clients, originally based on zefie's [minisrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

This service is not designed to be ran anywhere except on the main Redialed server. It's assumed that you know what you're doing when running it; no help for setting up the server will be provided for any reason. **You're on your own, kid.**

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your preferences (see the below section)
- Run the service: `npm start`. If you get an error with the code `ERR_OSSL_EVP_UNSUPPORTED`, try `npm run startossl` instead.
  
## Notes for service configuration 
`includes/config.json` is the default configuration file that applies to *all* instances. If you wish to change the server's configuration from the defaults, please put your configuration changes in `user_config.json`. The file should be created in the root directory of the repository, and will be ignored by Git. We do this as to not have environment-specific and potentially sensitive configuration…
