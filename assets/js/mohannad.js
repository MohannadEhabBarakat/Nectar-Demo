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
    } else {
        en();
    }
    if (url.match(hashtag) == "#") {
        txt = url.split("#")[1];
        if (txt == "About") {
            document.getElementById("ifAbout").src = "/pages/About/About.html";
        }
    } else {
        en();
    }

}

function wait() {
    arvsen();
    document.getElementById('landpage').classList.remove("page-section-current");
}

var xa = Array;
var ia = 0;
var c="";
var c2="";
Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa[ia] = new Date().getTime() + '_' ;
        ia = ia + 1;
        c=xa[ia - 1]+ filename;
        return c; 
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};
var xp = Array;
var ip = 0;
Dropzone.options.myzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    acceptedFiles: ".pdf",
    maxFiles: 1,
    renameFilename: function (filename) {
        c2=xa[ia - 1]+filename;
        return c2;
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
    }
};

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var name = "";
var city = "";
var Nationality = "";
var Qualification = "";
var FB = "";
var linkedin = "";
var Email = "";
var Phone = "";
var Birth;
var Gender = "";
var Specialization = "";

function next(x) {
    if (x == 1) {
        name = $("#name").val();
        city = $("#city").val();
        Nationality = $("#Nationality").val();
        if (name.trim() == "") {
            $("#city").css("border-color", "#fff");
            $("#p1").html("Please enter your Name");
            $("#name").css("border-color", "red");
        } else if (city.trim() == "") {
            $("#name").css("border-color", "#fff");
            $("#p1").html("Please enter your City");
            $("#city").css("border-color", "red");
        } else {
            $("#p1").html("");
            $("#name").css("border-color", "#fff");
            $("#city").css("border-color", "#fff");
            $("#pageone").toggle("slide");
            $("#pagetwo").toggle("slide");
        }
    } else if (x == 2) {
        Qualification = $("#Qualification").val();
        if (Qualification.trim() == "") {
            $("#Qualification").css("border-color", "red");
            $("#p2").html("Please enter your Qualification");
        } else {
            $("#pagetwo").toggle("slide");
            $("#pagethree").toggle("slide");
            $("#Qualification").css("border-color", "#fff");
            $("#p2").html("");
        }
    } else if (x == 3) {
        Email = $("#Email").val();
        Phone = $("#Phone").val();
        Birth = $("#Birth").val();
        FB = $("#FB").val();
        linkedin = $("#linkedin").val();
        Gender = $('input[name="gender"]:checked').val();
        Specialization = $("#Specialization").val();

        if (Email.trim() == "") {
            $("#Email").css("border-color", "red");
            $("#p3").html("Please enter your Email");
            $("#Phone").css("border-color", "#fff");

        } else if (Phone.trim() == "") {
            $("#Phone").css("border-color", "red");
            $("#p3").html("Please enter your Phone");
            $("#Email").css("border-color", "#fff");
        } else if (Gender == undefined) {
            $("#p3").html("Please enter your Gender");
            $("#Email").css("border-color", "#fff");
            $("#Phone").css("border-color", "#fff");

        } else {
            $("#Email").css("border-color", "#fff");
            $("#Phone").css("border-color", "#fff");
            $("#p3").html("");
            $("#pagethree").toggle("slide");
            $("#pagefour").toggle("slide");
            mail()
        }
    } else if (x == 4) {

        $("#pagefour").toggle("slide");
        $("#pageone").toggle("slide");

    }
}


function mail() {
    var text = "<h2 style='text-align:center;color:blue;'>I'm " + name + "<sub>(" + Gender + ")</sub></h2><h3 style='text-align:center;'>I live in " + city + "</h3>" + "<p> I was Borne " + Birth + "</p><br><p>I have finshed " + Qualification + "</p><br><p style:'color:red;'> It will be my pleasure to help in " + Specialization + " department</p><br><hr><p>Please fell free to contact me on </p><br><ul><li><a href='"+FB+"'> Facebook "+ FB +"</a></li><li><a href='"+linkedin+"'> Linked In "+ linkedin +"</a></li><li> My phone number is " + Phone + "</li></ul>" + " For my CV and my Photo please cheak the attached files ";
    $.ajax({
        url: 'benectarian.php',
        data: {
            text: text,
            x: c,
            xp: c2,
            name:name
        },
        success: function (data) {
            if (data == 1) {
                $(".final_alert").css("visibility", "visible");
            }else{
                alert(data)
            }
        }

    });
}
