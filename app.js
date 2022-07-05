var btn = document.getElementById('btn')
btn.onclick=()=>{
    var valueKredit = document.getElementById("kredit").value
    var valueFaiz=document.getElementById('faiz').value
    var valueSelect=document.getElementById('select').value
    var kredit=parseInt(valueKredit);
    var faiz=parseInt(valueFaiz);
    var muddet=parseInt(valueSelect);
    var faizsizMebleg=kredit/muddet;
    document.getElementById('umumi-mebleg').innerHTML=`${faizsizMebleg}`


    

}
