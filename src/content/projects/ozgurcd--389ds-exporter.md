---
repo: "ozgurcd/389DS-exporter"
name: "389DS-exporter"
description: "Prometheus exporter for 389-DS LDAP Server"
url: "https://github.com/ozgurcd/389DS-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 11
forks: 6
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-04-04T07:45:02Z"
lastCommitAt: "2026-06-23T23:27:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 51
maintainers: ["ozgurcd"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c45b1ebac500c2fc517492272d05eebcb8126f7a7b76c32cf08fb3b65b6e32/ozgurcd/389DS-exporter"
---

# Prometheus exporter for 389-DS LDAP Server 

- https://directory.fedoraproject.org/
- https://directory.fedoraproject.org/docs/389ds/development/performance-diagnostic.html
- https://ltb-project.org/documentation/check_ldap_monitor_389ds.html
- https://access.redhat.com/documentation/en-us/red_hat_directory_server/11/html-single/performance_tuning_guide/index
- https://docs.oracle.com/cd/E19729-01/816-5597-10/dsstats.htm
- https://docs.oracle.com/cd/E20295_01/html/821-1222/baail.html#SUNWDSEEREFbaail

# The directory server 389 export there metric on ldap cn=monitor base (and generaly are accesible anonymously):
```
# ldapsearch -H ldap://localhost:389 -x -s sub -b "cn=monitor" "(objectclass=*)"
# extended LDIF
#
# LDAPv3
# base <cn=monitor> with scope subtree
# filter: (objectclass=*)
# requesting: ALL
#

# monitor
dn: cn=monitor
objectClass: top
objectClass: extensibleObject
cn: monitor
version: 389-Directory/1.3
threads: 24
currentconnections: 311
totalconnections: 423687
currentconnectionsatmaxthreads: 0
maxthreadsperconnhits: 0
dtablesize: 4096
readwaiters: 0
opsinitiated: 2661473
opscompleted: 2661472
entriessent: 2090672
bytessent: 2120635985
currenttime: 20220919133733Z…
