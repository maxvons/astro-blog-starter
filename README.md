# 🚀 Astro Blog

A simple Astro blog template with sensible defaults, DX improvements, and instructions to get a new blog up and running as quickly as possible.

The template includes detailed instructions for getting started, customizing things to your liking, and eventually deploying the blog.

## Getting started

To get started with this template, you need to create your own repository and clone it.

### Creating your own repository

This repository has been initialized as a template repository, so to create your own repository and Astro blog you can simply follow the guide below:

1. Press the "Use this template" button in the top right corner and choose "Create a new repository".
2. In the "Create a new repository" menu, choose a name and optional description for your new blog, and choose if you want to make it public or private.
3. Clone the repo as usual and get started!

### Installing dependencies and starting the blog

For the purposes of this document, I will assume that you use `npm`.

First install the required dependencies:

```sh
npm install
```

Then start and run the blog locally:

```sh
npm run dev
```

This will start the local Astro dev server at `localhost:4321`.

To view the blog in a browser, simply click the link in the terminal or input `localhost:4321` in the address field of your browser of choice.

## Features

### Supports light and dark mode

The template includes support for both light and dark mode based on user preferences through the `prefers-color-scheme` CSS media feature. All color customization options have been defined as CSS variables in `src/styles/global.css`, so you can just update these to match your preferred color scheme.

### Support for variable font files

### Automatic formatting

`prettier` has been added as a dev dependency for automatic formatting support. You can format all the applicable files in the project using the following command:

```sh
npm run format
```

If you prefer to check which files are unformatted and formatting them yourself, you can run:

```sh
npm run format-check
```

If you use VS Code, I strongly suggest that you install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add a local `.vscode` folder with a `settings.json` file with the following contents:

```json
{
  "editor.formatOnSave": true
}
```

This will ensure that your files are formatted as you work on them when saving.

In addition to the prettier dependency, I have added `husky` with a commit hook to support formatting staged files when committing. This ensures that only the files that were changed and are part of the commit are formatted before committing and eventually pushing the changes. This way you introduce less unformatted files in your codebase if you forget to run the formatting scripts before committing and pushing your changes.

If you want, you can of course remove either of these dependencies. This is described in more detail in the "Misc. section".

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

I have made the choice to place local font files in `public/fonts` and images in `public/images`, but you can change this to your preferences.

## Commands

Commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run format`          | Format all files using Prettier                  |
| `npm run format-check`    | Check the formatting of all files using Prettier |

## Misc

### Removing formatting dependencies

If you for some reason don't want to have automatic formatting as part of your local development workflow or use something else for formatting and potentially linting, you can remove the formatting related dependencies.

#### Removing Prettier

To remove the Prettier dependency, follow the steps below:

1. Run `npm uninstall prettier prettier-plugin-astro`
2. Delete the `.prettierrc.js` file
3. Delete the `format` and `format-check` scripts from `package.json`
4. Delete the contents of the `pre-commit` husky file

#### Removing Husky

To remove the Husky dependency, follow the steps below:

1. Run `npm uninstall husky`
2. Delete the `.husky` folder
3. Delete the `prepare` script from `package.json`

## Credit

The starting point for the template was created with the `create astro` setup wizard and the [blog template](https://astro.build/themes/details/blog/) that you can choose during configuration there.
