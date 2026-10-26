---
repo: "pschmitt/nixos-config"
name: "nixos-config"
description: "pschmitt's nixos configuration"
readmeQualityOk: true
url: "https://github.com/pschmitt/nixos-config"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [60, 22]
topics: ["nixos", "nixos-config", "nixos-configuration"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-08-02T06:20:47Z"
lastCommitAt: "2026-10-26T20:59:56Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 59
maintainers: ["pschmitt", "renovate[bot]", "pschmitt-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/771fce59eb6892c42c8ff4a910a666b2bbcfce696de3bdb8d81cc130e7266196/pschmitt/nixos-config"
fundingLinks: ["GITHUB:https://github.com/pschmitt", "CUSTOM:https://www.paypal.com/paypalme/pppschmitt"]
---

# pschmitt's nixos book of horrors

Description: tdb.

## NixOS on `fnuc`

`fnuc` is a full NixOS host. Deploy it with the repository helper:

```shell
just deploy fnuc
```

When running directly on `fnuc`, use `just deploy` without a target argument.

## Deploying a new host

The public checkout and private configuration repository are separate. Set
`PRIVATE_CONFIG_DIR` to the local `nixos-config-private` checkout when using
host-initialization, SOPS, or Tofu tooling.

Host-specific SOPS payloads (`hosts/*/*.sops.yaml`) and generated SSH host
data are stored in the private repository and consumed through the
`nixos-config-private` flake input; the public checkout intentionally contains
no host secret ciphertexts.

To create a new host:

1. Add it to [flake.nix](https://github.com/pschmitt/nixos-config/blob/HEAD/flake.nix)
2. Create the config files:

```shell
PRIVATE_CONFIG_DIR=/path/to/nixos-config-private \
  ./scripts/init-host-config.sh "$NEW_HOST"
```

3. Update `tofu/dns-dynamic.tf` in the private configuration repository.

4. Add to `/srv/luks-ssh-unlock/docker-compose.yaml` (@fnuc)

5. Deploy:

```shell
PRIVATE_CONFIG_DIR=/path/to/nixos-config-private just tofu init…
