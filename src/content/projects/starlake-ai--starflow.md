---
repo: "starlake-ai/starflow"
name: "starflow"
description: "Declarative text based tool for data analysts and engineers to extract, load, transform and orchestrate their data pipelines."
readmeQualityOk: true
url: "https://github.com/starlake-ai/starflow"
homepage: "https://starflow.starlake.ai/"
language: "Scala"
languages: ["Scala"]
languagePcts: [88]
topics: ["spark", "bigquery", "hdfs", "redshift", "snowflake", "synapse", "etl", "data-engineering", "data-integration", "data-pipeline"]
stars: 217
forks: 30
openIssues: 27
closedIssues: 71
watchers: 9
contributors: 31
recentReleases: 8
createdAt: "2021-09-18T05:20:26Z"
lastCommitAt: "2026-11-04T08:03:53Z"
lastReleaseAt: "2026-10-19T06:12:26Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 92
undervaluedScore: 45
maintainers: ["hayssams", "fupelaqu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d5bd52e898e3908835a9249f248c23cee808c27ed690ff49e43f1061467ae74/starlake-ai/starflow"
---

---

**Test on your laptop. Ship to your warehouse. Same SQL, same YAML, no rewrite.**

Starflow is a declarative Extract · Load · Transform · Orchestrate engine: describe **what** your pipeline does in YAML and plain SQL, and Starflow works out **how**: schemas, merges, quality checks, lineage, and the DAGs to run it all.

And because it transpiles your warehouse SQL to DuckDB, the whole pipeline, loads included, runs and tests locally in seconds. **Engine choice becomes an environment variable, not a replatforming program.**

## A pipeline in 30 seconds

Describe the table once: file pattern, merge strategy, validation:

```yaml
# metadata/load/crm/customers.sl.yml
table:
  pattern: "customers.*.csv"              # files landing in your incoming folder
  metadata:
    writeStrategy:
      type: UPSERT_BY_KEY_AND_TIMESTAMP   # incremental merge, no MERGE SQL to write
      key: [id]
      timestamp: signup
  attributes:
    - name: id
      type: string
      required: true
    - name: signup
      type: timestamp
    - name: email
      type: string                        # or one of your own semantic types, validated at load time
```

Then let Starflow do the engineering:…
