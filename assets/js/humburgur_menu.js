
function humburgur_menu() {

    if (document.getElementById("humburgur_menu_content").style.display === "none") {

        document.getElementById("main").style.display = "none";
        document.getElementById("humburgur_menu_content").style.display = "flex";
        document.getElementById("extraContent").style.display = "block";
        document.getElementById("close").style.display = "block";
        document.getElementById("show").style.display = "none";
        document.getElementById("footer").style.display = "none";

    }

    else {

        document.getElementById("main").style.display = "block";
        document.getElementById("humburgur_menu_content").style.display = "none";
        document.getElementById("extraContent").style.display = "none";
        document.getElementById("close").style.display = "none";
        document.getElementById("show").style.display = "block";
        document.getElementById("footer").style.display = "flex";

    }

}