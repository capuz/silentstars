---
repo: "uhm-coe/kapa"
name: "kapa"
description: "Kapa is a Rails engine for building institutional data management applications on top of an existing LDAP directory."
url: "https://github.com/uhm-coe/kapa"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [61, 36]
topics: ["database", "engine", "ldap", "rails"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2014-07-24T01:30:25Z"
lastCommitAt: "2026-06-28T03:09:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bfd66dbae629b86ca2158ecc7058464f60706c59ad14295505819f235db6324a/uhm-coe/kapa"
---

# KAPA

A Rails engine for building institutional data management applications on top of an existing LDAP directory.

If your organization already has LDAP (universities, hospitals, government agencies, enterprises), KAPA bridges that identity source to a local person database and lets you attach structured data — forms, files, documents, and custom records — to those people. Access to records is controlled by department and role, matching how real organizations are structured.

```
LDAP (source of truth for identity)
    ↓  search / import via Person.lookup
Person (local mirror — name, contact info, ID)
    ↓  associations
Files · Forms · Letters · your own ActiveRecord models
```

KAPA handles the back-office plumbing so you can focus on your domain. Mount the engine, add your own models (courses, registrations, projects — whatever your organization needs), and inherit a working administrative portal with authentication, document management, and access control already in place.

Used in production at the [College of Education, University of Hawaiʻi at Mānoa](https://coe.hawaii.edu/assist/work/kapa/).

## What you get out of the box

**Person Registry**
Central record for people…
