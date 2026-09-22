---
repo: "GOOFY-04/research-harness"
name: "research-harness"
description: "A multi-loop agent framework for long-horizon research with iterative review, execution-driven repair, and pluggable skills."
originalDescription: "A multi-loop agent framework for long-horizon research with iterative review, execution-driven repair, and pluggable skills."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GOOFY-04/research-harness"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-framework", "llm-agents", "research-automation", "workflow-orchestration"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-06T14:25:20Z"
lastCommitAt: "2026-09-22T08:45:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 35
maintainers: ["GOOFY-04"]
openGraphImageUrl: "https://opengraph.githubassets.com/52718cd3515f0bca45f68d9b2a2dac1595ede41582eeecacda5074d55ec63101/GOOFY-04/research-harness"
---

# research-harness

## One-Click Deployment

Execute one command in the repository root directory to create or reuse a Python virtual environment, install dependencies, create `.env`, clone or fast-forward update the private OpenCode fork, install Bun dependencies, run integration checks and start the research CLI:

```powershell
python deploy.py --start
```

Requires Python 3.10+, Git, and Bun to be pre-installed, and ensure Git has read access to the private repository `GOOFY-04/opencode`. The script will not overwrite existing `.env` files, and will not update `opencode-fork` with uncommitted changes. After the first deployment, fill in `AGNES_API_KEY` in `.env` to initiate model requests.

To deploy and validate without starting the CLI, execute `python deploy.py`. When network is limited and local dependencies are ready, you can use `--no-update`; use `--skip-checks` only when you explicitly need a quick reinstall. It is safe to run the deployment command repeatedly; OpenCode updates use `--ff-only` and will not automatically merge diverged history.

Deployment checks will run Python tests, research workbench type checking, Bash/PowerShell WASM parsing tests, and `--help` on…
