---
repo: "deanwilson/puppet-multitemplate"
name: "puppet-multitemplate"
description: "Multi-template Puppet function allows you to list multiple template sources and use the first one that exists."
url: "https://github.com/deanwilson/puppet-multitemplate"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2013-07-04T10:52:26Z"
lastCommitAt: "2026-06-24T06:39:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 51
maintainers: ["deanwilson", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/126500d1673b71e00d215750f13474a4df1afb623e4cf2549d72f880fdca5af9/deanwilson/puppet-multitemplate"
---

# Puppet Multiple Template Source Function #

The `multitemplate` Puppet function allows you to list multiple template
sources and use the first one that exists.

    class ssh::config {
    
      file { "/etc/ssh/sshd_config" :
        ensure  => present,
        mode    => '0600',
        content => multitemplate( "ssh/${::fqdn}",
                                  "ssh/${::domain}",
                                  'ssh/default_sshdconfig'
                                ),
      }
    
    }

While it's currently possible to invoke `template` with multiple sources
specified it does not behave as most people expect. Instead of selecting
the first existing match it concatenates the templates together when used as below:

    class ssh::config {

      file { "/etc/ssh/sshd_config" :
        ensure  => present,
        content => template( "ssh/${::fqdn}",
                             "ssh/${::domain}",
                             'ssh/default_sshdconfig'
                           ),
      }

    }

This Puppet function was originally written by 
[R.I.Pienaar](http://www.devco.net/) and raised as 
[Allow multiple sources for a template and only use the first template if it…
