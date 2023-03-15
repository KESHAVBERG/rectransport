let dt1=document.getElementById("dt1");
let dt2=document.getElementById("dt2");
let dt3=document.getElementById("dt3");
let dt4=document.getElementById("dt4");
let dt5=document.getElementById("dt5");
let dt6=document.getElementById("dt6");
let dt7=document.getElementById("dt7");
let today= document.getElementById('today');



document.addEventListener('DOMContentLoaded',(e)=>
{
let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const d = new Date();
const date=d.getDate();
const nth=(date)=>
{
    if(date>3 && date<21) return 'th';
    switch(date%10)
    {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default:return 'th';
    }
}
var span1 = `<sup>${nth(d.getDate())}</sup>`;
var span2 = `<sup>${nth(d.getDate()+1)}</sup>`;
var span3 = `<sup>${nth(d.getDate()+2)}</sup>`;
var span4 = `<sup>${nth(d.getDate()+3)}</sup>`;
var span5 = `<sup>${nth(d.getDate()+4)}</sup>`;
var span6 = `<sup>${nth(d.getDate()+5)}</sup>`;
var span7 = `<sup>${nth(d.getDate()+6)}</sup>`;

dt1.innerHTML=d.getDate()+span1+" "+days[d.getDay()];
dt2.innerHTML=(d.getDate()+1)+span2+" "+days[(d.getDay()+1)%7];
dt3.innerHTML=(d.getDate()+2)+span3+" "+days[(d.getDay()+2)%7];
dt4.innerHTML=(d.getDate()+3)+span4+" "+days[(d.getDay()+3)%7];
dt5.innerHTML=(d.getDate()+4)+span5+" "+days[(d.getDay()+4)%7];
dt6.innerHTML=(d.getDate()+5)+span6+" "+days[(d.getDay()+5)%7];
dt7.innerHTML=(d.getDate()+6)+span7+" "+days[(d.getDay()+6)%7];
today.innerHTML="Today "+ days[d.getDay()]+", "+d.getDate()+span1+" "+months[d.getMonth()]+" "+d.getFullYear();

})

// nav bar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

// foo table

$(function () {
    $('.table').footable();
  });

// Modals

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});