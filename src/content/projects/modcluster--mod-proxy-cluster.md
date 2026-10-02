---
repo: "modcluster/mod_proxy_cluster"
name: "mod_proxy_cluster"
description: "mod_cluster is an intelligent native Apache httpd-based and pure-Java Undertow-based load-balancer"
readmeQualityOk: true
url: "https://github.com/modcluster/mod_proxy_cluster"
homepage: "https://www.modcluster.io"
language: "C"
languages: ["C"]
languagePcts: [75]
topics: ["high-availability", "httpd", "jboss", "load-balancer", "proxy", "tomcat", "wildfly"]
stars: 10
forks: 16
openIssues: 24
closedIssues: 76
watchers: 7
contributors: 15
recentReleases: 0
createdAt: "2016-04-27T16:51:41Z"
lastCommitAt: "2026-10-02T10:00:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 76
maintainers: ["jajik", "rhusar"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5045e80c22f7099161723132c5c6fd2969ee240975b996bc0bfebcdb15531e9/modcluster/mod_proxy_cluster"
---

mod_cluster [](https://packages.fedoraproject.org/pkgs/mod_proxy_cluster/mod_proxy_cluster/)
===========

Project mod_cluster is a httpd-based load-balancer. It uses a communication channel to forward
requests from httpd to one of a set of application server nodes. Unlike mod_jk and mod_proxy,
mod_cluster leverages an additional connection between the application server nodes and httpd
to transmit server-side load-balance factors and lifecycle events back to httpd. This additional
feedback channel allows mod_cluster to offer a level of intelligence and granularity not found in
other load-balancing solutions.

Mod_cluster boasts the following advantages over other httpd-based load-balancers:

* Dynamic configuration of httpd workers
* Server-side load balance factor calculation
* Fine grained web-app lifecycle control
* AJP is optional

[https://www.modcluster.io](https://www.modcluster.io)

Native modules for httpd
------------------------

Sources for the mod_proxy_cluster module are in the native directory. To build the components from
the sources, you need following tools:

* C compiler
* cmake, or autoconf, automake, and libtool
* make
* httpd (with header files)

For…
