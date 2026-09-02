---
repo: "n1xx1/ocgcore-wasm"
name: "ocgcore-wasm"
description: "EdoPro ygopro-core built in wasm"
readmeQualityOk: true
url: "https://github.com/n1xx1/ocgcore-wasm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 4
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-02-19T17:21:44Z"
lastCommitAt: "2026-08-28T13:51:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 53
maintainers: ["n1xx1", "yihao-y"]
openGraphImageUrl: "https://opengraph.githubassets.com/070aff50a830a2553810b91b09b471d20032446153076819adb766b9ed8404c4/n1xx1/ocgcore-wasm"
---

# ocgcore-wasm

[ProjectIgnis' EDOPro Core](https://github.com/edo9300/ygopro-core/)
built for WebAssembly using emscripten.

The async version requires JS Promise Integration (JSPI) and Type reflection. Use
the flag `--experimental-wasm-stack-switching` with node.

## Example

### Initialize sync version

```ts
const scriptPath = "...";
const cards = loadCardDatabase();

const lib = await createCore({ sync: true });

const handle = lib.createDuel({
  flags: OcgDuelMode.MODE_MR5,
  seed: [1n, 1n, 1n, 1n],
  team1: {
    drawCountPerTurn: 1,
    startingDrawCount: 5,
    startingLP: 8000,
  },
  team2: {
    drawCountPerTurn: 1,
    startingDrawCount: 5,
    startingLP: 8000,
  },
  cardReader: (code) => {
    const card = cards.get(code);
    if (!card) {
      console.warn("missing card: ", code);
    }
    return card ?? null;
  },
  scriptReader: (script) => {
    const filePath = script.match(/c\d+\.lua/)
      ? path.join(scriptPath, "official", script)
      : path.join(scriptPath, script);

    try {
      return readFileSync(filePath, "utf-8");
    } catch (e) {
      console.log(`error reading script "${script}", ${e}`);
      throw e;
    }
  },
  errorHandler: (type,…
