---
repo: "fibodevy/zflate"
name: "zflate"
description: "Self-contained DEFLATE, ZLIB and GZIP compression for Unleashed Pascal. No zlib, no external dependencies: PHP-like function names, levels 0-9, constant-memory streaming, and compression that scales across cores."
readmeQualityOk: true
url: "https://github.com/fibodevy/zflate"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [100]
topics: ["deflate", "freepascal", "gzip", "inflate", "pascal", "zlib", "gzcompress", "gzdecode", "gzdeflate", "gzencode"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-28T08:20:33Z"
lastCommitAt: "2026-07-17T05:56:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["fibodevy"]
openGraphImageUrl: "https://opengraph.githubassets.com/21e431ff7f8694f68a6d587a64e6861144944073b8052f5c222bf2233becf189/fibodevy/zflate"
discussionCount: 1
---

# zflate

Compress and decompress buffers, strings and files like in PHP, in one line. The whole DEFLATE codec lives inside the unit: no zlib, no external libraries, nothing but the RTL (`uses` is empty on Windows, `cthreads` on unix for the threaded path). Adding [zflate.pas](https://github.com/fibodevy/zflate/blob/HEAD/src/zflate.pas) to a program grows the binary by about 35 kB.

> **Requires a compiler that understands `{$mode unleashed}`.** The units and the examples below lean on inline variables, tuples, match expressions, function references and parallel for, so a stock compiler will not build them.

- function names taken from PHP: `gzdeflate`/`gzinflate`, `gzcompress`/`gzuncompress`, `gzencode`/`gzdecode`
- three formats: raw DEFLATE (RFC 1951), ZLIB (RFC 1950), GZIP (RFC 1952)
- compression levels 0 to 9, like zlib
- every function returns an integer code: `ZFLATE_OK` (0) on success, `ZFLATE_E*` otherwise; no exception ever escapes
- decompression verifies headers and checksums (adler32 for ZLIB, crc32 + size for GZIP)
- auto-detection of the stream type with a fallback to raw DEFLATE
- streaming API with constant memory use, for files of any size
- optional progress…
