/*!
 * SocialLinksBuilder v1.0.0
 * A jQuery Plugin that builds the social links for you
 * also includes an email and telephone link
 *
 * Licensed MIT for open source use
 *
 * Copyright 2016 Tony Lopez
 */
$.fn.socialLinkBuilder = function(opts){
    var win = window;
    var bod = $('body');
    var soc = $(this);

    function excerptify(text, length){
        length = length || 140;
        var punc = ['.','!','?',',',';',':'];
        if(text.length > length) {
            var spaceAt = length;
            if(text.indexOf(' ') > -1){
                while(spaceAt--){
                    if(text.charAt(spaceAt) == ' ') break;
                }
            }
            var excerpt = text.substring(0, spaceAt);
            for (var i = punc.length - 1; i >= 0; i--) {
                if(excerpt.slice(-1) == punc[i]){
                    excerpt = excerpt.slice(0, -1);
                }
            }
            return excerpt.trim();
        } else {
            return text;
        }
    }

    opts = $.extend({
        url: win.location.href,
        title: bod.find('h1').filter( function(){
                  return ($.trim($(this).text()).length);
              }).first().text() || '',
        text: excerptify(bod.find('p').filter( function(){
                  return ($.trim($(this).text()).length);
              }).first().text()) || '',
        facebook: {
            isUsed: true
        },
        twitter: {
            isUsed: true
        },
        linkedin: {
            isUsed: true,
        },
        gplus: {
            isUsed: true
        },
        print: {
            isUsed: false,
        },
        email: {
            isUsed: false,
            mailto: '',
        },
        tel: {
            isUsed: false,
            tel: ''
        }
    }, opts);

    var social = '';

    if(opts.facebook.isUsed){
        var fbsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="470.5" height="470.5" viewBox="0 0 470.5 470.5" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M271.5 154.2v-40.5c0-6.1 0.3-10.8 0.8-14.1 0.6-3.3 1.9-6.6 3.9-9.9 2-3.2 5.2-5.5 9.7-6.7 4.5-1.2 10.4-1.9 17.9-1.9h40.5V0h-64.8c-37.5 0-64.4 8.9-80.8 26.7 -16.4 17.8-24.6 44-24.6 78.7v48.8h-48.5v81.1h48.5v235.3h97.4V235.3h64.8l8.6-81.1H271.5z" fill="rgb(0, 0, 0)"></path></svg>';
        var fblink = 'http://facebook.com/sharer/sharer.php';
            fblink += '?u=' + encodeURIComponent(opts.url);

        social += '<a href="'+fblink+'" class="facebook" target="_blank" rel="external nofollow">';
            if(typeof opts.facebook.svg == 'string' && opts.facebook.svg != ''){
                social += opts.facebook.svg;
            } else {
                social += fbsvg;
            }
        social += '</a>';
    }

    if(opts.twitter.isUsed){
        var twsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="450" height="450" viewBox="0 0 450 450" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M450 85.7c-17.7 7.6-35.4 12.4-53.1 14.3 20-12 33.5-28.9 40.5-50.8 -18.3 10.8-37.8 18.3-58.5 22.3 -18.3-19.4-40.7-29.1-67.4-29.1 -25.5 0-47.2 9-65.2 27 -18 18-27 39.7-27 65.2 0 6.9 0.8 13.9 2.3 21.1 -37.7-1.9-73-11.4-106.1-28.4C82.5 110.2 54.4 87.5 31.4 59.1c-8.4 14.3-12.6 29.8-12.6 46.5 0 15.8 3.7 30.5 11.1 44 7.4 13.5 17.4 24.5 30 32.8 -14.8-0.6-28.7-4.5-41.7-11.7v1.1c0 22.3 7 41.8 21 58.7 14 16.8 31.6 27.5 53 31.8 -8 2.1-16.1 3.1-24.3 3.1 -5.3 0-11.1-0.5-17.4-1.4 5.9 18.5 16.8 33.6 32.5 45.5 15.8 11.9 33.7 18 53.7 18.4 -33.5 26.3-71.7 39.4-114.5 39.4 -8.2 0-15.6-0.4-22.3-1.1 42.8 27.6 90 41.4 141.6 41.4 32.7 0 63.5-5.2 92.2-15.6 28.7-10.4 53.3-24.3 73.7-41.7 20.4-17.4 37.9-37.4 52.7-60.1 14.8-22.7 25.7-46.3 33-70.9 7.2-24.7 10.8-49.3 10.8-74.1 0-5.3-0.1-9.3-0.3-12C421.8 120.2 437.2 104.3 450 85.7z" fill="rgb(0, 0, 0)"></path></svg>';
        var twlink = 'http://twitter.com/intent/tweet/';
            twlink += '?text=' + encodeURIComponent(opts.text);
            twlink += '&url=' + encodeURIComponent(opts.url);

        social += '<a href="'+twlink+'" class="twitter" target="_blank" rel="external nofollow">';
            if(typeof opts.twitter.svg == 'string' && opts.twitter.svg != ''){
                social += opts.twitter.svg;
            } else {
                social += twsvg;
            }
        social += '</a>';
    }

    if(opts.linkedin.isUsed){
        var lisvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="438.5" height="438.5" viewBox="0 0 438.5 438.5" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><rect x="5.4" y="145.9" width="94.2" height="282.9" fill="rgb(0, 0, 0)"></rect><path d="M408.8 171.7c-19.8-21.6-46-32.4-78.5-32.4 -12 0-22.9 1.5-32.7 4.4 -9.8 3-18.1 7.1-24.8 12.4 -6.8 5.3-12.1 10.3-16.1 14.8 -3.8 4.3-7.5 9.4-11.1 15.1v-40.2h-93.9l0.3 13.7c0.2 9.1 0.3 37.3 0.3 84.5 0 47.2-0.2 108.8-0.6 184.7h93.9V270.9c0-9.7 1-17.4 3.1-23.1 4-9.7 10-17.8 18.1-24.4 8.1-6.6 18.1-9.9 30.1-9.9 16.4 0 28.4 5.7 36.1 17 7.7 11.3 11.6 27 11.6 47V428.8h93.9V266.7C438.5 225 428.6 193.3 408.8 171.7zM53.1 9.7c-15.8 0-28.6 4.6-38.4 13.8C4.9 32.8 0 44.4 0 58.5c0 13.9 4.8 25.5 14.3 34.8 9.5 9.3 22.1 14 37.7 14h0.6c16 0 28.9-4.7 38.7-14 9.8-9.3 14.6-20.9 14.4-34.8 -0.2-14.1-5-25.7-14.6-35C81.6 14.3 68.9 9.7 53.1 9.7z" fill="rgb(0, 0, 0)"></path></svg>';
        var lilink = 'http://www.linkedin.com/shareArticle';
            lilink += '?mini=true&';
            lilink += '&url=' + encodeURIComponent(opts.url);
            lilink += '&title=' + encodeURIComponent(opts.title);

        social += '<a href="'+lilink+'" class="linkedin" target="_blank" rel="external nofollow">';
            if(typeof opts.linkedin.svg == 'string' && opts.linkedin.svg != ''){
                social += opts.linkedin.svg;
            } else {
                social += lisvg;
            }
        social += '</a>';
    }

    if(opts.gplus.isUsed){
        var gpsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="475.1" height="475.1" viewBox="0 0 475.1 475.1" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M273.4 302.5c-5-6.8-10.6-13-16.7-18.8 -6.1-5.8-12.2-11.1-18.3-15.8 -6.1-4.8-11.7-9.3-16.7-13.7 -5-4.4-9.1-8.9-12.3-13.7 -3.1-4.8-4.7-9.6-4.7-14.6 0-6.9 2.2-13.3 6.6-19.3 4.4-6 9.7-11.8 16-17.4 6.3-5.6 12.6-11.8 18.8-18.4 6.3-6.7 11.6-15.5 16-26.4 4.4-10.9 6.6-23.5 6.6-37.5 0-16.7-3.7-32.8-11.1-48.2 -7.4-15.4-17.9-27.4-31.4-36h38.5L303.2 0H178.4c-17.7 0-35.5 1.9-53.4 5.7 -26.5 5.9-48.7 19.4-66.8 40.4C40.2 67.2 31.1 91 31.1 117.6c0 28.2 10.1 51.6 30.4 70.2 20.3 18.6 44.6 28 72.9 28 5.7 0 12.4-0.5 20-1.4 -0.4 1.5-1 3.6-2 6.1s-1.7 4.6-2.3 6.1c-0.6 1.5-1 3.4-1.4 5.6 -0.4 2.2-0.6 4.4-0.6 6.7 0 12.6 6.1 26.7 18.3 42.5 -14.5 0.4-28.7 1.7-42.8 3.9 -14.1 2.2-28.8 5.6-44.3 10.3 -15.4 4.7-29.2 11.4-41.4 20.3 -12.2 8.9-21.3 19.4-27.4 31.5C3.5 361.6 0 374.4 0 386c0 12.8 2.9 24.3 8.6 34.7 5.7 10.4 13 18.8 22 25.4 8.9 6.6 19.3 12.1 31 16.6 11.7 4.5 23.3 7.7 34.8 9.6 11.5 1.9 22.9 2.9 34.1 2.9 51 0 91-12.5 119.9-37.4 26.6-23.2 40-50.1 40-80.5 0-10.9-1.6-21-4.7-30.4C282.5 317.3 278.4 309.3 273.4 302.5zM163.3 198.7c-9.7 0-18.9-2.5-27.7-7.4 -8.8-4.9-16.2-11.4-22.3-19.3 -6.1-7.9-11.4-16.8-16-26.7 -4.6-9.9-7.9-19.8-10.1-29.7 -2.2-9.9-3.3-19.3-3.3-28.3 0-18.3 4.9-34 14.6-47.1 9.7-13.1 23.4-19.7 41.1-19.7 12.6 0 23.9 3.9 34.1 11.7 10.2 7.8 18.2 17.7 24 29.7 5.8 12 10.3 24.4 13.4 37.3 3.1 12.8 4.7 25 4.7 36.4 0 19-4.1 34.3-12.4 45.8C195.1 193 181.8 198.7 163.3 198.7zM242.3 413.1c-5.2 8.9-12.3 15.9-21.3 21 -8.9 5-18.5 8.8-28.7 11.1 -10.2 2.4-20.9 3.6-32.1 3.6 -12.2 0-24.3-1.4-36.3-4.3 -12-2.9-23.5-7.2-34.4-13 -10.9-5.8-19.8-13.8-26.6-24 -6.8-10.2-10.1-21.7-10.1-34.7 0-11.4 2.6-21.6 7.7-30.5 5.1-8.9 11.7-16.1 19.7-21.4 8-5.3 17.3-9.7 28-13.1 10.7-3.4 20.9-5.8 30.8-7.1 9.9-1.3 20-2 30.3-2 6.3 0 11 0.2 14.3 0.6 1.1 0.8 4 2.8 8.7 6s7.8 5.4 9.4 6.6c1.6 1.1 4.6 3.3 8.9 6.6 4.3 3.2 7.3 5.7 9.1 7.3 1.8 1.6 4.4 4 7.8 7.3 3.4 3.2 5.9 6 7.6 8.4 1.6 2.4 3.6 5.3 6 8.7 2.4 3.4 4 6.7 5 9.9 0.9 3.1 1.9 6.6 2.7 10.3 0.9 3.7 1.3 7.6 1.3 11.6C250.1 393.7 247.5 404.2 242.3 413.1z" fill="rgb(0, 0, 0)"></path><polygon points="402 73.1 402 0 365.4 0 365.4 73.1 292.4 73.1 292.4 109.6 365.4 109.6 365.4 182.7 402 182.7 402 109.6 475.1 109.6 475.1 73.1 " fill="rgb(0, 0, 0)"></polygon></svg>';
        var gplink = 'http://plus.google.com/share';
            gplink += '?url=' + encodeURIComponent(opts.url);

        social += '<a href="'+gplink+'" class="gplus" target="_blank" rel="external nofollow">';
            if(typeof opts.gplus.svg == 'string' && opts.gplus.svg != ''){
                social += opts.gplus.svg;
            } else {
                social += gpsvg;
            }
        social += '</a>';
    }

    if(opts.print.isUsed){
        var printsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="475.1" height="475.1" viewBox="0 0 475.1 475.1" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M459 217.1c-10.8-10.8-23.7-16.1-38.7-16.1h-18.3v-73.1c0-7.6-1.9-16-5.7-25.1 -3.8-9.1-8.4-16.4-13.7-21.7L339.2 37.7c-5.3-5.3-12.6-9.9-21.7-13.7 -9.1-3.8-17.5-5.7-25.1-5.7H100.5c-7.6 0-14.1 2.7-19.4 8 -5.3 5.3-8 11.8-8 19.4V201H54.8c-15 0-27.9 5.4-38.7 16.1C5.4 227.9 0 240.8 0 255.8v118.8c0 2.5 0.9 4.6 2.7 6.4 1.8 1.8 4 2.7 6.4 2.7h64v45.7c0 7.6 2.7 14.1 8 19.4 5.3 5.3 11.8 8 19.4 8h274.1c7.6 0 14.1-2.7 19.4-8 5.3-5.3 8-11.8 8-19.4v-45.7h64c2.5 0 4.6-0.9 6.4-2.7 1.8-1.8 2.7-3.9 2.7-6.4V255.8C475.1 240.8 469.7 227.9 459 217.1zM365.4 420.3H109.6v-73.1h255.8V420.3zM365.4 237.5H109.6V54.8h182.7v45.7c0 7.6 2.7 14.1 8 19.4 5.3 5.3 11.8 8 19.4 8h45.7V237.5zM433.1 268.7c-3.6 3.6-7.9 5.4-12.8 5.4 -4.9 0-9.2-1.8-12.8-5.4 -3.6-3.6-5.4-7.9-5.4-12.8s1.8-9.2 5.4-12.8c3.6-3.6 7.9-5.4 12.8-5.4 4.9 0 9.2 1.8 12.8 5.4 3.6 3.6 5.4 7.9 5.4 12.8S436.7 265 433.1 268.7z" fill="rgb(0, 0, 0)"></path></svg>';

        social += '<a href="#" class="print" target="_blank">';
            if(typeof opts.print.svg == 'string' && opts.print.svg != ''){
                social += opts.print.svg;
            } else {
                social += printsvg;
            }
        social += '</a>';
    }

    if(opts.email.isUsed && typeof opts.email.mailto == 'string' && opts.email.mailto != ''){
        var emailsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="511.6" height="511.6" viewBox="0 0 511.6 511.6" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M49.1 178.7c6.5 4.6 26 18.1 58.5 40.7 32.5 22.6 57.5 39.9 74.8 52.1 1.9 1.3 5.9 4.2 12.1 8.7 6.2 4.5 11.3 8.1 15.4 10.9 4.1 2.8 9 5.9 14.8 9.3 5.8 3.4 11.3 6 16.4 7.7 5.1 1.7 9.9 2.6 14.3 2.6h0.3 0.3c4.4 0 9.1-0.9 14.3-2.6 5.1-1.7 10.6-4.3 16.4-7.7 5.8-3.4 10.8-6.5 14.8-9.3 4.1-2.8 9.2-6.4 15.4-10.9 6.2-4.5 10.2-7.4 12.1-8.7 17.5-12.2 62.1-43.1 133.6-92.8 13.9-9.7 25.5-21.4 34.8-35.1 9.3-13.7 14-28.1 14-43.1 0-12.6-4.5-23.3-13.6-32.3 -9-8.9-19.7-13.4-32.1-13.4H45.7c-14.7 0-25.9 4.9-33.8 14.8C3.9 79.6 0 91.9 0 106.8c0 12 5.2 25 15.7 39C26.2 159.7 37.3 170.7 49.1 178.7zM483.1 209.3c-62.4 42.3-109.8 75.1-142.2 98.5 -10.8 8-19.6 14.2-26.4 18.7 -6.8 4.5-15.7 9-27 13.7 -11.2 4.7-21.7 7-31.4 7h-0.3 -0.3c-9.7 0-20.2-2.3-31.4-7 -11.2-4.7-20.2-9.2-27-13.7 -6.8-4.5-15.6-10.7-26.4-18.7 -25.7-18.8-73-51.7-141.9-98.5C18 202 8.4 193.8 0 184.4v226.7c0 12.6 4.5 23.3 13.4 32.3 8.9 8.9 19.7 13.4 32.3 13.4h420.3c12.6 0 23.3-4.5 32.3-13.4 8.9-8.9 13.4-19.7 13.4-32.3V184.4C503.4 193.6 493.9 201.9 483.1 209.3z" fill="rgb(0, 0, 0)"></path></svg>';
        var emaillink = 'mailto:' + opts.email.mailto;

        social += '<a href="'+emaillink+'" class="email" target="_blank">';
            if(typeof opts.email.svg == 'string' && opts.email.svg != ''){
                social += opts.email.svg;
            } else {
                social += emailsvg;
            }
        social += '</a>';
    }

    if(opts.tel.isUsed && typeof opts.tel.tel == 'string' && opts.tel.tel != ''){
        var telsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="438.5" height="438.5" viewBox="0 0 438.5 438.5" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M414.4 24.1C398.3 8 379 0 356.3 0H82.2C59.6 0 40.2 8 24.1 24.1 8 40.2 0 59.6 0 82.2v274.1c0 22.6 8 42 24.1 58.1 16.1 16.1 35.5 24.1 58.1 24.1h274.1c22.6 0 42-8 58.1-24.1 16.1-16.1 24.1-35.5 24.1-58.1V82.2C438.5 59.6 430.5 40.2 414.4 24.1zM359.2 332.9c-4 8.8-13 16.4-27 22.8 -14 6.5-26.4 9.7-37.3 9.7 -3 0-6.3-0.2-9.7-0.7 -3.4-0.5-6.3-1-8.7-1.4 -2.4-0.5-5.5-1.3-9.4-2.6 -3.9-1.2-6.7-2.2-8.4-2.9 -1.7-0.7-4.9-1.9-9.4-3.6 -4.6-1.7-7.4-2.8-8.6-3.1 -31.2-11.4-61.7-32-91.5-61.8 -29.8-29.8-50.4-60.3-61.8-91.5 -0.4-1.1-1.4-4-3.1-8.6 -1.7-4.6-2.9-7.7-3.6-9.4 -0.7-1.7-1.6-4.5-2.9-8.4 -1.2-3.9-2.1-7-2.6-9.4 -0.5-2.4-0.9-5.3-1.4-8.7 -0.5-3.4-0.7-6.7-0.7-9.7 0-10.8 3.2-23.3 9.7-37.3 6.5-14 14.1-23 22.8-27 10.1-4.2 19.7-6.3 28.8-6.3 2.1 0 3.6 0.2 4.6 0.6 1 0.4 2.5 2.1 4.7 5.1 2.2 3 4.6 6.9 7.1 11.6 2.6 4.7 5.1 9.2 7.6 13.6 2.5 4.4 4.9 8.7 7.1 13 2.3 4.3 3.7 7 4.3 8.1 0.6 1 1.8 2.8 3.7 5.4 1.9 2.7 3.3 5 4.3 7.1 1 2.1 1.4 4.1 1.4 6 0 2.9-2 6.3-5.9 10.4 -3.9 4.1-8.2 7.9-12.8 11.3s-8.9 7.1-12.8 11c-3.9 3.9-5.9 7.1-5.9 9.6 0 1.3 0.3 2.9 1 4.7 0.7 1.8 1.3 3.3 1.9 4.4 0.6 1.1 1.5 2.8 2.7 4.9 1.2 2.1 2 3.4 2.4 4 10.5 18.8 22.5 35.1 36.1 48.7 13.6 13.6 29.8 25.6 48.7 36.1 0.6 0.4 1.9 1.2 4 2.4 2.1 1.2 3.7 2.1 4.9 2.7 1.1 0.6 2.6 1.2 4.4 1.9 1.8 0.7 3.4 1 4.7 1 3 0 7.2-3.1 12.6-9.4 5.3-6.3 10.8-12.5 16.3-18.7 5.5-6.2 10-9.3 13.4-9.3 1.9 0 3.9 0.5 6 1.4 2.1 1 4.5 2.4 7.1 4.3 2.7 1.9 4.5 3.1 5.4 3.7l15.1 8.3c10.1 5.3 18.5 10 25.3 14.1s10.4 6.9 11 8.4c0.4 1 0.6 2.5 0.6 4.6C365.4 313.2 363.4 322.8 359.2 332.9z" fill="rgb(0, 0, 0)"></path></svg>';
        var tellink = 'tel:' + opts.tel.tel;

        social += '<a href="'+tellink+'" class="tel" target="_blank">';
            if(typeof opts.tel.svg == 'string' && opts.tel.svg != ''){
                social += opts.tel.svg;
            } else {
                social += telsvg;
            }
        social += '</a>';
    }

    soc.append(social);

    var clicked = (navigator.userAgent.match(/iPad/i)) ? 'touchstart' : 'click';
    soc.find('a:not(.print)').on(clicked,function(){
        var link = $(this).attr('href');
        var top = (screen.availHeight - 500) / 2;
        var left = (screen.availWidth - 500) / 2;
        var popup = window.open(
            link,
            'social sharing',
            'width=550,'+
            'height=420,'+
            'left='+ left +','+
            'top='+ top +','+
            'location=0,'+
            'menubar=0,'+
            'toolbar=0,'+
            'status=0,'+
            'scrollbars=1,'+
            'resizable=1'
        );
        return false;
    });

    soc.find('.print').on(clicked,function(){
        window.print();
        return false;
    });
}
