<meta name="amp-script-src" content="sha384-H0oCxV42Xxgpuc1RKzeETGZscYfGfHd52k7xTCo1EY387ORCGaYfqiFVA1TQauBn">

//tambah
document.getElementById("plus").addEventListener("click", function() {
	var xPlus_A = Number(document.getElementById('hrg').innerHTML);
	var xPlus_B = Number(document.getElementById('txtharga').value);
	var xRes = Number(document.getElementById('result').innerHTML);
	var mresult = (xRes + 1);
	document.getElementById('result').innerHTML = mresult;	
	var totHarga = (xPlus_A + xPlus_B);
	document.getElementById('hrg').innerHTML = totHarga;
});

//kurang
document.getElementById("minus").addEventListener("click", function() {
	toZero= 1;
	toSisa = document.getElementById('txtharga').value;
	var txtHarga = Number(document.getElementById('txtharga').value);
	var hrg = Number(document.getElementById('hrg').innerHTML);
	var xRes = Number(document.getElementById('result').innerHTML);
	var result = (xRes - 1);
	var sisaHrg = (hrg - txtHarga);
	document.getElementById('result').innerHTML = result;
	document.getElementById('hrg').innerHTML = sisaHrg;
	if (result < 1 || sisaHrg < toSisa){
		document.getElementById('hrg').innerHTML = txtHarga;
		document.getElementById('result').innerHTML = toZero;
		}
});

document.getElementById("color1").addEventListener("click", function() {
	var color_1 = document.getElementById('color1').innerHTML;
	document.getElementById('txtwarna').value = color_1;
	document.getElementById('color1').style.border = '2px solid #0A82ED';
	document.getElementById('color2').style.border = '0px solid #0A82ED';
	document.getElementById('color3').style.border = '0px solid #0A82ED';
	document.getElementById('color4').style.border = '0px solid #0A82ED';
});

document.getElementById("color2").addEventListener("click", function() {
	var color_2 = document.getElementById('color2').innerHTML;
	document.getElementById('txtwarna').value = color_2;
	document.getElementById('color2').style.border = '2px solid #0A82ED';
	document.getElementById('color1').style.border = '0px solid #0A82ED';
	document.getElementById('color3').style.border = '0px solid #0A82ED';
	document.getElementById('color4').style.border = '0px solid #0A82ED';
});

document.getElementById("color3").addEventListener("click", function() {
	var color_3 = document.getElementById('color3').innerHTML;
	document.getElementById('txtwarna').value = color_3;
	document.getElementById('color3').style.border = '2px solid #0A82ED';
	document.getElementById('color2').style.border = '0px solid #0A82ED';
	document.getElementById('color1').style.border = '0px solid #0A82ED';
	document.getElementById('color4').style.border = '0px solid #0A82ED';
});

document.getElementById("color4").addEventListener("click", function() {
	var color_4 = document.getElementById('color4').innerHTML;
	document.getElementById('txtwarna').value = color_4;
	document.getElementById('color4').style.border = '2px solid #0A82ED';
	document.getElementById('color2').style.border = '0px solid #0A82ED';
	document.getElementById('color3').style.border = '0px solid #0A82ED';
	document.getElementById('color1').style.border = '0px solid #0A82ED';
});

document.getElementById("uk1").addEventListener("click", function() {
	var uk_1 = document.getElementById('uk1').innerHTML;
	document.getElementById('txtukuran').value = uk_1;
	document.getElementById('uk1').style.border = '2px solid #0A82ED';
	document.getElementById('uk2').style.border = '0px solid #0A82ED';
	document.getElementById('uk3').style.border = '0px solid #0A82ED';
	document.getElementById('uk4').style.border = '0px solid #0A82ED';
});

document.getElementById("uk2").addEventListener("click", function() {
	var uk_2 = document.getElementById('uk2').innerHTML;
	document.getElementById('txtukuran').value = uk_2;
	document.getElementById('uk2').style.border = '2px solid #0A82ED';
	document.getElementById('uk1').style.border = '0px solid #0A82ED';
	document.getElementById('uk3').style.border = '0px solid #0A82ED';
	document.getElementById('uk4').style.border = '0px solid #0A82ED';
});

document.getElementById("uk3").addEventListener("click", function() {
	var uk_3 = document.getElementById('uk3').innerHTML;
	document.getElementById('txtukuran').value = uk_3;
	document.getElementById('uk3').style.border = '2px solid #0A82ED';
	document.getElementById('uk2').style.border = '0px solid #0A82ED';
	document.getElementById('uk1').style.border = '0px solid #0A82ED';
	document.getElementById('uk4').style.border = '0px solid #0A82ED';
});

document.getElementById("uk4").addEventListener("click", function() {
	var uk_4 = document.getElementById('uk4').innerHTML;
	document.getElementById('txtukuran').value = uk_4;
	document.getElementById('uk4').style.border = '2px solid #0A82ED';
	document.getElementById('uk2').style.border = '0px solid #0A82ED';
	document.getElementById('uk3').style.border = '0px solid #0A82ED';
	document.getElementById('uk1').style.border = '0px solid #0A82ED';
});

