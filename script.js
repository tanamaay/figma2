$("#owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#owl-carousel1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    // navText: [
    //   `<img src="images/vector-left.png" alt="">`,
    //   `<img src="images/vector-right.png" alt="">`,
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });



//   // Ph level javascript

//   document.getElementById('green-drop').addEventListener('click', function() {
//     // Change the image source
//     document.getElementById('diseases-img').src = 'images/deseases-img.png';
    
//     // Change the color of the drop to green
//     document.getElementById('green-drop').setAttribute('fill', 'green');
// });
