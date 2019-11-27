document.addEventListener("DOMContentLoaded", function () {
    // Activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;

                // Muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
                    elm.innerHTML = xhttp.responseText;
                });

                // Daftarkan event listener untuk setiap tautan menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
                    elm.addEventListener("click", function (event) {
                        // Tutup sidenav
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        // Muat konten halaman yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page);
                    });
                });
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    // Load page content
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                var content = document.querySelector("#body-content");

                if (this.status == 200) {
                    content.innerHTML = `<div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-green-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>`;
                    content.innerHTML = xhttp.responseText;
                    var buttonNext = $('.next');
                    var buttonLeft = $('.previous');

                    buttonNext.click(function () {
                        $('.team-frame').animate({
                            scrollLeft: "+=300px"
                        }, "slow");
                    });

                    buttonLeft.click(function () {
                        $('.team-frame').animate({
                            scrollLeft: "-=300px"
                        }, "slow");
                    });

                    buttonNext.click(function () {

                        $('.league-frame').animate({
                            scrollLeft: "+=300px"
                        }, "slow");
                    });

                    buttonLeft.click(function () {
                        $('.league-frame').animate({
                            scrollLeft: "-=300px"
                        }, "slow");
                    });

                    if (page == "home") {
                        getEnglandStanding();
                        getTeams();
                    } else if (page == "tables") {
                        getEnglandStanding();
                    } else if (page == "teams") {
                        getTeams();
                    } else if (page == "manage") {
                        viewSavedTeam();
                        viewPlayer();
                    }



                } else if (this.status == 404) {
                    content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                } else {
                    content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                }
            }
        };
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }
});