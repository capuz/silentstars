---
repo: "Brooooooklyn/blake3-jit"
name: "blake3-jit"
description: "High-performance BLAKE3 implementation with runtime JIT WASM SIMD"
readmeQualityOk: true
url: "https://github.com/Brooooooklyn/blake3-jit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 34
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-10T14:50:02Z"
lastCommitAt: "2026-07-30T06:06:23Z"
lastReleaseAt: "2026-04-17T10:34:53Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 30
maintainers: ["renovate[bot]", "Brooooooklyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3472bc1dd8ded89aa78026f5bcce326c21c9465fc4e58df7191fcfabcceee2/Brooooooklyn/blake3-jit"
fundingLinks: ["GITHUB:https://github.com/Brooooooklyn"]
---

# blake3-jit

High-performance BLAKE3 implementation with runtime JIT WASM SIMD.

## Features

- **1.38 GB/s** peak throughput on large inputs
- **Pure JS + JIT WASM SIMD** - no `.wasm` files to ship
- All BLAKE3 modes: hash, keyed (MAC), derive_key
- XOF (eXtendable Output Function) support
- Zero dependencies, tree-shakeable

## Installation

```bash
npm install blake3-jit
```

## Usage

```typescript
import { hash, createHasher, createKeyed, createDeriveKey } from "blake3-jit";

// One-shot hashing
const digest = hash(new Uint8Array([1, 2, 3]));

// Incremental hashing
const hasher = createHasher();
hasher.update(chunk1);
hasher.update(chunk2);
const result = hasher.finalize();

// Keyed hashing (MAC)
const mac = createKeyed(key).update(message).finalize();

// Key derivation
const derived = createDeriveKey("my-app v1").update(material).finalize(32);
```

## API

### One-shot Functions

```typescript
hash(input: Uint8Array, outputLength?: number): Uint8Array
hashInto(input: Uint8Array, output: Uint8Array, outputLength?: number): void
```

### Incremental Hashing

```typescript
createHasher(): Hasher
createKeyed(key: Uint8Array): Hasher    // 32-byte key for MAC…
