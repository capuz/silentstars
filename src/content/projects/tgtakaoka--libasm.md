---
repo: "tgtakaoka/libasm"
name: "libasm"
description: "C++ library of assembler / disassembler that can run on embedded system"
url: "https://github.com/tgtakaoka/libasm"
language: "Assembly"
languages: ["Assembly", "C++"]
languagePcts: [48, 34]
topics: ["tms9900", "ins8070", "tlcs90", "tms7000", "ns32000", "z8000", "6502", "mc6809", "pdp8", "pdp11"]
stars: 44
forks: 3
openIssues: 6
closedIssues: 26
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2019-07-20T03:23:33Z"
lastCommitAt: "2026-06-29T23:49:48Z"
lastReleaseAt: "2025-05-01T00:34:43Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 53
maintainers: ["tgtakaoka"]
openGraphImageUrl: "https://opengraph.githubassets.com/52fa9783cb9800c921fe90024ff1c4d840bade5a1a03b2ace10c167b4b7cecae/tgtakaoka/libasm"
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
