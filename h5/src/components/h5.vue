<template>
  <div :style="{backgroundColor:loading ? '#fff' : '#f1f1f1'}">
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
      <CellItem :title="product_desc.title" :desc="product_desc.detail"></CellItem>
      <CellItem :title="relevant.title" :desc="relevant.detail"></CellItem>
      <CellItem :title="ciqData.title" :desc="ciqData.detail"></CellItem>
      <CellItem :title="ele_for_customs.title" :desc="ele_for_customs.detail"></CellItem>
      <CellItem :title="unit.title" width="45%" :desc="unit.detail"></CellItem>

      <CellItemList :title="tax_list.title" :list="tax_list.list"></CellItemList>
      <CellItemList width="30%" :title="cus_sup_conditions.title" :list="cus_sup_conditions.list"></CellItemList>

      <CellItem :title="quarantine_conditions.title" :desc="quarantine_conditions.detail"></CellItem>
    </template>
  </div>
  <!-- </div> -->
</template>

<script>
  import CellItem from './CellItem'
  import CellItemList from './CellItemList'
  export default {
    components: {
      CellItem,
      CellItemList
    },
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
        var _array = _tmp.map(function (item, index) {
            return {
                label: '法定第' + str[index] + '单位',
                value: item
            }
        })
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
          var _array = Object.assign([],key_str)
        //   $.extend(true, _array, key_str);

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
    //   _this.loading = true
      return
      $.ajax({
        url: '/getlist',
        type: 'post',
        data: {
          code: '0101210010',
        },
        success: function (data) {
          _this.loading = false
          if (data.code == 0) {
            // $.extend(true, _this.productData, data.ret_msg.datas)
            _this.$set(_this.$data, 'productData', _this.productData)
          }
        },
        error: function () {
          _this.loading = false
        }
      })
    }
  }
</script>

<style>
</style>