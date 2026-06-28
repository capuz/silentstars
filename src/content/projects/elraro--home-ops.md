---
repo: "elraro/home-ops"
name: "home-ops"
description: "Repository for my homelab infraestructure and applications"
url: "https://github.com/elraro/home-ops"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["flux", "gitops", "k8s", "k8s-at-home", "kubernetes", "metallb", "prowlarr", "qbittorrent", "radarr", "sonarr"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-20T10:47:23Z"
lastCommitAt: "2026-06-28T13:17:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 66
maintainers: ["roybatty-bot[bot]", "elraro"]
openGraphImageUrl: "https://opengraph.githubassets.com/18aeef6f11342230f95e54981bbdac8b462b041e72297c880fd93f2776ac547b/elraro/home-ops"
---

### My home operations repository :octocat:

_... managed with Flux, Renovate and GitHub Actions_ 🤖

</div>

# Requirements

```
# install pre-commit
pip install pre-commit --break-system-packages
echo 'export PATH=/home/$USER/.local/bin:$PATH' >> ~/.bashrc

# install sops
curl -LO https://github.com/getsops/sops/releases/download/v3.8.1/sops-v3.8.1.linux.amd64
mv sops-v3.8.1.linux.amd64 /usr/local/bin/sops
chmod +x /usr/local/bin/sops

# install direnv
apt install direnv
echo 'eval "$(direnv hook bash)"' >> ~/.bashrc

# install fluxcd
curl -s https://fluxcd.io/install.sh | sudo bash
echo '. <(flux completion bash)' >> ~/.bashrc

# configure GITHUB_TOKEN and GITHUB_USER
echo 'export GITHUB_TOKEN=<your-token>' >> ~/.bashrc
echo 'export GITHUB_USER=<your-username>' >> ~/.bashrc
```
