<template>
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

<script>
  export default {
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
  }
</script>

<style>
</style>