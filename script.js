//fetching all required data
var $list=document.getElementById("list");
var $inc=document.getElementById("money-plus");
var $exp=document.getElementById("money-minus");
var $bal=document.getElementById("balance");
var $btn=document.getElementsByClassName("btn")[0];

var prev_inc=0;
var prev_exp=0;
var prev_bal=0;

$btn.addEventListener("click",function(event){
    event.preventDefault();
    //input values
    var key=document.getElementById("text").value;
    var val=Number(document.getElementById("amount").value);

    //storing key value in local storage
    localStorage.setItem(key,val);
    //Add Update
    if(val>0){
        var $li=document.createElement("li");
        $li.textContent=key +" "+ val;
        $list.appendChild($li);
        $li.classList.add("plus")
        prev_inc += val;
        prev_bal += val;
        $inc.innerHTML=`$ ${prev_inc}`
        $bal.innerHTML=`$ ${prev_bal}`
        }
    else if(val<0){
        var $li=document.createElement("li");
        $li.textContent=key +" "+ val;
        $list.appendChild($li);
        $li.classList.add("minus")
        prev_exp += val;
        prev_bal += val;
        $exp.innerHTML=`$ ${Math.abs(prev_exp)}`
        $bal.innerHTML=`$ ${prev_bal}`
        }
    })
