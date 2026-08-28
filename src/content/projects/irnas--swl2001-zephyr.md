---
repo: "IRNAS/SWL2001-Zephyr"
name: "SWL2001-Zephyr"
description: "LoRa Basics Modem port for Zephyr"
readmeQualityOk: true
url: "https://github.com/IRNAS/SWL2001-Zephyr"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 5
forks: 7
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 34
recentReleases: 0
createdAt: "2022-11-21T12:23:48Z"
lastCommitAt: "2026-08-28T12:24:07Z"
lastReleaseAt: "2024-06-19T08:26:35Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 62
maintainers: ["klancarLuka"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a522be9d111f2175a817b36ed91c505e3b9c13ef9d1a81d1458fa50520c8be5/IRNAS/SWL2001-Zephyr"
---

# SWL2001-Zephyr

LoRa Basics Modem port for Zephyr.

## Adding to your project

1. Update your `west.yml`. First in the `remotes` section add:

   ```yaml
    - name: irnas
      url-base: https://github.com/irnas
   ```

2. Then in the `projects` section add at the bottom:

    ```yaml
    - name: SWL2001-Zephyr
      repo-path: SWL2001-Zephyr
      path: irnas/SWL2001-Zephyr
      remote: irnas
      revision: <release-tag | branch | commit hash>
    ```

3. Then run `west update` from your project directory.

## Configuration

Please see `drivers/Kconfig` for all configuration options.

For basic usage, the default options should be sufficient.

By default, all regions are enabled.
If only some regions should be compiled in, set `CONFIG_LORA_BASICS_MODEM_ENABLE_ALL_REGIONS=n`
and enable only the regions needed.

The following additional features are disables by default and should be enabled only if required by the application.

```Kconfig
LORA_BASICS_MODEM_USE_GNSS
LORA_BASICS_MODEM_TIME_SYNC
LORA_BASICS_MODEM_FILE_UPLOAD
LORA_BASICS_MODEM_STREAM
LORA_BASICS_MODEM_MULTICAST
LORA_BASICS_MODEM_D2D
```

Due to how Semtech has implemented the modem lib, you will get a runtime…
