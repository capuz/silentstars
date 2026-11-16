---
repo: "aignas/pytest-bazel"
name: "pytest-bazel"
description: "A pytest wrapper for supporting bazel's rule_python"
readmeQualityOk: true
url: "https://github.com/aignas/pytest-bazel"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 7
forks: 6
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-06-29T03:12:00Z"
lastCommitAt: "2026-11-16T11:53:41Z"
lastReleaseAt: "2025-05-11T23:59:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 78
maintainers: ["aignas"]
openGraphImageUrl: "https://opengraph.githubassets.com/02d2977c9cff515eda34420f790352350d04abf5cfe0d5b5fb292038ff34e77b/aignas/pytest-bazel"
discussionCount: 0
---

# pytest-bazel

[Documentation] [Changelog] [Contributing]

[documentation]: https://pytest-bazel.readthedocs.io/latest/
[changelog]: https://github.com/aignas/pytest-bazel/blob/main/CHANGELOG.md
[contributing]: https://github.com/aignas/pytest-bazel/blob/main/CONTRIBUTING.md

## Bazel test encyclopedia support

How `pytest_bazel` follows the [test encyclopedia][te] when running under
`bazel test`.

| Bazel | `pytest_bazel` | Docs | Reference |
| --- | --- | --- | --- |
| `TESTBRIDGE_TEST_ONLY` (`--test_filter`) | Selects tests with a `-k` expression, e.g. `TestClass.test_fn`, a pytest node id, or several of them separated by commas. | [Example][docs-test-filter] | [Initial conditions][te-env] |
| `TESTBRIDGE_TEST_RUNNER_FAIL_FAST` (`--test_runner_fail_fast`) | Passes `--exitfirst`. | [Example][docs-fail-fast] | [Flag][fail-fast] |
| `TEST_INFRASTRUCTURE_FAILURE_FILE` | Written when pytest itself fails, i.e. on a usage or internal error, so that a broken setup can be told apart from failing tests. | [Example][docs-infrastructure-failure] | [Initial conditions][te-env] |
| `TEST_LOGSPLITTER_OUTPUT_FILE` | Not supported. | [Not supported][not-supported] | [Initial…
