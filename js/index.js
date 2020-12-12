$(".scrollbutton").click(function () {
    // get the element on the page related to the button
    var scrollToId = $(this).data("scroll");
    var scrollToElement = document.getElementById(scrollToId);
    // make the page scroll down to where you want
    // ...
});




    (function changeWord(){
        var words = [
            'a film geek',
            'an amateur musician',
            'a coffee addict',
            'a Korean-American',
            'your friend',
            'a perfectionist',
            'a photographer',
            'a lifelong Laker fan',
            'a UX Designer'
            ], i = 0;
        setInterval(function changeWord(){
            $('#whoami').fadeOut(function changeWord(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 3000);
          
    })();

    ScrollReveal().reveal('.hero-content');