---
repo: "dohwi/hoseo-lms-plus"
name: "hoseo-lms-plus"
description: "내가 불편해서 만든 호서대 LMS 출결현황 한눈에 보기"
readmeQualityOk: true
url: "https://github.com/dohwi/hoseo-lms-plus"
homepage: "https://chromewebstore.google.com/detail/%ED%98%B8%EC%84%9C-lms+/elhbledijdmffjdaplamdkejdgpiddpd?hl=ko"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-06T13:02:04Z"
lastCommitAt: "2026-09-15T08:54:36Z"
lastReleaseAt: "2026-04-01T13:24:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 37
maintainers: ["dohwi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7665dc69d0befb8d670b0177a8c0b5951a1812433cef9e6fa617deb64d3a50f5/dohwi/hoseo-lms-plus"
---

# 호서 LMS+

## 설치방법

### Chrome 웹스토어 설치
- [Chrome 웹 스토어](https://chromewebstore.google.com/detail/%ED%98%B8%EC%84%9C-lms+/elhbledijdmffjdaplamdkejdgpiddpd?hl=ko)에서 설치합니다.

### Firefox addon 설치
- [Firefox addons](https://addons.mozilla.org/ko/firefox/addon/%ED%98%B8%EC%84%9C-lms/)에서 설치합니다.

### 수동 설치
1. [릴리즈](https://github.com/dohwi/hoseo-lms-plus/releases)에서 최신 버전 zip 파일을 다운로드합니다.
2. 다운로드한 zip 파일을 압축 해제합니다.
3. 크롬 확장프로그램 페이지로 이동합니다. (`chrome://extensions`)
4. 개발자 모드를 켭니다.
5. 압축 해제한 폴더를 크롬에 드래그 & 드랍합니다.

## 기능
- [X] 주차별 온라인 출석 확인
- [X] 전체 주차 미수강 & 미제출 항목 표시
- [X] 마감 7일 이내 임박항목 빨간 테두리로 강조
- [X] 강좌별 부분 로딩 실패 안내 및 캐시 fallback
- [X] 강좌별 공지사항 게시판 바로가기

## 개발
- 의존성 설치: `npm install`
- 린트: `npm run lint`
- Firefox 사전 검사: `npm run lint:firefox`
- 테스트: `npm test`
- 빌드: `npm run build`

## 개선 사항
- 원본 LMS 메인 영역을 덮어쓰지 않고 별도 마운트 컨테이너를 사용합니다.
- 캐시는 사용자/강좌 조합별로 분리되며 6시간 동안 유지됩니다.
- LMS HTML은 허용 태그/속성만 통과시키는 방식으로 정리한 뒤 렌더링합니다.
- 파서, UI, 공용 유틸을 분리해 유지보수성과 테스트 가능성을 높였습니다.

## 개인정보 및 유의사항
- LMS 조회 결과는 브라우저 확장 로컬 저장소에 최대 6시간 캐시되며 외부 서버로 전송하지 않습니다.
- 자세한 내용은 [개인정보처리방침](https://github.com/dohwi/hoseo-lms-plus/blob/HEAD/PRIVACY_POLICY.md)을 확인해주세요.
- 본 프로그램 사용에 따른 모든 책임은 사용자 본인에게 있습니다.
- 안정성을 위해…
