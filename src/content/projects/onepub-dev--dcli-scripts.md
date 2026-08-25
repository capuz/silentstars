---
repo: "onepub-dev/dcli_scripts"
name: "dcli_scripts"
description: "A range of sample and useful cli scripts written dart using the dshell library."
readmeQualityOk: true
url: "https://github.com/onepub-dev/dcli_scripts"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 16
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-01-22T05:35:19Z"
lastCommitAt: "2026-08-25T04:09:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 30
maintainers: ["bsutton"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5dd3e30270a84506cef245b1e0285a726dcc589c8ed1b2fa6d06f9d6445371b/onepub-dev/dcli_scripts"
---

An eclectic collection of CLI scripts that help me manage my dev environment.

Some of my favourites:

# commands

| command | description | Example|
| --- | --- | --- |
| dport | finds what process has a tcp port open.| dport 80|
| clean | cleans Rust `target`, Node `node_modules`, stale Docker and Git files, then highlights large directories. | clean|
| dmailhog | installs and starts/stops mailhog. | dmailhog \| dmailhog --shutdown |
| dmysql |  Backup/Restore and connects you to a mysql cli pulling settings (username/password) from a per database local settings file. | dmysql mydb backup \| dmysql mydb restore `<path>`
| dwhich | an improved which command that also highlights invalid paths
| gitgc | runs garbage collection on all your git projects.
| hog | finds system resource hogs.
| ipaddr | shows the ip address on your local machine.
| docker_push | builds a docker file and pushes it to docker.hub. 
| kill_tomcat | kills any java tomcat instances.
| pub_get_all | recursively runs `dart pub get` 
| hex_dump | dumps the contents of a file in hex and ascii.
| find_text | Find a file that contains the given text|

# dfind
Recursively searches for a file with a matching glob…
