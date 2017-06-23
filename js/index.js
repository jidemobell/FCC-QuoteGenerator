  $(document).ready(function() {

 
    var val;

    function getNewQuote(){
        $.ajax({
          url: 'https://api.forismatic.com/api/1.0/',
          jsonp: 'jsonp',
          dataType: 'jsonp',
          data: {
            method: 'getQuote',
            lang: 'en',
            format: 'jsonp'
          },
          success: function(response) {
            val = response.quoteText;
            $(".contentdiv").html(val);
           
          }
        });
    }
  
   $("a.btn-left").on("click",function(){
        getNewQuote();
   });

   $("a.btn-right").on("click",function(){
       window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(val));
   });

  });