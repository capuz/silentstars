---
repo: "davidklassen/winch"
name: "winch"
description: "Dead simple server configuration tool."
readmeQualityOk: true
url: "https://github.com/davidklassen/winch"
homepage: "https://winchstack.app"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["configuration-management", "devops", "go", "infrastructure-as-code", "linux", "self-hosted", "ssh", "sysadmin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-10-24T14:09:50Z"
lastCommitAt: "2026-11-08T14:13:43Z"
lastReleaseAt: "2026-11-06T07:05:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["davidklassen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3da9de8966ff1f352767c0f18a7ec546b21bba61eb2cc11420677a1aa1e175e/davidklassen/winch"
---

# winch

winch is a server configuration tool. It describes the desired state
of your servers in declarative YAML and provides commands to manage
that state.

winch is at version 0.x: the project format can still change between
minor versions. The [changelog](https://github.com/davidklassen/winch/blob/HEAD/CHANGELOG.md) lists the changes and how
to migrate.

## Example

`winch.yaml`:

```yaml
name: web

hosts:
  web1.example.com: {}

steps:
  - pkg:
      name: nginx
  - file:
      path: /var/www/html/index.html
      content: |
        <p>Hello from winch.</p>
  - service:
      name: nginx
      enabled: true
      running: true
```

`winch plan` shows the changes and changes nothing:

```
$ winch plan
web1.example.com
  web
    + pkg nginx
        refresh the package index
        install nginx
        other packages: known after the refresh
    + file /var/www/html/index.html
        create directory /var/www (owner root, group root, mode 0755)
        create directory /var/www/html (owner root, group root, mode 0755)
        owner root, group root, mode 0644
        @@ -0,0 +1,1 @@
        +<p>Hello from winch.</p>
    ~ service nginx
        nginx.service does not exist yet…
