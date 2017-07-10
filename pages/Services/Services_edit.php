<?php 
session_start();
if (isset($_SESSION["al"])){

$cls= $_GET["cls"];
$h= $_GET["h"];
$p= $_GET["p"];
$id= $_GET["id"];
 

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Services.html');

$parent = $dom->getElementById($id)->getElementsByTagName('div')->item(2);
$i = $parent->getElementsByTagName('div')->item(0)->getElementsByTagName('i')->item(0);
$h3 = $parent->getElementsByTagName('h3')->item(0);
$par = $parent->getElementsByTagName('p')->item(0);

$i->setAttribute('class',"fa fa-".$cls." fa-3");
$h3->nodeValue = $h;
$par->nodeValue = $p;

echo 'Wrote: ' . $dom->saveHTMLFile("Services.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>

