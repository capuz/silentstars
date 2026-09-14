---
repo: "marcobeierer/ftps"
name: "ftps"
description: "Implementation of the FTPS protocol for Golang."
readmeQualityOk: true
url: "https://github.com/marcobeierer/ftps"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ftps", "ftp", "ftp-client", "go", "golang"]
stars: 29
forks: 13
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2014-07-30T10:47:56Z"
lastCommitAt: "2026-09-14T09:13:18Z"
lastReleaseAt: "2026-09-14T08:41:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 43
maintainers: ["marcobeierer"]
openGraphImageUrl: "https://opengraph.githubassets.com/798e74e9cb0d0ba0c7b97ecccbc131de165b0b9ea4c2fa0be3b95fefaaa9c293/marcobeierer/ftps"
---

# FTPS Implementation for Go

## Information
This implementation does not implement the full FTP/FTPS specification. Only a small subset.

I have not done a security review of the code, yet. Therefore no guarantee is given. It would be nice if somebody could do a security review and report back if the implementation is vulnerable.

## Installation
	go get github.com/marcobeierer/ftps

## Usage
	ftps := new(FTPS)

	ftps.TLSConfig.InsecureSkipVerify = true // often necessary in shared hosting environments
	ftps.Debug = true

	err := ftps.Connect("localhost", 21)
	if err != nil {
		panic(err)
	}

	err = ftps.Login("username", "password")
	if err != nil {
		panic(err)
	}

	directory, err := ftps.PrintWorkingDirectory()
	if err != nil {
		panic(err)
	}
	log.Printf("Current working directory: %s", directory)

	err = ftps.Quit()
	if err != nil {
		panic(err)
	}

## Testing
Run the default test suite with:

	go test ./...

The tests start an in-process explicit FTPS server with temporary storage and a self-signed certificate. No external FTPS server or environment variable is required.

The `github.com/fclairamb/ftpserverlib` and `github.com/spf13/afero` dependencies are used only by the…
