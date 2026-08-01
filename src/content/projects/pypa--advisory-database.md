---
repo: "pypa/advisory-database"
name: "advisory-database"
description: "Advisory database for Python packages published on pypi.org"
readmeQualityOk: true
url: "https://github.com/pypa/advisory-database"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 366
forks: 108
openIssues: 19
closedIssues: 86
watchers: 31
contributors: 118
recentReleases: 0
createdAt: "2021-06-01T21:03:32Z"
lastCommitAt: "2026-08-01T06:12:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 37
maintainers: ["Classic298", "westonsteimel", "ilons"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6077038443394ef4c37b7017edc721bb21a66b09ed93b33001ed2008c71214/pypa/advisory-database"
---

# Python Packaging Advisory Database

This is a community owned repository of advisories for packages published on
<https://pypi.org>.

Advisories live in the [vulns](https://github.com/pypa/advisory-database/blob/HEAD/vulns/) directory and use a YAML encoding of
a [simple format](https://ossf.github.io/osv-schema/).

## Contributing advisories

### Making a pull request

Existing entries can be edited by simply creating a pull request.

To introduce a new entry, create a pull request with a new file that has a name
matching `PYSEC-0000-<anything>.yaml`. This will be later picked up by
automation to allocate a proper ID once merged.

You can validate the structure of your YAML file by running:

```bash
pipx run check-jsonschema --schemafile https://raw.githubusercontent.com/ossf/osv-schema/main/validation/schema.json <PATH TO YAML FILE>
```

### Triage process

Much of the existing set of vulnerabilities are collected from the
[NVD CVE](https://nvd.nist.gov/vuln/data-feeds) feed.

We use [this tool](https://github.com/google/osv/tree/master/vulnfeeds), which
performs a lot of heuristics to match CVEs with exact Python packages and
versions (which is a difficult problem!) and a…
