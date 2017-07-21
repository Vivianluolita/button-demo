/**
 * Created by Administrator on 2017/7/20.
 */
; //lyj
(function ($, window, document, undefined) {
    //定义init构造函数
    var init = function (ele, opt) {
        this.$element = ele;
        this.defaults = { //  默认参数
            openColor:"red",
            closeColor:"#eee",
            contextmenu: true, //   工具的右键功能
            // base: false, //  工具框的基础功能，两个按钮
        };
        this.options = $.extend({}, this.defaults, opt);//将一个空对象做为第一个参数，后面的参数，全部合在一个对象里面。
    };
    //
    var contextmenu = {
       /* contextmenu: null,
        target: null,
        creat: function () {
            var contextmenuStr =
                '                <div class="SCcontextmenu">'
                + '                    <div class="menuItem delete">删除</div>'
                + '                    <div class="menuItem reRotate">清除旋转</div>'
                + '                    <div class="menuItem reRatio">还原比例</div>'
                + '                </div>'

            this.contextmenu = $(contextmenuStr);
            this.contextmenu.appendTo($('body')).hide();
            var _this = this;
            this.contextmenu.on('mousedown', function (e) {
                e.stopPropagation();
                _this.hide();
            })
            this.contextmenu.on('mousedown', '.delete', function () {
                _this.target.remove();
            });
            this.contextmenu.on('mousedown', '.reRotate', function () {
                _this.target.css('transform', 'rotate(0deg)');
            });
            this.contextmenu.on('mousedown', '.reRatio', function () {
                var width = parseInt(_this.target.get(0).style.width);
                var height = parseInt(_this.target.get(0).style.height);
                if (width < height) {
                    _this.target.css('height', width / _this.target.attr('ratio'));
                } else {
                    _this.target.css('width', height * _this.target.attr('ratio'));
                }
            });
        },
        destroy: function () {
            this.contextmenu.remove();
        },
        hide: function () {
            this.contextmenu.hide();
        },
        show: function (e, target) {
            this.target = target;
            this.contextmenu.css({'left': e.clientX, 'top': e.clientY}).show();
        }*/
    };
    //定义init方法start()
    init.prototype = {
        start: function () {
            alert("start");
           /* var spaceX, spaceY,
                opts = this.options,
                $this = this.$element,
                toolStatus = {
                    isActive: false,
                    isDrag: false,
                    isRotate: false,
                    isScale: false,
                    isStretch: false,
                    limitScale: 1000,
                    limitStretch: 1000
                }*/
        }
    }
    //在插件中使用init对象
    $.fn.initColor = function (options) {
        var init = new init(this, options);
        init.start();
        return this;
        //return init.start();
    }
})(jQuery, window, document);