document.addEventListener('DOMContentLoaded', function() {
var xVideo1 = document.getElementById("video1").getAttribute("src");
var xVideo2 = document.getElementById("video1").getAttribute("alt");
var xImg = document.getElementById("pic1").getAttribute("src");
if (xVideo1){
  var xPreview = '<video id="preview_video" class="detail_prod" width="512" height="512" src="'+ xVideo2 +'" poster="'+ xVideo1 +'" layout="responsive" controls autoplay></video>';
  document.getElementById("preview").innerHTML = xPreview;
  document.getElementById("pic1").style.display = 'none';
  document.getElementById("pic1").style.visibility = 'hidden';
  document.getElementById("video1").style.display = 'block';
  document.getElementById("video1").style.visibility = 'visible';  
  }
else{
  document.getElementById("video1").style.display = 'none';
  document.getElementById("video1").style.visibility = 'hidden';
  }
if (xImg){
   var imgPrev = '<amp-img id="preview_img" class="detail_prod" src="'+ xImg +'"  width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
  document.getElementById("preview").innerHTML = imgPrev;
  document.getElementById("video1").style.display = 'none';
  document.getElementById("video1").style.visibility = 'hidden';
  document.getElementById("pic1").style.display = 'block';
  document.getElementById("pic1").style.visibility = 'visible';
  }
else{
  document.getElementById("pic1").style.display = 'none';
  document.getElementById("pic1").style.visibility = 'hidden';
  }
});
document.getElementById("video1").addEventListener("click", function() { 
var x1Video = document.getElementById("video1").getAttribute("alt");
document.getElementById("preview").innerHTML = '<amp-video id="preview_video" width="512" height="512" src="'+ x1Video +'" poster="'+ x1Video +'" layout="responsive" controls="true" autoplay="true"></amp-video>' ;
document.getElementById("preview_video").src = x1Video;
});
document.getElementById("pic1").addEventListener("click", function() { 
var xImg1 = document.getElementById("pic1").getAttribute("src");
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg1 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
document.getElementById("preview_img").src = xImg1;
});
document.getElementById("pic2").addEventListener("click", function() { 
var xImg2 = document.getElementById("pic2").getAttribute("src");
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg2 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
document.getElementById("preview_img").src = xImg2;
});
document.getElementById("pic3").addEventListener("click", function() { 
var xImg3 = document.getElementById("pic3").getAttribute("src");
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg3 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
document.getElementById("preview_img").src = xImg3;
});
document.getElementById("pic4").addEventListener("click", function() { 
var xImg4 = document.getElementById("pic4").getAttribute("src");
document.getElementById("preview_img").src = xImg4;
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg4 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
});
document.getElementById("pic5").addEventListener("click", function() { 
var xImg5 = document.getElementById("pic5").getAttribute("src");
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg5 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
document.getElementById("preview_img").src = xImg5;
});
document.getElementById("pic6").addEventListener("click", function() { 
var xImg5 = document.getElementById("pic6").getAttribute("src");
document.getElementById("preview").innerHTML = '<amp-img id="preview_img" src="'+ xImg5 +'" width="512" height="512" alt="" title="" layout="responsive"></amp-img>';
document.getElementById("preview_img").src = xImg5;
});
