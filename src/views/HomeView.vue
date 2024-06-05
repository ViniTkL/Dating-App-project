<script setup>
import MainView from '@/views/MainView.vue'
import MatchesView from "@/views/MatchesView.vue"
import { onMounted } from 'vue';

</script>


<template>
  <main class="home-container">
  <el-tabs  class="menu-tabs" tab-position="bottom" type="border-card">
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon class="nav-icons" icon='fa-solid fa-clone' />
          </span>
        </template>
        <MainView class="main-component"/>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon class="nav-icons" icon='fa-solid fa-heart' />
          </span>
        </template>
        <MatchesView />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <font-awesome-icon class="nav-icons" icon='fa-solid fa-user-large' />
          </span>
        </template>
        Role
      </el-tab-pane>
    </el-tabs>
  </main>
</template>


<style>

.home-container{
  width: 100%;
  height: fit-content;
}

el-tabs {
    height: 100vh;  
    overflow: hidden;
  }

  .el-tabs--border-card>.el-tabs__content{
    padding: 0px;
  }

  .menu-tabs > .el-tabs__header {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 72px;
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

  .tabs-label{
    font-size: 18px;
  }

  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color: #E94057;
    border-top-color: #E94057;
    border-left-color: transparent; 
    border-right-color: transparent;
  }

  .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #E94057;
}

.el-tabs--border-card {
  border: none;
}

.main-component{
    position: relative;
    top: 50px;
}
</style>