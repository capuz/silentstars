---
repo: "infinistor/ksantest"
name: "ksantest"
description: "KSAN TEST"
readmeQualityOk: true
url: "https://github.com/infinistor/ksantest"
language: "Java"
languages: ["Java", "C#"]
languagePcts: [40, 24]
topics: ["ksan", "testing-tools"]
stars: 40
forks: 2
openIssues: 2
closedIssues: 20
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-11-29T06:28:11Z"
lastCommitAt: "2026-08-12T05:14:10Z"
lastReleaseAt: "2023-12-19T03:12:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 55
maintainers: ["pspace-jwkwak", "homin-jung"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbf530fa3f17d8029489b95b834b949e2c88c3fb8cbf476955bbccbd3b17581/infinistor/ksantest"
---

# KSAN TEST

KSAN 시스템의 기능 및 성능을 검증하는 도구를 제공합니다.

## xunit-to-html (서브모듈)

HTML 리포트 도구 [`xunit-to-html`](https://github.com/Zir0-93/xunit-to-html)은 Git submodule입니다.
일반 `git pull`만으로는 내용이 받아지지 않으므로, 아래처럼 초기화·갱신합니다.

처음 한 번 (클론 후 또는 폴더가 비어 있을 때):

```powershell
git submodule update --init --recursive
```

이후 pull 때 submodule까지 같이 받으려면:

```powershell
git pull --recurse-submodules
```

또는 pull 후 별도로:

```powershell
git submodule update --init --recursive
```

추가로 `xunit-to-html/saxon9he.jar`가 필요합니다.

## [S3 compatibility test for Java](https://github.com/infinistor/ksantest/tree/master/java)

## [S3 compatibility test for Python](https://github.com/infinistor/ksantest/tree/master/python)

> 이전 ceph/s3-tests 기반 코드는 `python-legacy/`에 보관되어 있습니다.

## [S3 compatibility test for .Net Core](https://github.com/infinistor/ksantest/tree/master/C%23/Core)

## [S3 compatibility test for .Net Framework](https://github.com/infinistor/ksantest/tree/master/C%23/Framework)

## [S3 Replication test for .Net Core](https://github.com/infinistor/ksantest/tree/master/C%23/ReplicationTest)
