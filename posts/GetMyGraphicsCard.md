---
title: 'Build Graphics Card Comparison Service - Development Log:1'
date: '2022-12-15'
---

I had planned to make a stock market app but the business logics were way too complex for a solo developer to implement all of them,  
and the free API for retrieving stock market data is too limited to implement a real-time app.

Meanwhile, I bought a new desktop recently but I still haven't bought a graphics card for my PC because the market prices are way too expensive even though the crypto boom is about to end. And although there are many price comparison sites available, nothing provides a kind of alarm service for a customer when the lowest price for the product of interest is available. So I decided to make a price comparison web service, specifically targeting the graphics cards out in the market.

Requirements:

- Users should be able to add graphics cards to their items of interest list.
- When the lowest price of a product in their list becomes available, the app should send a web push notification  
  to the customer
- The service should support at least 10 graphics card chipsets to be searched.

I was thinking about implementing a web crawler to gather price information around the web, but most e-commerce sites prevent  
web scraping although web scraping is not illegal, and I don't want to be in a possible legal dispute. The initial backend architecture diagrams for the app is below. ![GetMyGraphicsCard](../images/markdown/GetMyGraphicsCard.drawio.png) But the Python crawler would be removed in the final production.

So I decided to use OPEN APIs from the e-commerce sites to gather their product info and make one of the server runs scheduled tasks, calling external APIs every 10 minutes. And the executing web server should save the API responses as JSON to the MongoDB database.

Those are the basic blueprints for the app. I would try to post the development procedures to the blog as frequently as possible.
