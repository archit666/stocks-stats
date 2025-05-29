**Setup Instructions**

  - Node.js (version 18 or above)
  - npm or yarn package manager
  - git clone https://github.com/archit666/stocks-stats
  - cd stocks-data-app
  - cd frontend
  - npm install or yarn install
  - npm run dev or yarn dev

**Frontend Architecture**

- src/components/StockStats.tsx: A reusable component that displays a label and its corresponding statistic or value.

- src/components/StockStats.test.tsx : Unit test file for the StockStats component. Ensures the component correctly displays the provided label and value.

- src/containers/StockDetails/index.tsx: Main container component that handles the overall functionality for displaying stock details.

- src/containers/StockDetails/constants.ts: Contains constant values used specifically within the StockDetails container.

- src/App.tsx: The root React component of the application. Responsible for rendering the StockDetails component.

- src/main.tsx: The entry point of the React application. Mounts the root component (App.tsx) into the DOM.

**Technology Stack**
  - React: Frontend framework with useState hook
  - Vite: Build tool and development server
  - Tailwind CSS: Utility-first CSS framework
  - TypeScript: Type safety and better development experience

**Assumptions and Limitations**
  - Mock Data: The app currently uses static mock data for a stock. There is no backend or live data fetching as scraping was not possible.
  - Search Functionality: The ISIN input and button are implemented, but the functionality for search is pending as function code that runs      on clicking the button is commented for now.
  
