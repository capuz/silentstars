---
repo: "ducktors/storagebus"
name: "storagebus"
description: "A storage abstraction layer for Node.js that removes any difference among multiple public cloud storage services and local filesystems"
readmeQualityOk: true
url: "https://github.com/ducktors/storagebus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["gcs", "gcs-bucket", "s3", "s3-bucket", "storage"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-10-14T08:33:13Z"
lastCommitAt: "2026-08-03T06:44:18Z"
lastReleaseAt: "2025-12-19T16:26:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 68
maintainers: ["kodiakhq[bot]", "dependabot[bot]", "matteovivona"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/551349715/0a46b5f8-6615-4652-b538-ea7f63d7e0a2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064617Z&X-Amz-Expires=300&X-Amz-Signature=57395aa8fc5c93aa6fcb741406e8466d06f4e933187c698c9c3981ce30ecdeba&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg3NywibmJmIjoxNzg1NzM5NTc3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.NNH3FKLS2NpmWYL9v3qWSN3SrxUrgygy4979UEBsqgg"
---

---

</p>

---

StorageBus is a storage abstraction layer for Node.js that removes differences among public cloud storage services, local filesystems, and in-memory storage.

## Usage

StorageBus v1 has two core operations:

- `write(objectKey, data)` writes, replaces, or deletes an object.
- `file(objectKey)` returns a `BusFile`, which can stream content and expose metadata.

You can use StorageBus with your filesystem, AWS S3, Google Cloud Storage, or memory:

```typescript
import { Readable } from 'node:stream'
import { Storage } from '@storagebus/storage'
import { createAdapter } from '@storagebus/local'

const storage = new Storage(createAdapter({ root: '/path/to/folder' }))

async function main() {
  const objectKey = await storage.write('hello.txt', 'Hello, world!')
  const file = await storage.file(objectKey)

  console.log(file.name)
  console.log(file.type)
  console.log(file.size)
  console.log(await file.text())

  await storage.write('stream.txt', () => Readable.from('stream content'))

  // Passing null deletes the Object Key.
  await storage.write('hello.txt', null)
}
```

## Packages

- `@storagebus/storage`: core `Storage`, `BusFile`, Adapter contract, shared…
