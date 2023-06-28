
$(".dropdown-features").hover(
    () => {
        if ($(window).width() >= 992) {
            $(".icon-up-f").removeClass("hide");
            $(".icon-down-f").addClass("hide");
        }
        
    },

    () => {
        if ($(window).width() >= 992) {
            $(".icon-up-f").addClass("hide");
            $(".icon-down-f").removeClass("hide");
        }
    }
)

$(".dropdown-company").hover(
    () => {
        if ($(window).width() >= 992) {
            $(".icon-up-c").removeClass("hide");
            $(".icon-down-c").addClass("hide");
        }
    },

    () => {
        if ($(window).width() >= 992) {
            $(".icon-up-c").addClass("hide");
            $(".icon-down-c").removeClass("hide");
        }
    }
)

