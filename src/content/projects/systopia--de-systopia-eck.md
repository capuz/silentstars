---
repo: "systopia/de.systopia.eck"
name: "de.systopia.eck"
description: "CiviCRM Entity Construction Kit"
readmeQualityOk: true
url: "https://github.com/systopia/de.systopia.eck"
language: "PHP"
languages: ["PHP"]
languagePcts: [89]
topics: ["civicrm", "civicrm-extension", "civicrm-extensions"]
stars: 6
forks: 6
openIssues: 7
closedIssues: 46
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2021-09-17T14:14:26Z"
lastCommitAt: "2026-08-31T09:57:54Z"
lastReleaseAt: "2024-06-26T09:35:24Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 83
undervaluedScore: 61
maintainers: ["jensschuppe", "mattwire", "seamuslee001"]
openGraphImageUrl: "https://opengraph.githubassets.com/b264cfedcbc6405502a402724023c12e90c7f64e692327bb396f9c33d017690c/systopia/de.systopia.eck"
---

# CiviCRM Entity Construction Kit

The Entity Construction Kit (ECK) provides a user interface and an API for
creating and managing custom CiviCRM entities. In conjunction with custom fields
being attached to those entities, things in your business logic can be modeled
more clearly, when standard CiviCRM entities are not sufficient.

ECK allows you to define arbitrary semantics as a CiviCRM entity type, each with
a name and a label, and as many properties as you like by attaching custom
fields to them. You can also introduce another level of hierarchy by defining
sub-types.

As instances of those entity types are "real" CiviCRM entities, other extensions
can build upon that data model. E.g. the *SearchKit* extension can be used to
create search forms, overview pages, etc., and the *FormBuilder* extension can
be used to create forms for editing properties or linking entities.

Also, other extensions are able to attach their functionality to those entities.
E.g. the [CiviResource](https://github.com/systopia/de.systopia.resource)
extension can be used to mark entities as resources that can then be assigned to
resource demands for e.g. events.

The extension is licensed under…
