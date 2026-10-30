---
repo: "cromefire/fritzbox-cloudflare-dyndns"
name: "fritzbox-cloudflare-dyndns"
description: "Slim WAN IP updater for AVM FRITZ!Box devices, pushing updates towards Cloudflare DNS using push and poll strategies."
readmeQualityOk: true
url: "https://github.com/cromefire/fritzbox-cloudflare-dyndns"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["golang", "avm", "fritzbox", "dyndns", "soap"]
stars: 51
forks: 14
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2019-07-30T08:55:10Z"
lastCommitAt: "2026-10-30T11:04:12Z"
lastReleaseAt: "2024-10-25T17:39:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 33
maintainers: ["cromefire", "datenzar"]
openGraphImageUrl: "https://opengraph.githubassets.com/edcc05fbd2389cbfc5c5adf561d051266e1355dee827a6406f7e3672138c718d/cromefire/fritzbox-cloudflare-dyndns"
---

# AVM FRITZ!Box Cloudflare DNS-service

This project has some simple goals:

- Offer a slim service without any additional service requirements
- Allow for two different combined strategies: Polling (through FRITZ!Box SOAP-API) and Pushing (FRITZ!Box Custom-DynDns
  setting).
- Allow multiple domains to be updated with new A (IPv4) and AAAA (IPv6) records
- Push those IP changes directly to Cloudflare DNS
- Deploy in docker compose

If this fits for you, skim over the CNAME workaround if this is a better solution for you, otherwise feel free to visit
the appropriate strategy section of this document and find out how to configure it correctly.

## CNAME record workaround

Before you try this service evaluate a cheap workaround, as it does not require dedicated hardware to run 24/7:

Have dynamic IP updates by using a CNAME record to your myfritz address, found in `Admin > Internet > MyFRITZ-Account`.
It should look like `[hash].myfritz.net`.

This basic example of a BIND DNS entry would make `intranet.example.com` auto update the current IP:

```
$TTL 60
$ORIGIN example.com.
intranet IN CNAME [hash].myfritz.net
```

Beware that this will expose your account hash to the outside…
