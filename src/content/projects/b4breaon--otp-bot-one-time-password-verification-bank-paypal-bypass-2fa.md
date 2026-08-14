---
repo: "B4BREAON/OTP-Bot-One-Time-Password-Verification-Bank-Paypal-Bypass-2FA"
name: "OTP-Bot-One-Time-Password-Verification-Bank-Paypal-Bypass-2FA"
description: "OTPBYPASS Bot sends a post request to the api, which will save the call into a sqlite DB and send the call to the custom twilio API.Google,Snapchat,Instagram,Facebook,Whatsapp,Twitter,Amazon"
readmeQualityOk: true
url: "https://github.com/B4BREAON/OTP-Bot-One-Time-Password-Verification-Bank-Paypal-Bypass-2FA"
language: "JavaScript"
languages: ["JavaScript", "Go", "Python"]
languagePcts: [42, 31, 26]
topics: ["otp", "otp-applications", "otp-bot", "otp-bot-3dsecure", "otp-bot-bank", "otp-bot-bypass", "otp-bot-discord", "otp-bot-onetime", "otp-bot-paypal", "otp-bot-telegram"]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-04-09T11:35:20Z"
lastCommitAt: "2026-08-14T05:15:31Z"
lastReleaseAt: "2026-07-31T16:18:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f6b2677ef904c4b90a4709c9f5862c5b040ac63813595495e76373a74ad7da82/B4BREAON/OTP-Bot-One-Time-Password-Verification-Bank-Paypal-Bypass-2FA"
---

# OTP Bot

Bypass SMS verifications from Paypal, Instagram, Snapchat, Google, 3D Secure, and many others... using a Discord Bot or the private API.
It's really simple. Imagine that your friend got a Snapchat account, you try to reset his password using the sms system :
he's gonna receive the sms confirmation code.
Then, you use the bot (!call 33612345678 snapchat). The bot is gonna call him, using the snapchat service, ask for the code received. If he send the code using the numpad, then your gonna receive the code and be able to reset the password.

## How to Compile

1. Open the solution file (.sln).
2. Select **Build Solution** from the **Build** menu or press `Ctrl+Shift+B` to compile the project.

- Ready to Install the Bot

## How To Use?

- When you do a !call (3312345678) Citibank, the OTPBYPASS Bot sends a post request to the api, which will save the call into a sqlite DB and send the call to the custom twilio API.
- The Twilio API use our /status route to know what to do in the call, the status route returns TwiML code to Twilio.
- The /status route returns the self hosted service song using the /stream/service route.
- If the user enter the digit code using the numpad,…
