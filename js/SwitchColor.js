/**
 * Created by Administrator on 2017/7/20.
 */
; //lyj
(function ($, window, document, undefined) {
    //����init���캯��
    var init = function (ele, opt) {
        this.$element = ele;
        this.defaults = { //  Ĭ�ϲ���
            openColor:"red",
            closeColor:"#eee",
            contextmenu: true, //   ���ߵ��Ҽ�����
            // base: false, //  ���߿�Ļ������ܣ�������ť
        };
        this.options = $.extend({}, this.defaults, opt);//��һ���ն�����Ϊ��һ������������Ĳ�����ȫ������һ���������档
    };
    //
    var contextmenu = {
       /* contextmenu: null,
        target: null,
        creat: function () {
            var contextmenuStr =
                '                <div class="SCcontextmenu">'
                + '                    <div class="menuItem delete">ɾ��</div>'
                + '                    <div class="menuItem reRotate">�����ת</div>'
                + '                    <div class="menuItem reRatio">��ԭ����</div>'
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
    //����init����start()
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
    //�ڲ����ʹ��init����
    $.fn.initColor = function (options) {
        var init = new init(this, options);
        init.start();
        return this;
        //return init.start();
    }
})(jQuery, window, document);