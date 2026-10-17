---
repo: "alphagov/e-petitions"
name: "e-petitions"
description: "This is the code base for the UK Government's e-petitions service (https://petition.parliament.uk)"
readmeQualityOk: true
url: "https://github.com/alphagov/e-petitions"
homepage: "https://petition.parliament.uk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
stars: 313
forks: 84
openIssues: 5
closedIssues: 30
watchers: 37
contributors: 47
recentReleases: 0
createdAt: "2012-05-24T16:04:02Z"
lastCommitAt: "2026-10-17T07:58:45Z"
lastReleaseAt: "2015-08-05T09:54:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["pixeltrix", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1198293c1b30942758fa77db6681ddb40d22913e77d717dce763153af25a3eb/alphagov/e-petitions"
---

# Petitions

This is the code base for the [UK Government and Parliament's petitions service][1].

## Setup

We recommend using [Docker Desktop][2] to get setup quickly. If you'd prefer not to use
Docker then you'll need Ruby (3.2+), Node (20+) and PostgreSQL (16+) installed.

### Create the databases

```
bin/run rake db:setup
```

### Load the country list

```
bin/run rake epets:countries:load
```

### Fetch the regions list

```
bin/run rails runner 'FetchRegionsJob.perform_now'
```

### Fetch the constituencies list

```
bin/run rails runner 'FetchConstituenciesJob.perform_now'
```

### Fetch the department list

```
bin/run rails runner 'FetchDepartmentsJob.perform_now'
```

### Enable signature counting

```
bin/run rails runner 'Site.enable_signature_counts!(interval: 10)'
```

### Start the services

```
docker compose up
```

Once the services have started you can access the [front end][3], [back end][4] and any [emails sent][5].

## Tests

Before running any tests the database needs to be prepared:

```
bin/run rake db:test:prepare
```

You can run the full test suite using following command:

```
bin/run rake
```

Individual specs can be run using the following…
