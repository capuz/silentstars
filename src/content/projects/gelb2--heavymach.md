---
repo: "gelb2/HeavyMach"
name: "HeavyMach"
description: "HeavyMach rebuilt for iPhone, iPad, native Mac and Android — shared C++ core, touch and keyboard controls, auto-aim, and development notes."
readmeQualityOk: true
url: "https://github.com/gelb2/HeavyMach"
language: "C++"
languages: ["C++", "Objective-C++"]
languagePcts: [40, 23]
topics: ["2d-game", "cpp", "game-preservation", "ios", "ipados", "macos", "objective-cpp", "opengl", "side-scroller", "heavymach"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-25T16:30:06Z"
lastCommitAt: "2026-11-22T11:47:21Z"
lastReleaseAt: "2026-11-01T19:16:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["gelb2"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1433401742/e8786db1-fd5b-49d7-8b57-98b2af9d388c"
---

# HeavyMach

[한국어](https://github.com/gelb2/HeavyMach/blob/HEAD/README.md) | [English](https://github.com/gelb2/HeavyMach/blob/HEAD/README.en.md)

## HeavyMach를 다시 만든 이유

나는 2017년 7월, 세 번째 직업으로 iOS 개발자를 택했다. 그전에는 2015년 잡지사에서 기자로 일했고, 2016년에는 필리핀에서 근무했다. 소프트웨어와 거리가 먼 일을 하며 겪었던 세계는 내게 비결정론적이고 비합리적이었다. 그 생활을 청산하고 다른 직업을 택한 데에는 여러 이유가 있다. 지인들과 소주잔을 기울이면, 내가 2015년과 2016년의 일을 계속했다면 투신자살로 생을 마감했을 거라는 이야기를 듣곤 한다. 그들이 맞는지는 아직 잘 모르겠다.

HeavyMach도 2015년, 2016년 생활을 청산하고 다른 직업을 택하게 한 이유 중 하나다. 대학생 시절 아이팟터치에서 이 게임을 만났다. Cydia로 처음 접한 이 게임을 나중에는 애플 앱스토어 미국 계정을 만드는 방법을 검색해 구매했다. 당시 한국 앱스토어에는 게임 카테고리가 아예 없었기 때문이다. 기기를 기울여 전차를 움직이고 사격했으며, 스테이지를 마치면 일러스트가 나왔다. 나는 이 게임이 개발자로 직업을 바꾸는 데 약 35%의 영향을 주었다고 생각한다.

요즘 나는 내게 남은 시간이 많지 않다는 느낌을 받는다. 건강 문제 때문도, 극단적인 무기력 때문도 아니다. 오히려 내 정신은 한 달 전, 두 달 전, 반년 전보다 명료하다고 느낀다. 그래서 지금 무엇을 해보고, 무엇을 남기고 싶은지 생각한다. 내가 택한 일 중 하나가 HeavyMach 복원이다. 한때 내게 방향을 보여준 게임을, 개발자가 된 내가 다시 작동하게 만드는 것. 나는 이 연결을 수미상관이라고 생각한다.

이와 비슷한 프로젝트를 진행한 [mesabloo](https://github.com/Mesabloo/hm-defense)라는 사람이 있었다. 그는 HeavyMach Defense의 에셋을 구하고 소스코드를 밑바닥부터 새로 작성했다. 유닛 간 교전 알고리즘을 구현하다가 멈춘 듯했다. 나는 소스코드를 밑바닥부터 새로 작성해야 했던 그 보다는 시작점이 더 나은 상황이었다.
