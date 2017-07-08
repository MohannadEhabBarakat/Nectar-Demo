"use strict";
var hi = "";
var h4i = "";
var pi = "";
var ha;
var h4a;
var pa;
var tp;

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
    var dv = tis.parentElement;

    hi = dv.getElementsByTagName("h3")[0].innerHTML;
    h4i = dv.getElementsByTagName("h4")[0].innerHTML;
    ha = dv.getElementsByTagName("h3")[0].attributes;
    h4a = dv.getElementsByTagName("h4")[0].attributes;

    pi = dv.getElementsByTagName("p")[0].innerHTML;
    pa = dv.getElementsByTagName("p")[0].attributes;

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
    dv.getElementsByClassName("team-member-desc")[0].remove();

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

    dv.getElementsByClassName("edit_b")[0].style.display = "none";
    dv.getElementsByClassName("edit_b")[1].style.display = "none";
    return true;
}

function edit_cancel(ths) {
    var dv = ths.parentElement.parentElement;
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();
    dv.getElementsByTagName("textarea")[0].remove();

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
}

function del(ths) {
    ths.parentElement.remove();
}
