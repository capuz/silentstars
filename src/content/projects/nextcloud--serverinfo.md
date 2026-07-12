---
repo: "nextcloud/serverinfo"
name: "serverinfo"
description: "📊 A monitoring app which creates a server info dashboard for admins"
readmeQualityOk: true
url: "https://github.com/nextcloud/serverinfo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["nextcloud", "admin-tools", "monitoring", "hacktoberfest"]
stars: 124
forks: 65
openIssues: 33
closedIssues: 176
watchers: 11
contributors: 278
recentReleases: 0
createdAt: "2016-07-19T10:45:48Z"
lastCommitAt: "2026-07-12T06:16:26Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 47
maintainers: ["nextcloud-bot", "kesselb", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96b291f97915ce86bdb3da02af221918b6820bf1dfb59790bb04e7673b9ce0ff/nextcloud/serverinfo"
---

# Monitoring

This apps provides useful server information, such as CPU load, RAM usage,
disk usage, number of users, etc. Check out the provided **Example XML output**
for the details.

The admin can look up this information directly in Nextcloud (Settings ->
Management-> Information) or connect an external monitoring tool to the
provided end-points.

## Installation

This app is part of the standard Nextcloud package and can be found in the
directory **nextcloud/apps/serverinfo**

## API

The API provides a lot of information about a running Nextcloud
instance in XML or JSON format by using the following URL.

```
https://<nextcloud-fqdn>/ocs/v2.php/apps/serverinfo/api/v1/info
```

- To request the information in JSON append the url parameter `format=json`
- Use the url parameter `skipUpdate=true` to omit server updates.
- Use the url parameter `skipApps=true` to omit app updates (including available app updates will send an external request to the app store).

### Example XML output:
```
<?xml version="1.0"?>
<ocs>
	<meta>
		<status>ok</status>
		<statuscode>200</statuscode>
		<message>OK</message>
	</meta>
	<data>
		<nextcloud>
			<system>
				<version>30.0.0.1</version>…
