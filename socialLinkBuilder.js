/*!
 * SocialLinksBuilder v1.0.0
 * A jQuery Plugin that builds the social links for you
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
        fb: true,
        tw: true,
        li: true,
        gp: true
    }, opts);

    var social = '';

    if(opts.fb){
        var fbsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 960 560" xml:space="preserve"><path d="M541.5 279.7h-39.1v142h-58.7v-142h-29.4v-48.9h29.4v-29.4c0-39.9 16.6-63.6 63.6-63.6h39.2v48.9H522c-18.3 0-19.6 6.8-19.6 19.6l-0.1 24.5h44.4L541.5 279.7z"></path></svg>';
        var fblink = 'http://facebook.com/sharer/sharer.php';
            fblink += '?u=' + encodeURIComponent(opts.url);

        social += '<a href="'+fblink+'" class="facebook" target="_blank" rel="external nofollow">';
            social += fbsvg;
        social += '</a>';
    }

    if(opts.tw){
        var twsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 960 560" xml:space="preserve"><path d="M592.1 222.3c0.1 2.5 0.2 4.9 0.2 7.5 0 76.1-57.9 163.8-163.8 163.8 -32.5 0-62.8-9.5-88.3-25.9 4.5 0.5 9.1 0.8 13.8 0.8 27 0 51.8-9.2 71.5-24.7 -25.2-0.5-46.5-17.1-53.8-40 3.5 0.7 7.1 1 10.9 1 5.3 0 10.3-0.7 15.1-2 -26.3-5.3-46.2-28.6-46.2-56.5 0-0.2 0-0.5 0-0.7 7.7 4.3 16.7 6.9 26 7.2 -15.5-10.3-25.6-28-25.6-48 0-10.5 2.8-20.4 7.8-28.9 28.4 34.9 70.8 57.8 118.7 60.2 -1-4.2-1.5-8.6-1.5-13.1 0-31.8 25.8-57.6 57.6-57.6 16.5 0 31.5 7 42 18.2 13.1-2.6 25.4-7.4 36.5-14 -4.3 13.4-13.4 24.7-25.3 31.8 11.6-1.4 22.7-4.5 33.1-9.1C613.1 204 603.4 214.2 592.1 222.3z"></path></svg>';
        var twlink = 'http://twitter.com/intent/tweet/';
            twlink += '?text=' + encodeURIComponent(opts.text);
            twlink += '&url=' + encodeURIComponent(opts.url);

        social += '<a href="'+twlink+'" class="twitter" target="_blank" rel="external nofollow">';
            social += twsvg;
        social += '</a>';
    }

    if(opts.li){
        var lisvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 960 560" xml:space="preserve"><path d="M406.2 409.6L406.2 409.6H348V234.4h58.2V409.6zM377.1 210.5h-0.4c-19.5 0-32.2-13.5-32.2-30.3 0-17.2 13.1-30.3 33-30.3 20 0 32.2 13.1 32.6 30.3C410 197 397.4 210.5 377.1 210.5zM616.2 409.6H558v-93.8c0-23.6-8.4-39.6-29.5-39.6 -16.1 0-25.7 10.8-29.9 21.3 -1.5 3.7-1.9 9-1.9 14.2v97.9h-58.2c0 0 0.8-158.8 0-175.3h58.2v24.8c-0.1 0.2-0.3 0.4-0.4 0.6h0.4v-0.6c7.7-11.9 21.6-28.9 52.5-28.9 38.3 0 67.1 25 67.1 78.9v100.5H616.2z"></path></svg>';
        var lilink = 'http://www.linkedin.com/shareArticle';
            lilink += '?mini=true&';
            lilink += '&url=' + encodeURIComponent(opts.url);
            lilink += '&title=' + encodeURIComponent(opts.title);

        social += '<a href="'+lilink+'" class="linkedin" target="_blank" rel="external nofollow">';
            social += lisvg;
        social += '</a>';
    }

    if(opts.gp){
        var gpsvg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 960 560" xml:space="preserve"><path d="M469.8 264c-19.5 0-39 0-58.5 0 -6.4 0-7.7 2.6-6.9 9.1 1.3 11.1 1.2 22.3 0.1 33.4 -0.7 7.4 0.1 9.5 7.3 9.5 20.3 0 40.7 0.1 61-0.1 3.6 0 5 1.1 3.9 4.5 -5.6 17.7-15.7 32.1-32.7 40.5 -14 6.9-28.9 9.2-44.6 8.3 -10.6-0.6-20.9-2.2-30.5-6.4 -19.2-8.4-33.5-22.3-42.5-41.1 -8-16.6-10.1-34.3-6.5-52.6 4-20.3 14.9-36.5 30.8-49 16-12.4 34.5-18 55-17.4 18.5 0.6 34.9 6.2 49.6 17.2 2.7 2 4.4 1.7 6.5-0.7 8.9-10.3 17.9-20.6 27.1-30.8 3.8-4.2 3.8-5.2-0.7-8.4 -10.5-7.6-21.6-14-33.5-19.1 -12.5-5.3-25.6-9.1-39.2-9.8 -13.1-0.8-26.3-0.3-39.4 2.7 -26.4 6.1-49.8 17.5-69.6 36 -8.7 8.1-15.8 17.6-21.9 27.8C273.4 237 267.3 258 266 280.4c-0.6 10.9 0.8 21.7 2.9 32.4 4.4 23.1 14.8 43.2 30.1 60.7 13.7 15.6 30.1 27.8 49.2 36.3 14 6.2 28.7 10.1 43.9 11.2 15.5 1.1 31-0.3 46.1-3.9 26.2-6.3 49-18.3 65.9-39.8 18.5-23.5 27.4-50.6 28.8-80.3 0.4-9.1-0.2-18.3 0.2-27.5 0.2-4.6-1.5-5.6-5.8-5.5C508.2 264.1 489 264 469.8 264zM606 315.5c0 5 0.2 10-0.1 15 -0.2 3.6 1.3 4.6 4.7 4.6 7.2-0.2 14.3-0.2 21.5 0 3.7 0.1 5-1 4.9-4.8 -0.2-9.5-0.1-19-0.1-28.5 0-6.3 0.5-6.7 6.9-6.7 9.5 0 19-0.1 28.5 0.1 3.5 0.1 4.7-1.1 4.6-4.6 -0.2-6.7-0.2-13.3 0-20 0.2-4.7-1.5-6.6-6.3-6.5 -9.7 0.2-19.3-0.1-29 0.1 -3.8 0.1-4.9-1.3-4.8-5 0.2-9.8-0.2-19.7 0.2-29.5 0.2-4.6-1.8-5.7-5.8-5.7 -6.5 0.1-13 0.2-19.5 0 -4.3-0.1-5.9 1.7-5.9 5.9 0.2 9.7-0.1 19.3 0.1 29 0.1 3.9-1 5.3-5.1 5.2 -9.7-0.3-19.3 0-29-0.1 -4.1-0.1-6.2 1.3-6 5.7 0.2 6.8 0.2 13.7 0 20.5 -0.1 3.7 1.2 5 4.9 4.9 9.8-0.2 19.7 0 29.5-0.1 4-0.1 5.8 1.4 5.7 5.5C605.9 305.5 606 310.5 606 315.5z"></path></svg>';
        var gplink = 'http://plus.google.com/share';
            gplink += '?url=' + encodeURIComponent(opts.url);

        social += '<a href="'+gplink+'" class="gplus" target="_blank" rel="external nofollow">';
            social += gpsvg;
        social += '</a>';
    }

    soc.append(social);

    var clicked = (navigator.userAgent.match(/iPad/i)) ? 'touchstart' : 'click';
    soc.find('a').on(clicked,function(){
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
}
