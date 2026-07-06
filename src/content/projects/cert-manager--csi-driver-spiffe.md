---
repo: "cert-manager/csi-driver-spiffe"
name: "csi-driver-spiffe"
description: "A Kubernetes CSI plugin to automatically mount SPIFFE certificates to Pods using ephemeral volumes"
readmeQualityOk: true
url: "https://github.com/cert-manager/csi-driver-spiffe"
homepage: "https://cert-manager.io/docs/usage/csi-driver-spiffe/"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [58, 36]
stars: 86
forks: 28
openIssues: 4
closedIssues: 13
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2021-10-04T09:25:03Z"
lastCommitAt: "2026-07-06T07:02:58Z"
lastReleaseAt: "2024-07-02T13:36:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["cert-manager-prow[bot]", "renovate[bot]", "cert-manager-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a0d7ae08fe32d79e1ffddc6dab144341d052e3fc39d674abb1753cddb97e77f/cert-manager/csi-driver-spiffe"
---

<br>
</p>

# csi-driver-spiffe

csi-driver-spiffe is a Container Storage Interface (CSI) driver plugin for
Kubernetes, designed to work alongside [cert-manager](https://cert-manager.io/).

It transparently delivers [SPIFFE](https://spiffe.io/) [SVIDs](https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/#spiffe-verifiable-identity-document-svid)
(in the form of X.509 certificate key pairs) to mounting Kubernetes Pods.

The end result is that any and all Pods running in Kubernetes can securely request
a SPIFFE identity document from a Trust Domain with minimal configuration.

These documents in turn have the following properties:

- automatically renewed ✔️
- private key never leaves the node's virtual memory ✔️
- each Pod's document is unique ✔️
- the document shares the same life cycle as the Pod and is destroyed on Pod termination ✔️

```yaml
...
          volumeMounts:
          - mountPath: "/var/run/secrets/spiffe.io"
            name: spiffe
      volumes:
        - name: spiffe
          csi:
            driver: spiffe.csi.cert-manager.io
            readOnly: true
```

SPIFFE documents can then be used by Pods for mutual TLS (mTLS) or other authentication within…
