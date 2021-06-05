document.getElementById("plus").addEventListener("click", function() {
var xPlus_A = Number(document.getElementById('hrg').innerHTML);
var xPlus_B = Number(document.getElementById('txtharga').value);
var xRes = Number(document.getElementById('result').innerHTML);
var mresult = (xRes + 1); document.getElementById('result').innerHTML = mresult;
  var totHarga = (xPlus_A + xPlus_B); document.getElementById('hrg').innerHTML = totHarga; });

document.getElementById("minus").addEventListener("click", function() {
  var toZero = 1; var toSisa = document.getElementById('txtharga').value;
  var txtHarga = Number(document.getElementById('txtharga').value);
  var hrg = Number(document.getElementById('hrg').innerHTML);
  var xRes = Number(document.getElementById('result').innerHTML);
  var result = (xRes - 1); var sisaHrg = (hrg - txtHarga);
  document.getElementById('result').innerHTML = result;
  document.getElementById('hrg').innerHTML = sisaHrg;
  if (result < 1 || sisaHrg < toSisa){
    document.getElementById('hrg').innerHTML = txtHarga;
    document.getElementById('result').innerHTML = toZero; } });

document.getElementById("color1").addEventListener("click", function() {
  var color_1 = document.getElementById('color1').innerHTML;
  document.getElementById('txtwarna').value = color_1; 
  document.getElementById('color1').style.border = '2px solid #0A82ED'; 
  document.getElementById('color2').style.border = '1px solid #dedede'; 
  document.getElementById('color3').style.border = '1px solid #dedede'; 
  document.getElementById('color4').style.border = '1px solid #dedede'; }); 
document.getElementById("color2").addEventListener("click", function() { 
  var color_2 = document.getElementById('color2').innerHTML; 
  document.getElementById('txtwarna').value = color_2; 
  document.getElementById('color2').style.border = '2px solid #0A82ED'; 
  document.getElementById('color1').style.border = '1px solid #dedede'; 
  document.getElementById('color3').style.border = '1px solid #dedede'; 
  document.getElementById('color4').style.border = '1px solid #dedede'; }); 
document.getElementById("color3").addEventListener("click", function() { 
  var color_3 = document.getElementById('color3').innerHTML; 
  document.getElementById('txtwarna').value = color_3; 
  document.getElementById('color3').style.border = '2px solid #0A82ED'; 
  document.getElementById('color2').style.border = '1px solid #dedede'; 
  document.getElementById('color1').style.border = '1px solid #dedede'; 
  document.getElementById('color4').style.border = '1px solid #dedede'; }); 
document.getElementById("color4").addEventListener("click", function() {
  var color_4 = document.getElementById('color4').innerHTML; 
  document.getElementById('txtwarna').value = color_4; 
  document.getElementById('color4').style.border = '2px solid #0A82ED'; 
  document.getElementById('color2').style.border = '1px solid #dedede'; 
  document.getElementById('color3').style.border = '1px solid #dedede'; 
  document.getElementById('color1').style.border = '1px solid #dedede'; }); 
document.getElementById("uk1").addEventListener("click", function() { 
  var uk_1 = document.getElementById('uk1').innerHTML; 
  document.getElementById('txtukuran').value = uk_1; 
  document.getElementById('uk1').style.border = '2px solid #0A82ED'; 
  document.getElementById('uk2').style.border = '1px solid #dedede'; 
  document.getElementById('uk3').style.border = '1px solid #dedede'; 
  document.getElementById('uk4').style.border = '1px solid #dedede'; }); 
document.getElementById("uk2").addEventListener("click", function() {
  var uk_2 = document.getElementById('uk2').innerHTML; 
  document.getElementById('txtukuran').value = uk_2; 
  document.getElementById('uk2').style.border = '2px solid #0A82ED'; 
  document.getElementById('uk1').style.border = '1px solid #dedede'; 
  document.getElementById('uk3').style.border = '1px solid #dedede'; 
  document.getElementById('uk4').style.border = '1px solid #dedede'; }); 
document.getElementById("uk3").addEventListener("click", function() { 
  var uk_3 = document.getElementById('uk3').innerHTML; 
  document.getElementById('txtukuran').value = uk_3; 
  document.getElementById('uk3').style.border = '2px solid #0A82ED'; 
  document.getElementById('uk2').style.border = '1px solid #dedede'; 
  document.getElementById('uk1').style.border = '1px solid #dedede'; 
  document.getElementById('uk4').style.border = '1px solid #dedede'; }); 
document.getElementById("uk4").addEventListener("click", function() {
  var uk_4 = document.getElementById('uk4').innerHTML; 
  document.getElementById('txtukuran').value = uk_4; 
  document.getElementById('uk4').style.border = '2px solid #0A82ED'; 
  document.getElementById('uk2').style.border = '1px solid #dedede'; 
  document.getElementById('uk3').style.border = '1px solid #dedede'; 
  document.getElementById('uk1').style.border = '1px solid #dedede'; });

//beli
document.getElementById("txthp").addEventListener("click", function() { 
	var xUrl = 'https://api.whatsapp.com/send?phone=6285157796142&text=' + 'Nama%20Produk%20:%20' + 
              document.getElementById('nama_produk').innerHTML + ',' + '%0D%0A' + 'Qty%20:%20' + 
              document.getElementById('result').innerHTML + ',' + '%0D%0A' + 'Warna%20:%20' + 
              document.getElementById('txtwarna').value + ',' + '%0D%0A' + 'Ukuran%20:%20' + 
              document.getElementById('txtukuran').value + ',' + '%0D%0A' + 'Total%20Bayar%20:%20' + 
              document.getElementById('hrg').innerHTML + ',' + '%0D%0A' + 'Nama%20Lengkap%20:%20' + 
              document.getElementById('txtnama').value + ',' + '%0D%0A' + 'Alamat%20:%20' + 
              document.getElementById('txtalamat').value + ',' + '%0D%0A' + 'Kabupaten%20:%20' + 
              document.getElementById('txtkab').value + ',' + '%0D%0A' + 'Kecamatan%20:%20' + 
              document.getElementById('txtkec').value + ',' + '%0D%0A' + 'Desa/Kota%20:%20' + 
              document.getElementById('txtkota').value + ',' + '%0D%0A' + 'Kodepos%20:%20' + 
              document.getElementById('txtkodepos').value + ',' + '%0D%0A' + 'Nomor%20Hp%20:%20' + 
              document.getElementById('txthp').value;
	var urlWhatsApp = '<a id="beli_beli" role="button" href="'+ xUrl +'" target="_blank" title="Beli">Beli Sekarang</a>';
	document.getElementById('btn_beli').innerHTML = urlWhatsApp;
});

