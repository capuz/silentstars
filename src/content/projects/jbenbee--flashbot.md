---
repo: "jbenbee/flashbot"
name: "flashbot"
description: "A telegram bot powered by ChatGPT, that helps you to learn a new language."
readmeQualityOk: true
url: "https://github.com/jbenbee/flashbot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-24T18:06:05Z"
lastCommitAt: "2026-10-31T09:49:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 43
maintainers: ["jbenbee"]
openGraphImageUrl: "https://opengraph.githubassets.com/f10a1430800683a62ca2af8966433a87c5956f4eac7cf8689668a208bd57d870/jbenbee/flashbot"
---

# Flashbot
A telegram bot powered by ChatGPT, that helps you to learn words of a new language.

The bot supports flashcards-style exercises.

The bot will send you exercises based on the schedule that you set up in ```user_data/user_config.json```.
In addition, you can invoke a command to send you a new exercise whenever you want.

## How to use the code

1. Create a telegram bot. See, e.g. [https://www.pragnakalp.com/create-telegram-bot-using-python-tutorial-with-examples/](https://www.pragnakalp.com/create-telegram-bot-using-python-tutorial-with-examples/).
2. Add the following commands to the bot (BotFather->Edit Bot->Edit Commands):
   - next_test - Next test word 
   - next_new - Next new word
   - add_word - Add a word 
3. Set up environment variables:
    - Specify the bot token in environmental variable ```BOT_TOKEN_{LANG}```, where LANG is the language of the bot UI
    - Specify OpenAI API key in environmental variable ```OPENAI_KEY```
    - Path to folder containing user files ```CH_USER_DATA_ROOT```
5. Find chat_ids of all users who will use the bot.
6. Specify user config in ```user_data/user_config.json``` for all users. For each user add an entry into…
