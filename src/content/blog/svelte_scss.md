---
title: Using SCSS with Svelte
tags: [svelte, js, scss]
created: 2025-02-06
updated:
---

SCSS is a popular CSS extension language that can make it easier to write styles for your svelte webapp. Svelte is
capable of supporting SCSS (as well as other CSS extensions), but some configuration is required.

First, install the sass preprocessor:

```bash
$ npm install --save-dev sass
```

Next, you need to use `vitePreprocess` from `vite-plugin-svelte`. This package should already be installed so you just
need to update your configuration:

### /svelte.config.js
```js
import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"  // [!code ++]

import path from "path"

const config = {
    kit: {
        adapter: adapter()
    },
    preprocess: [vitePreprocess()]                             // [!code ++]
}

export default config
```

Now you can use SCSS in svelte components by specifying `lang="scss"` for your style tags:

### /src/routes/+page.svelte
```svelte
<style lang="scss">
  ...
</style>
```

That's it! Enabling SCSS support in your svelte components is easy. You can also use the same method to enable support
for other CSS extension languages.
