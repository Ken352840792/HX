<template>
  <div style="float:left">
    {{ msg }}
      <div style="height:300px">123</div>
    <tinymce ref="editor">
    </tinymce>
      <div style="height:300px">123</div>
    <button  >清空内容</button>
    <button  >禁用</button>
    <button >启用</button>
  </div>
</template>
<script>
import tinymce from '@/components/com-tinymce'
export default {
  components: {
    tinymce
  }
}
</script>
