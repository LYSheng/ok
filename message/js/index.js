//首页主页背景色切换
var indexList=document.querySelectorAll(".index_list");
for (var i=0;i<indexList.length;i++){
    indexList[i].index=i;
    indexList[i].addEventListener("touchstart",myFunction);
    function myFunction() {
        for (var j=0;j<indexList.length;j++){
            indexList[j].classList.remove("index_Active")
        }
        indexList[this.index].classList.add("index_Active")
    }
};

// //菜单栏内部js
// var MaskUls=document.querySelectorAll("#Mask_uls");
// var indexMaskList=document.querySelectorAll(".index_mask_list");
// var MaskButton=document.querySelectorAll(".Mask_Button");
// for (var i=0;i<indexMaskList.length;i++){
//     indexMaskList[i].index=i;
//     indexMaskList[i].addEventListener("touchstart",function () {
//         for (var j=0;j<indexMaskList.length;j++){
//             indexMaskList[j].classList.remove("aa");
//         }
//         indexMaskList[this.index].classList.add("aa");
//         MaskUls[this.index].className==="Mask_active"?MaskUls[this.index].classList.remove("Mask_active"):MaskUls[this.index].classList.add("Mask_active");
//         MaskButton[this.index].innerHTML==="+"?MaskButton[this.index].innerHTML="-":MaskButton[this.index].innerHTML="+";
//     },false)
// }
// var MaskList=document.querySelectorAll(".Mask_list");
// for (var i=0;i<MaskList.length;i++){
//     MaskList[i].index=i;
//     MaskList[i].addEventListener("touchstart",function () {
//         for (var j=0;j<MaskList.length;j++){
//             MaskList[j].style.background="transparent"
//             // MaskList[j].classList.remove="Mask_list_active"
//         }
//         MaskList[this.index].style.background="#1B1B1B"
//         // MaskList[this.index].classList.add="Mask_list_active"
//     },false)
// }
// //菜单栏侧滑
// var indexNav=document.querySelector(".index_nav");
// var indexMask=document.querySelector(".index_mask");
// var indexMaskRight=document.querySelector(".index_mask_right");
// var flag=true;
// var bodys=document.body;
// indexNav.addEventListener("touchstart",function () {
//     if (flag){
//         indexMask.style.left=0;
//         indexNav.innerHTML="&#xe607;";
//         // bodys.style.height=100+"%";
//         flag=false;
//     }else{
//         indexMask.style.left=-100+"%";
//         indexNav.innerHTML="&#xe666;";
//         // bodys.style.height=0+"px";
//         flag=true;
//     }
// },false);
// indexMaskRight.addEventListener("touchstart",function () {
//     indexMask.style.left=-100+"%";
//     indexNav.innerHTML="&#xe666;"
//     flag=true;
// },false);
//
// //即时搜索功能
// function onSearch(obj){//js函数开始
//     setTimeout(function(){//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
//         var storeId = document.getElementById('tableSort');//获取table的id标识
//         var rowsLength = storeId.rows.length;//表格总共有多少行
//         var key = obj.value;//获取输入框的值
//         var searchCol;
//         if (obj.alt){
//             searchCol =1;
//         }else{
//             searchCol =4;//要搜索的哪一列，这里是第一列，从0开始数起
//         }
//         for(var i=1;i<rowsLength;i++){//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
//             var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
//
//             if(searchText.match(key)){//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
//                 storeId.rows[i].style.display='';//显示行操作，
//             }else{
//                 storeId.rows[i].style.display='none';//隐藏行操作
//             }
//         }
//     },200);//200为延时时间
// }
//
//
// //列表点击颜色
//
// var Tbody=document.getElementsByTagName("tbody");
// var trs=document.querySelectorAll("Tbody>tr");
// for (var i=0;i<trs.length;i++){
//     trs[i].index=i;
//     trs[i].addEventListener("touchstart",function () {
//         for (var j=0;j<trs.length;j++){
//             trs[j].classList.remove("Tr_bian")
//         }
//         trs[this.index].classList.add("Tr_bian");
//     })
// }





