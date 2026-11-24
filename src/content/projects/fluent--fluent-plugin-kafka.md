---
repo: "fluent/fluent-plugin-kafka"
name: "fluent-plugin-kafka"
description: "Kafka input and output plugin for Fluentd"
readmeQualityOk: true
url: "https://github.com/fluent/fluent-plugin-kafka"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["fluentd", "kafka", "fluentd-plugin"]
stars: 307
forks: 179
openIssues: 20
closedIssues: 284
watchers: 30
contributors: 81
recentReleases: 0
createdAt: "2014-01-23T12:34:26Z"
lastCommitAt: "2026-11-24T01:59:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 41
maintainers: ["Watson1978", "NopeCharon", "lbarrosby"]
openGraphImageUrl: "https://opengraph.githubassets.com/21c42a7d1aeaaf12475d7bef623f75f2dc468f27b1d5ade9ec8a870fa0a94491/fluent/fluent-plugin-kafka"
---

# fluent-plugin-kafka, a plugin for [Fluentd](http://fluentd.org)

A fluentd plugin to both consume and produce data for Apache Kafka.

## Installation

Add this line to your application's Gemfile:

    gem 'fluent-plugin-kafka'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install fluent-plugin-kafka --no-document

If you want to use zookeeper related parameters, you also need to install zookeeper gem. zookeeper gem includes native extension, so development tools are needed, e.g. ruby-devel, gcc, make and etc.

## Requirements

- Ruby 3.2 or later
- Input plugins work with kafka v0.9 or later
- Output plugins work with kafka v0.8 or later

## Usage

### Common parameters

#### SSL authentication

- ssl_ca_cert
- ssl_client_cert
- ssl_client_cert_key
- ssl_client_cert_key_password
- ssl_client_cert_chain
- ssl_ca_certs_from_system
- ssl_verify_hostname

Set path to SSL related files. See [Encryption and Authentication using SSL](https://github.com/zendesk/ruby-kafka#encryption-and-authentication-using-ssl) for more detail.
