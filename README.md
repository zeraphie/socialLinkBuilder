# socialLinkBuilder
A jQuery Plugin that builds the social links for you

## Usage
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder({
        url: win.location.href,
        title: 'The title of the page',
        text: 'Just some text to add to the tweet',
        fb: true,
        tw: true,
        li: true,
        gp: true
    });
});
```
