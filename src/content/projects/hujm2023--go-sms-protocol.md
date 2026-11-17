---
repo: "hujm2023/go-sms-protocol"
name: "go-sms-protocol"
description: "Implementation of SMS Standard Protocol in Go Language"
readmeQualityOk: true
url: "https://github.com/hujm2023/go-sms-protocol"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["sms", "cmpp", "sgip", "smgp", "smpp"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-23T07:56:32Z"
lastCommitAt: "2026-11-17T12:19:20Z"
lastReleaseAt: "2025-04-21T07:31:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 57
maintainers: ["hujm2023", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/748e16c88d2e97e18ed5eca087ec7a70806a9d233abb5f75d4d4f28383302556/hujm2023/go-sms-protocol"
---

# go-sms-protocol

English | [简体中文](https://github.com/hujm2023/go-sms-protocol/blob/HEAD/README.zh-CN.md)

`go-sms-protocol` is a Go library for encoding and decoding selected PDUs from SMPP 3.4, CMPP 2.0/3.0, SGIP 1.2, and SMGP 3.0. It also provides CMPP/SMPP stream framing, SMS text codecs, concatenated-message helpers, and a `netpoll`-based server building block.

This repository is a library, not a ready-to-run SMS gateway or command-line application.

## Installation

The minimum supported Go version is 1.20.

```bash
go get github.com/hujm2023/go-sms-protocol@latest
```

## Quick start

The following program creates an SMPP 3.4 `enquire_link` PDU, encodes it to wire bytes, and decodes it through the protocol dispatcher.

```go
package main

import (
	"fmt"
	"log"

	"github.com/hujm2023/go-sms-protocol/smpp"
	"github.com/hujm2023/go-sms-protocol/smpp/smpp34"
)

func main() {
	request := &smpp34.EnquireLink{
		Header: smpp.Header{
			ID:       smpp.ENQUIRE_LINK,
			Sequence: 42,
		},
	}

	wire, err := request.IEncode()
	if err != nil {
		log.Fatal(err)
	}

	pdu, err := smpp34.DecodeSMPP34(wire)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s sequence=%d\n",…
