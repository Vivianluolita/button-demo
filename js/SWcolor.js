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
                /*return this.css('color',value);*/
                /*return this.styleSheets[0].addRule('.red::before','color: value');*/
               /* return this.attr('background-color', 'value');*/
               /* $(this).addClass(".switchOn").attr('background-color', 'value');*/
                return document.styleSheets[0].addRule(".switchOn,.switchOn::before","background:"+value);
                /*console.log(document.styleSheets[0]);*/
            }
        }
    });
})(jQuery);