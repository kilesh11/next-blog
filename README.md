# A statically generated blog example using Next.js and Strapi

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Strapi](https://strapi.io/) as the data source.


## Tech invloved

- [Nextjs](https://nextjs.org/)
- [Strapi](https://strapi.io/)
- [Vercel](https://vercel.com/)

## Configuration
### Set up environment variables

While the Strapi server is running, open a new terminal and `cd` into the Next.js app directory you created earlier.

```
cd next-blog
```

Create `.env.local` (which will be ignored by Git):

```bash
touch .env.local
```

Then set each variable on `.env.local`:

- `NEXT_PUBLIC_STRAPI_API_URL` should be set as `http://localhost:1337` (no trailing slash).

### Run Next.js 

Make sure that the local Strapi server is still running at http://localhost:1337. Inside the Next.js app directory, run:

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! You should see the two posts you’ve created. If it doesn't work, make sure that:
