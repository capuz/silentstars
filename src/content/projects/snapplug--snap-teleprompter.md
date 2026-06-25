---
repo: "SnapPlug/snap-teleprompter"
name: "snap-teleprompter"
description: "macOS teleprompter app that displays scrolling text in the MacBook notch area"
url: "https://github.com/SnapPlug/snap-teleprompter"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T22:07:48Z"
lastCommitAt: "2026-06-25T01:32:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 16
maintainers: ["SnapPlug"]
openGraphImageUrl: "https://opengraph.githubassets.com/92a28b9d06c9b439eb614184f45a2c130490c8006680c890a8425c37c2413800/SnapPlug/snap-teleprompter"
---

# Snap Teleprompter

맥북 노치 영역에 대본을 흘려보내는 텔레프롬프터 앱입니다.

카메라를 바라보면서 자연스럽게 대본을 읽을 수 있도록, 화면 상단 노치 바로 아래에 텍스트를 스크롤합니다. 녹화 중인 다른 앱의 키보드 포커스를 빼앗지 않습니다.

---

## 요구 사항

- **macOS 13.0 이상** (Ventura 이상 필요 — iMac 2017 등 macOS 12 이하 기기는 미지원)
- 노치가 있는 맥북 (MacBook Pro 2021년 이후, MacBook Air M2 이후)

---

## 설치 및 빌드

### 방법 1 — Command Line Tools만으로 빌드 (Xcode.app 불필요)

Xcode.app 없이 **Command Line Tools**(`swiftc`)만 설치되어 있으면 빌드할 수 있습니다.

**Command Line Tools 설치 확인:**
```bash
xcode-select --install   # 이미 설치되어 있으면 "already installed" 메시지
```

**빌드 및 실행:**
```bash
git clone https://github.com/SnapPlug/snap-teleprompter.git
cd snap-teleprompter
bash build.sh
open SnapTeleprompter.app
```

> 처음 실행 시 Gatekeeper 경고가 뜨면 Finder에서 앱을 **우클릭 → 열기 → 열기**로 실행합니다.

---

### 방법 2 — Xcode로 빌드

```bash
git clone https://github.com/SnapPlug/snap-teleprompter.git
cd snap-teleprompter
open SnapTeleprompter.xcodeproj
```

Xcode에서 **Run** (⌘R) 하면 바로 실행됩니다.

### 방법 3 — XcodeGen 사용 (프로젝트 파일을 직접 수정하고 싶을 때)

`project.yml`을 수정한 뒤 `.xcodeproj`를 재생성할 때 사용합니다.

```bash
brew install xcodegen
xcodegen generate
open SnapTeleprompter.xcodeproj
```

---

## 사용법

### 1. 대본 입력

- 텍스트 편집기에 직접 타이핑하거나
- **파일 열기** 버튼으로 `.txt` 또는 `.md`…
