<?php 
session_start();
if (isset($_SESSION["al"])){
                                
$img_src = $_GET["img_src"];
$h3 = $_GET["h3"];
$h4= $_GET["h4"];
$p = $_GET["p"];
$max = $_GET["max"];
$num= $_GET["num"];
$let= $_GET["let"];
$maxNum=(int)(substr($max,2));

// Load the HTML document
$dom = new DOMDocument;

// we want a nice output
$dom->formatOutput = true;

libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Team.html');
/*
    <li id="a1">
                    <div class="team-member-item" id="mohannad">
                        <div class="team-member-picture">
                            <img width="400" height="300" src="../../assets/images/ehab%20barakat.png" alt="Ehab Barakat" style="margin-top: -45px;margin-right: -3px;">
                        </div>
                        <i class="fa fa-ellipsis-v sp" aria-hidden="true"></i>
                        <i class="fa fa-pencil-square-o sp" aria-hidden="true" onclick="edit(this)"></i>
                        <i class="fa fa-window-close sp" aria-hidden="true" onclick=""></i>
                        <h3 class="team-member-name">Ehab Barakat</h3>
                        <h4>Founder&amp;Chairman of the board of trustees</h4>
                        <div class="team-member-desc text-left">
                            <ul>
                                <li>BA, and MA in Electronic and Biomedical Engineering</li>
                                <li>University Diploma in Management</li>
                                <li>Head of Grand Award Judges, Intel ISEF-Egypt</li>
                                <li>Grand Award Judge, Intel ISEF</li>
                                <li>Grand Award Judge, Intel Science Competition-Arab region (ISC-Arab)</li>
                                <li>WHO Consultant</li>
                            </ul>
                        </div>
                        <div class="button-container-2 edit_b">
                            <span class="mas">Save</span><button class="edSave" type="button" name="Hover">Save</button>
                        </div>
                        <div class="button-container-1 edit_b">
                            <span class="mas">Cancle</span><button onclick="edit_cancel(this)" type="button" name="Hover">Cancle</button>
                        </div>

                    </div>
                </li>
*/
    
$parent = $dom->getElementsByTagName('ul')->item($num);
//first parent div
$li = new DOMElement('li');
$parent->appendChild($li);
$li->setAttribute("id", $let.($maxNum+1));


$dev0 = new DOMElement('div');
$li->appendChild($dev0);
$dev0->setAttribute("class", "team-member-item");
//$dev0->setAttribute("id", "mohannad");

$dev1 = new DOMElement('div');
$dev0->appendChild($dev1);    
$dev1->setAttribute("class", "team-member-picture");

$img = new DOMElement('img');
$dev1->appendChild($img);    
$img->setAttribute("width", "400");
$img->setAttribute("height", "300");
$img->setAttribute("src", $img_src);
$img->setAttribute("alt", $h3);
$img->setAttribute("style", "margin-top: -45px;margin-right: -3px;");
    
$i1 = new DOMElement('i');
$i2 = new DOMElement('i');
$i3 = new DOMElement('i');
$br = new DOMElement('br');

$dev0->appendChild($i1);
$dev0->appendChild($i2);
$dev0->appendChild($i3);
$dev0->appendChild($br);

$i1->setAttribute("class", "fa fa-ellipsis-v sp");
$i1->setAttribute("aria-hidden", "true");

$i2->setAttribute("class", "fa fa-pencil-square-o sp");
$i2->setAttribute("aria-hidden", "true");
$i2->setAttribute("onclick", "edit(this)");

$i3->setAttribute("class", "fa fa-window-close sp");
$i3->setAttribute("aria-hidden", "true");
//$i3->setAttribute("onclick", "del(this)");

$h_3 = new DOMElement('h3');
$dev0->appendChild($h_3);
$h_3->setAttribute("class", "team-member-name");
$h_3->nodeValue = $h3;

$h_4 = new DOMElement('h4');
$dev0->appendChild($h_4);
$h_4->nodeValue = $h4;

$dev2 = new DOMElement('div');
$dev0->appendChild($dev2);    
$dev2->setAttribute("class", "team-member-desc text-left");
    
$p2 = new DOMElement('p');
$dev2->appendChild($p2);
$p2->nodeValue = $p;

$divch1 = new DOMElement('div');
$dev0->appendChild($divch1);
$divch1->setAttribute("class", "button-container-2 edit_b");

$span1 = new DOMElement('span');
$divch1->appendChild($span1);
$span1->setAttribute("class", "mas");
$span1->nodeValue = "Save";

$b1 = new DOMElement('button');
$divch1->appendChild($b1);
$b1->setAttribute("class", "edSave");
$b1->setAttribute("type", "button");
$b1->setAttribute("name", "Hover");
$b1->nodeValue = "Save";


$divch2 = new DOMElement('div');
$dev0->appendChild($divch2);
$divch2->setAttribute("class", "button-container-1 edit_b");

$span2 = new DOMElement('span');
$divch2->appendChild($span2);
$span2->setAttribute("class", "mas");
$span2->nodeValue = "Cancle";

$b2 = new DOMElement('button');
$divch2->appendChild($b2);
$b2->setAttribute("onclick", "edit_cancel(this)");
$b2->setAttribute("type", "button");
$b2->setAttribute("name", "Hover");
$b2->nodeValue = "Cancle";

$parent->setAttribute("id", "p".$let.($maxNum+1));


// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("Team.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>
