<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<p align="center">
  <a href="https://www.tailwindcss.com">
   <img alt="Tailwind CSS" src="https://tailwindcss.com/img/tailwind-twitter-square.png" width="60" />
  
    
  </a>
</p>
<h1 align="center">
  Gatsby Netlify Serverless Weather
</h1>

This project is an example of using Netlify function to take advantage of serverless access third party APIs. Viewable at [![gatsby-weather.netlify.app]](https://gatsby-weather.netlify.app/)


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-gatsby-weather https://github.com/truehello/gatsby-netlify-weather
    ```

2.  **Host it on Netlify**
    You'll need to get an API ket for [![OpenWeatherMap API]](https://openweathermap.org/) and make sure that it gets added to your environmental 
    variables for your Netlify site. 


3. **Set up Netlify Dev for local dev environment**

    We can use Netlify's super simple serverless functions feature to query the APIs neceassy to return the weather data. Using Netlify Dev we can
    also test serverless functions locally, greatly speeding up development time. The best part is that it is super simple to set up. 

   ```shell
    #install netlify cli tool
   npm i -g netlify-cli

   #initialize the project in netlify
   netlify init

   #run the netilfy dev enviroument. Allows for local testing of serverless function
   netlify dev
   ```




## 💫 Sources

[IP API](https://ip-api.com/) Simple Geolocation API

[OpenWeatherMap API](https://openweathermap.org/) Weather API

[![Matt Gregg]](https://medium.com/@mattdgregg/netlify-dev-serverless-functions-mailchimp-subscribe-form-tutorial-28ffaa51ba99) Medium Article - Netlify Dev
Serverless Functions Mailchimp Form Tutorial

[![Kent C. Dodds]](https://kentcdodds.com/blog/super-simple-start-to-serverless) A Super Simple Start To Serverless




<!-- AUTO-GENERATED-CONTENT:END -->
