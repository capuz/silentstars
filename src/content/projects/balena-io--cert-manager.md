---
repo: "balena-io/cert-manager"
name: "cert-manager"
description: "Certificate manager with Let's Encrypt DNS validation and private CA support"
readmeQualityOk: true
url: "https://github.com/balena-io/cert-manager"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 5
forks: 2
openIssues: 3
closedIssues: 4
watchers: 11
contributors: 10
recentReleases: 0
createdAt: "2021-10-21T01:51:23Z"
lastCommitAt: "2026-07-16T05:59:01Z"
lastReleaseAt: "2025-09-03T07:03:29Z"
status: "watched"
tags: ["needs_contributors", "community_watch"]
healthScore: 85
undervaluedScore: 62
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]", "cmfcruz"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9aa768bf4e10026eec57e2fc810d21b8f7ba35ba9584549625a2b1484d6189e/balena-io/cert-manager"
---

# cert-manager
> issues public and private SSL certificates using [Let's Encrypt](https://letsencrypt.org/) and [ca-private](https://github.com/balena-io/ca-private)

This service relies on [balena-ca](https://github.com/balena-io/balena-on-balena/tree/master/sidecars/balena-ca)
and generates the following structure, placing .ready file in the root of the volume to
signal that the volume contains complete set of PKI assets:

	/certs
	├── {{tld}}-chain.pem -> /certs/private/{{tld}}-chain.pem
	├── {{tld}}.key -> /certs/private/{{tld}}.key
	├── {{tld}}.pem -> /certs/private/{{tld}}.pem
	├── ca-bundle.pem -> /certs/private/ca-bundle.{{tld}}.pem
	├── private
	│   ├── {{tld}}-chain.pem
	│   ├── {{tld}}.key
	│   ├── {{tld}}.pem
	│   ├── api.{{tld}}.der
	│   ├── api.{{tld}}.key
	│   ├── api.{{tld}}.kid
	│   ├── api.{{tld}}.pem
	│   ├── ca-bundle.{{tld}}.pem
	│   ├── devices.{{tld}}.authorized_keys
	│   ├── devices.{{tld}}.ecdsa.key
	│   ├── devices.{{tld}}.ecdsa.key.pub
	│   ├── devices.{{tld}}.ed25519.key
	│   ├── devices.{{tld}}.ed25519.key.pub
	│   ├── devices.{{tld}}.rsa.key
	│   ├── devices.{{tld}}.rsa.key.pub
	│   ├── dhparam.{{tld}}.pem
	│   ├── git.{{tld}}.authorized_keys
	│   ├──…
