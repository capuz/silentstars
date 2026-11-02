---
repo: "pfusik/xasm"
name: "xasm"
description: "6502 cross-assembler with original syntax extensions"
readmeQualityOk: true
url: "https://github.com/pfusik/xasm"
language: "D"
languages: ["D"]
languagePcts: [97]
topics: ["6502", "assembler"]
stars: 82
forks: 11
openIssues: 4
closedIssues: 10
watchers: 12
contributors: 7
recentReleases: 0
createdAt: "2013-01-07T11:45:56Z"
lastCommitAt: "2026-11-02T17:39:20Z"
lastReleaseAt: "2024-06-09T11:34:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 43
maintainers: ["pfusik", "epi"]
openGraphImageUrl: "https://opengraph.githubassets.com/342e03c0b5c2055426111a13886de474a4fcb556cb4d2ea87d0eb3b31edf2709/pfusik/xasm"
---

xasm
====

xasm is a 6502 cross-assembler with original syntax extensions.
By default it generates binaries
for [Atari 8-bit computers](http://en.wikipedia.org/wiki/Atari_8-bit_family).

Syntax
------

6502 assembly code is full of LDA, STA, LDA, STA sequences.
With xasm you can use MVA as a shortcut for an LDA/STA pair or even MWA for 16-bit transfers.
Short branches can be replaced with conditional skip and repeat pseudo-instructions.
You can use a pair of instructions with a shared argument.
These are just some of the features that help you program in a more concise way.
Let's look at typical 6502 code (which is also valid in xasm):

        lda #<dest
        sta ptr
        lda #>dest
        sta ptr+1
        ldx #192
    do_line
        ldy #39
    do_byte
        lda pattern,y
        sta (ptr),y
        dey
        bpl do_byte
        lda #40
        clc
        adc ptr
        sta ptr
        bcc skip
        inc ptr+1
    skip
        dex
        bne do_line

Using xasm's features, this code can be rewritten to:

        mwa     #dest ptr
        ldx     #192
    do_line
        ldy     #39
        mva:rpl pattern,y (ptr),y-
        lda     #40
        add:sta ptr…
