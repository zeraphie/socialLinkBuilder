# socialLinkBuilder
A jQuery Plugin that builds the social links for you

## Install
Install with [bower](http://bower.io/#install-bower)
```bash
bower install social-link-builder
```

## Usage

### Default
Adds all of the social icons, without email and telephone.
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder();
});
```

### Removing an icon
Currently all the supported social medias are:
* facebook - Facebook
* twitter  - Twitter
* linkedin - LinkedIn
* gplus    - Google Plus

To remove the icon, use the label for the social media and set the isUsed
property to false as below.
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder({
        facebook: {
            isUsed: false
        }
    });
});
```

### Extra Links
Email, Telephone and Print links are disabled by default, but if you would like to use them,
set the isUsed property to true AND add the mailto and/or tel properties respectively
as shown below.
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder({
        print: {
            isUsed: true
        },
        email: {
            isUsed: true,
            mailto: 'example@example.example'
        },
        tel: {
            isUsed: true,
            tel: '0123456789'
        }
    });
});
```

### The svg property
All the media services as well as the email and telephone links have an svg property
which is appended to the link. This means that you can override the svg with a custom
svg or some text if you'd like.

Note: This **cannot** be empty if you want to override it, it will default to the svg
```javascript
$(document).ready(function(){
    $('.social').socialLinkBuilder({
        facebook: {
            svg: 'Custom Text'
        }
    });
});
```