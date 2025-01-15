# Foundations of Technical Leadership

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This site curates and creates resources aimed at helping software
engineering leaders become more successful with a focus on foundational skills
in working with technology and with people.

We combine the best resources in both of these areas with practical exercises,
guides and explanatory material. We aim to follow best practices for documentation
such as [Diátaxis](https://diataxis.fr/) and fold in active learning techniques
to ensure the reader can best retain the material.

## 🚀 Project Structure

This project uses the standard Astro + Starlight project structure. Most content
can be found in `src/content/docs`. We have three major categories of content:
- `src/content/docs/people` focuses on people leadership fundamentals in
  software engineering roles.
- `src/content/docs/tech` focuses on technical fundamentals .
- `src/content/docs/resources` contains summaries and pointers to key resources around the web.

## 🧞 Developing

You'll need a reasonably modern NodeJS environment and either `npm` or `pnpm`
to manage dependencies and workflow. We recommend using [`pkgx`](https://pkgx.sh/)
to manage all of these aspects.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |