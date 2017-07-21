/**
 * Created by Administrator on 2017/7/20.
 */
;(function($){
    console.log("2017-7-20");
    //这里编写插件代码
    $.fn.extend({
        "color":function(value){
            //这里写插件代码
            console.log(value);
            if(value==undefined){
                return this.css('color');
            }
            else{
                console.log(value);
                return document.styleSheets[0].addRule(".switchOn,.switchOn::before","background:"+value);
            }
        }
    });
})(jQuery);