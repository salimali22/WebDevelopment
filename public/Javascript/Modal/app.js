var image = ["1.jpg","2.jpg","3.jpg","4.png","5.jpg","6.jpg","7.png","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.png","15.jpg"];
for(var i = 0; i<15 ; i++ ){
    document.getElementById(i+1).src  = "images/"+image[i]
}
var modal = document.getElementById("modal")


function onOpenImagModal(img){
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = "block";
    var imgid = img.getAttribute("id")
    console.log(imgid);
    console.log(document.getElementById("modal-img").getAttribute("id"))
    document.getElementById("modal-img").src = "images/"+image[imgid-1]
}
function onClosedImagModal(){
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}