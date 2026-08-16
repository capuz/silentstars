---
repo: "limczhh/LyricInfo"
name: "LyricInfo"
description: "一个歌词获取器"
readmeQualityOk: true
url: "https://github.com/limczhh/LyricInfo"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 24
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-06-17T17:29:49Z"
lastCommitAt: "2026-08-16T04:00:39Z"
lastReleaseAt: "2026-08-08T08:00:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 32
maintainers: ["limczhh", "nairain233"]
openGraphImageUrl: "https://opengraph.githubassets.com/976e6c629678fd7dcf9230412a4b5b7b8ba0762f18372de75572adcbfcf1d0a4/limczhh/LyricInfo"
---

# LyricInfo

通过 Xposed 将歌词注入到 `MediaMetadata.extras.lyricInfo` 字段，任何有通知权限的应用都可以读取。

## 原理

### 完整版
1. Hook 音乐应用的 `MediaMetadata.Builder.build()`。
2. 从音乐应用的歌词 API 或内部歌词类获取歌词。
3. 将歌词统一转换为标准格式（elrc/lrc）。
4. 写入 `MediaMetadata.extras.lyricInfo`。

### 精简版
网易云音乐、QQ音乐等软件已经原生支持了 ColorOS 16 的锁屏岛歌词功能，但它们内部会判断系统属性 `ro.build.version.oplus.api` 是否 `>= 37`。Lite 模块通过 Hook 并伪装这一系统属性的值，使音乐应用认为自己运行在 ColorOS 16+ 的系统上，从而自动触发它们自身的官方歌词输出，原生写入 `lyricInfo` 字段，实现极其稳定的“零注入、免维护”歌词获取。

---

## lyricInfo 格式

### 完整版格式
完整版统一转换后的格式：
```json
{
  "songName": "歌名",
  "artist": "歌手",
  "album": "专辑",
  "songId": "12345",
  "lyric": "[00:16.440]<00:16.440>歌<00:16.800>词\n[00:16.440]翻译",
  "format": "elrc",
  "translation": "lrc"
}
```

### 精简版原生格式
取决于音乐软件原生输出的格式（例如网易云），QQ音乐还有 `noLyric` , `lyricType` , `transLyric` , `txtlyric` 等内容：
```json
{
  "lyric": "[00:16.44]歌词",
  "songName": "歌名",
  "artist": "歌手"
}
```

---

## 支持的应用

### 完整版 (`:app`) 支持列表
| 应用 | 包名 | 歌词格式 | 获取方式 |
|------|------|----------|----------|
| 网易云音乐 | `com.netease.cloudmusic` | YRC → elrc | EApi 加密接口 |
| 荣耀定制版网易云 | `com.hihonor.cloudmusic` | YRC → elrc | 同上 |
| QQ 音乐 | `com.tencent.qqmusic` | QRC → elrc | 3DES 加密接口 |
| 酷狗音乐 | `com.kugou.android` |…
