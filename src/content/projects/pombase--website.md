---
repo: "pombase/website"
name: "website"
description: "PomBase website code"
readmeQualityOk: true
url: "https://github.com/pombase/website"
homepage: "https://www.pombase.org"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [61, 29]
topics: ["pombase", "fission-yeast"]
stars: 6
forks: 1
openIssues: 90
closedIssues: 2102
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2016-05-30T14:03:28Z"
lastCommitAt: "2026-10-26T20:59:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 80
maintainers: ["kimrutherford", "dependabot[bot]", "PCarme"]
openGraphImageUrl: "https://opengraph.githubassets.com/d800ea9df4f925c025bc2f1ffe5004e5492558b8f38230e0c7f1bbd6842cb87b/pombase/website"
---

## PomBase frontend code

See https://github.com/pombase/website/tree/master/

### Build and test status

### Deploying

The site is deployed by building a container from the JSON output of `pombase-chado-json`,
which is run nightly by this script:

https://github.com/pombase/pombase-legacy/blob/master/etc/load-all.sh

The container is build with:

https://github.com/pombase/pombase-chado/blob/master/etc/build_container.sh

### Test setup

#### Get the code

`git clone https://github.com/pombase/website.git pombase-website`

`cd pombase-website/`

### Run test server

`ng serve --port 4242 --disable-host-check --host 0.0.0.0 --proxy-config proxy.conf.json`

### Run JSON/query server

https://github.com/pombase/pombase-chado-json

`cargo run --release --bin pombase-server -- -c pombase_v2_config.json -m web-json/api_maps.json.gz -s web-json/gene_subsets.json -w /var/www/html/`

#### Update generated docs

This is needed when the Markdown documentation changes or if the front
page panel config changes.

`./etc/update_generated_files.sh pombase-config/website/pombase_v2_config.json curation/data_files/`

where:

 - `pombase-config` is a checkout of…
