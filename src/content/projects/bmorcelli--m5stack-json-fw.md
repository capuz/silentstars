---
repo: "bmorcelli/M5Stack-json-fw"
name: "M5Stack-json-fw"
description: "Teste"
url: "https://github.com/bmorcelli/M5Stack-json-fw"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2024-04-02T15:14:55Z"
lastCommitAt: "2026-06-24T23:38:44Z"
lastReleaseAt: "2026-04-17T01:15:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 70
maintainers: ["github-actions[bot]", "bmorcelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/de543f0939979828269a3eb2a34c70b0f493c48bc4d07ad6421cac246b5a02c0/bmorcelli/M5Stack-json-fw"
fundingLinks: ["GITHUB:https://github.com/bmorcelli", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bmorcelliz"]
---

# M5Stack-json-fw
This repo analises the M5Burner list of firmwares, filters, simplifies and keep the json to be used in one of my projects

## Como executar `starred_list.html`

Como a página lê arquivos JSON locais por meio de `fetch`, é necessário servi-la por um pequeno servidor HTTP em vez de abrir o arquivo diretamente no navegador (`file://`). Siga os passos abaixo:

1. Abra um terminal e navegue até a raiz do repositório:

   ```bash
   cd /caminho/para/M5Stack-json-fw
   ```

2. Inicie o servidor especializado que permite salvar as estrelas diretamente no arquivo `starred_list.json`:

   ```bash
   python script/starred_server.py --port 8000
   ```

   Caso deseje servir a partir de outro diretório, utilize a opção `--directory` apontando para o local desejado.

3. Abra o navegador e acesse:

   ```
   http://localhost:8000/starred_list.html
   ```

4. Após terminar, encerre o servidor pressionando `Ctrl+C` no terminal.

Esse processo garante que as requisições `fetch` para `v2/all_device_firmware.json`, `3rd/r/all_devices_firmware.json` e `starred_list.json` sejam atendidas corretamente e que o botão **Submit** atualize o arquivo local apenas com os registros estrelados.
