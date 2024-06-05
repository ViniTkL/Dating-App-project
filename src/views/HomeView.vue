<script setup>


</script>


<template>
  <el-tabs  class="menu-tabs" tab-position="bottom" type="border-card">
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon :icon='fa-regular fa-clone' />
          </span>
        </template>
        <CategoriaView />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon :icon='fa-solid fa-heart' />
          </span>
        </template>
        <CheckoutView />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon :icon='fa-solid fa-user-large' />
          </span>
        </template>
        Role
      </el-tab-pane>
    </el-tabs>


</template>


<style scoped>
el-tabs {
    height: 100vh;  
  }

  .menu-tabs > .el-tabs__header {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px;
  }

  .menu-tabs .el-tabs__nav-wrap,
  .menu-tabs .el-tabs__nav-scroll,
  .menu-tabs .el-tabs__nav {
    height: 100%;
    float: none;
  }

  .menu-tabs .el-tabs__item {
    flex: 1;
    height: 100%;
  }
</style>