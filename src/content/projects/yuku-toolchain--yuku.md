---
repo: "yuku-toolchain/yuku"
name: "yuku"
description: "High-performance JavaScript/TypeScript compiler toolchain in Zig."
url: "https://github.com/yuku-toolchain/yuku"
homepage: "https://yuku.fyi"
language: "Zig"
languages: ["Zig", "JavaScript"]
languagePcts: [72, 21]
topics: ["javascript", "parser", "typescript", "jsx", "tsx", "zig"]
stars: 389
forks: 9
openIssues: 1
closedIssues: 6
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-10-22T16:10:54Z"
lastCommitAt: "2026-06-25T06:41:03Z"
lastReleaseAt: "2026-02-26T07:58:25Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 29
maintainers: ["arshad-yaseen", "richerfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf1511f8be0660ccd99ed11d07b6dc69cdae5519bd1e81607b71f7cc18dd7d77/yuku-toolchain/yuku"
fundingLinks: ["GITHUB:https://github.com/arshad-yaseen"]
---

<br>
  <br>

Yuku is a high-performance JavaScript and TypeScript compiler toolchain written in Zig. Spec-compliant, zero dependencies, fast by design.

[Try it in the playground →](https://playground.yuku.fyi)

</div>

## 📖 Documentation

Visit [yuku.fyi](https://yuku.fyi) for the full documentation, guides, and API reference.

## Parser

### JavaScript

```bash
npm install yuku-parser
```

```js
import { parse, walk } from "yuku-parser";

const { program, comments, diagnostics } = parse("const x = 1 + 2;");

walk(program, {
  Identifier(node) {
    console.log(node.name); // x
  },
});
```

Outputs an [ESTree](https://github.com/estree/estree) / [TS-ESTree](https://www.npmjs.com/package/@typescript-eslint/typescript-estree)-compatible AST matching [Oxc](https://oxc.rs). Runs 4-16x faster than alternatives on npm.

### Zig

```bash
zig fetch --save git+https://github.com/yuku-toolchain/yuku.git
```

```zig
var tree = try parser.parse(allocator, "const x = 5;", .{});
defer tree.deinit();
```

[Read the parser documentation →](https://yuku.fyi/parser)

## Codegen

```bash
npm install yuku-codegen
```

```js
import { parse } from "yuku-parser";
import { print, strip, minify } from…
