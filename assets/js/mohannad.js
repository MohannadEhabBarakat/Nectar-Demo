function ar() {
    document.getElementById('en-nav').style.display = "none";
    document.getElementById('ar-nav').style.display = "block";

    var etxt = document.getElementsByClassName("entxt");
    var atxt = document.getElementsByClassName("artxt");
    for (i = 0; i < etxt.length; i++) {
        etxt[i].style.display = "none";
        atxt[i].style.display = "block";
    }
}

function en(x) {
    x = x || 0;
    document.getElementById('en-nav').style.display = "block";
    document.getElementById('ar-nav').style.display = "none";
    var etxt = document.getElementsByClassName("entxt");
    var atxt = document.getElementsByClassName("artxt");
    for (i = 0; i < etxt.length; i++) {
        etxt[i].style.display = "block";
        atxt[i].style.display = "none";
    }
}



function arvsen() {
    var txt = "";
    var url = window.location.href;
    var hashtag = /#/i;
    var exp = /ar$/;
        var ac = exp.exec(url);
        if (ac == "ar") {
            ar();
        }
        else{
            en();
        }
    if (url.match(hashtag) == "#") {
        txt = url.split("#")[1];
        if (txt=="About"){
            document.getElementById("ifAbout").src="/pages/About/About.html";
        }
    } else {
        en();
    }

}

function wait() {
    arvsen();
    document.getElementById('landpage').classList.remove("page-section-current");
}
