---
repo: "mdjnelson/moodle-mod_customcert"
name: "moodle-mod_customcert"
description: "Enables the creation of dynamically generated certificates with complete customisation via the web browser."
readmeQualityOk: true
url: "https://github.com/mdjnelson/moodle-mod_customcert"
homepage: "https://marketplace.moodle.com/plugins/mod_customcert"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
stars: 114
forks: 206
openIssues: 37
closedIssues: 666
watchers: 20
contributors: 58
recentReleases: 0
createdAt: "2012-10-29T07:42:12Z"
lastCommitAt: "2026-11-02T13:38:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["mdjnelson", "vladkidanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b908666e2153bc61c865353dca2bbf0b8e8ae627b29c4134f8fbf8c37361ac1/mdjnelson/moodle-mod_customcert"
fundingLinks: ["GITHUB:https://github.com/mdjnelson", "CUSTOM:https://www.paypal.com/paypalme/mdjnelson"]
---

# Custom certificate activity (mod_customcert)

This activity allows dynamic generation of PDF certificates with full customisation in your browser.

## Try in Moodle Playground

Click the badge below to open this plugin instantly in
[Moodle Playground](https://moodle-playground.com) — a full Moodle site
running in the browser, with no local install. The demo includes a course
with a preloaded certificate activity so you can edit the template, issue
and download a PDF immediately.

> **Demo credentials:** log in as **student** / **test** to issue and download a PDF
> certificate that shows your name, or as **admin** / **test** to edit the template.

> **Branch coupling:** the badge URL and the plugin archive URL inside `blueprint.json`
> both point to `refs/heads/main`. When backporting to a stable branch (e.g.
> `MOODLE_405_STABLE`) update those two URLs to the matching plugin branch name.
> Also set `preferredVersions.moodle` to the Moodle version compatible with that
> branch — the Moodle version and the plugin branch name are separate values.

## Requirements

- A supported Moodle version (use the plugin release/branch that matches your Moodle version).
- PDF support is…
