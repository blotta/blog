---
title: "Sample Draft Series - Part 2"
date: 2020-08-05T15:29:23-03:00
draft: true
toc: false
images:
tags:
  - haxe
series:
  - sample-series
---

In this series, we will make a function in Haxe.

```haxe
class Main {
    static public function sayHello():Void {
        trace("Hello World");
    }

    static public function main():Void {
        sayHello();
    }
}
```