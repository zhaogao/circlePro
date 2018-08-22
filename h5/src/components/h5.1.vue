<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title>商品详情</title>
</head>
<style>
    html, body, div, span, p, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small,
    strike, strong, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, button, table, caption,
    tbody, tfoot, thead, tr, th, td, h1, h2, h3 {
        margin: 0;
        padding: 0;
        border: none;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }

    *,
    :after,
    :before {
        box-sizing: border-box;
    }

    html,
    body {
        background: #fff;
        font-size: 12px;
        height: 100%;
        font-family: 'Microsoft Yahei,sans-serif';
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
    }

    .clearfix {
        *zoom: 1;
    }

    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    .pull-left {
        float: left;
    }

    .pull-right {
        float: right;
    }

    #app {
        max-width: 640px;
        margin: 0 auto;
    }

    .section {
        padding: 3%;
        background: #fff;
        margin-bottom: 2%;
    }

    .form-item {
        border: 1px solid #adadad;
        color: #353535;
        display: flex;
    }

    .section .title {
        color: #6e6e6e;
    }

    .ft-14 {
        font-size: 14px;
    }

    .form-item>div {
        padding: 3%;
    }

    .form-item {
        margin-bottom: -1px;
    }

    .form-item>div:last-child {
        border-left: 1px solid #adadad;
        flex: 1;
    }

    .preload {
        width: 100%;
        height: 120px;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #eeeeee;
        background: linear-gradient(to right, #eeeeee 8%, #ddd 18%, #eeeeee 33%);
        background-size: 1200px 104px;
        position: relative;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0
        }
        100% {
            background-position: 468px 0
        }
    }

    .ladingbox {
        margin: 3%;
    }

    .preload .title-block {
        position: absolute;
        right: 0;
        top: 0;
        width: 60%;
        height: 30px;
        background: #fff;
    }

    .preload .line-block,
    .preload .line-block-2,
    .preload .line-block-3 {
        position: absolute;
        right: 0;
        top: 30px;
        width: 100%;
        height: 16px;
        background: #fff;
    }

    .preload .line-block-2 {
        top: 70px;
    }

    .preload .line-block-3 {
        top: 110px;
    }

    .preload .cloumn-line {
        position: absolute;
        left: 40%;
        top: 30px;
        width: 8px;
        height: 90px;
        background: #fff;
    }
</style>

