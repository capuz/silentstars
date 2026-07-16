---
repo: "11003/say-love-wall"
name: "say-love-wall"
description: "A confession wall and campus confession wall developed with the ThinkPHP5 framework, available out of the box for PHP versions 7.0-7.2. Confessions can be sent via email to inform the other party or shared as content. For more fun, check README.md or the website."
originalDescription: "💖 (PHP7.0-7.2版本)由ThinkPHP5框架开发即开箱可用的告白墙、校园表白墙。表白可以通过发送邮箱告知对方，也可以分享表白内容。更多趣味查看 README.md 或网站。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/11003/say-love-wall"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["thinkphp5", "thinkphp", "saylove", "say-love-wall", "wall", "php", "php70", "php71", "php72"]
stars: 39
forks: 16
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2018-12-24T12:46:14Z"
lastCommitAt: "2026-07-16T06:00:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 31
maintainers: ["11003"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1ff90d7d04d7a1ddda8d77a622272d3443552913826e075a3e8ebadfee8dbc1/11003/say-love-wall"
---

# Confession Wall Developed with ThinkPHP5 Framework

If the download is slow, you can try the following channels:
```
https://github.cnpmjs.org/11003/say-love-wall.git
```

```
https://hub.fastgit.org/11003/say-love-wall.git
```

```
https://github.91chifun.workers.dev//https://github.com/11003/say-love-wall.git
```

## Christmas Theme (Can be changed in the backend)

### Frontend Page

## Thanks to Thinks!

Detailed link [Guangxi University of Science and Technology Ping Brother](http://pingxonline.com/)

### Backend Features

- User Blacklist (gk_blacklist)
- Confession List Management (gk_posts)
- Theme Configuration (gk_config)

---

# Other Common Issues

### PHP Version

Supports 7.0 ~ 7.2

### MySql Version

5.x

### Module Not Found: index

Solution: Do not delete the `data` folder

### display.js and submit.js 

Solution: I compressed them, they are: display.min.js and submit.min.js 

### Email Configuration

Solution: Under `app -> index -> config.php`

If you encounter **Email sending failed connectIed() cannot connect**, check the following:

1. Check if `port 465` is occupied
2. Print `phpinfo()` on the homepage to see if `php_openssl.dll` and `php_sockets.dll` are…
