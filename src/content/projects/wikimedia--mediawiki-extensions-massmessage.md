---
repo: "wikimedia/mediawiki-extensions-MassMessage"
name: "mediawiki-extensions-MassMessage"
description: "Mirror of https://gerrit.wikimedia.org/g/mediawiki/extensions/MassMessage. See https://www.mediawiki.org/wiki/Developer_access for contributing"
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-MassMessage"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 103
recentReleases: 0
createdAt: "2013-07-15T23:00:20Z"
lastCommitAt: "2026-11-07T09:26:39Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 62
maintainers: ["translatewiki", "umherirrender", "SomeMWDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/17c83443a752c4a66dc007eb27e3e3bffaa16bdd16ee84d7079ee00ddcb6344a/wikimedia/mediawiki-extensions-MassMessage"
---

# MassMessage

MassMessage is a [MediaWiki](https://www.mediawiki.org/) extension that lets you easily send a talk page message to a large number of users at once. The extension also works over "wikifarm" setups.

## Configuration

    $wgNamespacesToPostIn = [ NS_PROJECT ];

This limits the extension to only posting in talk namespaces (by default) and the **Project:** namespace.

    $wgNamespacesToConvert = [ NS_USER => NS_USER_TALK ];

This allows a user to specify a page in the **User:** namespace, and the extension will automatically convert it to the **User talk:** namespace.

    $wgAllowlistedMassMessageTargets = [];

This is used to specify page IDs for pages that if targeted by a MassMessage will have all but the 'MassMessage exclude category' check bypassed. For example, adding the Main Page (with ID 1) to this list allows MassMessage to post there even if messages can't be posted to the mainspace.

    $wgMassMessageAccountUsername = 'MediaWiki message delivery';

The account name that the extension will post with. If this is an existing account, the extension will automatically take it over.

    $wgAllowGlobalMessaging = true;

Whether to enable sending messages from…
