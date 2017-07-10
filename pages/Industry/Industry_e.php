<?php 
session_start();
if (isset($_SESSION["al"])){
                                
$cls = $_GET["cls"];
$h3 = $_GET["h3"];
$p = $_GET["p"];
$color = $_GET["color"];
$max = $_GET["max"];
$maxNum=(int)(substr($max,1));


// Load the HTML document
$dom = new DOMDocument;

// we want a nice output
$dom->formatOutput = true;
$dom->validateOnParse = true;

libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Industry.html');

/*
<i class="fa fa-ellipsis-v sp" aria-hidden="true"></i>
                    <i class="fa fa-pencil-square-o sp" aria-hidden="true" onclick="edit(this)"></i>
                    <i class="fa fa-window-close sp" aria-hidden="true" onclick=""></i>
                    <br>
                    <div class="button-container-2 edit_b">
                        <span class="mas">Save</span><button class="edSave" type="button" name="Hover">Save</button>
                    </div>
                    <div class="button-container-1 edit_b">
                        <span class="mas">Cancle</span><button onclick="edit_cancel(this)" type="button" name="Hover">Cancle</button>
                    </div>
                    <div class="service-div text-center">
                        <div class="icon-container orange-bg">
                            <i class="fa fa-gear fa-3"></i>
                        </div>
                        <h3>Web developement</h3>
                        <p class="text-left">Cras metus sem, mattis et volutpat ac, dignissim quis arcu. Fusce pretium suscipit mauris, in rhoncus arcu. Pellentesque malesuada dolor a lorem ultrices dapibus vel eget neque.</p>
                    </div>
                    */
    
$parent = $dom->getElementById($max);
//first parent div

$dev0 = new DOMElement('div');
$parent->appendChild($dev0);
$dev0->setAttribute("class", "large-4 columns");
$dev0->setAttribute("id", "a".($maxNum+1));
    
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

$dev1 = new DOMElement('div');
$dev0->appendChild($dev1);    
$dev1->setAttribute("class", "service-div text-center");
    
$dev2 = new DOMElement('div');
$dev1->appendChild($dev2);    
$dev2->setAttribute("class", "icon-container ".$color);

$is = new DOMElement('i');
$dev2->appendChild($is); 
$is->setAttribute("class", "fa fa-".$cls." fa-3");

$h_3 = new DOMElement('h3');
$dev1->appendChild($h_3);
$h_3->setAttribute("class", "team-member-name");
$h_3->nodeValue = $h3;
    
$p2 = new DOMElement('p');
$dev1->appendChild($p2);
$h_3->setAttribute("class", "text-left");
$p2->nodeValue = $p;

$parent->setAttribute("id", "p".($maxNum+1));


// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("Industry.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>
