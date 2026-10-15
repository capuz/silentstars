---
repo: "zaerl/mojibake"
name: "mojibake"
description: "Mojibake is a low-level Unicode library written in C11."
readmeQualityOk: true
url: "https://github.com/zaerl/mojibake"
homepage: "https://mojibake.zaerl.com"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["bidirectional-text", "c", "case-folding", "character-encoding", "cpp", "cross-platform", "emoji", "grapheme-clusters", "internationalization", "text-processing"]
stars: 48
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2021-07-04T12:39:18Z"
lastCommitAt: "2026-10-15T08:31:39Z"
lastReleaseAt: "2026-07-18T09:30:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 60
maintainers: ["zaerl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bbe350247c67e0d2e166bc5f59305ae956ad32c823ffc7376eb00cc18d5b5b2/zaerl/mojibake"
---

# Mojibake

**Mojibake** is a small, fast, self-contained Unicode library written in C11. It is released under
the MIT License.

## Usage

You don't need to install anything. There are two files (`mojibake.c`, `mojibake.h`) to add to your
C/C++ project. Download it here [mojibake-amalgamation-042.zip](https://github.com/zaerl/mojibake/releases/download/v0.4.2/mojibake-amalgamation-042.zip).

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
    mjb_text input_text = mjb_text_utf8(input, length);

    if(mjb_normalize(&input_text, MJB_MALFORMED_STOP, MJB_NORMALIZATION_NFC, MJB_ENC_UTF_8, &result,
        NULL) != MJB_STATUS_OK) {
        return 1;
    }

    // Cafe + ◌́ (U+0301, COMBINING ACUTE ACCENT) -> Café
    print_string(input, length);

    // Caf + é (U+00E9, LATIN SMALL LETTER E WITH ACUTE) -> Café
    print_string(result.output,…
