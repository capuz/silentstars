---
repo: "DaleStudy/daleui"
name: "daleui"
description: "🎨 달레 UI 디자인 시스템"
readmeQualityOk: true
url: "https://github.com/DaleStudy/daleui"
homepage: "https://www.daleui.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["design-system", "react", "pandacss", "storybook", "bun", "chromatic", "eslint", "prettier", "vite", "vitest"]
stars: 116
forks: 13
openIssues: 100
closedIssues: 469
watchers: 1
contributors: 37
recentReleases: 0
createdAt: "2024-08-27T02:01:41Z"
lastCommitAt: "2026-08-12T05:14:33Z"
lastReleaseAt: "2026-04-24T11:41:14Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 47
maintainers: ["dependabot[bot]", "SimYunSup", "yolophg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c34731dcab8b6a708385d949302eafb04dfa8038168d65f75bba84cca048fce/DaleStudy/daleui"
fundingLinks: ["GITHUB:https://github.com/DaleStudy"]
discussionCount: 19
---

</p>

# 달레 UI

🎨 달레 스터디에서 시작해, 모두에게 공개된 오픈소스 디자인 시스템

## 미션 (Mission)

한국어 환경에 맞는 오픈소스 디자인 시스템을 만들어 디자이너와 개발자가 접근성 높은 프로덕트를 쉽고 빠르게 함께 만들도록 돕습니다.

## 핵심 가치 (Core Values)

1. 한국어 사용자 중심 설계
2. 신뢰할 수 있는 시스템
3. 커뮤니티 중심 발전

## 문서 (Documentation)

- [스토리북](https://main--675790d317ba346348aa3490.chromatic.com)
- [위키](https://github.com/DaleStudy/daleui/wiki)
- [Figma UI Kit](https://www.figma.com/community/file/1559487636467651573)

## 설치 (Installation)

React 프로젝트에서 다음 패키지 매니저 중 하나로 설치합니다.

```sh
# with Bun
$ bun add daleui pretendard @fontsource-variable/jetbrains-mono

# with npm
$ npm install daleui pretendard @fontsource-variable/jetbrains-mono

# with pnpm
$ pnpm add daleui pretendard @fontsource-variable/jetbrains-mono

# with Yarn
$ yarn add daleui pretendard @fontsource-variable/jetbrains-mono
```

앱 진입점(예: `main.tsx`, `App.tsx`)에서 스타일을 한 번에 불러옵니다.

```tsx
import "daleui/styles.css";
```

## 사용법 (Usage)

```tsx
import { Button } from "daleui";

export default () => (
  <>
    <Button size="md" tone="brand" type="button" variant="solid">
      시작하기
    </Button>
    <TextInput placeholder="텍스트를 입력해주세요." />
  </>
);
```

## 기여 (Contribution)

본 프로젝트는 [All…
