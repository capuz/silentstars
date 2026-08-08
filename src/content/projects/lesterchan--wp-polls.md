---
repo: "lesterchan/wp-polls"
name: "wp-polls"
description: "Adds an AJAX poll system to your WordPress blog. You can also easily add a poll into your WordPress's blog post/page."
readmeQualityOk: true
url: "https://github.com/lesterchan/wp-polls"
homepage: "https://wordpress.org/plugins/wp-polls/"
language: "PHP"
languages: ["PHP"]
languagePcts: [79]
topics: ["wp-polls", "ajax-polling", "polls", "wordpress", "wordpress-plugin", "lesterchan"]
stars: 96
forks: 75
openIssues: 30
closedIssues: 70
watchers: 6
contributors: 26
recentReleases: 0
createdAt: "2013-04-23T14:03:42Z"
lastCommitAt: "2026-08-08T04:34:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 53
maintainers: ["lesterchan", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc921627cb9752c544de7cc6a88cec9460c7ecea4e5a24ca5111c7bf9ce85c7e/lesterchan/wp-polls"
---

# WP-Polls
Contributors: GamerZ  
Donate link: https://lesterchan.net/site/donation/  
Tags: poll, polls, vote, ajax, survey  
Requires at least: 6.8  
Tested up to: 7.0  
Stable tag: 3.0.0  
Requires PHP: 8.2  
License: GPLv2 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds an AJAX poll system to your WordPress blog. You can also easily add a poll into your WordPress's blog post/page.

## Description
WP-Polls is extremely customizable via templates and css styles and there are tons of options for you to choose to ensure that WP-Polls runs the way you wanted. It now supports multiple selection of answers.

### Donations
I spent most of my free time creating, updating, maintaining and supporting these plugins, if you really love my plugins and could spare me a couple of bucks, I will really appreciate it. If not feel free to use it without any obligations.

## Usage

### Showing A Poll From A Theme

```php
<?php if ( function_exists( 'vote_poll' ) && ! in_pollarchive() ): ?>
	<li>
		<h2>Polls</h2>
		<ul>
			<li><?php get_poll();?></li>
		</ul>
		<?php display_polls_archive_link(); ?>
	</li>
<?php endif; ?>
```

* To show specific poll, use `<?php get_poll(2);…
