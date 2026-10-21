---
repo: "ChenXinBest/hosts_check"
name: "hosts_check"
description: "Resolve tmdb hosts to prevent DNS pollution"
originalDescription: "解析tmdb hosts，防止dns污染"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ChenXinBest/hosts_check"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 41
forks: 6
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-08T18:28:10Z"
lastCommitAt: "2026-10-21T20:01:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d0938b2afaf0abbe89bfecd36ec6a44800aa14a2dc5199780e2282c28f737310/ChenXinBest/hosts_check"
---

# hosts_check

Resolves available IPs for TMDB / GitHub domain names, generates `hosts.txt`, and bypasses DNS pollution. Supports IPv4 (A) and IPv6 (AAAA) records.

## Usage

- **Use the hosts file directly**: copy the [HOST daily update](https://raw.githubusercontent.com/ChenXinBest/hosts_check/master/hosts.txt) into your hosts file
- **Run manually**:
  ```bash
  pip install -r requirements.txt
  python -m dnsprobe
  ```
  Or install the package and run directly:
  ```bash
  pip install -e .
  dnsprobe
  ```

## Configuration

- `config.yml`: which providers to enable, each provider's upstream DNS, and output and reachability parameters
- `domains.yml`: the list of domain names to resolve

Edit `domains.yml` to customize your own domain list.

### IPv6 Support

Configure `record_types` in the provider's `extra` section in `config.yml`:

```yaml
providers:
  - name: doh
    extra:
      record_types: ["A"]          # IPv4 only (default)
      # record_types: ["AAAA"]     # IPv6 only
      # record_types: ["A", "AAAA"] # dual stack
```

## Adding a Custom Provider

Create a new `.py` file in the `plugins/` directory, inherit from `BaseResolver`, and decorate the class with…
