$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<735){
            $('.header1').css('display','none');
            $('.header2').css('display','block');

        }else if(clientW>735){
            $('.header1').css('display','block');
            $('.header2').css('display','none');
        }
    });

    $('.btn').click(function(){
        $('.menu').finish();
        $('.menu').slideToggle();
    })


    var index=0;
    var lunbo  =  function(){
        $('.pattern').hide();
        var el = $('.pattern')[index];
        $(el).show();

        index += 1;
        if( index === $('.pattern').length ){
            index = 0;
        }

    };
    $('.prev').click(function(){
        clearInterval(time);

        $('.pattern').hide();
        index--;
        var el = $('.pattern')[index];
        $(el).show();
        if(index==0){index=3;}
    });
    $('.next').click(function(){
        clearInterval(time);
        $('.pattern').hide();
        var el = $('.pattern')[index];
        $(el).show();
        index += 1;
        if( index === $('.pattern').length ){
            index = 0;
        }
    })
    var time = setInterval(lunbo,2000);

    //头
    var ti;
    $(window).scroll(function(){
        if($(window).scrollTop() > 600){
            $('.top').show();
            clearTimeout(ti);
            ti = setTimeout(function(){
                $('.header1').slideDown();
            },500);
        }else{
            clearTimeout(ti);
            $('.header1').slideUp();
            $('.top').hide();
        };
    });

    $(".top").click(function(){
        $({top: $(window).scrollTop()}).animate(
            {top: 0},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });



    //菜单
    $('.titl').each(function(i){
        $(this).data('index',i);
    });
    $('.titl').click(function(){
        var i = $(this).index();
        var newtop = $( $('.contain')[i-1] ).offset().top;
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 600,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
        $('.titl').removeClass('titl-bg');
        $($('.titl')[i-1]).addClass('titl-bg');
    });

    //var scoll= function(){
    //    for(var j=0;j<=$('.titl').length;j++){
    //        var wind = $(window).scrollTop();
    //        var floor = $($('.contain')[j]).offset().top;
    //        if(wind >=floor && wind <= $( $('.contain')[j]).offset().top+$( $('.contain')[j]).height()){
    //            $('.titl').removeClass('titl-bg');
    //            if(j==4){j+1;}
    //            $($(".titl")[j]).addClass("titl-bg");
    //        }else if(wind < $($('.contain')[0]).offset().top){
    //            $('.win').hide();
    //            $(".titl").removeClass("titl-bg");
    //        }
    //    }
    //};
    //$(window).scroll( function(){
    //    scoll();
    //})





//技能
    var a_num=$("div.a b").text()*1;
    var b_num=$("div.b b").text()*1;
    var c_num=$("div.c b").text()*1;
    var d_num=$("div.d b").text()*1;
    var e_num=$("div.e b").text()*1;
    var a=1,b=1,c= 1,d= 1,e=1;
    var change_a=function(){
        $("div.a b").text(a);
        if(a<a_num){
            a++;
        }
    }
    var change_b=function(){
        $("div.b b").text(b);
        if(b<b_num){
            b++;
        }
    }
    var change_c=function(){
        $("div.c b").text(c);
        if(c<c_num){
            c++;
        }
    }
    var change_d=function(){
        $("div.d b").text(d);
        if(d<d_num){
            d++;
        }
    }
    var change_e=function(){
        $("div.e b").text(e);
        if(e<e_num){
            e++;
        }
    }
    var top = $('.scalls').offset().top;
    var height = $('.scalls').height();
    //if($(window).scrollTop() > top-100 && $(window).scrollTop() < top+height+200) {

    $('.showa').hover(function(){
        var crear_a = setInterval(change_a, (1000 / a_num));
        var crear_b = setInterval(change_b, (1000 / b_num));
        var crear_c = setInterval(change_c, (1000 / c_num));
        var crear_d = setInterval(change_d, (1000 / b_num));
        var crear_e = setInterval(change_e, (1000 / c_num));


        $("div.a_red").finish();
        $("div.b_green").finish();
        $("div.c_grange").finish();
        $("div.d_green").finish();
        $("div.e_orange").finish();

        $("div.a_red").animate({width: (a_num * 4) + "px"}, 1000);
        $("div.b_green").animate({width: (b_num * 4) + "px"}, 1000);
        $("div.c_orange").animate({width: (c_num * 4) + "px"}, 1000);
        $("div.d_green").animate({width: (b_num * 4) + "px"}, 1000);
        $("div.e_orange").animate({width: (c_num * 4) + "px"}, 1000);

    })




//作品
    $('.zuopin:nth-child(1)').click(function(){
        $('.zuopin:nth-child(2)').removeAttr('aa');
        $('.zuopin').css({background:'rgba(0,0,0,0.5)'});
        $(this).css({background:'#FFA300'});
        $('.web').hide();
        $('.ps').show(100);

        $(".huan").css({display:"block"})
    })

    $('.zuopin:nth-child(2)').click(function(){
        $('.zuopin:nth-child(2)').attr('att','aa');
        $('.zuopin').css({background:'rgba(0,0,0,0.5)'});
        $(this).css({background:'#FFA300'});
        $('.ps1').hide();
        $('.ps').hide();
        $('.web').show(100);
        $(".huan").css({display:"none"})
    })


    $('.putic').click(function(){
        var srcc=$(this).find('img').attr('src');
        console.log(srcc);
        $('.scoller').css({display:'block',background:'url('+srcc+')',backgroundSize:'cover'});
        $('.title-zuopin').css({display:'none'});
    });
    $('.scoller').click(function(){
        $('.title-zuopin').css({display:'block'});
        $(this).css({display:'none'});
    })


    $('.web-a').hover(function(){
        $(this).find('.shade').slideDown(300);
    },function(){
        $(this).find('.shade').finish();
        $(this).find('.shade').slideUp(300);
    });

//换一批
    var kai=true;
    $('.huan').click(function(){
        if(kai){
            $('.ps').hide();
            $('.ps1').show();
            kai=false;
        }else{
            $('.ps').show();
            $('.ps1').hide();
            kai=true;
        }

    })

//  技能字









});