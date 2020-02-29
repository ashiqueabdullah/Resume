

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}

 $('.image-active').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.test-active').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


$(document).ready(function(){
    $('#bar1').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });
   
   $('#bar2').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar3').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar4').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar5').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar6').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar7').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar8').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });

   $('#bar9').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });
   $('#bar10').barfiller({
      barColor: '#00A3E1',
      duration: 1500,
    });
});




// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 50;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}



var $grid=$('.fortfilo-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});



// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



$('.filter-button-group button').on('click',function(event){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});



