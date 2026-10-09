---
repo: "cloudmailin/cloudmailin-js"
name: "cloudmailin-js"
description: "A Node.JS SDK for CloudMailin written in Typescript for receiving incoming email via JSON HTTP POST."
readmeQualityOk: true
url: "https://github.com/cloudmailin/cloudmailin-js"
homepage: "https://www.cloudmailin.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["email", "transactional-emails", "inbound-email", "json"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-02-27T10:50:31Z"
lastCommitAt: "2026-10-09T10:50:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 57
maintainers: ["scsmith", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4178fc5849bbe93ae950ef7170aa5c53ce537072423e5d532d0f3cad3461ef3/cloudmailin/cloudmailin-js"
---

# CloudMailin Node.js Library

A Node.JS SDK for CloudMailin written in Typescript for receiving
incoming email via JSON HTTP POST.

Please see the [Documentation](https://docs.cloudmailin.com) for more details and examples.

## Usage

You can install the library using NPM.

```sh
npm install cloudmailin
```

### Receiving Email

We recommend you take a look at our
[Documentation](https://docs.cloudmailin.com/receiving_email/examples/node/)
for a more detailed example but here's a snippet:

```typescript
import express from "express";
import bodyParser from "body-parser";
import { IncomingMail } from "cloudmailin";

const app = express();
app.use(bodyParser.json());

app.post("/incoming_mails/", (req, res) => {
  const mail = <IncomingMail>req.body;

  res.status(201).json(mail);
}
```

### Sending Email

You can initialize the MessageClient in two ways:

#### Using explicit credentials

```typescript
import { MessageClient } from "cloudmailin"

const client = new MessageClient({
  username: "your-username",
  apiKey: "your-api-key"
});
const response = await client.sendMessage({
  to: 'test@example.net',
  from: 'test@example.com',
  plain: 'test message',
  html:  '<h1>Test…
