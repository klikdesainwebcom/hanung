document.addEventListener('DOMContentLoaded', function() {
	var xVideo1 = document.getElementById("video1").getAttribute("src");
	var xVideo2 = document.getElementById("video1").getAttribute("alt");
	var xImg = document.getElementById("pic1").getAttribute("src");
	if (xVideo2){
		document.getElementById("preview").innerHTML = '<video id="preview_video" class="detail_prod" width="512" height="512" src="'+ xVideo1 +'" poster="'+ xVideo2 +'" layout="responsive" controls="" autoplay=""></video>' ;
		document.getElementById("pic1").style.display = 'none';
		document.getElementById("pic1").style.visibility = 'hidden';
		}
	else if (xImg){
		document.getElementById("preview").innerHTML = '<img id="preview_img" layout="responsive" src="'+ xImg +'" class="detail_prod" width="512" height="512" alt="" title="" style="border:1px solid red;"/>' ;
		document.getElementById("video1").style.display = 'none';
		document.getElementById("video1").style.visibility = 'hidden';
		}
	});
