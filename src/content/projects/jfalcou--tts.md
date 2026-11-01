---
repo: "jfalcou/tts"
name: "tts"
description: "Tiny Test System"
readmeQualityOk: true
url: "https://github.com/jfalcou/tts"
homepage: "https://jfalcou.github.io/tts/"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["cpp", "testing-tools", "tdd", "mit-license", "cpp20", "cpp20-library", "tdd-workflow"]
stars: 29
forks: 6
openIssues: 0
closedIssues: 69
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2019-01-10T19:57:08Z"
lastCommitAt: "2026-11-01T23:00:02Z"
lastReleaseAt: "2026-10-08T16:38:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 66
maintainers: ["jfalcou", "dependabot[bot]", "Nxirda"]
openGraphImageUrl: "https://opengraph.githubassets.com/07c52f412733bc6223138b7127d23e27005c4fedcd39ec0e7c6d664b82e2bf8f/jfalcou/tts"
discussionCount: 1
---

# The TTS Library

**Tiny Test System** is a C++20 open-source Unit Test library designed following the ideas of
libraries like CATCH or LEST.

In addition to classical TDD features, its main goal is to provide:

- Test over data sets
- Support for template test cases generation
- IEEE precision-related tests: ULP, absolute and relative error
- Customization points for 3rd party types
- Streamlined behavior for interaction with post-processing scripts

TTS is thus suitable for numerical-heavy testing.

# Supported Compilers
  * g++ 11.1 and superior
  * clang 13 and superior
  * Visual Studio 17 2022 v19.30.30709.0
  * clang-CL 15.0.1 or superior
  * emscripten 3.1.14

# A Short Example

[See it live on Compiler Explorer](https://godbolt.org/z/KTrGW437T)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
#define TTS_MAIN
#include <tts/tts.hpp>
#include <stdexcept>

TTS_CASE( "Check expectations" )
{
  TTS_EXPECT(true == true);
  TTS_EXPECT_NOT(1+1 == 3);
};

TTS_CASE( "Check relationship between values" )
{
  double x = 12.5;
  TTS_EQUAL( 12.5f, x );
  TTS_NOT_EQUAL( 17.65, x );
  TTS_LESS(1.95f, x);
  TTS_GREATER(2*x, x);
  TTS_LESS_EQUAL(x,13);
  TTS_GREATER_EQUAL(x,3.5f);
};

void…
