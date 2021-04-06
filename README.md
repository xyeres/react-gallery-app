# How to use this app:
This app requires that you supply it with a config file to pass flickr.com API credentials

Touch config.js at ./src in the following format:
```
const FLICKR = {
    "key": "your-key-here",
    "secret": "your-secret-here"
}

export default FLICKR;
```
- Download source
- Create your config.js
- npm start
- Have fun

I have implemented the exceeds expectations features including:
- Browser navigation works for the search route
- 404 error
- Loading Indicator
- No Matches Message

Bonus feature: 
- Users can click on a thumbnail to see a larger version of the photo