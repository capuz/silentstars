---
repo: "andrewbrey/dotfiles"
name: "dotfiles"
description: "multi-platform dotfiles, configuration, and bootstrap powered by chezmoi and deno"
readmeQualityOk: true
url: "https://github.com/andrewbrey/dotfiles"
homepage: "https://github.com/andrewbrey/dotfiles"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["chezmoi", "dotfiles", "codespaces", "devcontainers", "gitpod", "linux", "macos", "deno"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-20T05:58:36Z"
lastCommitAt: "2026-11-13T18:30:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 70
maintainers: ["andrewbrey"]
openGraphImageUrl: "https://opengraph.githubassets.com/aff883c555dfd1c139dfae6d6ac83a71f9cbaac787c4e412e7be9a89526cd14c/andrewbrey/dotfiles"
---

# dotfiles

- Generate a new `ssh` key and give it a passphrase

  ```sh
  ssh-keygen -t ed25519 -C "34140052+andrewbrey@users.noreply.github.com"
  ```

- Add the `ssh` key to `GitHub`: https://github.com/settings/keys (Add it twice, once as an
  "Authentication key" and once as a "Signing key")

- Clone dotfiles to local

  ```sh
  git clone git@github.com:andrewbrey/dotfiles.git ~/dotfiles
  ```

- Run bootstrap

  ```sh
  ~/dotfiles/script/bootstrap
  ```

- _(Optional)_ Delete manually cloned dotfiles now that there is a `chezmoi` managed copy

  > Use `chezmoi` to locate managed dotfiles, in particular with `$(chezmoi source-path)`

  ```sh
  rm -rf ~/dotfiles
  ```

- Log out and back in to ensure changes to the login shell are enabled

- Use the `pam` cli to install applications, e.g. a few apps at once

  ```sh
  pam install -a core-tools -a wezterm -a fonts
  ```

  or a whole named group at once

  ```sh
  pam install -g devcontainer
  ```

- Use the `sam` cli to apply settings

  ```sh
  sam apply
  ```

## init script requirements

`init/` scripts should be executable and have a shebang similar to:

```sh
#!/usr/bin/env -S deno run --allow-sys --allow-read --allow-net…
