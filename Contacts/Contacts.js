function GetClock(){
    var d=new Date();
        var ndate = d.getDate(), nmonth = d.getMonth(), nyear = d.getYear(), nhour = d.getHours(), nmin = d.getMinutes();
            if(nyear<1000) nyear+=1900;
                if(nmin<=9) nmin="0"+nmin;
                    document.getElementById('clock').innerHTML=""+ndate+"/"+(nmonth+1)+"/"+nyear+" "+nhour+":"+nmin+"";
    }

    window.onload=function(){
        GetClock();
            setInterval(GetClock,1000);
};

var myImage = document.getElementById('ChangeImg');
var imgArray = ["JS1.jpg", "JS2.jpg", "JS3.jpg"];
var imgIndex = 0;

function changeImage () {
    myImage.setAttribute('src', imgArray[imgIndex]);
    imgIndex+=1;
    if(imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
}
setInterval(changeImage, 5000);

function imageClicked() {
    window.location.href = "..//Index.html";
}


