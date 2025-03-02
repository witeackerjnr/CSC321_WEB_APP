$(document).ready(function() {
    // Check if dark mode is stored in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        $("body").addClass("dark-mode");
    }

    $(".toggle-btn").click(function() {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    $("body").css("display", "none").fadeIn(800);
});
