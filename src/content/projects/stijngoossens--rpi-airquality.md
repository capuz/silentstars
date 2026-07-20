---
repo: "StijnGoossens/rpi-airquality"
name: "rpi-airquality"
description: "Monitoring air quality (CO2, temperature, humidity and TVOC) with a Raspberry Pi, an MH-Z19 and an VMA342 sensor."
readmeQualityOk: true
url: "https://github.com/StijnGoossens/rpi-airquality"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["raspberry-pi", "air-quality", "co2-monitor", "mh-z19", "vma342"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-10T13:24:51Z"
lastCommitAt: "2026-07-20T06:35:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: ["StijnGoossens"]
openGraphImageUrl: "https://opengraph.githubassets.com/87872796f8936b5fc0603f15db9b088275f87b545cf4e2cb5f2ebcb90dfa9566/StijnGoossens/rpi-airquality"
---

# Air quality monitoring with Raspberry Pi

In this project, we'll monitor several parameters of indoor air quality with a Raspberry Pi and the following sensors:
- MH-Z19 -> **CO2**
- VMA342, consisting of:
    - BME280 -> **temperature** + **humidity** + **air pressure**
    - CCS811 -> volatile organic compounds (**TVOC**) [Work in progress]
- SPS30 -> particulate matter (**PM1.0**, **PM2.5**, **PM4**, **PM10**)

<br/>

*(SPS30 not shown in the image above.)*

A Streamlit dashboard will allow you to monitor the current air quality as well as the evolution over time:
<table>
    <tr>
        <td><img src="images/dashboard_example_1.png" height="600"/></td>
        <td><img src="images/dashboard_example_2.png" height="600"/></td>
    </tr>
</table>

## Requirements
- Raspberry Pi<sup>*</sup>, including:
    - MicroSD card
    - Micro USB power cable and adapter
    - Protective case
    - WiFi dongle (for RPi's older than model 3)
- [VMA342 sensor](https://www.velleman.eu/products/view?id=450324)
- [MH-Z19 sensor](https://www.hobbyelectronica.nl/product/mh-z19b-co2-sensor/)<sup>**</sup>
- [SPS30 sensor](https://sensirion.com/products/catalog/SPS30) + [JST-ZHR 5p to DuPont…
