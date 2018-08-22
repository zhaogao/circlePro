<template>
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

<script>
  export default {
    props: {
      title: String,
      list: [Array],
      width: {
        default: '45%',
        type: String
      }
    },
  }
</script>

<style>
</style>