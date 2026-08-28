---
repo: "axeptio/axeptio-gtm-public-template"
name: "axeptio-gtm-public-template"
description: "Axeptio CMP tag template for Google Tag Manager, published in the Community Template Gallery"
readmeQualityOk: true
url: "https://github.com/axeptio/axeptio-gtm-public-template"
homepage: "https://tagmanager.google.com/gallery/#/owners/axeptio/templates/axeptio-gtm-public-template"
language: "Go Template"
languages: ["Go Template", "JavaScript"]
languagePcts: [51, 43]
topics: ["axeptio", "cmp", "consent-management", "consent-mode", "gdpr", "google-tag-manager", "gtm-template", "tcf"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 34
recentReleases: 10
createdAt: "2023-11-23T10:14:23Z"
lastCommitAt: "2026-08-28T15:37:33Z"
lastReleaseAt: "2026-08-20T16:13:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 71
maintainers: ["pleberre", "axeptio-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/15294de2c3e081b58e07bf9cb006f651a456e1f7223b9234789519b1a437f1f0/axeptio/axeptio-gtm-public-template"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-axeptio-white.svg">
  </picture>
</p>

# Axeptio CMP — Google Tag Manager Template

The official [Axeptio](https://www.axept.io/) consent management tag for Google Tag Manager
(web containers).

The tag loads the Axeptio CMP on your site, applies your cookie configuration, and wires
Axeptio's consent decisions into
[Google Consent Mode v2](https://support.axeptio.eu/articles/274002), so Google tags fire
according to the visitor's choices. Consent Mode is on by default for new tags.

**[▶ Axeptio CMP in the Community Template Gallery](https://tagmanager.google.com/gallery/#/owners/axeptio/templates/axeptio-gtm-public-template)**

## Installing

In your GTM **web** container: **Templates → Tag Templates → Search Gallery**, look for
**Axeptio CMP**, and add it to your workspace. Then create a tag from the template and set at
least the **Project ID**.

Trigger it on **Consent Initialization — All Pages** so Consent Mode defaults are set before
every other tag fires, not just before the CMP loads. Consent Mode is on by default for new
tags, so check that your Axeptio project has it enabled too.

Step-by-step…
