**Setup Instructions**

  - Node.js
  - npm or yarn package manager
  - git clone https://github.com/archit666/stocks-stats
  - cd stocks-data-app
  - cd frontend
  - npm install or yarn install
  - npm run dev or yarn dev

**Frontend Architecture**

 src/
├── components/
│     StockStats.tsx - component which shows the label and stats
|     StockStats.test.ts - test file for the component to check if it correctly shows label and value
├── containers/
│     StockDetails/
        index.tsx - file which has the entire functionality   
        constants.ts 
├── App.tsx - renders stockDetails file (root React component)
├── main.tsx

**Technology Stack**
  React - Frontend framework with useState hook
  Vite - Build tool and development server
  Tailwind CSS - Utility-first CSS framework
  TypeScript - Type safety and better development experience

**Assumptions and Limitations**
  - Mock Data: The app currently uses static mock data for a stock. There is no backend or live data fetching as scraping was not possible.
  - Search Functionality: The ISIN input and button are implemented, but the functionality for search is pending as function code that runs      on clicking the button is commented for now.
  
