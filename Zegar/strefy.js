function strefy()
{
var dzisiaj=new Date();
var rok=dzisiaj.getFullYear();

var miesiac=dzisiaj.getMonth()+1;
	if (miesiac<10) miesiac="0"+miesiac;
var dzien=dzisiaj.getDate();
	if (dzien<10) dzien="0"+dzien;
var godzina=dzisiaj.getHours();

	if (godzina<10) godzina="0"+godzina;
var minuta=dzisiaj.getMinutes();
	if (minuta<10) minuta="0"+minuta;
var sekunda=dzisiaj.getSeconds();
	if (sekunda<10) sekunda="0"+sekunda;
var czas="";
czas=godzina+":"+minuta+":"+sekunda;
document.getElementById("cWarsaw").innerHTML=czas;

var czas1="";
var godzina1=godzina-6;
if (godzina1<0) godzina1=24+godzina1;
czas1=godzina1+":"+minuta+":"+sekunda;
document.getElementById("cNewYork").innerHTML=czas1;

var czas2="";
var godzina2=godzina-1;
if(godzina2<0) godzina2=24+godzina2;
czas2=godzina2+":"+minuta+":"+sekunda;
document.getElementById("cLondon").innerHTML=czas2;

var czas3="";
var godzina3=godzina-4;
if(godzina3<0) godzina3=24+godzina3;
czas3=godzina3+":"+minuta+":"+sekunda;
document.getElementById("cNewDelhi").innerHTML=czas3;

var czas4="";
var godzina4=godzina-7;
if(godzina4<0) godzina4=24+godzina4;
czas4=godzina4+":"+minuta+":"+sekunda;
document.getElementById("cTokio").innerHTML=czas4;

var czas5="";
var godzina5=godzina-10;
if(godzina5<0) godzina5=24+godzina5;
czas5=godzina5+":"+minuta+":"+sekunda;
document.getElementById("cSydney").innerHTML=czas5;

setTimeout("strefy()",1000);
}