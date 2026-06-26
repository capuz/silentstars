---
repo: "letsescape/laravel-docs"
name: "laravel-docs"
description: "The Laravel korean documentation."
url: "https://github.com/letsescape/laravel-docs"
homepage: "https://laravel.chanhyung.kim"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [40, 39]
topics: ["docs", "docusaurus", "laravel", "laravelkr"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-04-22T16:50:45Z"
lastCommitAt: "2026-06-26T06:44:13Z"
lastReleaseAt: "2025-05-20T16:13:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 80
maintainers: ["kimchanhyung98", "dependabot[bot]", "yun-as"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b749289dc4afc1001c2c7b83118ba8867223ad461c2e4dcba5cceffb2318fae/letsescape/laravel-docs"
---

# 라라벨 한국어 문서

[라라벨 공식 문서](https://laravel.com) | [라라벨 한국어 문서](https://laravel.chanhyung.kim)

</div>

## 소개

라라벨 한국어 문서를 [Docusaurus](https://docusaurus.io) & [GitHub Pages](https://pages.github.com)를 사용하여 배포합니다.

- 지원 버전 : `master`, `13.x`, `12.x`, `11.x`, `10.x`, `9.x`, `8.x`
- 문서 갱신 : GitHub Actions `Sync Documentation Translation` 워크플로우 수동 실행 [#](.github/workflows/sync-translation.yml)

## 실행

> Node.js 24 이상이 필요합니다. (`.nvmrc` 참고)

```bash
npm install
npm start
```

타입 검사:

```bash
npm run typecheck
```

### Docker 실행

```bash
docker build -t laravel-docs .
docker run -p 3000:3000 laravel-docs
```

### 문서 갱신

문서 갱신은 GitHub Actions에서만 실행합니다.

1. GitHub 저장소 Secrets에 번역 제공자와 API 키를 설정합니다.

   ```dotenv
   # OpenAI
   TRANSLATION_PROVIDER=openai
   TRANSLATION_MODEL=gpt-5.4-mini

   OPENAI_API_KEY=your_openai_api_key
   ```

   ```dotenv
   # Azure OpenAI
   TRANSLATION_PROVIDER=azure
   TRANSLATION_MODEL=gpt-5

   AZURE_OPENAI_API_KEY=your_azure_api_key
   AZURE_OPENAI_API_VERSION=2025-05-01-preview
   AZURE_OPENAI_ENDPOINT=https://your-endpoint.openai.azure.com/
   ```

2. GitHub Actions의 `Sync Documentation Translation` 워크플로우를 수동 실행합니다.

워크플로우는 `translation-sync`에서 `uv sync…
