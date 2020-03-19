$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".vsp .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".vsp .carousel-item")
            .eq(i)
            .appendTo(".vsp .carousel-inner");
        } else {
          $(".vsp .carousel-item")
            .eq(0)
            .appendTo($(this).find(".vsp .carousel-inner"));
        }
      }
    }
  });
});
