function menuBox__init() {
    for (let i=1; i<=4; i++) {
        $('.top-bar__menu-box > ul > li:nth-of-type(' + i + ')').mouseenter(function() {
            $('.top-bar__menu-box > ul > ul').siblings('.active').removeClass('active')
            $('.top-bar__menu-box > ul > ul:nth-of-type(' + i + ')').addClass('active');
        })
        $('.top-bar').mouseleave(function() {
            $('.top-bar__menu-box > ul > ul').removeClass('active');
        })
    }
}

menuBox__init();