---
repo: "tomacheese/cmcutter"
name: "cmcutter"
description: "📺 Cut commercials from TS files of TV recordings with EPGStation, convert to MP4, and rename files as needed"
url: "https://github.com/tomacheese/cmcutter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["dtv", "tv-commercials", "epgstation", "syoboi-calendar", "syobocal"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-01-10T23:37:17Z"
lastCommitAt: "2026-07-03T12:22:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 81
maintainers: ["renovate[bot]", "akubiusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/129367f5fe0336fed98f66ab4c3018f0ac596b34b90dfc3acedb98c6fe0277c3/tomacheese/cmcutter"
---

# cmcutter

EPGStation で録画した TV 録画の TS ファイルを CM カットして、MP4 に変換し、必要に応じてファイル名を変更するプログラムです。個人利用目的にのみ使用しています。

## Installation

1. `git clone https://github.com/book000/cmcutter.git`
2. `cd cmcutter`
3. Download dependencies packages: `yarn`
4. Create a new file: `config/default.yml`, and edit the configuration
5. Compile & Run: `yarn build`

## Configuration

File: `config/default.yml`

- `tsFilesDirPath`: EPGStation が録画した TS ファイルがあるディレクトリ
- `outputDirPath`: 出力先ディレクトリ
- `encodedDataFile`: 処理済みファイルの一覧を保持するための JSON ファイルへのパス
- `discordChannelId`: 処理が完了したことを通知する先の Discord チャンネル ID
- `discordToken`: Discord への通知に使うトークン

```yaml
tsFilesDirPath: /path/to/recorded-dir/
outputDirPath: /path/to/output-dir/
encodedDataFile: /path/to/encoded.json
discordChannelId: '000000000000000000'
discordToken: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Other

- [Memo](memo.md)
