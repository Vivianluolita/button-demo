/**
 * Created by Administrator on 2017/7/20.
 */
;(function($, window, document,undefined) {
    //定义Init的构造函数
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
    //定义Init的方法
    Init.prototype = {
        changeColor: function($obj) {
            var opencolor=this.options.openColor;
            var closecolor=this.options.closeColor;
            //可以执行
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
            //这样可以调用参数里的open函数
            //注意this的作用域
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
    //在插件中使用Init对象
    $.fn.initColor = function(options) {
        //创建Init的实体
        var init = new Init(this, options);
        //调用单个方法：return init.changeColor();
        init.changeColor();
        init.changeToggle();
        init.showInfo();
        //调用多个方法：
        return this;

    }
})(jQuery, window, document);