const baku=document.querySelector("#baku");
const new_york=document.querySelector("#new-york");
const moscow=document.querySelector("#moscow");
const btn_stop=document.querySelector("#btn-stop")

const date =new Date();

function dateFunc(){
    baku.innerHTML="BAKU:"+moment().format('MMMM Do YYYY, h:mm:ss a');
    new_york.innerHTML="NEW-YORK:"+moment().add(9 , 'hours').format('MMMM Do YYYY, h:mm:ss a');
    moscow.innerHTML="MOSCOW:"+moment().add(-1 , 'hours').format('MMMM Do YYYY, h:mm:ss a');

}
dateFunc();
const set=setInterval(dateFunc,1000);

btn_stop.addEventListener("click",()=>{
    clearInterval(set)

})









