$(document).ready(function () {
  $(".sidenav").sidenav();      //for navigation bar
  $(".slider").slider({ full_width: true });    //slider

  //caousel 
  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });

  $(".modal").modal();      //for modal 
  $(".parallax").parallax();    //parallax effect

  $(".carousel.carousel-slider.myslider").carousel({
    fullWidth: true,
    indicators: true,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));   //id of modal

  instance.open();
}
