---
repo: "couchbase/testrunner"
name: "testrunner"
description: "The TestRunner (Extracted from carlin)."
url: "https://github.com/couchbase/testrunner"
homepage: "http://wiki.membase.org/display/membase/Test+Tools"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 21
forks: 51
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 133
recentReleases: 0
createdAt: "2012-01-14T22:10:46Z"
lastCommitAt: "2026-06-25T06:41:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 67
maintainers: ["bkumaran", "dananjay-s", "yash-dodderi7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8f2df45a31752a3c693f5cea6b8b2314d3d3e5f8dc362234e0783b7cd0629dd/couchbase/testrunner"
---

*** Test Runner Python3: Readme ***

Prerequisites
-------------

* Python 3.10.13
* pip3 or easy_install

See the setup steps in the Py2 to Py3 porting guide: https://hub.internal.couchbase.com/confluence/display/QA/Python+3.7.6+installation+for+testrunner

Dependencies
------------

Use pip3.7 based on the platform.

General:

pip3 install couchbase sgmllib3k paramiko httplib2 pyyaml beautifulsoup4 Geohash python-geohash deepdiff pyes pytz requests jsonpickle docker decorator

Other:

    pip3 install boto
    
    pip3 install boto3
	
	pip3 install botocore

Performance tests:

    pip3 install btrc

PDF reports:

    pip3 install couchdbkit

Documentation:

    pip3 install sphinx

    pip3 install sphinx-pypi-upload

Buildout:

    pip3 install zc.buildout

Any issues w.r.t python3 syntax. Please refer: https://blog.couchbase.com/tips-and-tricks-for-upgrading-from-python-2-to-python-3/

Usage
-----

    $ ./testrunner  -h
    Usage: testrunner [options]

    Options:
      -h, --help            show this help message and exit
      -q
      -p PARAMS, --params=PARAMS
                            Optional key=value parameters, comma-separated -p…
