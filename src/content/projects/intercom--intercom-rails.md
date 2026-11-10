---
repo: "intercom/intercom-rails"
name: "intercom-rails"
description: "The easiest way to install Intercom in a Rails app."
readmeQualityOk: true
url: "https://github.com/intercom/intercom-rails"
homepage: "https://developers.intercom.io/reference"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [94]
stars: 290
forks: 107
openIssues: 42
closedIssues: 125
watchers: 177
contributors: 103
recentReleases: 1
createdAt: "2012-03-16T13:48:57Z"
lastCommitAt: "2026-11-10T14:49:23Z"
lastReleaseAt: "2026-10-13T10:23:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 69
undervaluedScore: 24
maintainers: ["shab2k03", "looneym", "DecIntercom"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba980487f18f44489b020c1a3f39b8be4b8248020dfa2a37aae64b2b35224fba/intercom/intercom-rails"
---

# IntercomRails

The easiest way to install Intercom in a rails app.

For interacting with the Intercom REST API, use the `intercom` gem (https://github.com/intercom/intercom-ruby)

Requires Ruby 2.0 or higher.

## Installation
Add this to your Gemfile:

```ruby
gem "intercom-rails"
```

Then run:

```
bundle install
```

Take note of your `app_id` from [here](https://app.intercom.com/a/apps/_/settings/web) and generate a config file:

```
rails generate intercom:config YOUR-APP-ID
```

To make installing Intercom easy, where possible a `<script>` tag **will be automatically inserted before the closing `</body>` tag**. For most Rails apps, **you won't need to do any extra config**. Having trouble? Check out troubleshooting below.

### Live Chat
With the Intercom Messenger you can [chat](https://www.intercom.com/live-chat) with users and visitors to your web site. Include the Intercom Messenger on every page by setting:
```ruby
  config.include_for_logged_out_users = true
```

### Disabling automatic insertion

To disable automatic insertion for a particular controller or action you can:

```ruby
  skip_after_action :intercom_rails_auto_include
```

### Troubleshooting
If things…
