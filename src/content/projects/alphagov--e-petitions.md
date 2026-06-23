---
repo: "alphagov/e-petitions"
name: "e-petitions"
description: "This is the code base for the UK Government's e-petitions service (https://petition.parliament.uk)"
url: "https://github.com/alphagov/e-petitions"
homepage: "https://petition.parliament.uk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [75]
stars: 312
forks: 79
openIssues: 5
closedIssues: 29
watchers: 37
contributors: 53
recentReleases: 0
createdAt: "2012-05-24T16:04:02Z"
lastCommitAt: "2026-06-23T06:42:47Z"
lastReleaseAt: "2015-08-05T09:54:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["pixeltrix", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82370900a1993ebb7fae22f6ac366201cf15a36d6c8411d3a5e1398d9e547d0f/alphagov/e-petitions"
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
