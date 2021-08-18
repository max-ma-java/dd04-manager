<template>
  <div class="layout">
    <el-container>
      <el-header height="50px">
        <!-- <div class="header-collapse-icon-box pointer" @click="isCollapse = !isCollapse">
          <i
            :class="{
              'el-icon-s-fold': isCollapse,
              'el-icon-s-unfold': !isCollapse,
              'collapse-icon': true,
            }"
          ></i>
        </div> -->
        <div class="header-icon-box" @click="toIndex">H Y R O N </div>
        <div class="header-title-box">
          {{$route.meta.label}}
        </div>
        <div class="header-logout-box pointer">
          <span>你好，{{$store.state.userInfo.employeeName}}</span>
          <i class="el-icon-switch-button" @click="logout"></i>
        </div>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : 'auto'">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router
            :default-active="$route.path"
            background-color="#304CAA"
            text-color="#fff"
            active-text-color="#fff"
            :collapse-transition="false"
          >
            <el-menu-item
              v-for="item in routers"
              :key="item.path"
              :index="item.path"
            >
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.label }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive">
                <!-- 这里是会被缓存的视图组件 -->
              </router-view>
          </keep-alive>
            <router-view v-if="!$route.meta.keepAlive">
              <!-- 这里是不被缓存的视图组件 -->
            </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { routes } from "@/router";
import { logout } from '@/api/login'
import { removeToken } from '@/utils/auth'
export default {
  data() {
    return {
      isCollapse: false,
      routers: routes[0].children || [],
    };
  },
  methods: {
    logout() {
      const id = this.$store.state.userInfo.incrementId
      logout(id).then(res => {
        console.log(res)
        removeToken()
        this.$router.push({path:'/login'})
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toIndex(){
      this.$router.push({path : '/'})
    }
  },
};
</script>

<style lang="scss" scoped>
// @import '@/styles/mixin';
.layout {
  /**容器高度 */
  .el-container {
    height: 100vh;
    overflow: hidden;
  }
  /**路由样式 */
  .el-aside {
    box-shadow: 0px 0 10px 10px #f3f3f3;
    background: #304CAA;
    .el-menu {
      border-right: none;
      .el-menu-item{
        height: 88px;
        line-height: 88px;
        &.is-active{
          background: #24409E !important;
        }
        i {
            color: #fff !important;
        }
      }
    }
  }
  .el-header {
    display: flex;
    box-shadow: 1px 0 12px 6px #eaeaea;
    padding: 0 20px 0 0 !important;
    .header-collapse-icon-box {
      // width: 60px;
      width: 133px;
      @include mix-flex(flex-start,center);
    }
    .collapse-icon {
      font-size: 24px;
    }
    .header-icon-box{
      width: 153px;
      background: #304CAA;
      font-weight: 600;
      color: #fff;
      font-size: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .header-title-box{
      flex: 1;
      margin-left: 20px;
      font-weight: 600;
      cursor: pointer;
      @include mix-flex(flex-start,center);
    }
    .header-logout-box{
      // width: 60px;
      font-size: 14px;
      span{
        padding-right: 20px;
      }
      @include mix-flex(flex-start,center);
      >i{
        border-left: 1px solid #DCDCDC;
       padding-left: 20px;
      }
    }
  }
}
</style>
