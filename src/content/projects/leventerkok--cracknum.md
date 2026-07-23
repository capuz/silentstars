---
repo: "LeventErkok/crackNum"
name: "crackNum"
description: "Convert to/from IEEE-754 HP/SP/DP formats"
readmeQualityOk: true
url: "https://github.com/LeventErkok/crackNum"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [93]
topics: ["haskell", "floating-point", "ieee754"]
stars: 22
forks: 8
openIssues: 0
closedIssues: 8
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2015-04-01T07:26:26Z"
lastCommitAt: "2026-07-23T06:14:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 38
maintainers: ["LeventErkok"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf518038852d5c60a542a11c3409bcee6a5663fa69b33a948e602fa96b157efb/LeventErkok/crackNum"
---

## Decode/Encode Integers, Words, and IEE754 Floats

On Hackage: http://hackage.haskell.org/package/crackNum

### Example: Encode a decimal number as a single-precision IEEE754 number
```
$ crackNum -fsp -- -2.3e6
Satisfiable. Model:
  ENCODED = -2300000.0 :: Float
                  3  2          1         0
                  1 09876543 21098765432109876543210
                  S ---E8--- ----------S23----------
   Binary layout: 1 10010100 00011000110000110000000
      Hex layout: CA0C 6180
       Precision: Single
            Sign: Negative
        Exponent: 21 (Stored: 148, Bias: 127)
  Classification: FP_NORMAL
          Binary: -0b1.0001100011000011p+21
           Octal: -0o1.061414p+21
         Decimal: -2300000.0
             Hex: -0x2.3186p+20
   Rounding mode: RNE: Round nearest ties to even.
            Note: Conversion from "-2.3e6" was exact. No rounding happened.
```

### Example: Decode a single-precision IEEE754 number float from memory-layout
```
$ crackNum -fsp  0xfc00 abc1
Satisfiable. Model:
  DECODED = -2.6723903e36 :: Float
                  3  2          1         0
                  1 09876543 21098765432109876543210
                  S ---E8---…
