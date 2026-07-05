---
repo: "esuldin/pyitt"
name: "pyitt"
description: "Python bindings to Intel Instrumentation and Tracing Technology (ITT) API"
readmeQualityOk: true
url: "https://github.com/esuldin/pyitt"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [77, 23]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-10T14:30:29Z"
lastCommitAt: "2026-07-05T20:54:30Z"
lastReleaseAt: "2024-09-29T00:04:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 73
maintainers: ["dependabot[bot]", "esuldin"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bf4087ebdca0268abe84518d688e775659fe53aa974877267fa6fdbdbe260ef/esuldin/pyitt"
discussionCount: 0
---

# pyitt

pyitt is a Python binding to Intel Instrumentation and Tracing Technology (ITT) API. It provides a convenient way
to mark up the Python code for further performance analysis using performance analyzers from Intel like Intel VTune
or others.

pyitt supports following ITT APIs:
 - Collection Control API
 - Counter API
 - Domain API
 - Event API
 - Frame API
 - Id API
 - Processor Trace Control API
 - String Handle API
 - Task API
 - Thread Naming API

## Usage

The main goal of the project is to provide the ability to instrument a Python code using ITT API in the Pythonic way.
pyitt provides wrappers that simplify markup of Python code.

```python
import pyitt

@pyitt.task
def workload():
  pass

workload()
```

`pyitt.task` can be used as a decorator. In this case, the name of a callable object (`workload` function in this
example) will be used as a name of the task and the task will be attributed to a default domain named 'pyitt'.
If you want to change the default name and/or other parameters for the task (e.g. task domain), you can pass
them as arguments to `pyitt.task`:

```python
import pyitt

@pyitt.task('My Task', domain='My Task Domain')
def workload():
  pass…
