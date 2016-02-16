window.onload=function(){

    var clock=document.getElementsByClassName("clock")[0];
    createMark();
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var hp=createPointer(40,6,"yellow",30*h-90+(6*m)/12);
    var mp=createPointer(55,4,"green",6*m-90);
    var sp=createPointer(70,2,"red",6*s-90);

    setInterval(function(){
        var time=new Date();
        var h=time.getHours();
        var m=time.getMinutes();
        var s=time.getSeconds();
        hp.style.transform="translate(100px,"+hp.t+"px) rotate("+(30*h-90+(6*m)/12)+"deg)";
        mp.style.transform="translate(100px,"+mp.t+"px) rotate("+(6*m-90)+"deg)";
        sp.style.transform="translate(100px,"+sp.t+"px) rotate("+(6*s-90)+"deg)";
    },1000)



    //刻度
    function createMark(){
        for(var i=0;i<60;i++){
            var w, h,l;
            if(i%5==0){
                w=4;
                h=10;
            }else{
                w=2;
                h=6;
            }
            l=(200-w)/2;
            var div=document.createElement("div");
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:#fff;position:absolute;left:0;top:0";
            div.style.transform="translate("+l+"px,0px) rotate("+i*6+"deg)";
            div.style.transformOrigin="center 100px";
            clock.appendChild(div);
        }
        var cirle=document.createElement('div');
        cirle.style.cssText='width:10px;height:10px;background:#fff;border-radius:50%;position:absolute;left:'+94+'px;top:'+94+'px;z-index:30;';
        clock.appendChild(cirle);
    }

    function creatnum(){
        for(var i=0;i<12;i++){
            var num= document.createElement('div');
            num.style.cssText='width:10px;height:10px;text-align:center;line-height:10px;color:#fff;position:absolute;left:0;top:0;';
            num.style.transform="translate(94px,19px) rotate("+i*30+"deg)";
            num.style.transformOrigin="center 80px";
            num.innerHTML=i;
            if(i==0){num.innerHTML=12;}
            clock.appendChild(num);
        }
    }
    creatnum();

    function  createPointer(w,h,c,a){
        var div=document.createElement("div");
        var t=(200-h)/2;
        div.t=t;
        div.style.cssText="width:"+w+"px;height:"+h+"px;border-radius:6px;background:"+c+";position:absolute;left:0;top:0;transform:translate(100px,"+t+"px) rotate("+a+"deg);transform-origin:left center";
        clock.appendChild(div);
        return div;
    }












}
