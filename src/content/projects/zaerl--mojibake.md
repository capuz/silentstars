---
repo: "zaerl/mojibake"
name: "mojibake"
description: "Mojibake is a low-level Unicode library written in C11."
readmeQualityOk: true
url: "https://github.com/zaerl/mojibake"
homepage: "https://mojibake.zaerl.com"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["bidirectional-text", "c", "case-folding", "character-encoding", "cpp", "cross-platform", "emoji", "grapheme-clusters", "internationalization", "text-processing"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2021-07-04T12:39:18Z"
lastCommitAt: "2026-07-20T06:37:50Z"
lastReleaseAt: "2026-07-18T09:30:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 100
undervaluedScore: 69
maintainers: ["zaerl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba911b0b481994bde9a6951575347ce19294c0e995efe238a4bb27adfc5b36b1/zaerl/mojibake"
---

# Mojibake

**Mojibake** is a low-level Unicode 18 text-processing library written in C11 and compatible
with C++17. It is released under the MIT License.

## Usage

You don't need to install anything. There are two files (`mojibake.c`, `mojibake.h`) to add to your
C/C++ project. Download it here [mojibake-amalgamation-031.zip](https://github.com/zaerl/mojibake/releases/download/v0.3.1/mojibake-amalgamation-031.zip)

Examples of normalization, characters count and NFKC casefold.

```c
#include <stdio.h>
#include <string.h>

#include "mojibake.h"

void print_string(const char *input, size_t length);

int main(int argc, char *const argv[]) {
    const char *input = "Cafe\xCC\x81";
    size_t length = strlen(input);
    mjb_result result;

    // Normalize example: in NFC e + ◌́ -> é (U+00E9)
    if(mjb_normalize(input, length, MJB_ENC_UTF_8, MJB_NORMALIZATION_NFC, MJB_ENC_UTF_8,
        &result) != MJB_STATUS_OK) {
        return 1;
    }

    // Cafe + ◌́ (U+0301, COMBINING ACUTE ACCENT) -> Café
    print_string(input, length);

    // Caf + é (U+00E9, LATIN SMALL LETTER E WITH ACUTE) -> Café
    print_string(result.output, result.output_size);

    const char *mojibake = "文字化け";…
