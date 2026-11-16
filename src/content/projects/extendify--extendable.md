---
repo: "extendify/extendable"
name: "extendable"
description: "WordPress block theme for Full Site Editing (FSE) brought to you from the team at Extendify."
readmeQualityOk: true
url: "https://github.com/extendify/extendable"
homepage: "https://wordpress.org/themes/extendable"
language: "CSS"
languages: ["CSS", "PHP", "HTML"]
languagePcts: [47, 26, 20]
topics: ["wordpress", "wordpress-theme"]
stars: 49
forks: 5
openIssues: 6
closedIssues: 21
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2022-02-21T20:58:59Z"
lastCommitAt: "2026-11-16T04:29:17Z"
lastReleaseAt: "2022-06-13T16:08:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 54
maintainers: ["amjadr360", "KevinBatdorf"]
openGraphImageUrl: "https://opengraph.githubassets.com/72839b57bc6cbc15e3f244cf32b87a9f7716d896ce8ef9c9fbcf8517a3e19544/extendify/extendable"
---

# Extendable

Extendable is a distinct, dynamic block theme designed as a canvas for your next online venture. Sporting multiple style variations, Extendable is the most expressive block theme yet. Go fresh, bold, bohemian or minimal — with a single click.

## Getting Started

To get started with development:

1. Set up a WordPress instance, we recommend [wp-env](https://developer.wordpress.org/block-editor/handbook/tutorials/devenv/) or [Local](https://localwp.com/) as an alternative to docker.
2. Clone / download this repository into your `/wp-content/themes/` directory

## Requirements

- WordPress 6.6+
- PHP 7.4+
- License: [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html) or later

## Coding standards

The theme follows the [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/). Install the tools with `npm ci && composer install`, then:

- `npm run lint` runs every check below; CI runs the same on each pull request.
- `npm run lint:php` checks PHP with PHPCS, WPCS and PHPCompatibilityWP (`phpcs.xml.dist`); `npm run lint:php:fix` fixes what it can.
- `npm run lint:css` checks CSS with Stylelint; `npm run lint:css:fix` fixes what it can.
- `npm run…
