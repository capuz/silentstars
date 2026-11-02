---
repo: "IPGeolocation/ip-geolocation-ruby-sdk"
name: "ip-geolocation-ruby-sdk"
description: "Official Ruby SDK for the IPGeolocation.io IP Location API with single and bulk lookup, typed responses, and raw JSON/XML support."
readmeQualityOk: true
url: "https://github.com/IPGeolocation/ip-geolocation-ruby-sdk"
homepage: "https://ipgeolocation.io"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ip-lookup", "ipgeolocation", "ruby", "api-client", "asn", "bulk-lookup", "domain-lookup", "geolocation", "hostname", "ip"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-07-31T14:01:58Z"
lastCommitAt: "2026-11-02T11:37:06Z"
lastReleaseAt: "2026-04-07T11:42:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 38
maintainers: ["MudassarTariq"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1c98bb681e1fc31201735b4c12c22a2d40d6aaeb13721ea2ce23c8db14ec27e/IPGeolocation/ip-geolocation-ruby-sdk"
---

# IPGeolocation.io Ruby SDK

Official Ruby SDK for the IPGeolocation.io IP Geolocation API.

Look up IPv4, IPv6, and domains with `/v3/ipgeo` and `/v3/ipgeo-bulk`. Get geolocation, company, ASN, timezone, network, hostname, abuse, user-agent, and security data from one API.

- Ruby 2.7+
- Sync client built on `Net::HTTP`
- Typed responses plus raw JSON and XML methods

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [At a Glance](#at-a-glance)
- [Get Your API Key](#get-your-api-key)
- [Authentication](#authentication)
- [Plan Behavior](#plan-behavior)
- [Client Configuration](#client-configuration)
- [Available Methods](#available-methods)
- [Request Options](#request-options)
- [Examples](#examples)
- [Response Metadata](#response-metadata)
- [JSON Helpers](#json-helpers)
- [Errors](#errors)
- [Troubleshooting](#troubleshooting)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Links](#links)

## Install

```bash
gem install ipgeolocation_sdk
```

Or add it to your `Gemfile`:

```ruby
gem "ipgeolocation_sdk", "~> 2.0"
```

Then run:

```bash
bundle install
```

```ruby
require "ipgeolocation_sdk"
```

RubyGems package: `ipgeolocation_sdk`…
