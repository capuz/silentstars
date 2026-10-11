---
repo: "nextcloud/ldap_contacts_backend"
name: "ldap_contacts_backend"
description: "🗃️ LDAP backend for Nextcloud Contacts"
readmeQualityOk: true
url: "https://github.com/nextcloud/ldap_contacts_backend"
homepage: "https://apps.nextcloud.com/apps/ldap_contacts_backend"
language: "PHP"
languages: ["PHP"]
languagePcts: [83]
topics: ["contacts", "ldap", "nextcloud"]
stars: 11
forks: 7
openIssues: 14
closedIssues: 62
watchers: 1
contributors: 245
recentReleases: 0
createdAt: "2019-11-15T11:55:22Z"
lastCommitAt: "2026-10-11T10:15:49Z"
lastReleaseAt: "2023-12-19T12:57:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 81
maintainers: ["nextcloud-command", "come-nc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31fdb373a76af0a8bf6e0447f265e41558fe87d8fba86e9bb75ea36240086b09/nextcloud/ldap_contacts_backend"
---

# LDAP Contacts Backend

**LDAP backend for Nextcloud Contacts**

Adds a virtual address book and enables importing contacts to a user's individual address book.

You and your users will be able to search through the LDAP contacts via the global contacts menu. An import 
action allows to copy the contact over to the best fitting existing addressbook. A redirect takes you the 
contacts app with the newly created card open.

Note: The [Contacts app for Nextcloud](https://apps.nextcloud.com/apps/contacts) should also be installed.

## Configuring

In order to configure an LDAP backend, run:

`./occ ldap_contacts:add --interactive <ADDRESS_BOOK_NAME>`

Where `<ADDRESSBOOK_NAME>` is a name you like to identify the virtual addressbook with. The interactive mode leads you 
through the configuration, but you can also use the --help flag to see all the options.

## Commands

`./occ ldap_contacts:add`

Add an LDAP contacts backend configuration

`./occ ldap_contacts:edit`

Edit an LDAP contacts backend configuration

`./occ ldap_contacts:list`

Lists all LDAP contacts backend configurations

`./occ ldap_contacts:delete`

Delete an LDAP contacts backend configuration

## Example…
