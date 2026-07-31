---
repo: "zoetrope/k8s-hands-on"
name: "k8s-hands-on"
description: "A Kubernetes cluster to learn Kubernetes. It includes Argo CD, Grafana, Prometheus, Loki, Tempo, Phlare and VictoriaMetrics."
readmeQualityOk: true
url: "https://github.com/zoetrope/k8s-hands-on"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [50, 23]
stars: 11
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-03-07T02:15:31Z"
lastCommitAt: "2026-07-31T06:29:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 55
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da29e42402f48ec8c0d50e36cf854b03d412a153e13f3fb50aba811ab66193b9/zoetrope/k8s-hands-on"
---

# k8s-hands-on

## ディレクトリ構造

- manifests: 各種アプリケーションのマニフェスト
- todo: サンプルのTODOアプリ

## 事前準備

このハンズオンはLinux, WSL2(Ubuntu), macOS(Intel Chip)で動作します。
事前に下記のソフトウェアをインストールしておいてください。

- Goのインストール
    - https://golang.org/dl/
- Dockerのインストール
    - https://docs.docker.com/get-docker/
- make, curl, unzipなどのコマンドのインストール
    - macOSの場合は、Command Line Tools for Xcodeのインストールが必要です。
- aquaのインストール
    - https://aquaproj.github.io/docs/tutorial-basics/quick-start

## 利用方法

### ツールのセットアップ

このハンズオンで利用しているCLIツールは[aqau](https://aquaproj.github.io)で管理しています。
以下のコマンドでCLIツールのセットアップをおこなってください。

```console
aqua policy allow aqua-policy.yaml
aqua i -l
```

### Kubernetesクラスタの立ち上げ

kindでKubernetesクラスタを起動します。

```console
make launch-k8s
```

## アプリケーションのデプロイ

Argo CDをデプロイします。

```console
make deploy-argocd
```

ApplicationがすべてSyncedになるまで待ちます。

```console
make sync-applications
```

数分待つとアプリケーションのデプロイが完了します。

## メトリクスを見る方法

メトリクスを閲覧するために以下の4つのツールが利用できます。

### Grafana

GrafanaをPort Forwardします。

```console
kubectl port-forward -n prometheus svc/prometheus-grafana 33000:80
```

ブラウザを開いて http://localhost:33000 にアクセスしてください。

下記のコマンドでパスワードを確認し、Grafanaの左下のメニューからSign Inをクリックし、Username: admin でログインします。

```console
make…
