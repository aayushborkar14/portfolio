# Portfolio
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Development setup
## GraphCMS (for blog)
Sign up on [Hygraph](https://hygraph.com/) and get a Public Content API Key. The Schema is described as follows:
![Schema](readme-assets/Schema.png)
## SendGrid (for email in contact form)
Sign up on [SendGrid](https://app.sendgrid.com/) and get an [API Key](https://app.sendgrid.com/guide/integrate/langs/nodejs)
## Dotenv
Create a `.env.local` file, and define the variables `HYGRAPH_ENDPOINT`, `SENDGRID_API_KEY`, and `EMAIL`

## Running the website
First, run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


