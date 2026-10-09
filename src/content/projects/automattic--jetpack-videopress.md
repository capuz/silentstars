---
repo: "Automattic/jetpack-videopress"
name: "jetpack-videopress"
description: "[READ ONLY] Jetpack VideoPress This repository is a mirror, for issue tracking and development head to: https://github.com/automattic/jetpack"
readmeQualityOk: true
url: "https://github.com/Automattic/jetpack-videopress"
homepage: "https://github.com/Automattic/jetpack"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 249
recentReleases: 0
createdAt: "2022-07-12T14:20:41Z"
lastCommitAt: "2026-10-09T10:51:04Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 81
maintainers: ["vianasw", "heydemoura", "xavier-lc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d600e39c7b733d7f36d41cf5a629befc1b01fe6af5a674443343a83d10f2df1/Automattic/jetpack-videopress"
---

# VideoPress

VideoPress package

## How to consume VideoPress package

### Install the right packages

First, let's make sure that the `automattic/jetpack-videopress` package is set up in your composer.json file:

At minimum you need three things. One is the `automattic/jetpack-autoloader` package, which will ensure that you're not colliding with any other plugins on the site that may be including the same packages. Two, of course, is the `automattic/jetpack-videopress` package. Third is our `automattic/jetpack-config` package that will be your tool for initializing the packages.

### Initialize the package

Second, we must initialize ("configure") the `jetpack-videopress` package within your plugin, and provide the information about it.

This is where the `jetpack-config` and `jetpack-autoload` packages come into play. Do this, and you're ready to start consuming the Jetpack connection!

```php
use Automattic\Jetpack\Config;

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload_packages.php';

function jpcs_load_plugin() {

	// Here we enable the Jetpack packages.
	$config = new Config();
	$config->ensure( 'videopress' );
}

add_action( 'plugins_loaded',…
