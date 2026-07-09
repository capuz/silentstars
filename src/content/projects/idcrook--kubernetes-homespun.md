---
repo: "idcrook/kubernetes-homespun"
name: "kubernetes-homespun"
description: "Build a kubernetes home cluster (on SBC like Raspberry Pis)"
readmeQualityOk: true
url: "https://github.com/idcrook/kubernetes-homespun"
homepage: "https://idcrook.github.io/Kubernetes-Ubuntu-18.04-Bare-Metal-Single-Host/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["kubernetes", "kubernetes-cluster", "kubernetes-deployment", "kubernetes-bare-metal", "traefik", "k3s", "raspberry-pi-os", "raspberry-pi"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-05-10T20:57:58Z"
lastCommitAt: "2026-07-09T20:44:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 61
maintainers: ["idcrook"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffa2ce9529392b2a24d5a8f6dacdcb5332161bac8a0f66f1893260cf2f7e6027/idcrook/kubernetes-homespun"
---

Homelab kubernetes cluster network in use since 2018

Apps and services deployed via kubernetes:
------------------------------------------

-	[phant](https://hub.docker.com/r/dpcrook/phant_server-docker) - IoT data logging
	-	https://data.crookster.org
-	[lighttpd](https://hub.docker.com/r/dpcrook/alpine-lighttpd-static) - Static webpage server
	-	https://www.crookster.org
	-	https://party.crookster.org
-	[miniflux](https://hub.docker.com/r/miniflux/miniflux) - RSS Feed aggregator and syncing
	-	https://miniflux.crookster.org

### Homelab / Internal

-	[homepage](https://github.com/gethomepage/homepage) - Homepage dashboard
	-	https://homepage
-	[karakeep](https://github.com/karakeep-app/karakeep) - A self-hostable bookmark-everything app
	-	https://keep	
-	[spoolman](https://github.com/Donkie/Spoolman) - Keep track of your inventory of 3D-printer filament spools.
	-	https://spoolman
-	[tinyauth](https://tinyauth.app/) - simple local auth
	-	https://tinyauth

High-level
----------

-	Raspberry Pi-s
-	kubernetes via [k3s](https://k3s.io)
	-	"external" NFS server for persistent storage
	-	"external" postgresql server for database
-	[traefik](https://github.com/traefik/traefik) v3.x…
