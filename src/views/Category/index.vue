<template>
  <div class="category-page">
    <div class="top">
      分类 <van-icon name="search" class="search" size="25" />
    </div>
    <div class="listbox">
      <div class="leftbox">
        <van-sidebar v-model="active">
          <van-sidebar-item :title="item.name" v-for="item in list" :key="item.id" />
        </van-sidebar>
      </div>
      <div class="rightbox">
        <div class="itembox" v-for="ele in labelList" :key="ele.id" @click="$router.push('/search')">
          {{ ele.name }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { getCategory } from '@/services/home';
import type { CategoryType } from '@/services/types/home';
import { computed, onMounted, ref } from 'vue';
const active = ref(0)
const list = ref<CategoryType[]>([])
onMounted(async () => {
  const listres = await getCategory()
  console.log(listres);
  list.value = listres.data
})
const labelList = computed(() => list.value[active.value]?.labelList)

</script>
<style lang="scss" scoped>
.top {
  position: relative;
  width: 100%;
  height: 44px;
  background-color: rgb(52, 93, 194);
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  font-weight: 700;

  ::v-deep(.van-icon) {
    position: absolute;
    right: 5px;
    top: 10px;

  }
}

.listbox {
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;

  .leftbox {
    width: 100px;
  }

  .rightbox {
    // display: flex;
    // flex-wrap: wrap;

    .itembox {
      float: left;
      font-size: 12px;
      line-height: 30px;
      border: 1px solid #999;
      border-radius: 15px;
      min-width: 80px;
      height: 30px;
      text-align: center;
      padding: 0 2px;
      margin: 7px 2px;
    }
  }

}
</style>
