"use strict";
var hi = "";
var h4i = "";
var pi = "";
var ha;
var h4a;
var pa;
var tp;
var src;

function dis() {
    $("#flot").css("display", "block");
    $("#add").css("display", "none");
}



function cancel() {
    document.getElementById("h_3").value = "";
    document.getElementById("par").value = "";
    $("#h_r").prop("checked", false);
    $("#flot").css("display", "none");
    $("#add").css("display", "block");
}



function edit(tis) {
    //<i class="fa fa-gear fa-3"></i>
    var dv = tis.parentElement.getElementsByClassName("service-div")[0];

    hi = dv.getElementsByTagName("h3")[0].innerHTML;
    ha = dv.getElementsByTagName("h3")[0].attributes;

    pi = dv.getElementsByTagName("p")[0].innerHTML;
    pa = dv.getElementsByTagName("p")[0].attributes;
    
    var para0 = document.createElement("textarea");
    dv.getElementsByClassName("icon-container")[0].appendChild(para0);
    
    var para = document.createElement("textarea");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    var para3 = document.createElement("textarea");
    var node3 = document.createTextNode(pi);
    para3.appendChild(node3);
    dv.appendChild(para3);

    dv.getElementsByTagName("textarea")[2].style.height = '500px';

    dv.parentElement.getElementsByClassName("edit_b")[0].style.display = "inline-block";
    dv.parentElement.getElementsByClassName("edit_b")[1].style.display = "inline-block";

    dv.getElementsByTagName("h3")[0].remove();
    dv.getElementsByTagName("p")[0].remove();

}

function edit_save(ths) {
    var dv = ths.parentElement.parentElement.getElementsByClassName("service-div")[0];

    hi = dv.getElementsByTagName("textarea")[0].value;
    pi = dv.getElementsByTagName("textarea")[1].value;


    var para = document.createElement("h3");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    var para2 = document.createElement("p");
    var node2 = document.createTextNode(pi);
    para2.appendChild(node2);
    dv.appendChild(para2);

    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.parentElement.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.parentElement.getElementsByClassName("edit_b")[1].style.display = "none";
    return true;
}

function edit_cancel(ths) {
    var dv = ths.parentElement.parentElement.getElementsByClassName("service-div")[0];
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();

    var para = document.createElement("h3");
    var node = document.createTextNode(hi);
    para.appendChild(node);
    dv.appendChild(para);

    var para4 = document.createElement("p");
    var node4 = document.createTextNode(pi);
    para4.appendChild(node4);
    dv.appendChild(para4);

    dv.parentElement.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.parentElement.getElementsByClassName("edit_b")[1].style.display = "none";
}

function del(ths) {
    ths.parentElement.remove();
}
$(document).ready(function () {
    $('.edSave').click(function () {

        var dv = this.parentElement.parentElement;
        var cls = dv.getElementsByTagName("textarea")[0].value;
        var hi = dv.getElementsByTagName("textarea")[1].value;
        var pi = dv.getElementsByTagName("textarea")[2].value;
        var id = $(this).parent().parent().attr("id");

        $.ajax({
            url: 'Services_edit.php',
            type: 'GET',
            data: {
                cls:cls,
                h: hi,
                p: pi,
                id: id
            },
            success: function (data) {
                alert(data);

            }
        });
    })
});

function brn() {
    var cls = document.getElementById("icon").value;
    var h3 = document.getElementById("h_3").value;
    var pdata = document.getElementById("par").value;
    var e = document.getElementById("color");
    var color = e.options[e.selectedIndex].value;
    var max = $(".services-divs:eq(0)").attr("id");
    
    $.ajax({
        url: 'Services_e.php',
        type: 'GET',
        data: {
            cls: cls,
            h3: h3,
            p: pdata,
            color:color,
            max: max
        },
        success: function (data) {
            alert(data);

        }
    });
};
