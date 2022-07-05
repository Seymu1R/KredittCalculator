var btn = document.getElementById("btn");
btn.onclick = () => {
  var valueKredit = document.getElementById("kredit").value;
  var valueFaiz = document.getElementById("faiz").value;
  var valueSelect = document.getElementById("select").value;
  var kredit = parseInt(valueKredit);
  var faiz = parseInt(valueFaiz);
  var muddet = parseInt(valueSelect);
  var ayliqfaiz = (faiz / 12) * muddet + 100;
  var umumikridit = (ayliqfaiz * kredit) / 100;
  var aylıqFaizlə = umumikridit / muddet;
  var umumiMeblegFaizle = aylıqFaizlə * muddet;
  document.getElementById("umumi-mebleg").innerHTML = `${umumikridit.toFixed(
    2
  )}`;
  document.getElementById("aylıq-odenis").innerHTML = `${aylıqFaizlə.toFixed(
    2
  )}`;
};
