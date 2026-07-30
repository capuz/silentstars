---
repo: "validityBase/vbase-py-utils"
name: "vbase-py-utils"
description: "validityBase Python Utilities"
readmeQualityOk: true
url: "https://github.com/validityBase/vbase-py-utils"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-05-28T06:59:32Z"
lastCommitAt: "2026-07-30T06:06:48Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 87
maintainers: ["matt-thiel", "greg-vbase", "Valikwp"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfb696b2a2f2e1740275247355c7e5c0cd0999d3cbced5b08e045e14dbd99877/validityBase/vbase-py-utils"
---

# validityBase Python Utilities

The package contains common Python utilities used across projects.

## Quickstart Guide

1. Clone the repository:
    ```bash
    git clone https://github.com/validityBase/vbase-py-utils.git
    cd vbase-py-utils
    ```

2. Create and activate a virtual environment (recommended):
    ```bash
    python3.11 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    python -m pip install --require-hashes -r requirements/lock/dev.txt
    python -m pip install --no-deps --no-build-isolation -e .
    ```

4. For vBase API access, set up environment variables:
Create a `.env` file in the project root with the following variables:
    ```bash
    # vBase Configuration
    VBASE_API_KEY=your_api_key_here           # API key for vBase authentication
    VBASE_API_URL=your_api_url_here           # vBase API endpoint URL
    VBASE_COMMITMENT_SERVICE_PRIVATE_KEY=your_private_key_here  # Private key for vBase commitment service

    # AWS Configuration
    AWS_ACCESS_KEY_ID=your_aws_access_key     # AWS access key for S3 operations
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key # AWS secret…
