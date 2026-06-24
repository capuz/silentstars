---
repo: "brunns/mbtest"
name: "mbtest"
description: "Opinionated Python wrapper & utils for the Mountebank over the wire test double tool"
url: "https://github.com/brunns/mbtest"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 36
forks: 16
openIssues: 2
closedIssues: 24
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2018-06-13T14:07:52Z"
lastCommitAt: "2026-06-24T06:39:41Z"
lastReleaseAt: "2018-08-02T15:19:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 61
maintainers: ["brunns", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bc4e3ffce55a1b3ee4d15fb06b4b35b8eec64c4c6acf6b691cd10530105b4d9/brunns/mbtest"
---

# mbtest

Opinionated Python wrapper & utils for the [Mountebank](https://github.com/bbyars/mountebank) over the wire test double tool.

Includes [pytest](https://pytest.org) fixture and [PyHamcrest](https://pyhamcrest.readthedocs.io) matchers.

## Setup

Install with pip:

    pip install mbtest

(As usual, use of a [venv](https://docs.python.org/3/library/venv.html) or [virtualenv](https://virtualenv.pypa.io) is recommended.) Also requires [Mountebank](https://github.com/bbyars/mountebank) to have been installed:

    npm install mountebank@2.9 --omit=dev

(Alternatively, you can attach to an instance of Mountebank running elsewhere, perhaps [in docker](https://mbtest.readthedocs.io/en/latest/guide/docker.html).)

## Basic example

```python
import requests
from hamcrest import assert_that
from brunns.matchers.response import is_response
from mbtest.matchers import had_request
from mbtest.imposters import Imposter, Predicate, Response, Stub

def test_request_to_mock_server(mock_server):
    # Set up mock server with required behavior
    imposter = Imposter(Stub(Predicate(path="/test"), 
                             Response(body="sausages")))

    with mock_server(imposter):…
