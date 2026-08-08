---
repo: "edwardspec/mediawiki-aws-s3"
name: "mediawiki-aws-s3"
description: "Extension:AWS allows MediaWiki to use Amazon S3 (instead of the local directory) to store images."
readmeQualityOk: true
url: "https://github.com/edwardspec/mediawiki-aws-s3"
homepage: "https://www.mediawiki.org/wiki/Extension:AWS"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["mediawiki-extension"]
stars: 50
forks: 37
openIssues: 1
closedIssues: 75
watchers: 4
contributors: 30
recentReleases: 0
createdAt: "2017-01-11T23:37:53Z"
lastCommitAt: "2026-08-08T00:00:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 42
maintainers: ["edwardspec"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c07981f5241f7bf636e849919000f77ff8207b3a77f365a4eef9076bd83a20c/edwardspec/mediawiki-aws-s3"
fundingLinks: ["PATREON:https://patreon.com/edwardspec"]
---

Extension:AWS - https://www.mediawiki.org/wiki/Extension:AWS

What it does: it stores images in Amazon S3 instead of the local directory.

Why is this needed: when images are in S3, Amazon EC2 instance which runs MediaWiki doesn't contain any important data and can be created/destroyed by Autoscaling.

# Installation

*Note: This version of Extension:AWS requires MediaWiki 1.35+. For older versions of MediaWiki (1.27-1.34) use the following instructions instead: https://github.com/edwardspec/mediawiki-aws-s3/blob/REL1_34/README.md*

1\) Download the extension: `git clone --depth 1 https://github.com/edwardspec/mediawiki-aws-s3.git AWS`

2\) Move the AWS directory to the "extensions" directory of your MediaWiki, e.g. `/var/www/html/w/extensions` __(assuming MediaWiki is in `/var/www/html/w`)__.

3\) Create the file `/var/www/html/w/composer.local.json` with the following contents:
```json
{
	"extra": {
		"merge-plugin": {
			"include": [
				"extensions/AWS/composer.json"
			]
		}
	}
}
```

4\) Run `composer update` from `/var/www/html/w` (to download dependencies). If you don't have Composer installed, see https://www.mediawiki.org/wiki/Composer for how to install it.

5\) Create…
