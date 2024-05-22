# Danny's curated list of tech

A curated list of tech that I use, built with Astro

## Tech Stack

- [Astro](https://astro.build) - SSG/SSR website framework
- [TailwindCSS](https://tailwindui.com/) - CSS framework
- [React](https://react.dev/) - Component-based UI framework for JS
- [Shadcn](https://ui.shadcn.com/) - Accessible, customisable and open-source component library
- [Nano Stores](https://github.com/nanostores/nanostores) - Tiny state manager for various frameworks
- [Radix Icons](https://www.radix-ui.com/icons) - Icon set

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── Post images
│   ├── components/
│   │   └── Card.astro
│   ├── content/posts
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 📋 TODOs

- [x] Scaffold UI
- [x] Implement Dark and Light Mode via Edward Kim article (add React and Shadcn Dropdown)
- [x] Prettier-astro and prettier-tailwind packages
- [x] Scaffold Navbar and Footer
- [x] Add mdx and create test post
- [ ] Create card components for homepage
- [x] List all posts as Cards on homepage
- [x] Optimise Images
- [x] Add Tailwind typography for prose
- [x] Add rest of tech posts
- [ ] Deploy to Vercel

### Non-MVP Todo List

- [ ] Add multi-language, maybe I'll write the posts in Japanese
- [x] Add categories you can filter the posts by in the navbar