<body>
    <template id="sourcelist">
        <div class="section">
            <p class="ft-14" style="padding-bottom:2%">
                <span class="title">{{title}}:&nbsp;</span>
            </p>

            <div v-for="(section,index) in list" :key="'list' + index" style="margin-bottom:3%">
                <div v-for="(item,index) in section" :key="index" class="form-item clearfix">
                    <div :style="{width:width}" class="title pull-left">[{{item.label}}]</div>
                    <div class="pull-left">{{item.value ? item.value : '-'}}</div>
                </div>
            </div>
        </div>
    </template>

    <template id="sourceitem">
        <div class="section">
            <p class="ft-14" style="padding-bottom:2%">
                <span class="title">{{title}}:&nbsp;</span>
                <span v-if="oneLine">{{desc ? desc :'-'}}</span>
            </p>

            <div v-for="(item,index) in desc" :key="index" v-if="!oneLine" class="form-item clearfix">
                <div :style="{width:width}" class="title pull-left">[{{item.label}}]</div>
                <div class="pull-left">{{item.value ? item.value :'-'}}</div>
            </div>
        </div>
    </template>

    <div id="app" :style="{backgroundColor:loading ? '#fff' : '#f1f1f1'}">
        <template v-if="loading">
            <div v-for="index in 5" :key="index" class="ladingbox">
                <div class="preload">
                    <div class="title-block"></div>
                    <div class="line-block"></div>
                    <div class="cloumn-line" :style="{left:random[index]}"></div>
                    <div class="line-block-2"></div>
                    <div class="line-block-3"></div>
                </div>
            </div>
        </template>
        <template v-else>
            <cl-section :title="product_desc.title" :desc="product_desc.detail"></cl-section>
            <cl-section :title="relevant.title" :desc="relevant.detail"></cl-section>
            <cl-section :title="ciqData.title" :desc="ciqData.detail"></cl-section>
            <cl-section :title="ele_for_customs.title" :desc="ele_for_customs.detail"></cl-section>
            <cl-section :title="unit.title" width="45%" :desc="unit.detail"></cl-section>

            <cl-section-list :title="tax_list.title" :list="tax_list.list"></cl-section-list>
            <cl-section-list width="30%" :title="cus_sup_conditions.title" :list="cus_sup_conditions.list"></cl-section-list>

            <cl-section :title="quarantine_conditions.title" :desc="quarantine_conditions.detail"></cl-section>
        </template>
    </div>
    <script src="https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js" ></script>
    <script src="http://cdn.bootcss.com/vue/2.5.2/vue.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
        
        Vue.component('cl-section', {
            props: {
                title: String,
                desc: [String, Array],
                width: {
                    default: '30%',
                    type: String
                }
            },
            computed: {
                oneLine() {
                    if (typeof this.desc == 'string') {
                        return true
                    }
                    return false
                }
            },
            template: '#sourceitem'
        })

        Vue.component('cl-section-list', {
            props: {
                title: String,
                list: [Array],
                width: {
                    default: '45%',
                    type: String
                }
            },
            template: '#sourcelist'
        })

        var app = new Vue({
            el: '#app',
            data: function () {
                return {
                    loading: false,
                    random: ['38%', '45%', '40%', '32%', '55%'],
                    productData: {
                        name: '骡马濒危',
                        desc: { //商品海关描述
                            zh: '骡马濒危',
                            en: 'The mule and horse are in danger'
                        },
                        assoc_pro: '骡马相关的马总', //相关产品
                        hscode: '2100000', //CIQ 代码
                        ele_for_customs: '1.品名；2.制作或保存方法（鲜、冷、冻）；3.加工方法（整头及半头、带骨或去骨等）；4.包装规格；（以下仅上海海关要求）5.厂号；6.品牌', //申报要素
                        tax_info: {
                            unit: '千克/头', // 法定单位  判断是否 有 /  来显示几个
                            tax_num: '', // CIQ编码
                        },
                        cus_sup_conditions: [{
                            authority: '',
                            id: '',
                            name: '',
                            remarks: '',
                        }, ],
                        quarantine_conditions: { // 待添加字段
                            code: 'P/Q',
                            name: '进口商品检验'
                        }
                    }
                }
            },
            computed: {
                product_desc: function () {
                    var desc = this.productData.desc
                    return {
                        title: '商品海关描述',
                        detail: [{
                                label: '中文描述',
                                value: desc.zh,
                            },
                            {
                                label: '英文描述',
                                value: desc.en,
                            }
                        ]
                    }
                },
                relevant: function () {
                    return {
                        title: '相关产品',
                        detail: this.productData.assoc_pro
                    }
                },
                ciqData: function () {
                    return {
                        title: 'CIQ代码及商品描述',
                        detail: [{
                                label: 'CIQ代码',
                                value: this.productData.hscode,
                            },
                            {
                                label: '商品描述',
                                value: this.productData.name,
                            }
                        ]
                    }
                },
                ele_for_customs: function () {
                    return {
                        title: '申报要素',
                        detail: this.productData.ele_for_customs
                    }
                },
                unit: function () {
                    var str = ['一', '二', '三', '四']
                    var _tmp = this.productData.tax_info.unit.split('/')
                    // var _array = _tmp.map(function (item, index) {
                    //     return {
                    //         label: '法定第' + str[index] + '单位',
                    //         value: item
                    //     }
                    // })
                    return {
                        title: '法定单位',
                        detail: _array
                    }
                },
                tax_list: function () {
                    return {
                        title: '关税',
                        list: [
                            [{
                                    label: '最惠国进口税率',
                                    value: '10%'
                                },
                                {
                                    label: '最惠国进口暂定税率',
                                    value: '30%'
                                },
                                {
                                    label: '普通进口税率',
                                    value: '0.0%'
                                },
                                {
                                    label: '暂定进口税率',
                                    value: '12.1%'
                                },
                            ],
                            [{
                                    label: '出口关税率',
                                    value: '11.1%'
                                },
                                {
                                    label: '暂定出口关税率',
                                    value: '0.3%'
                                },
                                {
                                    label: '出口退税率',
                                    value: '0.2%'
                                },
                            ],
                            [{
                                    label: '美国',
                                    value: '15%'
                                },
                                {
                                    label: '法国',
                                    value: '14.3%'
                                },
                            ],
                            [{
                                    label: '消费税率',
                                    value: '9.2%'
                                },
                                {
                                    label: '增值税率',
                                    value: '14.3%'
                                },
                            ],
                        ]
                    }
                },
                cus_sup_conditions: function () {
                    var _conditions = this.productData.cus_sup_conditions;
                    var key_str = [{
                        key: 'id',
                        label: '代码',
                    }, {
                        key: 'name',
                        label: '名称',
                    }, {
                        key: 'authority',
                        label: '发证机关',
                    }, {
                        key: 'remarks',
                        label: '备注',
                    }];

                    _conditions = _conditions.map(function (item, index) {
                        var _array = []
                        $.extend(true, _array, key_str);

                        for (var name in item) {
                            var _tmp = _array.find(function (cus) {
                                return cus.key == name
                            })
                            _tmp && (_tmp.value = item[name])
                        }
                        return _array
                    })

                    return {
                        title: '海关监管条件',
                        list: _conditions
                    }
                },
                quarantine_conditions: function () {
                    var _data = this.productData.quarantine_conditions;
                    return {
                        title: '检验检疫类别',
                        detail: [{
                                label: '代码',
                                value: _data.code,
                            },
                            {
                                label: '名称',
                                value: _data.name,
                            }
                        ]
                    }
                },
            },
            mounted: function () {
                var _this = this;
                _this.loading = true
                $.ajax({
                    url: '/getlist',
                    type: 'post',
                    data: {
                        code: '0101210010',
                    },
                    success: function (data) {
                        _this.loading = false
                        if (data.code == 0) {
                            $.extend(true, _this.productData, data.ret_msg.datas)
                            _this.$set(_this.$data, 'productData', _this.productData)
                        }
                    },
                    error: function () {
                        _this.loading = false
                    }
                })
            }
        })
    </script>
</body>

</html>