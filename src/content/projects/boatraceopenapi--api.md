---
repo: "boatraceopenapi/api"
name: "api"
description: "A project for publishing a boatrace API with GitHub Actions and GitHub Pages. / GitHub Actions と GitHub Pages を利用してボートレース（競艇）の API を公開するプロジェクト"
readmeQualityOk: true
url: "https://github.com/boatraceopenapi/api"
homepage: "https://boatraceopenapi.github.io/api/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["boatrace", "php", "api"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T07:36:11Z"
lastCommitAt: "2026-09-16T08:47:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["boatraceopenapi[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4a4a1fff15728e116e8e7c17b26541d6ea18c4227a110a1a59a6d80d2c24b1/boatraceopenapi/api"
---

</a>
</p>

---

## ⚠️ 注意事項

**本 API を利用する前に、以下の内容をご確認ください。**

- **非公式です。** BOATRACE 公式サイトおよび関連団体とは一切関係ありません。
- **リアルタイムではありません。** GitHub Actions による約 3 分間隔の定期更新のため、最新情報の反映まで数分程度の遅れが生じる場合があります。
- **正確性・完全性は保証していません。** 収集・変換の都合により、欠損や誤りが含まれる可能性があります。
- **公式な情報が必要な場合は、必ず BOATRACE 公式サイトをご確認ください。**
- **利用は自己責任でお願いします。**

---

## 📝 概要

この API では、ボートレース（競艇）のデータを取得できます。データは GitHub Pages 上で公開されており、JSON 形式で提供されます。

| 項目 | 内容 |
|---|---|
| 対応レース場 | 全国 24 場すべて（1 日分のデータに全場の情報を含む） |
| 取得可能なデータ | 出走表・直前情報・結果 |

---

## 🌐 エンドポイント

対応期間: **2026年01月01日以降**

```bash
https://boatraceopenapi.github.io/api/v1/YYYY/YYYYMMDD.json
```

- `YYYY` → 年
- `YYYYMMDD` → 年月日
- 日付は日本標準時（JST / UTC+9）基準

> データが存在しない日付（対応期間外・未来日付など）を指定した場合、GitHub Pages の仕様により HTTP 404 が返されます。

---

## 📦 レスポンス仕様

レスポンスの JSON 構造・各フィールドの詳細については、スキーマドキュメントを参照してください。

→ [docs/v1/schema.md](https://github.com/boatraceopenapi/api/blob/HEAD/docs/v1/schema.md)

---

## 💡 サンプル

- 2026年05月01日のデータ: [https://boatraceopenapi.github.io/api/v1/2026/20260501.json](https://boatraceopenapi.github.io/api/v1/2026/20260501.json)
- 当日のデータ: [https://boatraceopenapi.github.io/api/v1/today.json](https://boatraceopenapi.github.io/api/v1/today.json)…
