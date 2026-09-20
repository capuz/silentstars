---
repo: "roman-mazur/cuetf"
name: "cuetf"
description: "CUE schemas for Terraform"
readmeQualityOk: true
url: "https://github.com/roman-mazur/cuetf"
language: "CUE"
languages: ["CUE"]
languagePcts: [100]
topics: ["cue", "iac", "opentofu", "terraform"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-10-04T13:04:06Z"
lastCommitAt: "2026-09-20T08:47:39Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 73
maintainers: ["roman-mazur", "dependabot[bot]", "mvdan"]
openGraphImageUrl: "https://opengraph.githubassets.com/047a453f280941a3dbe878ef1be699dcc4e030220a2056da36c7de364e33716d/roman-mazur/cuetf"
---

cuetf
=====

CUE definitions for the selected Terraform providers.

Usage example:
```cue
import "github.com/roman-mazur/cuetf/providers/google"

googleInfra: google.#Terraform & {
	provider: google: {
		project: "my_proj"
		zone:    "us-east1-b"
	}
	resource: google_compute_instance: test: {
		name:         "test"
		machine_type: "e2-micro"
		boot_disk: initialize_params: image: "cos-cloud/cos-stable"
		network_interface: network: "default"
	}
}
```

Then you can do
```shell
cue export -e googleInfra > my-infra.tf.json
terraform init
terraform plan
```

See the [examples directory](https://github.com/roman-mazur/cuetf/blob/HEAD/examples) too.

### Versioning

This repo is updated automatically by dependabot when new updates to the Terraform providers are detected.
CUE module releases happen monthly, with versions following the pattern `<major>.YYMM.0`.
For example, the release that happened in February 2026 is represented 
with the version `v0.2602.0` published to the CUE Central Registry.

### Embedding

Instead of importing from the CUE Central Registry you can also choose to vendor the definitions into your project.
Command `embed` available in this repo can be used to…
