(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Preloader
        window.addEventListener('load', function() {
            document.querySelector('body').classList.add("loaded")
        });

        // Header Sticky
        const getHeaderId = document.querySelector(".navbar-area");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 150;
                const {
                    scrollTop
                } = event.target.scrollingElement;
                document.querySelector('.responsive-navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }

        // Back to Top
        const getId = document.getElementById("backtotop");
        if (getId) {
            const topbutton = document.getElementById("backtotop");
            topbutton.onclick = function(e) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            };
            window.onscroll = function() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }

        var $list = $('.menu-item');

        // Define the accordion function
        function accordion(e) {
            e.stopPropagation();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else if ($(this).parent().parent().hasClass('active')) {
                $(this).addClass('active');
            } else {
                $list.removeClass('active');
                $(this).addClass('active');
            }
        }

        // Attach the click event to all elements with class 'menu-item'
        $list.on('click', accordion);

        // Counter Js
        if ("IntersectionObserver" in window) {
            let counterObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function() {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                                clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                    }
                });
            });
            let counters = document.querySelectorAll(".counter");
            counters.forEach(function(counter) {
                counterObserver.observe(counter);
            });
        }

        // Scrollcue
        scrollCue.init();
    });

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {


            // Initialize the main Swiper
            var swiper = new Swiper(".hero-thumb-slider", {
                loop: true,
                spaceBetween: 0,
                freeMode: true,
                watchSlidesProgress: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }
            });
            var swiper2 = new Swiper(".hero-slider-two", {
                loop: true,
                effect: 'fade',
                spaceBetween: 0,
                navigation: {
                    nextEl: ".hero-button-next",
                    prevEl: ".hero-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });

            // Add hover event listeners to thumbnails
            swiper.slides.forEach((slide, index) => {
                slide.addEventListener('mouseenter', () => {
                    swiper2.slideToLoop(index);
                });
            });

            // Hero Slider
            var swiper = new Swiper(".hero-slider-one", {
                spaceBetween: 25,
                autoHeight: true,
                grabCursor: true,
                loop: true,
                effect: "fade",
                navigation: {
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                },
                speed: 1400,
            });
            var swiper = new Swiper(".hero-content-slider", {
                spaceBetween: 25,
                autoHeight: true,
                grabCursor: true,
                loop: true,
                fadeEffect: {
                    crossFade: true
                },
                virtualTranslate: true,
                effect: "fade",
                navigation: {
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                },
                speed: 1400,
            });


            //Testimonial Slider
            var swiper = new Swiper(".testimonial-slider-one", {
                spaceBetween: 25,
                grabCursor: true,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                },
                speed: 1400
            });
            var swiper = new Swiper(".testimonial-slider-two", {
                spaceBetween: 25,
                grabCursor: true,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                },
                speed: 1400,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: -35,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: -10,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: -30,
                    }
                }
            });
            var swiper = new Swiper(".testimonial-slider-three", {
                spaceBetween: 25,
                grabCursor: true,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                },
                speed: 1400,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    }
                }
            });

            //Wh Card Slider
            var swiper = new Swiper(".wh-slider", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                speed: 1400,
                pagination: {
                    el: ".wh-pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1.3
                    },
                    992: {
                        slidesPerView: 1.7
                    },
                    1200: {
                        slidesPerView: 2.1
                    },
                    1400: {
                        slidesPerView: 2.2,
                    },
                    1600: {
                        slidesPerView: 2.7,
                    },
                    1920: {
                        slidesPerView: 3.15,
                    }
                }
            });
            //Wh Card Slider
            var swiper = new Swiper(".wh-slider-two", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                autoHeight: true,
                speed: 1000,
                navigation: {
                    nextEl: ".wh-next",
                    prevEl: ".wh-prev",
                },
            });

            //Case Slider
            var swiper = new Swiper(".case-slider-one", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                speed: 1400,
                pagination: {
                    el: ".case-pagination-one",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 2.5
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }
            });
            var swiper = new Swiper(".case-slider-two", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                speed: 1400,
                pagination: {
                    el: ".case-pagination-two",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 2.5
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }
            });
            var swiper = new Swiper(".case-slider-three", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                speed: 1400,
                pagination: {
                    el: ".case-pagination-three",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 2.5
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }
            });

            //Service Slider
            var swiper = new Swiper(".service-card-slider", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: ".service-next",
                    prevEl: ".service-prev",
                },
                speed: 1400,
                effect: "fade",
            });

            //Blog Slider
            var swiper = new Swiper(".blog-slider-one", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: ".blog-next",
                    prevEl: ".blog-prev",
                },
                speed: 1400,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 1.3
                    },
                    1200: {
                        slidesPerView: 1.8
                    },
                    1400: {
                        slidesPerView: 2.2,
                        spaceBetween: 40
                    },
                    1600: {
                        slidesPerView: 2.4,
                        spaceBetween: 40
                    },
                    1920: {
                        slidesPerView: 2.5,
                        spaceBetween: 60
                    }
                }
            });
            var swiper = new Swiper(".blog-slider-two", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: ".blog-next",
                    prevEl: ".blog-prev",
                },
                speed: 1400,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    }
                }
            });

            var swiper = new Swiper(".blog-slider-three", {
                spaceBetween: 25,
                grabCursor: true,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: ".blog-next",
                    prevEl: ".blog-prev",
                },
                speed: 1400,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }
            });
        });

        try {

            var slider = document.getElementById("range-slider");
            var fill = document.getElementById("slider-fill");
            var handle = document.getElementById("slider-handle");
            var valueDisplay = document.getElementById("value-display");

            // Set the minimum and maximum values for the slider
            var minValue = 100;
            var maxValue = 100000;

            // Set the initial value of the slider
            var sliderValue = 1000;

            // Function to update the handle position, fill, and value display based on the slider value
            function updateSliderAppearance() {
                var handlePosition = ((sliderValue - minValue) / (maxValue - minValue)) * (slider.offsetWidth - handle.offsetWidth);
                handle.style.left = handlePosition + "px";
                fill.style.width = handlePosition + "px";
                valueDisplay.style.left = handlePosition + "px";
                valueDisplay.textContent = "$" + sliderValue;
            }

            // Function to handle slider value changes
            function handleSliderChange() {
                // Update the slider value based on the handle position
                var handlePosition = handle.offsetLeft;
                sliderValue = (handlePosition / (slider.offsetWidth - handle.offsetWidth)) * (maxValue - minValue) + minValue;

                // Round the value to the nearest integer
                sliderValue = Math.round(sliderValue);

                // Ensure the value is within the specified range
                sliderValue = Math.max(minValue, Math.min(maxValue, sliderValue));

                // Update the handle position, fill, and value display
                updateSliderAppearance();

                $('input[name="annual-revenue"]').val("$");

            }

            // Function to handle click events on the slider
            function handleSliderClick(event) {
                // Calculate the click position relative to the slider
                var clickPosition = event.clientX - slider.getBoundingClientRect().left;

                // Update the handle position based on the click position
                var newHandlePosition = Math.max(0, Math.min(clickPosition - handle.offsetWidth / 2, slider.offsetWidth - handle.offsetWidth));
                handle.style.left = newHandlePosition + "px";

                // Update the slider value
                handleSliderChange();
            }

            // Add event listeners for mouse events
            handle.addEventListener("mousedown", function(event) {
                // Prevent default behavior to avoid selecting text
                event.preventDefault();

                // Calculate the initial mouse position relative to the handle
                var initialMouseX = event.clientX - handle.offsetLeft;

                // Function to handle mousemove events
                function handleMouseMove(event) {
                    // Calculate the new handle position based on the mouse position
                    var newHandlePosition = event.clientX - initialMouseX;

                    // Ensure the handle stays within the slider bounds
                    newHandlePosition = Math.max(0, Math.min(newHandlePosition, slider.offsetWidth - handle.offsetWidth));

                    // Update the handle position
                    handle.style.left = newHandlePosition + "px";

                    // Update the slider value
                    handleSliderChange();
                }

                // Function to handle mouseup event
                function handleMouseUp() {
                    // Remove the event listeners when the mouse is released
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }

                // Add event listeners for mousemove and mouseup events
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });

            // Add event listener for click events on the slider
            slider.addEventListener("click", handleSliderClick);

            // Initialize the handle position, fill, and value display
            updateSliderAppearance();



        } catch (err) {}

    });
}(jQuery));