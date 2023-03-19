### IEX_Cloud_API_Dashboard_Assignment

## GOAL

The goal of this assignment was to create a responsive dashboard that displays the current price, change in price, and the percentage change using a stock API from IEX Cloud (iexcloud.io).

# HOW TO RUN THE APPLICATION

To run the application, you need to clone the repository into your local machine and run the following command: npm install to install the node_modules, followed by npm run dev to start the server and display the dashboard on the browser.

# DOCUMENTATION

The app is divided into several components, including the NavBar, Sidebar, and a Dashboard Layout that has four grid Layouts. The grid layout displays the data obtained from the API with parameters like open price, close price, change in price, and percentage change.
Axios was used to fetch the data from the IEX Cloud API and display it on the dashboard.

To get the change in price, this simple arithmetic was done: close_price - open_price.
The percentage change was calculated by dividing the change_in_price by open_price and multiplying by 100, i.e. percentage = change_price / open_price \* 100.

# CHALLENGES

I noticed that the API, with this endpoint: "https://api.iex.cloud/v1/data/CORE/HISTORICAL_PRICES/TWTR?token={API_KEY}" returns an array of a single object, and I couldn't find an API with a stock symbol that was free.
