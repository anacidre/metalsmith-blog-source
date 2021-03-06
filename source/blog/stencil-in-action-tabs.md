---
title: "Stencil in Action: Tabs"
description: Try Stencil by practical implementation of such commonly used component as tabs.
ogimage: images/posts/stencil-in-action-tabs/stencil-in-action-tabs-og.jpg
tumb: /images/posts/stencil-in-action-tabs/stencil-in-action-tabs
created: 2018-01-15
draft: true
categories:
- Stencil
- Web Components
---
Stencil is an impressive compiler for Web Components with superpowers. It got the best modern JavaScript features. Stencil is still pretty new technology, and in my opinion, the best way to try something new is to make hands dirty. Today we will implement simple tabs component with it.

I think that people should stop creating "To Do" applications to show new technology features. Such examples usually have nothing in common with real-life development. Like Redux examples with counters, they have nothing related to business tasks. What I'm going to do instead during this article is to build some reusable component. One of such we're probably using in a bunch of work projects - tabs.

## Tabs design
Before we start to write any code, let think about tabs component in general. What is should do? So our element should have one or more tab and content area. Each tab should have associated content with it when a tab is selected content area should show related content. We should have the ability to define which tab is selected by default if not first one will be enabled. Pretty simple, isn't it?

After basic functionality done, we can add some fancy transitions on content switches. Then like any good developer, we will make tabs accessible following basic a11y guidelines.

Let me summarise what the main features we'll try to achieve. The primary goals for the implementation of tabs that I want to care about:
- Simple public API
- Easy to style
- Ability to insert any content
- Nice defaults that could be overwritten

Now our tabs specification seems to be clear. So let's start 🏁.

## Setup project
Unfortunately, when this article has been written, Stencil still have no official or community CLI. The only way to create some start point is to use one of the starter kits. We will use official "Stencil Starter Kit" by the Ionic team.

First of all, we need to clone the repository:

```bash
git clone https://github.com/ionic-team/stencil-app-starter st-tabs
```

After cloning complete, we need to go inside `st-tabs` directory and install all dependencies. Personally, I prefer to use `yarn` to keep dependencies versions strict across environments and team, but you can use `npm` if you prefer (I'll provide both commands examples). *Note, that if you're using Linux or MacOS operating systems, it might need to run commands as superuser using `sudo`.*

```bash
cd st-tabs

# install with yarn
yarn
# start local server
yarn start

# install with npm
npm install
# start local server
npm start
```

