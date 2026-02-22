---
title: A Vue/Nuxt Developer's Honest Take on Learning React & Next.js
description: After years of building with Vue and Nuxt, I decided to finally learn React and Next.js. Here's what surprised me, what frustrated me, and how the two ecosystems compare from my perspective.
date: 2025-02-20
image: /blog/from-vue-nuxt-to-react-next.jpg
minRead: 8
author:
  name: Bùi Nguyên Đạt
  avatar:
    src: dat.jpg
    alt: Bùi Nguyên Đạt
---

I've been working with Vue.js and Nuxt for a few years now — it's the ecosystem I grew up in as a developer. Pinia for state management, Vue-router for navigation, Nuxt UI for components, and Nuxt's file-based routing to tie it all together. It felt natural, almost like second nature.

Then I decided to branch out and learn React and Next.js. Partly out of curiosity, partly because the job market clearly demands it. Here's my honest take after going through the learning curve.

## The Mental Model Shift

The first thing that hit me was how **different the mental model is**. In Vue, you have a clear separation: `<template>`, `<script setup>`, and `<style>`. Everything is neatly organized in one `.vue` file. The template is HTML-first, and it reads naturally.

React is JSX — your UI lives inside JavaScript. At first this felt backwards to me. Writing `className` instead of `class`, self-closing every tag, and having logic mixed directly into markup felt messy compared to what I knew. But after a few weeks, I started to appreciate how JSX is "just JavaScript". The mental overhead of switching between template syntax and script logic disappears — it's all one language.

**Vue wins** here for readability and onboarding newcomers. **React wins** for flexibility once you're comfortable with JavaScript.

## Reactivity: Refs vs useState

In Vue 3 with `<script setup>`, reactivity is elegant:

```ts
const count = ref(0);
count.value++;
```

In React, the same thing looks like:

```ts
const [count, setCount] = useState(0);
setCount(count + 1);
```

The two-variable pattern (`count` + `setCount`) took some getting used to. In Vue, you mutate the ref directly — it feels more intuitive. React's immutable state model is more explicit, which can be a good thing for predictability but adds boilerplate.

The bigger difference comes with **derived state**. Vue's `computed()` is straightforward:

```ts
const double = computed(() => count.value * 2);
```

In React, you use `useMemo` for the same thing, and you have to manually declare dependencies:

```ts
const double = useMemo(() => count * 2, [count]);
```

I keep forgetting the dependency array. Vue just handles this automatically. Honestly, Vue's reactivity system is one of its strongest features — React's requires more mental overhead.

## State Management: Pinia vs Context / Zustand

After Vue's Pinia, React's built-in state management (Context API) felt verbose and cumbersome for anything non-trivial. Defining a context, wrapping components in providers, and consuming values with `useContext` — it works, but it's a lot of ceremony.

Most serious React projects use third-party libraries like Zustand or Redux Toolkit. Zustand in particular feels very clean and actually reminds me of Pinia in its simplicity. If you're coming from Pinia-land, Zustand will feel familiar.

Interestingly, Pinia's design was partly inspired by early experiments in the React ecosystem. The ideas travel both ways.

## File-based Routing: Nuxt vs Next.js

This is where Next.js really shines and felt most familiar to me. Both Nuxt and Next.js use file-based routing — create a file, get a route. The App Router in Next.js (introduced in v13) with its `page.tsx`, `layout.tsx`, and `loading.tsx` conventions is very similar to how Nuxt organizes pages and layouts.

One key difference: Next.js leans heavily on **React Server Components (RSC)** — components that render on the server and send HTML to the client with zero JS by default. Nuxt has SSR too (`useFetch`, `useAsyncData`), but the RSC model in Next.js is more granular. You opt components into the client explicitly with `"use client"`.

At first I found `"use client"` annotations annoying. But they do force you to think more carefully about what actually needs to run in the browser — which is good for performance.

## What I Miss from Vue/Nuxt

Being honest here — there are things I genuinely miss:

- **`v-model`** on custom components is so clean compared to manually passing `value` and `onChange` in React
- **`v-for` and `v-if`** directives read naturally in templates; React's `{array.map(...)}` and ternary/`&&` patterns work fine but are noisier
- **Nuxt UI** — it's an amazing component library that's tightly integrated with the framework. The React ecosystem has great options (shadcn/ui, Radix UI) but they require more assembly
- **Automatic imports** in Nuxt — no import statements for composables, components, or utils. In React/Next.js, you import everything manually

## What React/Next Does Better

- **Ecosystem size** — the React ecosystem is massive. More libraries, more tutorials, more Stack Overflow answers
- **Job market** — React is still the dominant choice in most companies
- **React Server Components** — genuinely powerful for performance when used well
- **Flexibility** — React is unopinionated, so you can structure your project however you want (which is also a curse)

## Final Thoughts

Learning React and Next.js as a Vue/Nuxt developer is very doable — the concepts are the same, just expressed differently. The hardest part isn't learning the syntax; it's unlearning the instincts you built up in another framework.

I still prefer Vue/Nuxt for personal projects. The developer experience is more polished and the conventions feel more cohesive. But I now feel comfortable picking up a React or Next.js codebase, and I understand _why_ teams choose one over the other.

The best skill is being able to work in both.
