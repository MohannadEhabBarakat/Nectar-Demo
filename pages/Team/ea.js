"use strict";
var hi = "";
var h4i = "";
var pi = "";
var ha;
var h4a;
var pa;
var tp;
var src;
var x = Array;
var i = 0;
var img_url;
var xa2 = Array;
var ia2 = 0;
var xa = Array;
var ia = 0;

Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa2[ia2] = new Date().getTime() + '_' + filename;
        ia2 = ia2 + 1;
        return xa2[ia2 - 1];
    },
    accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
            done("Naha, you don't.");
        } else {
            done();
        }
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
        $.ajax({
            url: '../img_del.php',
            data: {
                x: xa2[xa2.length - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
    }
};
Dropzone.options.myDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 1, // MB
    acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
    maxFiles: 1,
    resizeWidth: 250,
    renameFilename: function (filename) {
        xa[ia] = new Date().getTime() + '_' + filename;
        ia = ia + 1;
        return xa[ia - 1];
    },
    accept: function (file, done) {
        if (file.name == "justinbieber.jpg") {
            done("Naha, you don't.");
        } else {
            done();
        }
    },
    maxfilesexceeded: function (file) {
        this.removeAllFiles();
        this.addFile(file);
        $.ajax({
            url: '../img_del.php',
            data: {
                x: xa[xa.length - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
    }
};


function dis() {
    $("#flot").css("display", "block");
    $("#add").css("display", "none");
}

function dis2() {
    $("#flot2").css("display", "block");
    $("#add2").css("display", "none");
}

function cancel() {
    document.getElementById("h_3").value = "";
    document.getElementById("par").value = "";
    $("#h_r").prop("checked", false);
    $("#flot").css("display", "none");
    $("#add").css("display", "block");
}

function cancel2() {
    document.getElementById("h_3_2").value = "";
    document.getElementById("h_4_2").value = "";
    document.getElementById("par_2").value = "";
    $("#flot2").css("display", "none");
    $("#add2").css("display", "block");
    if (ia2 > 0) {
        $.ajax({
            url: '../img_del.php',
            data: {
                x: xa2[ia2 - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
       Dropzone.forElement("#myAwesomeDropzone").removeAllFiles(true);
    }
}

function edit(tis) {
    var dv = tis.parentElement;
    var dv2 = dv.getElementsByClassName("team-member-picture")[0];

    hi = dv.getElementsByTagName("h3")[0].innerHTML;
    h4i = dv.getElementsByTagName("h4")[0].innerHTML;
    ha = dv.getElementsByTagName("h3")[0].attributes;
    h4a = dv.getElementsByTagName("h4")[0].attributes;

    pi = dv.getElementsByTagName("p")[0].innerHTML;
    pa = dv.getElementsByTagName("p")[0].attributes;

    src = dv2.getElementsByTagName("img")[0].src;

    var para0 = document.createElement("form");
    para0.classList.add('dropzone');
    para0.id = "myAwesomezone";
    para0.action = "../upload.php";
    dv2.appendChild(para0);

    var para = document.createElement("textarea");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    tp = $("<textarea class='p'></textarea>").text(pi);

    var para2 = document.createElement("textarea");
    var node2 = document.createTextNode(h4i);
    para2.appendChild(node2);
    dv.appendChild(para2);

    var para3 = document.createElement("textarea");
    var node3 = document.createTextNode(pi);
    para3.appendChild(node3);
    dv.appendChild(para3);


    dv.getElementsByTagName("textarea")[2].style.height = '500px';

    dv.getElementsByClassName("edit_b")[0].style.display = "inline-block";
    dv.getElementsByClassName("edit_b")[1].style.display = "inline-block";

    dv.getElementsByTagName("h3")[0].remove();
    dv.getElementsByTagName("h4")[0].remove();
    dv.getElementsByTagName("p")[0].remove();
    dv2.getElementsByTagName("img")[0].remove();
    dv.getElementsByClassName("team-member-desc")[0].remove();


    $("#myAwesomezone").dropzone({
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 1, // MB
        acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF",
        maxFiles: 1,
        resizeWidth: 250,
        renameFilename: function (filename) {
            x[i] = new Date().getTime() + '_' + filename;
            i = i + 1;
            return x[i - 1];
        },
        accept: function (file, done) {
            if (file.name == "justinbieber.jpg") {
                done("Naha, you don't.");
            } else {
                done();
            }
        },
        maxfilesexceeded: function (file) {
            this.removeAllFiles();
            this.addFile(file);
            $.ajax({
                url: '../img_del.php',
                data: {
                    x: "../../assets/images/" + x[x.length - 1]
                },
                success: function (data) {
                    alert("hi " + data);
                }

            });
        }

    });

}

function edit_save(ths) {
    var dv = ths.parentElement.parentElement;

    hi = dv.getElementsByTagName("textarea")[0].value;
    pi = dv.getElementsByTagName("textarea")[1].value;


    var para = document.createElement("h3");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    tp = $("<textarea class='p'></textarea>").text(pi);

    var para2 = document.createElement("p");
    var node2 = document.createTextNode(pi);
    para2.appendChild(node2);
    dv.appendChild(para2);

    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    src = dv2.getElementsByTagName("img")[0].remove();
    dv.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.getElementsByClassName("edit_b")[1].style.display = "none";
    return true;
}

function edit_cancel(ths) {
    var dv = ths.parentElement.parentElement;
    var dv2 = dv.getElementsByClassName("team-member-picture")[0];
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv2.getElementsByTagName("form")[0].remove();

    var para0 = document.createElement("img");
    para0.setAttribute("src", src);
    dv2.appendChild(para0);

    var para = document.createElement("h3");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    var para2 = document.createElement("h4");
    var node2 = document.createTextNode(h4i);
    para2.appendChild(node2);
    dv.appendChild(para2);

    var para3 = document.createElement("div");
    para3.classList.add('team-member-desc');
    para3.classList.add('text-left');
    dv.appendChild(para3);

    var para4 = document.createElement("p");
    var node4 = document.createTextNode(pi);
    para4.appendChild(node4);
    dv.getElementsByClassName("team-member-desc")[0].appendChild(para4);

    dv.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.getElementsByClassName("edit_b")[1].style.display = "none";
    if (i > 0) {
        $.ajax({
            url: '../img_del.php',
            data: {
                x: "../../assets/images/" + x[i - 1]
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
    }
}

function del(ths) {
    ths.parentElement.remove();
}
$(document).ready(function () {
    $('.edSave').click(function () {

        var dv = this.parentElement.parentElement;
        if (i > 0) {
            img_url = "../../assets/images/" + x[i - 1];
            $.ajax({
            url: '../img_del_url.php',
            data: {
                x: src
            },
            success: function (data) {
                alert("hi " + data);
            }

        });
        } else {
            img_url = src;
        }
        var hi = dv.getElementsByTagName("textarea")[0].value;
        var h4i = dv.getElementsByTagName("textarea")[1].value;
        var pi = dv.getElementsByTagName("textarea")[2].value;
        var id = $(this).parent().parent().parent().attr("id");
        
        $.ajax({
            url: 'team_edit.php',
            type: 'GET',
            data: {
                img_url: img_url,
                h: hi,
                h4i: h4i,
                p: pi,
                id: id
            },
            success: function (data) {
                alert(data);

            }
        });
        setTimeout(function () {
            location.reload();
        }, 100);
    })
});

function brn2() {
    if (ia2 > 0) {
        var img = "../../assets/images/" + xa2[ia2 - 1];
        
    } else {
        var img = "";
    }
    var h3 = document.getElementById("h_3_2").value;
    var h4 = document.getElementById("h_4_2").value;
    var pdata = document.getElementById("par_2").value;
    var max = $("section ul:first-of-type").attr("id");
    $.ajax({
        url: 'Team_e.php',
        type: 'GET',
        data: {
            img_src: img,
            h3: h3,
            h4: h4,
            p: pdata,
            max: max,
            num: 0,
            let: "a"
        },
        success: function (data) {
            alert(data);

        }
    });
};
function brn() {
    if (ia > 0) {
        var img = "../../assets/images/" + xa[ia - 1];
    } else {
        var img = "";
    }
    var h3 = document.getElementById("h_3").value;
    var h4 = document.getElementById("h_4").value;
    var pdata = document.getElementById("par").value;
    var max = $("section ul:last-of-type").attr("id");
    $.ajax({
        url: 'Team_e.php',
        type: 'GET',
        data: {
            img_src: img,
            h3: h3,
            h4: h4,
            p: pdata,
            max: max,
            num: 1,
            let: "b"
        },
        success: function (data) {
            alert(data);

        }
    });
};
