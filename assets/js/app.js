// portfolio section starts
    $(document).ready(function(){

        
        $('.portfolio-slider').slick({

            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 7,
            autoplay: true,
            autoplaySpeed: 2000,
            // slidesToScroll: 1,
            asNavFor:'.portfolio-info',
            responsive: [
                // {
                //     breakpoint: 1199,
                //     settings: {
                //         arrows: false,
                //         centerMode: true,
                //         centerPadding: '0px',
                //         slidesToShow: 5,
                //     }
                // },
                {
                    breakpoint: 1199,
                    settings: {
                        dots: true,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 5,
                    }
                },
                {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 5,
                    
                }
                },
                {
                breakpoint: 580,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                
                }
                }
            ]
        });

        $('.portfolio-info').slick({
            arrows:false,
            slidesToShow: 1,
            asNavFor:'.portfolio-slider',
            responsive: [
                {
                    breakpoint: 1011,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1,
                    }
                    },
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
                },
                {
                breakpoint: 580,
                settings: {
                    dots: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                
                }
                }
            ]
        });
    });
    // portfolio section ends here


    // mixitu starts here 

    $(document).ready(function() {
      var mixer = mixitup('.myfilter')
    });

     // mixitu ends here

     //progress bar start here /skills
    $(document).ready(function() {
        $('#bar2').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });

        $('#bar1').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });
        $('#bar3').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });

        $('#bar4').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });

        $('#bar5').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });

        $('#bar6').barfiller({

            // color of bar
            barColor: '#FBB416',

            // shows a tooltip
            tooltip: false,

            // duration in ms
            duration: 1000,

            // re-animate on resize
            animateOnResize: true,

            // custom symbol
            symbol: "%"

        });
    });

    // skills section ends here



    // testimonial section starts 
    
    $(document).ready(function(){
        
        $('.testimonial-slider').slick({
            arrows:true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1,
                    }
                },
                {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
                },
                {
                breakpoint: 580,
                settings: {
                    dots: true,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                
                }
                }
            ]
        });
            
    });
   // testimonial section ends