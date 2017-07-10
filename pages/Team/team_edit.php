<?php 
session_start();
if (isset($_SESSION["al"])){

$img_url= $_GET["img_url"];
$h= $_GET["h"];
$h4i= $_GET["h4i"];
$p= $_GET["p"];
$id= $_GET["id"];
 

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Team.html');
$img = $dom->getElementById($id)->getElementsByTagName('div')->item(0)->getElementsByTagName('div')->item(0)->getElementsByTagName('img')->item(0);
$h3 = $dom->getElementById($id)->getElementsByTagName('h3')->item(0);
$h4 = $dom->getElementById($id)->getElementsByTagName('h4')->item(0);
$par = $dom->getElementById($id)->getElementsByTagName('p')->item(0);

$img->setAttribute('src',$img_url);
$h3->nodeValue = $h;
$h4->nodeValue = $h4i;
$par->nodeValue = $p;

echo 'Wrote: ' . $dom->saveHTMLFile("Team.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>

