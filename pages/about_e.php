<?php 
session_start();
echo $_GET["m"];
echo $_GET["n"];

$m = $_GET["m"];
$n = $_GET["n"];
$max= $_GET["max"];
$maxNum=(int)(substr($max,1));

// Load the HTML document
$dom = new DOMDocument;

// we want a nice output
$dom->formatOutput = true;

libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'About.html');


$parent = $dom->getElementsByTagName('section')->item(0)->childNodes->item(0);
//first parent div
$div = new DOMElement('div');
$hr = new DOMElement('hr');
$parent->appendChild($hr);
$parent->appendChild($div);
$hr->setAttribute("class", "about-hr");
$div->setAttribute("class", "large-12 columns page-sub-title text-center");
$hr->setAttribute("id", "a".($maxNum+1));
$div->setAttribute("id", "a".($maxNum+2));

$i1 = new DOMElement('i');
$i2 = new DOMElement('i');
$i3 = new DOMElement('i');

$div->appendChild($i1);
$div->appendChild($i2);
$div->appendChild($i3);

$i1->setAttribute("class", "fa fa-ellipsis-v");
$i1->setAttribute("aria-hidden", "true");

$i2->setAttribute("class", "fa fa-pencil-square-o");
$i2->setAttribute("aria-hidden", "true");
$i2->setAttribute("onclick", "edit(this)");

$i3->setAttribute("class", "fa fa-window-close");
$i3->setAttribute("aria-hidden", "true");
$i3->setAttribute("onclick", "del(this)");

$h3 = new DOMElement('h3');
$div->appendChild($h3);
$h3->setAttribute("class", "imp-en-word no-font");
$h3->nodeValue = $m;

$p = new DOMElement('p');
$div->appendChild($p);
$p->nodeValue = $n;

$divch1 = new DOMElement('div');
$div->appendChild($divch1);
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
$div->appendChild($divch2);
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

$parent->setAttribute("id", "p".($maxNum+2));


// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("About.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
?>
