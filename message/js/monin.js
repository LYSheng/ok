//点击查看
var examine=document.querySelectorAll(".examine");
var examineBox=document.querySelector(".examine_box");
var ContactExmout=document.querySelector(".Contact_exmout");
var examineButtun=document.querySelector(".examine_buttun")
for (var i=0;i<examine.length;i++){
    examine[i].addEventListener("touchstart",function () {
        examineBox.style.display="block";
    })
}
ContactExmout.addEventListener("touchstart",function () {
    examineBox.style.display="none";
});
examineButtun.addEventListener("touchstart",function () {
    examineBox.style.display="none";
});

//查看内部电话加密
var passNum=document.querySelector("#passNum");
passNum.value="18535284194";
var passNumVal=passNum.value;
var NewPassVal=passNumVal.substr(0,3)+"****"+passNumVal.substr(7);
passNum.value=NewPassVal;
