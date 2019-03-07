$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({scrollTop: dn}, 1000);

    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
$(function windowSize() {
  if ($(window).width() <= '992') {
    $(function collapse() {
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
  } else {
    $(function collapse() {
      $(function collapse() {
        $("#button-1").click(function() {
          $("#item-1").toggle();
          $("#item-2").hide();
          $("#item-3").hide();
          $("#item-4").hide();
        });
        $("#button-2").click(function() {
          $("#item-2").toggle();
          $("#item-1").hide();
          $("#item-3").hide();
          $("#item-4").hide();
        });
        $("#button-3").click(function() {
          $("#item-3").toggle();
          $("#item-1").hide();
          $("#item-2").hide();
          $("#item-4").hide();
        });
        $("#button-4").click(function() {
          $("#item-4").toggle();
          $("#item-1").hide();
          $("#item-2").hide();
          $("#item-3").hide();
        });
      })
    })
  }
})
$(window).load(windowSize);
$(window).resize(windowSize);
$(window).on('load resize', windowSize);
