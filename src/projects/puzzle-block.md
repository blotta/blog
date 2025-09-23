---
title: "Puzzle Block"
permalink: "/projects/{{ title | slugify }}/index.html"
layout: project
image: "/assets/images/puzzle-block/gameplay.gif"
tags: project
categories:
- "cpp"
- "gamedev"
- "sdl"
links:
- name: Play (Web)
  url: https://lblotta.itch.io/puzzle-block
- name: Source Code
  url: https://github.com/blotta/puzzle-block
priority: 99
---

# The Game

This is a [Bloxorz](https://www.crazygames.com.br/jogos/bloxorz)-inspired game where you roll a block to get from A to B.

Beat all levels and create your own with the built-in editor.


# The Tech

I made this project with the goal of developing a simple C++ 2D game engine from scratch.
The features were added as needed and specifically for this game, although the code could easily be refactored to be used on another game.

The engine uses only SDL2 libraries. Any other features were developed within the engine.

Features:
- Asset manager
    - Fonts
    - Textures
    - SFX/Music
- Input manager
- Scene manager
- Animation system
    - Templated properties
    - Key frames
    - Easing functions support
- Unity-like Monobehaviour system for entities and components
- Particle System
- Camera system
- GUI system
    - Flexbox-like layouts
    - Custom Themes
- Desktop and Web (Emscripten) exports



![lvl5](/assets/images/puzzle-block/lvl5.png)

![levelselect](/assets/images/puzzle-block/lvlselect.png)

Editor:
![editor](/assets/images/puzzle-block/editor.png)