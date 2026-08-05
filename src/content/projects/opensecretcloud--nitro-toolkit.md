---
repo: "OpenSecretCloud/nitro-toolkit"
name: "nitro-toolkit"
description: "A collection of essential utilities for working with AWS Nitro Enclaves"
readmeQualityOk: true
url: "https://github.com/OpenSecretCloud/nitro-toolkit"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-24T20:00:50Z"
lastCommitAt: "2026-08-05T06:06:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 36
maintainers: ["AnthonyRonning"]
openGraphImageUrl: "https://opengraph.githubassets.com/a165cffd16b41549e31a48f230906df824a30d2bc0ec3f3249a369866ec2540d/OpenSecretCloud/nitro-toolkit"
---

# Nitro Toolkit

A collection of host-side utilities for working with AWS Nitro Enclaves. These tools help manage credentials, logging, and networking for Nitro Enclaves.

## Components

### Credential Requester

A Python-based service that securely handles AWS credential management for Nitro Enclaves.

#### Features
- Retrieves AWS credentials using IMDSv2
- Handles SecretsManager requests
- Supports vsock communication with enclaves
- Multi-threaded request handling
- Automatic token refresh

#### Usage
```bash
# Build the Docker image from the repository root
docker build -t credential-requester credential_requester

# Run the container
docker run -d --restart always \
  --name credential-requester \
  --device=/dev/vsock:/dev/vsock \
  -v /var/run/vsock:/var/run/vsock \
  --privileged \
  -e PORT=8003 \
  credential-requester:latest
```

### Logging

A CloudWatch logging solution specifically designed for Nitro Enclaves.

#### Features
- Forwards logs from enclaves to AWS CloudWatch
- Supports vsock communication
- Multi-threaded log processing
- Automatic retry mechanisms
- Configurable log groups and streams

#### Usage
```bash
# Build the Docker image from the repository…
