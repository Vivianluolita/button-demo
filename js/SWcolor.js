/**
 * Created by Administrator on 2017/7/20.
 */
;(function($){
    console.log("2017-7-20");
    //�����д�������
    $.fn.extend({
        "color":function(value){
            //����д�������
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