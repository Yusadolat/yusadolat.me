---
model: post
title: Running Go Program on iOS and iPadOS with iSH
description: In this guide, I will be showing you how to set up a Go Environment
  on your iOS and iPadOS with iSH.
path: runining-golang-on-ios
thumbnail: /img/blog-post-29.png
date: 2020-10-29T21:06:24.859Z
published: true
style: normal-img
tags:
  - iPhone
  - Linux
  - ""
---
##### How about Debugging and running your Go Program with your iPhone? Huh, Why Not

\
In this guide, I will be showing you how to set up a Go Environment on your iOS and iPadOS with iSH.\
\
iSH

![](https://camo.githubusercontent.com/54ac3280f1efabbe7f1c7bda8889cbd95c2de43a/68747470733a2f2f6973682e6170702f6173736574732f6769746875622d726561646d652e706e67 "iSH Screenshot")

###### iSH

> **iSH is a Linux-like shell on iOS. You can edit files with sed and cat, move them around, and more!**

You can get it here <https://apps.apple.com/us/app/ish-shell/id1436902243>\
\
Now that you have downloaded the App. Let's do the magic.

* **Install the Alpine Linux package manager apk:** \
  Run  

  ```
  wget -qO- http://dl-cdn.alpinelinux.org/alpine/v3.12/main/x86/apk-tools-static-2.10.5-r1.apk | tar -xz sbin/apk.static && ./sbin/apk.static add apk-tools && rm sbin/apk.static
  ```
* **Fetching Alpine’s repository list:**\
  Run\
  `apk update`
* **Installing Node.js:** `apk add --no-cache --virtual .build-deps bash gcc musl-dev openssl go`

``

1. Test to make sure Go is installed by typing `go version`, you should see something along the lines of

```
go version go1.13.15 linux/386
```