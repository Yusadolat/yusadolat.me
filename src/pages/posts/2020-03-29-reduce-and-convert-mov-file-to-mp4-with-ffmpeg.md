---
model: post
title: Reduce and Convert .mov file to .mp4 with FFmpeg
description: Learn the easiest and the fastest way to reduce and convert your .mov to .mp4
path: /reduce-convert-.mov-to-.mp4
thumbnail: /img/bit-manipulation.png
date: 2020-03-29T17:07:07.769Z
published: true
style: default
tags:
  - FFmpeg
  - .mov
  - .mp4
  - commandline
---
Hey Guys, Trust you're doing well today.

Today, I'd like to share how I reduce and convert a .mov (Apple Quicktime Video) to .mp4 with FFmpeg with a single command. 

Before we move on, let's talk about FFmpeg.

FFmpeg is a complete, cross-platform solution to record, convert and stream audio and video.

As written above, we can use FFmpeg for many things, but in this article, I will focus on how we can use FFmpeg to reduce and convert a large file .mov file to .mp4

There are many tools online, but why load any of those when you can just run FFmpeg from your terminal! 

Let's download FFmpeg and do the Magic

Go here and download FFmpeg of your O.S <https://www.ffmpeg.org/download.html>

Use the below command to check if FFmpeg install correctly

```
ffmpeg -version
```

If everything works as expected you should get something like this

```
FFmpeg version 4.2.2 Copyright (c) 2000-2019 the FFmpeg developers
```

```
built with Apple clang version 11.0.0 (clang-1100.0.33.17)
```

To convert and reduce the .mov file

change into the directory where we have the .mov and run the below command

```
FFmpeg -i oldvid.mov -vcodec h264 -acodec mp2 newvid.mp4
```

If everything went well you should have a new .mp4 file with the name newvid.mp4

I will be explaining how the above command works in my next article. 

Until next time, Peace
