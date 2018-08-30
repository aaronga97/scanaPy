# React Webpack Typescript Starter
Minimal starter kit with hot module replacement (HMR) for rapid development.
  
## Installation
1. Clone/download repo
2. `yarn`

## Usage
**Development**

You have to have node, npm and yarn installed to use this project, then...

`npm run start-dev`

* Build app continously (HMR enabled)
* App served @ `http://localhost:8080` 

**Production**

`npm run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/` 
`npm run test` | Run tests
`npm run lint` | Run Typescript and SASS linter
`npm run lint:ts` | Run Typescript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)

## Other stuff:
1. Use vscode for development
2. Install the tslint and eslint extensions