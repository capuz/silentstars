---
repo: "Scalingo/wordpress-scalingo"
name: "wordpress-scalingo"
description: "12 factor Wordpress based on bedrock with S3 Plugin enabled"
readmeQualityOk: true
url: "https://github.com/Scalingo/wordpress-scalingo"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
stars: 10
forks: 11
openIssues: 1
closedIssues: 11
watchers: 6
contributors: 107
recentReleases: 0
createdAt: "2017-12-22T16:04:20Z"
lastCommitAt: "2026-08-05T06:08:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 55
maintainers: ["EtienneM", "dependabot[bot]", "Frzk"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab54070b1d6307f0c3a23db2b0ba864228f443459fdecb74226425855061a60/Scalingo/wordpress-scalingo"
---

# Scalingo 12-Factor WordPress Distribution

Based on [Bedrock](https://roots.io/bedrock/)

* Better folder structure
* Dependency management with [Composer](http://getcomposer.org) and [WordPress Packagist](https://wpackagist.org/)
* Easy WordPress configuration with environment specific files
* Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
* Autoloader for mu-plugins (use regular plugins as mu-plugins)
* Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))

With few more features added by `Scalingo`:

* Configurable from var environment
* File Uploads sent to S3 Bucket by default with [S3-Uploads plugin](https://github.com/humanmade/S3-Uploads)

> Actual WordPress version : `6.6.1`

Please refer to the instructions in the [Scalingo documentation](https://doc.scalingo.com/platform/getting-started/getting-started-with-wordpress).

## Use in Development

### Requirements

* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Updating WordPress version

Update `composer.json` to update the WordPress branch you need.…
