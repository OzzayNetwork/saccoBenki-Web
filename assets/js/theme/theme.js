/*global window, jQuery */
(function($) {

    'use strict';
    // -- :: Navbar Style (1)    
    if ($(window).width() > 991) {
        $('nav.th-nav-st1 li.th-nav-item.has-dropdown').hover(
            function() {
                $(this).find('ul.th-dropdown-list').fadeIn();
            },
            function() {
                $(this).find('ul.th-dropdown-list').hide();
            }
        );
    } else {
        $('nav.th-nav-st1 li.th-nav-item.has-dropdown').on('click', function() {
            $(this).find('ul.th-dropdown-list').slideToggle().parent().siblings().find('ul.th-dropdown-list').slideUp();
        });
    }
    // Toggle Navbar
    $('#nav_toggler').on('click', function() {
        $('body').toggleClass('navbar-activated')
    });

    // ----------------------------

    // -- :: About Us Page

    // Map Section
    $("#about-us-page .flag").on('click', function() {
        $('.flag').removeClass('open');
        $(this).addClass('open');
    });
    $(document).mouseup(function(e) {
        var flag_con = $(".flag");
        // if the target of the click isn't the container nor a descendant of the container
        if (!flag_con.is(e.target) && flag_con.has(e.target).length === 0) {
            flag_con.removeClass('open');
        }
    });
    // ----------------------------

    // -- :: VPS Page
    $('#dist_toggler li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('show')).show().siblings().hide()
    });
    // ----------------------------

    $('#scroller').hover(function() {

    });

    //loan calculator

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    loanCalculator();

    function loanCalculator() {
        var amount = parseInt($('.loanAmount').val());
        var rate = parseInt($('.loanRate').val());
        var months = parseInt($('.loanMonths').val());
        var r = rate / 100 / 12;

        var x = Math.pow(1 + r, months);
        var monthly = (amount * x * r) / (x - 1);


        if (amount == "") {
            amount = 0;
        }
        if (rate == "") {
            rate = 0;
        }
        if (months == "") {
            months = 0;
        }


        var totalLoan = 0;
        var monthlyPay = 0;

        monthlyPay = (amount * months * rate) / 100;
        totalLoan = (monthlyPay * months) + amount;

        $('.totalLoan').text(numberWithCommas(totalLoan) + '.00');
        $('.monthlyPay').text(numberWithCommas(monthlyPay) + '.00');

        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {

            $('.totalLoan').text(numberWithCommas(round(monthly * months)));
            $('.monthlyPay').text(numberWithCommas(round(monthly)));

        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        else {
            $('.totalLoan').text(numberWithCommas(round(monthly * months)));
            $('.monthlyPay').text(numberWithCommas(round(monthly)));
        }
    }
    $('.loanCalculator input').on('change', function() {
        loanCalculator();
    });

    $('.loanCalculator input').on('keyup', function() {
        loanCalculator();
    });

    $('.loanCalculator input').on('keydown', function() {
        loanCalculator();
    });

    // This simple method rounds a number to two decimal places.
    function round(x) {
        return Math.round(x * 100) / 100;
    }

    //alternating scenes
    var numberOfScreens = 0;
    $('#billing .tab-content .tab-pane').each(function(index) {
        // alert(index);
        numberOfScreens = index

    });
    var numberOfScreenChangers = 0;
    $('#billing  li').each(function(index) {
        // alert(index);
        numberOfScreenChangers = index

    });


    function alternateScreen() {
        console.log("running");
        $('#billing .tab-content .tab-pane').each(function(index) {
            // alert(numberOfScreens);
            var tab_index = $(this).index();
            var isactive = $(this).hasClass('active');

            if (index == numberOfScreens) {
                // alert("we are here");
                if (isactive == true) {
                    $('#billing .tab-content .tab-pane').eq(0).addClass('active');
                    $('#billing  li').removeClass('active');
                    $('#billing  li').eq(0).addClass('active');

                    $(this).removeClass("active");
                }
                return false;
            }

            if (isactive == true) {
                if (index !== numberOfScreens) {
                    // alert("we can change");
                    // $(this).removeClass("active").next().addClass("active");

                    $('#billing li').removeClass('active');
                    $('#billing  li').eq(index + 1).addClass('active');


                    $(this).next().addClass("active");
                    $(this).removeClass("active");

                }
                return false;
            }


        });
    }

    $('#billing li').on('click', function() {
        var the_index = $(this).index();
        // alert(the_index);
        $('#billing  li').removeClass('active');
        $(this).addClass('active');

        $('#billing .tab-content .tab-pane').removeClass('active');
        $('#billing .tab-content .tab-pane').eq(the_index).addClass('active');


    });

    $('#billing li').on('click', function() {
        var the_index = $(this).index() + 3;
        //  alert(the_index);
        $('#billing  li').removeClass('active');
        $(this).addClass('active');

        $('#billing .tab-content .tab-pane').removeClass('active');
        $('#billing .tab-content .tab-pane').eq(the_index).addClass('active');


    });

    // var timer = setInterval(alternateScreen(), 4000);
    setInterval(function() {
        alternateScreen();
        // console.log(1+1);
    }, 5000);


    // scrolling


}(jQuery));
$(document).ready(function() {
    // alert("we giood");
    $('.the-year').text(new Date().getFullYear());
    $('#contacts').localScroll();
    $('#billing').localScroll();
    $('#modules').localScroll();
    $('#monitoring').localScroll();
    $('#sacco-benefits').localScroll();
    $('#features').localScroll();
    $('#home').localScroll();
});