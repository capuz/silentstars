---
repo: "sealandseacat/dbmask"
name: "dbmask"
description: "Discover, mask, and verify sensitive data in SQL databases — an auditable scan → mask → validate workflow for safe database copies."
readmeQualityOk: true
url: "https://github.com/sealandseacat/dbmask"
homepage: "https://sealandseacat.github.io/dbmask/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anonymization", "data-governance", "data-masking", "pii", "privacy", "security", "sqlachemy", "data-engineering", "database", "devops"]
stars: 124
forks: 20
openIssues: 1
closedIssues: 10
watchers: 10
contributors: 2
recentReleases: 2
createdAt: "2026-06-09T23:14:51Z"
lastCommitAt: "2026-08-28T15:31:59Z"
lastReleaseAt: "2026-08-24T15:48:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 36
maintainers: ["sealandseacat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/636fa48477a57b2c3e093bfebc20e558faab28d26b92a44d1a599c1bcb45f96b/sealandseacat/dbmask"
discussionCount: 0
---

# dbmask

**Discover which columns hold sensitive data, mask them with realistic
deterministic fakes, then verify the masking actually happened — one
auditable workflow for making safe copies of SQL databases.**

```bash
pip install dbmask
```

Production data constantly leaks into places with weaker controls: dev and
test systems, demo environments, analytics warehouses, vendor handoffs, AI
pipelines. `dbmask` is for the moment you copy that data: it finds the
sensitive columns, rewrites them with consistent fakes, and then **checks its
own work** row by row.

---

## 60-second tour

Everything below runs locally against a throwaway SQLite file (bash syntax;
use your own database URL for the real thing).

```bash
# 0. A demo database
python -c "
import sqlite3
db = sqlite3.connect('demo.db')
db.executescript('''
CREATE TABLE customers (id INTEGER PRIMARY KEY, full_name TEXT, email TEXT);
INSERT INTO customers (full_name, email) VALUES
  ('Mary Johnson', 'mary.johnson@corp.example'),
  ('Robert Smith', 'robert.smith@corp.example'),
  ('Linda Davis',  'linda.davis@corp.example');
'''); db.commit()"

# 1. A minimal config
cat > dbmask.yaml <<'EOF'
database:
  url: sqlite:///demo.db…
