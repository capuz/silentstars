---
repo: "stevieb9/rpi-wiringpi"
name: "rpi-wiringpi"
description: "Perl interface to Raspberry Pi's board, GPIO and various sensors and ICs"
readmeQualityOk: true
url: "https://github.com/stevieb9/rpi-wiringpi"
language: "Perl"
languages: ["Perl", "Python"]
languagePcts: [78, 21]
stars: 9
forks: 1
openIssues: 13
closedIssues: 155
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-08-10T13:25:25Z"
lastCommitAt: "2026-07-21T06:11:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 98
undervaluedScore: 72
maintainers: ["stevieb9"]
openGraphImageUrl: "https://opengraph.githubassets.com/b668bd81a7718323a7aa243f90b280c1b0307ecd7289519e54c0abacba209931/stevieb9/rpi-wiringpi"
---

# NAME

RPi::WiringPi - Perl interface to Raspberry Pi's board, GPIO, LCDs and other
various items

## Table of Contents

- [SYNOPSIS](#synopsis)
- [DESCRIPTION](#description)
- [BASE METHODS](#base-methods)
  - [new(\[%args\])](#newargs)
  - [accelerometer(%args)](#accelerometerargs)
  - [adc](#adc)
    - [ADS1015](#ads1015)
    - [MCP3008](#mcp3008)
  - [bmp($pin\_base)](#bmppin_base)
  - [dac](#dac)
  - [dpot($cs, $channel)](#dpotcs-channel)
  - [gps](#gps)
  - [gyro(%args)](#gyroargs)
  - [hcsr04($trig, $echo)](#hcsr04trig-echo)
  - [hygrometer($pin)](#hygrometerpin)
  - [i2c($addr, \[$device\])](#i2caddr-device)
  - [lcd(...)](#lcd)
  - [oled(\[$model\], \[$i2c\_addr\], \[$display\_splash\_page\])](#oledmodel-i2c_addr-display_splash_page)
  - [pin($pin\_num, $comment)](#pinpin_num-comment)
  - [radar(%args)](#radarargs)
  - [rtc](#rtc)
  - [eeprom](#eeprom)
  - [expander](#expander)
  - [serial($device, $baud)](#serialdevice-baud)
  - [servo($pin\_num)](#servopin_num)
  - [shift\_register($base, $num\_pins, $data, $clk, $latch)](#shift_registerbase-num_pins-data-clk-latch)
  - [spi($channel, $speed)](#spichannel-speed)
  - [stepper\_motor(%args)](#stepper_motorargs)
  -…
