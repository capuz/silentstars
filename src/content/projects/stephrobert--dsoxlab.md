---
repo: "stephrobert/dsoxlab"
name: "dsoxlab"
description: "Turn declarative exercises into reproducible, runnable and verifiable lab environments"
readmeQualityOk: true
url: "https://github.com/stephrobert/dsoxlab"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ansible", "cli", "devops", "devsecops", "education", "labs", "python", "rhcsa", "terraform", "training"]
stars: 76
forks: 4
openIssues: 11
closedIssues: 84
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-15T08:06:15Z"
lastCommitAt: "2026-09-26T08:46:49Z"
lastReleaseAt: "2026-07-16T13:59:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 38
maintainers: ["stephrobert", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc971725492981868d573f3437fb3dccff1bc9e97caf761a359ec0ca53c5558/stephrobert/dsoxlab"
fundingLinks: ["KO_FI:https://ko-fi.com/stephanerobert89902"]
discussionCount: 1
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/brand/dsoxlab-lockup-dark.svg">
</picture>

# dsoxlab — DevSecOps XL Labs CLI

**Read this in another language:** [Français](https://github.com/stephrobert/dsoxlab/blob/HEAD/README.fr.md)

`dsoxlab` turns **declarative exercises into reproducible, runnable and
verifiable environments**. A catalog states what it offers through a root
`meta.yml` and one `lab.yaml` per lab; the engine provisions what each lab
asks for, opens it, and proves the result with tests that read the **state of
the system** rather than the commands typed into it.

Nothing about a specific domain lives in the engine: it serves Linux, Ansible,
Kubernetes or Terraform labs equally well, and any other catalog that honors
the declarative contract. It also scores progress and keeps the history
locally, per catalog.

> Originally built for the tutorials on
> [blog.stephane-robert.info](https://blog.stephane-robert.info), and usable
> without them.

</p>

---

## Two ways in

| | **Install the tool** | **Download the appliance** |
| --- | --- | --- |
| For | Linux, and macOS or Windows with Python at hand | Windows and macOS, or anyone who…
