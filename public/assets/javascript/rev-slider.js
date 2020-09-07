// Revolution Slider
var RevSlider = function() {
    "use strict";
    // Slider 1 ( Simple )
    var handleRevSliderLayout1 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider1");
            } else {
                revapi1 = tpj("#rev-slider1").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        },
                        thumbnails: {
                            style:"hades",
                            enable:true,
                            width:300,
                            height:300,
                            min_width:60,
                            wrapper_padding:0,
                            wrapper_color:"transparent",
                            tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                            visibleAmount:10,
                            hide_onmobile:false,
                            hide_onleave:false,
                            direction:"horizontal",
                            span:false,
                            position:"inner",
                            space:10,
                            h_align:"left",
                            v_align:"bottom",
                            h_offset:30,
                            v_offset:30
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,975,750],
                    gridwidth:[1170,970,760,320],
                    gridheight: [774,774,550,450],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Slider 2 ( Simple )
    var handleRevSliderLayout2 = function() {
        var tpj=jQuery,         
        revapi2;
        tpj(document).ready(function() {
            if(tpj("#rev-slider1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider2");
            } else {
                revapi2 = tpj("#rev-slider2").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        // mouseScrollNavigation: 'off',
                        tabs: {
                            enable: true,
                            hide_onleave: false,
                            style: 'hesperiden',
                            width: 390,
                            height: 200,
                            min_width: 180,
                            wrapper_padding: 0,
                            wrapper_color: '#FFF',
                            wrapper_opacity: '0.65',
                            tmp:    '<div class="imgbox clearfix">'+
                                        '<div class="imgbox-img one-of-two">'+ 
                                            '<img src="{{param1}}" width=200 height=100> '+
                                        '</div>  '+
                                       ' <div class="imgbox-content one-of-two pd-left-15">  '+
                                       '     <h6>{{title}}</h6>  '+
                                       '     <a href="{{param3}}" class="link-view">{{param2}}</a>  '+
                                        '    </div> '+
                                       ' </div>',
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        },
                        thumbnails: {
                            style:"hades",
                            enable:false,
                            width:300,
                            height:300,
                            min_width:60,
                            wrapper_padding:0,
                            wrapper_color:"transparent",
                            tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                            visibleAmount:10,
                            hide_onmobile:false,
                            hide_onleave:false,
                            direction:"horizontal",
                            span:false,
                            position:"inner",
                            space:10,
                            h_align:"left",
                            v_align:"bottom",
                            h_offset:30,
                            v_offset:30
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,991,768],
                    gridwidth:[1170,970,760,320],
                    gridheight: [925,800,550,450],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    var handleRevSliderLayout3 = function() {
        var tpj=jQuery,         
        revapi3;
        tpj(document).ready(function() {
            if(tpj("#rev-slider3").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider3");
            } else {
                revapi3 = tpj("#rev-slider3").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"none",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: true,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,975,750],
                    gridwidth:[1170,970,760,320],
                    gridheight: [935,860,500,500],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    var handleRevSliderLayout4 = function() {
        var tpj=jQuery,         
        revapi4;
        tpj(document).ready(function() {
            if(tpj("#rev-slider4").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider4");
            } else {
                revapi4 = tpj("#rev-slider4").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"none",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: true,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,975,750],
                    gridwidth:[1170,970,760,320],
                    gridheight: [722,722,500,350],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    var handleRevSliderLayout5 = function() {
        var tpj=jQuery,         
        revapi5;
        tpj(document).ready(function() {
            if(tpj("#rev-slider5").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider5");
            } else {
                revapi5 = tpj("#rev-slider5").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"none",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: true,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,991,425],
                    gridwidth:[1170,970,760,320],
                    gridheight: [730,722,500,350],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                        disable_onmobile: 'on'
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

     var handleRevSliderLayout6 = function() {
        var tpj=jQuery,         
        revapi6;
        tpj(document).ready(function() {
            if(tpj("#rev-slider6").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider6");
            } else {
                revapi6 = tpj("#rev-slider6").show().revolution({

                    jsFileLocation: "rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"none",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: true,
                            hide_onmobile: true,
                            style: "custom",
                            hide_onleave: true,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1024,991,425],
                    gridwidth:[1170,1024,991,425],
                    gridheight: [860,660,500,400],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    return {
        init: function() {
            handleRevSliderLayout1();
            handleRevSliderLayout2();
            handleRevSliderLayout3();
            handleRevSliderLayout4();
            handleRevSliderLayout5();
            handleRevSliderLayout6();
        }
    }
}();

$(document).ready(function() {
    RevSlider.init();
});
