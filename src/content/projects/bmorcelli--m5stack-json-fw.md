---
repo: "bmorcelli/M5Stack-json-fw"
name: "M5Stack-json-fw"
description: "Teste"
readmeQualityOk: true
url: "https://github.com/bmorcelli/M5Stack-json-fw"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-04-02T15:14:55Z"
lastCommitAt: "2026-11-06T11:23:37Z"
lastReleaseAt: "2026-04-17T01:15:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 69
maintainers: ["github-actions[bot]", "bmorcelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bbb77ca39c1e64ff1bfc70b9d9ba20c5f59a486e6a385e8322ef2c5bdac04df/bmorcelli/M5Stack-json-fw"
fundingLinks: ["GITHUB:https://github.com/bmorcelli", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bmorcelliz"]
---

# M5Stack-json-fw
This repo analises the M5Burner list of firmwares, filters, simplifies and keep the json to be used in one of my projects

## Atualização do catálogo M5Burner

Execute `python v3/update_json.py` para coletar a nova API pública em
`v3/all_device_firmware.json` e atualizar o catálogo compatível em
`v2/all_device_firmware.json`. Veja o [modelo de dados e as opções](https://github.com/bmorcelli/M5Stack-json-fw/blob/HEAD/v3/README.md).

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

4. Após…
