window.onload = showTime;

let name=prompt("Lutfen adinizi giriniz:")

let info=document.querySelector("#myName").innerHTML=`${name}`;


function showTime()
{
let dates= new Date();
let h=dates.getHours();
let m=dates.getMinutes();
let s=dates.getSeconds();
let d=dates.getUTCDay();

if(d==1)
d="Pazartesi";
if(d==2)
d="Sali";
if(d==3)
d="Carsamba";
if(d==4)
d="Persembe";
if(d==5)
d="Cuma";
if(d==6)
d="Cumartesi";
if(d==7)
d="Pazar";


h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.querySelector("#myClock").innerHTML=`${h}:${m}:${s} ${d}`;
t=setTimeout('showTime()',1000);
}



function checkTime(i)
{
    if (i<10)
    {i="0"+i;}
    return i;
}