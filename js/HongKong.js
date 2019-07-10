var con = document.getElementById("comment-3");
var is = con.getElementsByTagName("img");
var locate = document.getElementById("locate");
var li = locate.getElementsByTagName("li");
var num = 0;
for (var i = 0; i < li.length; i++) {
    li[i].num = i;
    li[i].onclick = function () {
        num = this.num;
        // 通过for循环清除所有样式
        for (var temp = 0; temp < li.length; temp++) {
            is[temp].style.display = 'none';
            li[temp].style.background = "rgb(17, 102, 183)";
        }
        // 给本张图添加样式 
        is[num].style.display = 'block';
        li[num].style.background = "rgb(13, 89, 164)";
    }
}