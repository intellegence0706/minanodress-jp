
$(document).ready(function() {
  var $client_slider = $('.__client-slider-container');

  $client_slider.slick({
    slidesToShow: 4.3,  // Default setting for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // When the screen width is less than 768px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        }
      }
    ]
  });

  // Custom next button
  $('.__client-slider-controll-next').on('click', function() {
    $client_slider.slick('slickNext');
  });
  $('.__client-slider-controll-prev').on('click', function() {
    $client_slider.slick('slickPrev');
  });
  

});


  $('.__fv-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  
 $('.__product-slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.__product-slider-nav'
});
$('.__product-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.__product-slider-main',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
		

  $(document).ready(function() {
    var $slider = $('.__blog-main');
  
    $slider.slick({
      slidesToShow: 2.3,  // Default setting for larger screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768, // When the screen width is less than 768px
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1, // Scroll 1 slide at a time
          }
        }
      ]
    });
  
    // Custom next button
    $('.__blog-slider-controll').on('click', function() {
      $slider.slick('slickNext');
    });
    
  });


  
  


  // ハンバーガーメニュー


$(function() {
  $(".hamburger-menu-icon-wrap").click(function(){
    $('.hamburger-menu-line').toggleClass('open'); 
    $('.hamburger-menu').toggleClass('open-spmenu');
  });
});

$(function() {
  $('.open-modal-btn').click(function() {
    $('.hamburger-menu-line').removeClass('open');
    $('.hamburger-menu').removeClass('open-spmenu');
    $('.header-search-menu-wrap').addClass('open-spmenu');
    $('.header-menu-wrap').removeClass('open-spmenu');
    $('.modal-mask').addClass('open-spmenu');
    bodyFixedOff();
  });
});

$(function() {
  $('.__sidebar-item-ttl').click(function() {
    $(this).next('.__sidebar-item-main').toggleClass('close');
    $(this).find('.__item-collapse__mark').toggleClass('open');
  });
});


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});




$(document).ready(function() {
  // Initialize the slider
  $('.__main-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 2,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });



  // Custom next button for Slick slider
  $('.__slider-next').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.__main-slider').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.__slider-before').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.__main-slider').slick('slickPrev');  // Move to the previous slide
  });



  

});


$(document).ready(function() {
  function initSlick() {
      if ($(window).width() <= 768 && !$('.badge-slider').hasClass('slick-initialized')) {
          $('.badge-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 1000 // Autoscroll every second
          });
      } else if ($(window).width() > 768 && $('.badge-slider').hasClass('slick-initialized')) {
          $('.badge-slider').slick('unslick');
      }
  }

  // Initialize or destroy Slick based on the window size
  initSlick();
  
  // Recheck on window resize
  $(window).resize(initSlick);



  
}); 

$(document).ready(function() {
  var itemsPerPage = 15;
  var currentPage = 1;

  // Function to show items for the current page
  function showPage(page) {
      var startIndex = (page - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;

      // Hide all items
      $(".c-product").hide();
      
      // Show items for the current page
      $(".c-product").slice(startIndex, endIndex).show();

      // Update the page number and pagination buttons
      $(".page-number").text(page);
      updatePagination(page);
  }

  // Function to get the total number of pages
  function getTotalPages() {
      return Math.ceil($(".c-product").length / itemsPerPage);
  }

  // Function to update the pagination controls
  function updatePagination(page) {
      var totalPages = getTotalPages();
      var paginationHtml = '';
      var pageNumbers = [];

      // Adjust the page number range based on the total number of pages
      if (totalPages <= 4) {
          // If there are less than 4 pages, show all the pages
          for (var i = 1; i <= totalPages; i++) {
              pageNumbers.push(i);
          }
      } else {
          // Adjust for when there are more than 4 pages
          if (page === 1 || page === 2) {
              // Show pages 1, 2, 3, 4 for page 1 and page 2
              pageNumbers = [1, 2, 3, 4];
          } else if (page === totalPages) {
              // For the last page, show the last 4 pages
              pageNumbers = [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
          } else {
              // For pages in between, show 1, 2, current page, and last page
              pageNumbers = [1, 2, page, totalPages];
          }
      }

      // Add page numbers to pagination
      pageNumbers.forEach(function(p) {
          paginationHtml += `<button class="page-number-btn ${p === page ? 'active' : ''}" data-page="${p}">${p}</button>`;
      });

      // Add next and previous buttons
      $(".page-numbers").html(paginationHtml);

      // Disable prev/next buttons based on current page
      $(".prev").prop('disabled', page === 1);
      $(".next").prop('disabled', page === totalPages);
  }

  // Initial page load
  showPage(currentPage);

  // Next button click event
  $(".next").click(function() {
      if (currentPage < getTotalPages()) {
          currentPage++;
          showPage(currentPage);
      }
  });

  // Previous button click event
  $(".prev").click(function() {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  // Pagination number button click
  $(document).on('click', '.page-number-btn', function() {
      currentPage = $(this).data('page');
      showPage(currentPage);
  });
});


//=====================

const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");
let priceGap = 500;

// Adding event listeners to price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp;

        // Validate input values
        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }

        if (maxp > 25000) {
            alert("maximum price cannot be greater than 25000");
            priceInputvalue[1].value = 25000;
            maxp = 25000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        // Update the range slider
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            } else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    // Add event listeners to range input elements
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);
            let diff = maxVal - minVal;

            if (diff < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            } else {
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}
