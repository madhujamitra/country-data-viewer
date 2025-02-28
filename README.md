## Project Overview


This Next.js 13 project displays a list of countries and detailed info for each. It uses SCSS (with rem units) for a responsive layout and a custom grid system.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key Decisions

- Styling & Layout:

  - SCSS is used with rem-based sizes for scalability.
  -  A custom grid layout is implemented; on mobile/tablet screens, containers stack vertically.

- Color Choice:

   - $primary-back: #2D124c is used as the primary background color since the Figma design didn’t provide one.

- Authentication:

    - The login system is currently mocked with the following credentials:
Username: admin@example.com
Password: password123

- Data Handling:

     - Country data is fetched via API services and processed to display flag, population, etc.

- Trade-offs
     - Custom SCSS: Provides flexibility but requires more manual media query management compared to utility-first frameworks.
     - Mock Login: Suitable for prototyping; will need a proper auth system for production.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
