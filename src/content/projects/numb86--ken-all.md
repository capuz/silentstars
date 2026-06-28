---
repo: "numb86/ken-all"
name: "ken-all"
description: "Ken All は、郵便番号で住所を検索できる npm パッケージです。"
url: "https://github.com/numb86/ken-all"
language: "Rust"
languages: ["Rust", "TypeScript", "JavaScript"]
languagePcts: [33, 32, 24]
stars: 26
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-06-28T09:48:14Z"
lastCommitAt: "2026-06-28T03:10:58Z"
lastReleaseAt: "2021-05-07T06:45:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 50
maintainers: ["renovate[bot]", "numb86", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/365687211b8d3a2e5c232c30b0f72a8e6119db27816bb901b98154c4ca5c3818/numb86/ken-all"
---

<h1>Ken All</h1>
</div>

Ken All は、郵便番号で住所を検索できる npm パッケージです。

```js
import KenAll from 'ken-all';

// [['東京都', '千代田区', '大手町']];
KenAll('1000004').then(res => console.log(res));
```

# 導入方法

```
$ npm install ken-all
```

もしくは

```
$ yarn add ken-all
```

# 使い方

`import`した`KenAll`に、7桁半角数字の**文字列**を渡します。  

```js
import KenAll from 'ken-all';

// [['東京都', '千代田区', '大手町']];
KenAll('1000004').then(res => console.log(res));
```

返り値は、以下の値を持つ`promise`オブジェクトです。

```js
[
  ['都道府県', '市区町村', '町域'],
  ['都道府県', '市区町村', '町域'],
  // ...
]
```

```js
// [["愛知県", "弥富市", ""], ["三重県", "桑名郡木曽岬町", ""]]
KenAll('4980000').then(res => console.log(res));
```

該当する住所がない場合は、空の配列を返します。

```js
// []
KenAll('9009999').then(res => console.log(res));
```

型定義ファイルも同梱しているので、TypeScript アプリでも利用することが出来ます。

## 注意点

内部で`fetch`を行っているので、`fetch`を使えない環境ではポリフィルが必要になります。

# サンプル

＊以下のサンプルは、シンプルにするために複数の住所が返ってきたケースを考慮していません

## React

```js
// React のバージョン 16.10.2 で確認
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import KenAll from 'ken-all';

const App = () => {
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <input…
