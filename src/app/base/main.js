$(function name() {
    $("#button-1").click(function() {
      $("#item-1").slideToggle("slow");
    });
    $("#button-2").click(function() {
      $("#item-2").slideToggle("slow");
    });
    $("#button-3").click(function() {
      $("#item-3").slideToggle("slow");
    });
    $("#button-4").click(function() {
      $("#item-4").slideToggle("slow");
    });
})


$(function windowSize() {
  if ($(window).width() <= '992') {
    $(function name() {
        
    })
  } else {
    $(function name() {
      var flip = 0;
      $("button").click(function() {
        $("span").toggle(flip++ % 2 === 0);
      });
    })
  }
})
$(window).load(windowSize);
$(window).resize(windowSize);
$(window).on('load resize', windowSize);
