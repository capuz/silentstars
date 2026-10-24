---
repo: "randomcoww/homelab"
name: "homelab"
description: "Terraform provisioner for Kubernetes homelab"
readmeQualityOk: true
url: "https://github.com/randomcoww/homelab"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
stars: 17
forks: 1
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-03-20T08:31:11Z"
lastCommitAt: "2026-10-24T08:07:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["randomcoww"]
openGraphImageUrl: "https://opengraph.githubassets.com/deebed15f9e341b6493d06e6a4ef5f719add438033b1ab0656c6b36bbe15a49f/randomcoww/homelab"
---

# Terraform (OpenTofu) provisioner for Kubernetes homelab

## External dependencies

### Create service tokens

Cloudflare API token permissions:

| | | |
--- | --- | ---
Account | Workers R2 Storage | Edit
Account | Account Rulesets | Edit
Account | Cloudflare Tunnel | Edit
Account | Zero Trust | Edit
User | API Tokens | Edit
Zone | Config Rules | Edit
Zone | Zone Settings | Edit
Zone | SSL and Certificates | Edit
Zone | DNS | Edit

```bash
curl https://api.cloudflare.com/client/v4/user/tokens/permission_groups --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" | jq
```

GitHub PAT permissions:

* repo
* workflow

Tailscale auth scopes:

* dns
* policy_file
* oauth_keys
* devices:core
* auth_keys
* services

It should include `dns`, `policy_file`, `oauth_keys`, and scopes needed by the Tailscale operator.

### Generate secrets files

```bash
[ -f $HOME/.ssh/id_ecdsa ] || ssh-keygen -t ecdsa -f $HOME/.ssh/id_ecdsa -N ""

cat > credentials.env <<EOF
TF_VAR_cloudflare_api_token=$CLOUDFLARE_API_TOKEN
TF_VAR_letsencrypt_username=$LETSENCRYPT_USER
TF_VAR_tailscale_oauth_client_id=$TS_OAUTH_CLIENT_ID
TF_VAR_tailscale_oauth_client_secret=$TS_OAUTH_CLIENT_SECRET…
