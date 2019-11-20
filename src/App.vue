<template>
  <div id="app" class="contain">
    <router-view></router-view>
    <loading v-if="loading" />
    <confirm v-if="alertState" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import loading from './components/com-loading'
import confirm from './components/com-confirm'
export default {
  computed: {
    ...mapState(['loading', 'alertState'])
  },
  components: {
    loading,
    confirm
  }
}
</script>
<style lang="scss" scoped>
.contain {
  width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
