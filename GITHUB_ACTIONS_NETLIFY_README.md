# GitHub Actions → Netlify deployment

This update lets GitHub Actions build the Astro site and deploy the built `dist/` folder to Netlify.

## Files added

```txt
.github/workflows/deploy-netlify.yml
netlify.toml
```

## GitHub secrets required

In GitHub, go to:

```txt
Repo → Settings → Secrets and variables → Actions → New repository secret
```

Add:

```txt
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
```

## Netlify token

Create a Netlify personal access token from your Netlify user settings, then save it as:

```txt
NETLIFY_AUTH_TOKEN
```

## Netlify site ID

Find the site ID in Netlify under:

```txt
Site settings → General → Site details → Site ID
```

Save it as:

```txt
NETLIFY_SITE_ID
```

## How it works

On every push to `main`:

```txt
npm ci
npm run build
npx --yes netlify-cli deploy --prod --dir=dist
```

This means people can collaborate through GitHub without needing Netlify team access.

## Notes

This workflow assumes:
- your production branch is `main`
- your Astro build output is `dist`
- your project supports Node 22
