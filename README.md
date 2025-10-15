# alx-graphql-0x01
# Objectives: 

Project: alx-rick-and-morty-app

Objective
---------
Set up a minimal Next.js + TypeScript project scaffold for the Rick and Morty app that includes Apollo Client wiring and a GraphQL query. The grader will check for the presence and content of specific files in the `alx-rick-and-morty-app` directory.

Required files (exact paths)
---------------------------
The grader expects the following files to exist with the shown paths (contents should match the code snippets in each file):

- `alx-rick-and-morty-app/graphql/apolloClient.ts`
- `alx-rick-and-morty-app/graphql/queries.ts`
- `alx-rick-and-morty-app/pages/_app.tsx`

Quick verification (what I checked)
----------------------------------
I verified these files exist in the `alx-rick-and-morty-app` folder and contain the Apollo client, the `GET_EPISODES` GraphQL query, and the Next.js `_app.tsx` wrapper that uses `ApolloProvider`.

How to run locally
-------------------
1. Change into the project folder:

```powershell
cd alx-rick-and-morty-app
```

2. Install dependencies (if not installed already):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open the app in your browser at http://localhost:3000

Notes
-----
- Do NOT commit `node_modules` or build outputs such as `.next/`. They should be in `.gitignore`.
- If the grader requires additional configuration (strict `tsconfig.json`, ESLint rules, or Tailwind setup), I can add those exact files on request.
