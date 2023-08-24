
# Prompty AI Prompts

Promptly is an open-source AI prompting tool for the modern world to discover, create and share creative AI prompts. Made with NextJS, NextAuth & MongoDB


## Features

- User Management with NextAuth
- User profile page
- Add, edit & delete prompts
- Google Sign in


## Screenshots

![App Screenshot](https://github.com/c76w/promptly/blob/main/home_screen.png)

![App Screenshot](https://github.com/c76w/promptly/blob/main/create_prompt.png)

![App Screenshot](https://github.com/c76w/promptly/blob/main/profile_page.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_ID`

`GOOGLE_CLIENT_SECRET`

`MONGODB_URI`

`NEXTAUTH_URL`

`NEXTAUTH_URL_INTERNAL`

`NEXTAUTH_SECRET`


## Deployment

First, clone the repositiry and then run: 

```bash
npm install
# or
yarn install
# or
pnpm install
```

Secondly, make sure you have added your credentials to the .env file

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

