---
repo: "eddmpython/dartlab"
name: "dartlab"
description: "Korean DART + SEC EDGAR filings as structured Python data for company analysis"
readmeQualityOk: true
url: "https://github.com/eddmpython/dartlab"
homepage: "https://eddmpython.github.io/dartlab"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["dart", "finance", "financial-analysis", "korea", "python", "disclosure", "financial-statements", "polars", "10-k", "xbrl"]
stars: 201
forks: 41
openIssues: 1
closedIssues: 34
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T14:58:20Z"
lastCommitAt: "2026-07-21T05:00:49Z"
lastReleaseAt: "2026-03-08T03:01:20Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 32
maintainers: ["eddmpython"]
openGraphImageUrl: "https://opengraph.githubassets.com/c738fd4fbd0183eb23a63dfe0c32f5da48587ddace1b62aaaa7b1817785e11a0/eddmpython/dartlab"
fundingLinks: ["GITHUB:https://github.com/eddmpython", "BUY_ME_A_COFFEE:https://buymeacoffee.com/eddmpython"]
discussionCount: 4
---

<br>

<h3>DartLab</h3>

<p><b>종목코드 하나. 기업의 전체 이야기.</b></p>
<p>Korean DART + US SEC EDGAR 공시를 한 줄의 Python 으로 읽고 비교한다.</p>

<p>
</p>

<p>
</p>

<p>
</p>

<p>
&nbsp;&nbsp;
</p>

</div>

## 터미널: 블룸버그식에 도전하다

</div>

종목 하나로 재무·주가·공시·신용·산업·매크로를 한 화면에서 읽는 **블룸버그식 터미널에 도전하는 DartLab 터미널**. 라이브러리가 만든 비교 가능한 데이터를 그대로 화면 위에 올렸다.

> 이 터미널은 [@youngchangjo](https://www.threads.com/@youngchangjo) 님의 [스레드](https://www.threads.com/@youngchangjo/post/DZC_jobCfO6)에서 받은 영감으로 시작됐습니다.

## DartLab 무엇을 해주는가

DartLab은 DART와 EDGAR 공시를 **종목코드 하나로 비교 가능한 데이터**로 바꾸는 Python 라이브러리다. 재무제표, 사업보고서 본문, 공시 목록, 비율, 신용위험, 산업 맵, 매크로 맥락을 같은 `Company` 인터페이스로 읽는다.

핵심은 단순 수집이 아니다. 회사마다 다른 계정명과 공시 목차를 `topic × period`, `account × period` 형태로 수평화해서 **작년과 올해, 삼성전자와 애플, 한 종목과 전체 시장을 같은 질문으로 비교**하게 만든다.

| Before | After |
|---|---|
| 사업보고서 여러 해를 열고 목차를 맞춘다 | `c.panel()` |
| XBRL 계정명과 한글 항목명을 직접 매핑한다 | `c.panel("IS")` |
| 전 종목 재무비율을 직접 수집·정규화한다 | `dartlab.scan("profitability")` |
| AI 답변의 숫자를 다시 검산한다 | `dartlab.ask(...)` + 실행 근거 ref |

## 세 가지 시작점

DartLab은 **AI / Python / CLI** 세 길을 같은 데이터·같은 엔진 위에 올려놓는다. 자기 맥락에 맞는 길로 진입하면 된다.

| 사용 방식 | 코드 길이 | 첫 결과 | 이런 사람에게 맞다 |
|---|---|---|---|
| [AI로 바로 사용](#ai로-바로-사용) | 1 줄 | ~1 분 | 질문을…
