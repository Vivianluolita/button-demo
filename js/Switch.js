/**
 * Created by Administrator on 2017/7/20.
 */
;(function($, window, document,undefined) {
    //����Init�Ĺ��캯��
    var Init = function(ele, opt) {
        this.$element = ele,
            this.defaults = {
                "openColor":"#4cd964",
                "closeColor":"#fff",
                "open": '',
                "close":''
            },
            this.options = $.extend({}, this.defaults, opt)
    }
    //����Init�ķ���
    Init.prototype = {
        changeColor: function($obj) {
            var opencolor=this.options.openColor;
            var closecolor=this.options.closeColor;
            //����ִ��
            $(".switch").click(function(){
                if ($(this).hasClass('switchOn')) {
                   /* console.log(opencolor);*/
                    return document.styleSheets[0].addRule(".switch,.switch::before","background:"+closecolor);
                }else{
                    /*console.log(closecolor);*/
                    return document.styleSheets[0].addRule(".switchOn,.switchOn::before","background:"+opencolor);
                }
            })
        },
        changeToggle:function($obj){
            $(".switch").click(function(){
                var length=$(this).find(".switchOn").length;
                if(length>0){
                    $(this).toggleClass(function (index, className) {
                        if ($(this).hasClass('switchOn')) {
                            $(this).removeClass('switchOn');
                            return ''
                        }else{
                            return 'switchOn'
                        }
                    })
                }
            })
        },
        showInfo:function($obj){
            //�������Ե��ò������open����
            //ע��this��������
            /*this.options.open();*/
            /*var that=$(this);*/
            var _open=this.options.open;
            var _close=this.options.close;
            $(".switch").click(function($obj){
                if ($(this).hasClass('switchOn')) {
                     _open();
                }else{
                     _close();
                }
            })
        }
    }
    //�ڲ����ʹ��Init����
    $.fn.initColor = function(options) {
        //����Init��ʵ��
        var init = new Init(this, options);
        //���õ���������return init.changeColor();
        init.changeColor();
        init.changeToggle();
        init.showInfo();
        //���ö��������
        return this;

    }
})(jQuery, window, document);