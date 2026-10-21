---
repo: "tenfyzhong/cityhash"
name: "cityhash"
description: "Native cityhash Go implementation"
readmeQualityOk: true
url: "https://github.com/tenfyzhong/cityhash"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "cityhash", "google-cityhash"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-11-24T05:32:53Z"
lastCommitAt: "2026-10-21T17:31:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["tenfyzhong"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5f95a0480730f34f085eba401e01fd419efbe6ffc4b10cb0fc3a239294e3fb7/tenfyzhong/cityhash"
---

# cityhash

Google CityHash in Go. 

CityHash provides hash functions for strings. 

[cityhash homepage](https://github.com/google/cityhash)

# Example
```go
import github.com/tenfyzhong/cityhash

func ExampleCityHash32() {
	s := []byte("hello")
	hash32 := cityhash.CityHash32(s)
	fmt.Printf("the 32-bit hash of 'hello' is: 0x%x\n", hash32)

	// Output:
	// the 32-bit hash of 'hello' is: 0x79969366
}

func ExampleCityHash64() {
	s := []byte("hello")
	hash64 := cityhash.CityHash64(s)
	fmt.Printf("the 64-bit hash of 'hello' is: 0x%x\n", hash64)

	// Output:
	// the 64-bit hash of 'hello' is: 0xb48be5a931380ce8
}

func ExampleCityHash128() {
	s := []byte("hello")
	hash128 := cityhash.CityHash128(s)
	fmt.Printf("the 128-bit hash of 'hello' is: 0x%x%x\n", hash128.High64(), hash128.Low64())

	// Output:
	// the 128-bit hash of 'hello' is: 0x65148f580b45f3476f72e4abb491a74a
}
```
