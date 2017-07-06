        var nextnum = 1;
        var prevnum = 0;
        var tdlen = 3;

        function prev(x) {
            document.getElementById("previmg").src = x;
            document.getElementById("showimg").style.display = "block";
            document.getElementById("data").style.zIndex = "-100";
            document.getElementById("data").style.opacity = 0.1;
            document.body.style.background = "rgba(150, 150, 150, 0.619608)";
        }

        function antiprev() {
            document.getElementById("showimg").style.display = "none";
            document.getElementById("data").style.zIndex = "100";
            document.getElementById("data").style.opacity = 1;
            document.body.style.background = "";
        }

        function nxt(n2shURL, n2shData) {
            prev(n2shURL);
            dt(n2shData)
        }

        function pst(p2shURL, n2shData) {}
        //=x.
        $(document).ready(function () {
            $(".example").hover(function () {
                    $(this).next().css("animation-name", "ex");
                    $(this).css("opacity", "0.8");
                    $(this).css("z-index", "100");
                    $(this).css("background-color", "#fff");
                    $(this).css("-webkit-filter", "blur(4px)");
                    $(this).css("filter", "blur(4px)");
                    $(this).css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                },
                function () {
                    $(this).next().css("animation-name", "antiex");
                    $(this).css("opacity", "1");
                    $(this).css("z-index", "100");
                    $(this).css("background-color", "none");
                    $(this).css("-webkit-filter", "blur(0px)");
                    $(this).css("filter", "blur(0px)");
                    $(this).css("box-shadow", "0px 0px 5px 5px gray");
                }
            );

            $(".de").hover(function () {
                $(this).css("animation-name", "ex");
                $(this).prev().css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                $(this).css("cursor", "pointer");
                $(this).prev().css("opacity", "0.8");
                $(this).prev().css("z-index", "100");
                $(this).prev().css("background-color", "#fff");
                $(this).prev().css("-webkit-filter", "blur(4px)");
                $(this).prev().css("filter", "blur(4px)");

            }, function () {
                $(this).css("animation-name", "antiex");
                $(this).prev().css("opacity", "1");
                $(this).prev().css("z-index", "100");
                $(this).prev().css("background-color", "none");
                $(this).prev().css("-webkit-filter", "blur(0px)");
                $(this).prev().css("filter", "blur(0px)");
                $(this).prev().css("box-shadow", "0px 0px 5px 5px gray");

            });

            $(document).on("click", "td", function () {
                x = $(this).data("index");
                $("#figtext").text($(this).data("im"));
                x = Number(x);
                if (x == tdlen) {
                    nextnum = "1";
                }
                //else if ($(this).data("index")= 8){nextnum="10";}
                else {
                    var nextnumtxt = Number($(this).data("index")) + 1;
                    nextnum = nextnumtxt.toString();

                    var prevnumtxt = Number($(this).data("index"));
                    prevnum = prevnumtxt.toString();
                }
            });
            $(document).on("click", ".nxt", function () {
                $("#figtext").text($("td[data-index=" + nextnum + "]").data("im"));
                document.getElementById("previmg").src = $("td[data-index=" + nextnum + "]").data("url");
                prevnum = nextnum;
                var xx = Number(nextnum);
                if (xx == tdlen) {
                    nextnum = "1";

                } else {
                    var nextnumtxt = Number(nextnum) + 1;
                    nextnum = nextnumtxt.toString();
                }

            });
            $(document).on("click", ".prev", function () {
                $("#figtext").text($("td[data-index=" + prevnum + "]").data("im"));
                document.getElementById("previmg").src = $("td[data-index=" + prevnum + "]").data("url");
                nextnum = prevnum;
                var xx = Number(prevnum);
                if (xx == 1) {
                    prevnum = tdlen;

                } else {
                    var prevnumtxt = Number(prevnum) - 1;
                    prevnum = prevnumtxt.toString();
                }

            });

            $(".dabus").hover(function () {
                $(this).next().next().css("animation-name", "ex");
                $(this).next().css("opacity", "0.8");
                $(this).next().css("z-index", "100");
                $(this).next().css("background-color", "#fff");
                $(this).next().css("-webkit-filter", "blur(4px)");
                $(this).next().css("filter", "blur(4px)");
                $(this).next().css("box-shadow", " 0 0 7px 7px rgba(0, 140, 186, 0.3), 0px 0px 5px 5px gray");
                $(this).css("cursor", "pointer");
            }, function () {
                $(this).next().next().css("animation-name", "antiex");
                $(this).next().css("opacity", "1");
                $(this).next().css("z-index", "100");
                $(this).next().css("background-color", "none");
                $(this).next().css("-webkit-filter", "blur(0px)");
                $(this).next().css("filter", "blur(0px)");
                $(this).next().css("box-shadow", "0px 0px 5px 5px gray");
            });
        });

        function ex() {
            $(document).mouseup(function (e) {
                var container = $("#previmg");
                var figcap = $("#figcaptiondata");
                var ntinxtex = $(".nxt");
                var prinxtex = $(".prev");
                var figp = $("#figtext");

                if (!container.is(e.target) && !figcap.is(e.target) && !prinxtex.is(e.target) && !ntinxtex.is(e.target) && !figp.is(e.target)) {
                    antiprev()
                }
            });
        }
