---
title: "Sample Draft Series - Part 1"
date: 2018-12-07T16:16:25-02:00
draft: true
author: "Lucas"
tags:
  - haxe
series:
  - sample-series
---

In this series, we will make a hello world program in Haxe.

```haxe
class Main {
    static public function main():Void {
        trace("Hello World");
    }
}
```

Execute it with `haxe --main Main --interp`.