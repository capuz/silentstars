---
repo: "orkspace/orkestra"
name: "orkestra"
description: "Kubernetes Operators for Everyone"
readmeQualityOk: true
url: "https://github.com/orkspace/orkestra"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["kubernetes", "operator-runtime", "operators", "declarative-operators"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-04T23:26:01Z"
lastCommitAt: "2026-07-07T06:37:41Z"
lastReleaseAt: "2026-04-16T19:43:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 46
maintainers: ["iAlexeze"]
openGraphImageUrl: "https://opengraph.githubassets.com/36b990ec1cefeda0a6a5806caac67301f1175319e63b9c9edb4f9dad3000a22d/orkspace/orkestra"
discussionCount: 1
---

<h1>Orkestra</h1>
  <p><strong>A runtime for Kubernetes operators.</strong></p>
  <h3><em>Declare. Run.</em></h3>

  <p>
  </p>

  <p>
  </p>
</div>

---

You have a **CRD**. Kubernetes stores it, validates it, and serves it.

The only missing piece is something that **watches** it and **acts** on it.

Traditionally that means **Go**: informers, workqueues, reconcile loops, code generation, Dockerfiles, Helm charts — a software project per operator. Most engineers never start. Teams that do spend weeks before the first CR reconciles.

**Orkestra removes that entirely.**

---

## Declare

```yaml
apiVersion: orkestra.orkspace.io/v1
kind: Katalog
metadata:
  name: website-operator
spec:
  crds:
    website:
      crdFile: ./crd.yaml
      crFiles: [./cr.yaml]
      operatorBox:
        onCreate:
          deployments:
            - name: "{{ .metadata.name }}"
              image: "{{ .spec.image }}"
              replicas: "{{ .spec.replicas }}"
              reconcile: true
          services:
            - name: "{{ .metadata.name }}-svc"
              port: 80
              targetPort: "{{ .spec.port }}"
              reconcile: true
```

That is the whole operator.

## Run…
