---
repo: "tgtakaoka/libasm"
name: "libasm"
description: "C++ library of assembler / disassembler that can run on embedded system"
readmeQualityOk: true
url: "https://github.com/tgtakaoka/libasm"
language: "Assembly"
languages: ["Assembly", "C++"]
languagePcts: [59, 28]
topics: ["tms9900", "ins8070", "tlcs90", "ns32000", "z8000", "pdp11", "tms320", "z380", "mc68hc16", "tms370"]
stars: 44
forks: 4
openIssues: 6
closedIssues: 26
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2019-07-20T03:23:33Z"
lastCommitAt: "2026-10-11T10:14:43Z"
lastReleaseAt: "2025-05-01T00:34:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 47
maintainers: ["tgtakaoka"]
openGraphImageUrl: "https://opengraph.githubassets.com/44418629d6260f4f7eeb13e0672eac1df0bdbce18c6e435a248711b7acb3901c/tgtakaoka/libasm"
---

# libasm: cross assemble/disassemble library

The libasm allows assembling and disassembling supported retro CPUs on
a small environment (less than 9kB-17kB Flash and 350B RAM on AVR
Arduino).

## Assembler library interface

Assembling MC68HC11 instruction in string to binary can be done in a
minute. You can also add symbol table lookup via
[`SymbolTable`](https://github.com/tgtakaoka/libasm/blob/main/src/symbol_table.h)
interface.

``` C++
#include <asm_mc6800.h>
libasm::mc6800::AsmMc6800 asm6800;
asm6800.setCpu("68HC11");

const char *text = "SUBD $90";
libasm::Insn insn{0x1000};

asm6800.encode(text, insn);
assert(insn.getError() == OK);
assert(insn.address()  == 0x1000);
assert(insn.length()   == 2);    // direct addressing
assert(insn.bytes()[0] == 0x93); // SUBD
assert(insn.bytes()[1] == 0x90); // $90
```

## Disassembler library interface

To disassemble MC68000 binaries, you need to wrap memory by
[`ArrayMemory`](https://github.com/tgtakaoka/libasm/blob/main/src/array_memory.h)
or implements your own
[`DisMemory`](https://github.com/tgtakaoka/libasm/blob/main/src/dis_memory.h)
interface to feed binaries. You can also add symbol table lookup via…
