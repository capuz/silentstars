---
repo: "testomato/minicrawler"
name: "minicrawler"
description: "Multiplexing web client supporting HTTP/2 and WHATWG URL compliant parser written in C"
url: "https://github.com/testomato/minicrawler"
homepage: "https://www.testomato.com"
language: "C"
languages: ["C"]
languagePcts: [82]
topics: ["crawler", "c", "cookie", "icu", "nghttp2", "ssl", "agpl", "http2", "multiplexing", "parser"]
stars: 23
forks: 6
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2014-10-14T14:26:11Z"
lastCommitAt: "2026-07-03T12:22:38Z"
lastReleaseAt: "2014-10-17T22:51:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 42
maintainers: ["OzzyCzech"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c3ac81e424cc25be400dcbb4be31bca0585bb161bf8daf59d8d2aba459a746/testomato/minicrawler"
---

# Minicrawler

Minicrawler parses URLs, executes HTTP (HTTP/2) requests while handling cookies, network connection management and
SSL/TLS protocols. By default it follows redirect locations and returns a full response, final URL, parsed cookies and
more. It is designed to handle *many* requests in parallel in a *single thread*. It multiplexes connections, running the
read/write communication asynchronously. The whole Minicrawler suite is licensed under the [AGPL license](license.txt).

## URL Library (libminicrawler-url)

[WHATWG URL Standard](https://url.spec.whatwg.org/) compliant parsing and serializing library written in C. It is fast
and has only one external dependency – libicu.
The library is licensed under the [AGPL license](license.txt).

### Usage

```c
#include <minicrawler/minicrawler-url.h>

/**
 * First argument input URL, second (optional) base URL
 */
int main(int argc, char *argv[]) {
	if (argc < 2) return 2;

	char *input = argv[1];
	char *base = NULL;
	if (argc > 2) {
		base = argv[2];
	}

	mcrawler_url_url url, *base_url = NULL;

	if (base) {
		base_url = (mcrawler_url_url *)malloc(sizeof(mcrawler_url_url));
		if (mcrawler_url_parse(base_url, base, NULL) ==…
