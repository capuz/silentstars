---
repo: "yegor256/pgtk"
name: "pgtk"
description: "PostgreSQL ToolKit for Ruby apps: Liquibase + Rake + Connection Pool"
readmeQualityOk: true
url: "https://github.com/yegor256/pgtk"
homepage: "https://rubygems.org/gems/pgtk"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
topics: ["ruby", "postgresql", "liquibase", "rakefile", "connection-pool", "rake-task"]
stars: 8
forks: 7
openIssues: 32
closedIssues: 161
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2019-04-14T15:49:45Z"
lastCommitAt: "2026-10-02T10:01:27Z"
lastReleaseAt: "2019-05-07T14:42:53Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 88
maintainers: ["renovate[bot]", "gemshrine", "VasilevNStas"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/181332320/4fcf1180-9727-11e9-8ba2-12f92500c5fa"
---

# Ruby + PostgreSQL + Liquibase + Rake

This small Ruby gem helps you integrate
[PostgreSQL](https://www.postgresql.org/) with your Ruby
web app, through [Liquibase](https://www.liquibase.org/).
It also adds a simple connection pool
and query processor, to make SQL manipulation simpler.

First of all, on top of
[Ruby](https://www.ruby-lang.org/en/) and
[Bundler](https://bundler.io/)
you need to have
[PostgreSQL](https://www.postgresql.org/),
[Java 8+](https://java.com/en/download/), and
[Maven 3.2+](https://maven.apache.org/) installed.
In Ubuntu 16+ this should be enough:

```bash
sudo apt-get install -y postgresql-10 postgresql-client-10
sudo apt-get install -y default-jre maven
```

Then, add this to your [Gemfile](https://bundler.io/gemfile.html):

```ruby
gem 'pgtk'
```

Then, add this to your
[Rakefile](https://github.com/ruby/rake/blob/master/doc/rakefile.rdoc):

```ruby
require 'pgtk/pgsql_task'
Pgtk::PgsqlTask.new :pgsql do |t|
  # Temp directory with PostgreSQL files:
  t.dir = 'target/pgsql'
  # To delete the directory on every start;
  t.fresh = true
  t.user = 'test'
  t.password = 'test'
  t.dbname = 'test'
  # YAML file to be created with connection details:…
