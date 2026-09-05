---
repo: "sourcenetwork/openpubkey-js"
name: "openpubkey-js"
description: "TypeScript implementation of the OpenPubKey protocol"
readmeQualityOk: true
url: "https://github.com/sourcenetwork/openpubkey-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-10T06:18:40Z"
lastCommitAt: "2026-09-05T07:48:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 19
maintainers: ["iverc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a5700e0aafc45eaae15d9a6de2a95cb22e155ea7d4b5f0aa15e0ec04646a0a7/sourcenetwork/openpubkey-js"
---

# openpubkey-js

TypeScript implementation of the [OpenPubKey](https://github.com/openpubkey/openpubkey) protocol.

This library is a complete rewrite of the official Go implementation, providing the same functionality for JavaScript/TypeScript environments. It works in both Node.js and browsers.

## Installation

```bash
npm install @sourcenetwork/openpubkey-js
```

## What is OpenPubKey?

OpenPubKey binds cryptographic keys to OpenID Connect identities without requiring modifications to identity providers.

## Usage

### Node.js

```typescript
import { OpkClient, GoogleOp, Verifier } from '@sourcenetwork/openpubkey-js';

// Create a client with Google as the identity provider
const op = new GoogleOp();
const client = await OpkClient.newClient(op);

// Authenticate and get a PK Token
const pkToken = await client.auth();

// Sign a message
const signedMessage = await pkToken.newSignedMessage(
  new TextEncoder().encode('Hello, World!'),
  client.getSigner()
);

// Verify the PK Token (throws on failure)
const verifier = await Verifier.newVerifier(op);
await verifier.verifyPKToken(pkToken);
```

### Browser

```typescript
import {
  OpkClientBrowser,
  GoogleBrowserOp,
} from…
