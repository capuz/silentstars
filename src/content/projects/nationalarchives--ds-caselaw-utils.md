---
repo: "nationalarchives/ds-caselaw-utils"
name: "ds-caselaw-utils"
description: "Common data for the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-utils"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["caselaw", "find-caselaw", "national-archives", "python"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2022-06-20T09:25:56Z"
lastCommitAt: "2026-08-22T04:05:18Z"
lastReleaseAt: "2023-04-06T11:19:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 70
maintainers: ["renovate[bot]", "jacksonj04", "dancs-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/96c664b662dfae711b57ed6e6f8444425a284e307a10b80be274c8f63e47dad7/nationalarchives/ds-caselaw-utils"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# Python Utilities

 

This repository predominantly contains information about [the courts in the Find Case Law project](https://github.com/nationalarchives/ds-caselaw-utils/blob/HEAD/courts.md).

pypi name: [ds-caselaw-utils](https://pypi.org/project/ds-caselaw-utils)
python import name: `ds_caselaw_utils`

## Examples

```python
from ds_caselaw_utils import neutral_url
neutral_url("[2022] EAT 1")  # '/eat/2022/4'

from ds_caselaw_utils import courts

courts.get_all() # return a list of all courts

courts.get_by_param("ewhc/ch") # get a court by its parameter value

courts.get_selectable() # returns a list of all courts that are whitelisted to
                        # appear as searchable options

courts.get_listable_groups() # returns a grouped list of courts that are whitelisted to
                             # be listed publicly…
