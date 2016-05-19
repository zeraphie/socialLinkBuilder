# socialLinkBuilder
A jQuery Plugin that builds the social links for you

## Install
Install with [bower](http://bower.io/#install-bower)
```bash
bower install social-link-builder
```

## Usage
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder({
        url: win.location.href,
        title: 'The title of the page', // Defaults to first h1 on the page
        text: 'Just some text to add to the tweet', // Defaults to excerpt of first paragraph on the page
        fb: true, // Facebook
        tw: true, // Twitter
        li: true, // LinkedIn
        gp: true  // Google Plus
    });
});
```
