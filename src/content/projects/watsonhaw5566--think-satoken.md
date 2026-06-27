---
repo: "watsonhaw5566/think-satoken"
name: "think-satoken"
description: "属于 Thinkphp 的 Satoken"
url: "https://github.com/watsonhaw5566/think-satoken"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-12-25T03:13:44Z"
lastCommitAt: "2026-06-27T06:25:00Z"
lastReleaseAt: "2026-06-27T06:09:11Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 48
maintainers: ["watsonhaw5566"]
openGraphImageUrl: "https://opengraph.githubassets.com/73fb2805ca350e80a7c39f418b6986dd03c867bf730f5e03f7e1f7856035c50d/watsonhaw5566/think-satoken"
---

# think-satoken

## 项目介绍

think-satoken 是一个基于 PHP 实现的 SaToken 权限认证框架，专为 ThinkPHP(6|8) 框架设计。实现了 Java SaToken
的核心功能，提供简洁易用的权限认证解决方案。

## 功能特性

- 🔐 **用户认证**：提供完整的登录、登出、踢出功能
- 🎯 **Token 管理**：支持 Token 的创建、格式验证、信息读取
- 👥 **并发登录控制**：可配置是否允许同一账号多地登录，支持 `max_login_count` 限制
- 🚫 **权限拦截**：提供 `checkLogin()` 与 `SatokenAuth` 中间件实现请求的权限拦截
- 📝 **灵活配置**：多种配置选项适应不同的业务场景
- ⚡ **高性能**：基于缓存实现，性能优越
- ♻️ **智能滑动续期**：开启后仅在剩余时间低于阈值时才刷新 TTL（`renew_threshold`），避免每次请求写缓存
- ⏱️ **有效期查询**：提供过期时间戳与剩余有效秒数查询
- 🔍 **Token 格式验证**：内置严格 `UUID v4` 格式验证，提高安全性
- 📦 **自定义附加信息**：登录时可附加自定义 `extra` 数据，并在会话中读取或更新

## 安装

使用 Composer 安装 think-satoken：

```bash
composer require watsonhaw/think-satoken
```

## 配置

think-satoken 提供了丰富的配置选项，配置文件位于 `src/config/satoken.php`：

```php
return [
    // 自定义 Token header 名称（为空时仅从 Authorization: Bearer 中读取）
    'token_name' => '',
    // Token 有效期，单位秒(默认1天)
    'timeout' => 86400,
    // 是否允许同一账号多地登录（false 等价于 max_login_count=1）
    'is_concurrent' => true,
    // 同一账号最大登录数量（超出后最早的 token 被踢出）
    'max_login_count' => 10,
    // 是否启用滑动续期（访问自动续期）
    'auto_renew' => true,
    // 滑动续期阈值：剩余时间低于此比例才触发续期 (0~1，默认 30%)
    // 设为 1 表示每次访问都续期
    'renew_threshold' => 0.3,
];
```

**并发登录说明**：

-…
