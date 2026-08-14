---
repo: "cloud-copilot/iam-data"
name: "iam-data"
description: "Daily Updates of AWS IAM Data"
readmeQualityOk: true
url: "https://github.com/cloud-copilot/iam-data"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 24
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-24T22:30:07Z"
lastCommitAt: "2026-08-14T05:15:04Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 51
maintainers: ["github-actions[bot]", "davekerber"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbf43fb904a0b5a2e24d8ac0a18b9fe70ab9a1d2070f16dbd8da9f8dbb942267/cloud-copilot/iam-data"
---

# AWS IAM Data

## Description
Contains IAM data for AWS actions, resources, and conditions based on IAM policy documents. This is intended to be used in downstream projects to provide a reference for IAM policy documents.

Published in ESM and CommonJS.

## Data Updates
Data is scanned daily and a new version is published if there are changes. The version number is updated to reflect the date of the last update and the function `iamDataUpdatedAt()` returns the date of the last data update. This process is managed outside this repo.

## Usage

```bash
npm install @cloud-copilot/iam-data
```

```typescript
import { iamServiceKeys, iamActionDetails, iamActionsForService, iamServiceName } from '@cloud-copilot/iam-data';

// Iterate through all actions in all services
const serviceKeys = await iamServiceKeys()
for(const serviceKey of serviceKeys) {
  const serviceName = await iamServiceName(serviceKey);
  console.log(`Getting Actions for ${serviceName}`);
  const actions = await iamActionsForService(serviceKey);
  for(const action of actions) {
    const actionDetails = await iamActionDetails(serviceKey, action);
    console.log(actionDetails);
  }
}
```

## API
### Services
*…
