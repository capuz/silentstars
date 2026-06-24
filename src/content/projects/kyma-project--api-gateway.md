---
repo: "kyma-project/api-gateway"
name: "api-gateway"
description: "API Gateway is a Kyma module with which you can expose and secure APIs."
url: "https://github.com/kyma-project/api-gateway"
homepage: "https://kyma-project.io"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cloud-native", "gateway", "hacktoberfest", "istio", "kubernetes", "network"]
stars: 11
forks: 40
openIssues: 37
closedIssues: 287
watchers: 0
contributors: 49
recentReleases: 0
createdAt: "2022-07-29T09:25:58Z"
lastCommitAt: "2026-06-24T06:39:48Z"
lastReleaseAt: "2023-05-08T06:45:33Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 89
maintainers: ["dependabot[bot]", "mluk-sap", "nataliasitko"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e4751e8c9c32f3064802fbc4d2812905d7522cd708558f0e3f8871022ac36e/kyma-project/api-gateway"
---

# API Gateway

API Gateway is a Kyma module with which you can expose and secure APIs.

The API Gateway module offers the following features:

- API Exposure: The module uses Istio features to help you easily and securely expose your workloads by creating APIRule custom resources. With an APIRule, you can perform the following actions:
  - Group multiple workloads and expose them under a single host.
  - Use a short host name to simplify the migration of resources to a new cluster.
  - Configure the **noAuth** access strategy, which offers a simple configuration to allow access to specific HTTP methods.
  - Secure your workloads by configuring **jwt** or **extAuth** access strategies. The **jwt** access strategy enables you to use Istio's JWT configuration to protect your exposed services and interact with them using JSON Web Tokens. The **extAuth** access strategy allows you to implement custom authentication and authorization logic.

- Gateway configuration:
  - Default Kyma Gateway: The module sets up the default TLS Kyma Gateway, which uses the default domain and a self-signed certificate.
  - Custom Gateway: The module allows you to configure a custom Gateway, which is…
