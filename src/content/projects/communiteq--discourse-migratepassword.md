---
repo: "communiteq/discourse-migratepassword"
name: "discourse-migratepassword"
description: "Support migrated password hashes"
readmeQualityOk: true
url: "https://github.com/communiteq/discourse-migratepassword"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 26
forks: 26
openIssues: 3
closedIssues: 1
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2014-09-07T20:02:32Z"
lastCommitAt: "2026-11-04T08:03:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 56
undervaluedScore: 36
maintainers: ["communiteq", "ftc2"]
openGraphImageUrl: "https://opengraph.githubassets.com/1176eb473daa293af8eecd362cd858038ddc90581466042140ab2e45ef81eed4/communiteq/discourse-migratepassword"
---

discourse-migratepassword
=========================

Support migrated password hashes

Installation
============

* Run `bundle exec rake plugin:install repo=https://github.com/communiteq/discourse-migratepassword` in your discourse directory
* Restart Discourse

Usage
=====

* Store your alternative password hashes in a custom field named `import_pass`
```
user = User.find_by(username: 'user')
user.custom_fields['import_pass'] = '5f4dcc3b5aa765d61d8327deb882cf99'
user.save
```

Rake task
=========

The plugin also features a rake task which imports users from a CSV file.
Usage: `migratepassword:import[filename.csv]`

You need to put `filename.csv` inside of the container or put it in for instance `/var/discourse/shared/standalone/uploads` outside of the container and then access it inside the container as `public/uploads/filename.csv`

The CSV file needs to have the required fields `user_email` and `name`, and optional fields `user_login`, `password` (plain text), `blocked` (`true` or `false`) and `import_pass` (migrated password hash).

License
=======

GPL v2
