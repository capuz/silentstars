---
repo: "hiero-ledger/hiero-sdk-python"
name: "hiero-sdk-python"
description: "A python SDK for Hiero: A python toolkit for creating, updating, and interacting with on-ledger assets and smart contracts on Hedera and other Hiero networks"
readmeQualityOk: true
url: "https://github.com/hiero-ledger/hiero-sdk-python"
homepage: "https://pypi.org/project/hiero-sdk-python/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hedera", "hiero", "python", "sdk", "distributed-ledger-technology", "blockchain", "good-first-issue", "good-first-issues", "open-source"]
stars: 66
forks: 302
openIssues: 32
closedIssues: 1105
watchers: 8
contributors: 198
recentReleases: 0
createdAt: "2024-10-09T11:52:22Z"
lastCommitAt: "2026-10-30T11:02:20Z"
lastReleaseAt: "2026-04-12T15:39:30Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 62
maintainers: ["dependabot[bot]", "manishdait", "danielmarv"]
openGraphImageUrl: "https://opengraph.githubassets.com/3325e6bd636680833fea1acb147a329d5fb150eeb7a5467cd9260c5af8e37c78/hiero-ledger/hiero-sdk-python"
discussionCount: 17
---

# Hiero SDK in Python

A Python SDK for interacting with the Hedera Hashgraph platform.

> [!NOTE]
>**Python compatibility**
>
> The SDK supports Python ≥ 3.11 and is tested on Python 3.11–3.15. Newer Python versions may work but have not yet been validated.

## Quick Start

### Installing from PyPI

```bash
pip install --upgrade pip
pip install hiero-sdk-python
pip install python-dotenv
```

### Environment Configuration

Create a `.env` file in your project root with your Hedera testnet credentials.

**Full setup instructions:** [Setup Guide](https://github.com/hiero-ledger/hiero-sdk-python/blob/main/docs/sdk_developers/setup.md)

**Don't have testnet credentials?** Get them free at [Hedera Portal](https://portal.hedera.com/)

A sample file is provided: [.env.example](https://github.com/hiero-ledger/hiero-sdk-python/blob/main/.env.example)

### Basic Usage

```python
import os
from dotenv import load_dotenv
from hiero_sdk_python import Network, Client, CryptoGetAccountBalanceQuery, AccountId, PrivateKey

# Connect to testnet
load_dotenv()
network = Network("testnet")
client = Client(network)

operator_id = AccountId.from_string(os.getenv("OPERATOR_ID", ""))
operator_key =…
