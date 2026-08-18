[![Netlify Status](https://api.netlify.com/api/v1/badges/2795d1cf-4f0b-4200-8b21-77990c83d562/deploy-status)](https://app.netlify.com/sites/yusadolat/deploys)

# Yusuf Adeyemo — Personal Site

Gatsby 5 site (blog, portfolio, certifications, tech talks) with a Decap CMS
admin at `/admin`. Deployed to S3 + CloudFront from `master`.

## Requirements

- **Node 22 LTS** — pinned in `.node-version` / `.nvmrc`. Node 18 is past
  end-of-life; the build is verified on Node 22.
- **Yarn 1.x** — the repo has a `yarn.lock`, so use Yarn, not npm. Mixing the
  two produces a different dependency tree than CI builds.

```sh
nvm use          # or: fnm use / asdf install
node -v          # expect v22.x
```

You do **not** need a global `gatsby-cli`. Every command below runs the local
Gatsby via `yarn`.

## Local setup

```sh
yarn install
cp .env.development.sample .env.development   # optional, see below
yarn develop
```

- Site: <http://localhost:8000>
- GraphQL explorer: <http://localhost:8000/___graphql>
- CMS: <http://localhost:8000/admin/>

The first `yarn install` takes a few minutes (Gatsby pulls native `sharp` and
`lmdb` binaries) and prints a wall of peer-dependency warnings from
`decap-cms-app`. Both are expected and harmless.

### Environment variables

`.env.development` is optional. It holds a GitHub personal access token used by
the homepage "status / commits" widget:

| Variable | Purpose |
| --- | --- |
| `GATSBY_GITHUB_API_TOKEN` | Classic PAT with `read:user` scope, used client-side by `src/utils/requests/githubInfo.js` to fetch live GitHub status and contribution count. |
| `GITHUB_API_TOKEN` | Same token, for any build-time usage. |

Without a token the site still runs — `src/hooks/useInfo.js` falls back to
hardcoded values and the browser console logs one fetch error. Note that
`GATSBY_`-prefixed vars are **inlined into the client bundle**, so only ever put
a low-scope read-only token here.

`.env.development` is gitignored. Do not commit it.

### Editing content via the CMS locally

`static/admin/config.yml` sets `local_backend: true`, so `/admin` talks to a
local proxy rather than GitHub. In a second terminal:

```sh
npx decap-server
```

Then open <http://localhost:8000/admin/>. Without that proxy running, the admin
UI will fail to load content. Content lives in `src/pages/posts`,
`src/pages/projects`, and `src/pages/tech-talks` as Markdown.

## Commands

| Command | What it does |
| --- | --- |
| `yarn develop` | Dev server with hot reload on :8000 |
| `yarn build` | Production build into `public/` (~70s warm, ~2 min cold) |
| `yarn serve` | Serve the built `public/` on :9000 — use this to verify a build, not `yarn develop` |
| `yarn clean` | Wipe `.cache/` and `public/` |
| `yarn format` | Prettier over `src/**/*.js` |
| `yarn deploy` | Sync `public/` to S3 and invalidate CloudFront (needs AWS creds) |

## Troubleshooting

**Stale or bizarre GraphQL / build errors after pulling.** Gatsby's cache does
not always survive dependency changes:

```sh
yarn clean && yarn develop
```

**`Something went wrong installing the "sharp" module`.** Native binaries were
built against a different Node version — usually from switching Node without
reinstalling:

```sh
rm -rf node_modules && yarn install
```

**Port 8000 already in use.** `yarn develop -- -p 8001`.

**GraphQL "field does not exist" after adding frontmatter.** New frontmatter
fields need to exist on at least one Markdown file, or be declared in
`createSchemaCustomization` in `gatsby-node.js`. `schema.gql` is a committed
snapshot written by `gatsby-plugin-schema-snapshot`; delete it and rebuild if it
drifts.

**Sass deprecation warnings.** Silenced in `gatsby-config.js` — they come from
`react-awesome-button`'s vendored stylesheets and from `sass-loader`'s legacy
API, not from this repo's code.

**`Browsers data (caniuse-lite) is N months old`.** Cosmetic, but refresh it
with `npx update-browserslist-db@latest` and commit the `yarn.lock` change.

## Known stale pieces

- `gatsby-plugin-google-analytics` is configured with a Universal Analytics ID
  (`UA-129353757-1`). UA stopped collecting data in July 2023, so this plugin
  currently ships a dead tracking script. Migrating means swapping in
  `gatsby-plugin-google-gtag` with a GA4 `G-XXXXXXX` measurement ID.
- `.circleci/config.yml` pins `node:12.22` and runs `npm install`; it cannot
  build this project. GitHub Actions (`.github/workflows/main.yml`) is the
  live pipeline.
- `buildspec.yaml` targets a different project (`s3://app-aws-portal`, a
  `./build` directory this site never produces) and is unused.
- The build still logs ~18 `[gatsby-plugin-image] Missing image prop` warnings.
  These are post header images: `src/templates/Post/Post.js` renders an `image`
  prop that `blogTemplate.js` never queries, so posts whose frontmatter `style`
  is not `default` render an empty header. Fixing it means resolving the
  frontmatter `thumbnail` path to a `File` node (a `MarkdownRemarkFrontmatter`
  field resolver in `gatsby-node.js`) and querying `childImageSharp` from it.
