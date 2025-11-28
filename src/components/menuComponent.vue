<template>
  <div class="menu-component">
    <div class="header-row">
      <h2 class="section-title">{{ title }}</h2>
      <div class="group-tabs">
        <button
          class="group-tab"
          :class="{ active: selectedGroup === 'All' }"
          @click="selectGroup('All')"
        >
          All
        </button>
        <button
          v-for="group in groups"
          :key="group"
          class="group-tab"
          :class="{ active: selectedGroup === group }"
          @click="selectGroup(group)"
        >
          {{ group }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useProductStore } from '../stores/productStore';

defineProps<{ title: string }>();

const emit = defineEmits<{
  (e: 'update:group', groupName: string): void;
}>();

const selectedGroup = ref('All');
const groups = ref<string[]>([]);
const productStore = useProductStore();

onMounted(() => {
  watch(
    () => productStore.groups,
    (newGroups) => {
      groups.value = [...newGroups];
    },
    { immediate: true }
  );
});

const selectGroup = (groupName: string) => {
  selectedGroup.value = groupName;
  emit('update:group', groupName);
};
</script>

<style scoped>
.menu-component {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 24px;
  padding: 0 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.section-title {
  font-size: 25px;
  font-weight: 600;
  color: #252525;
  margin: 0;
}

.group-tabs {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  /* -webkit-overflow-scrolling: touch; */
}

.group-tab {
  padding: 6px 12px;
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Times New Roman', Times, serif;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
}

.group-tab:hover,
.group-tab.active {
  color: #000000;
  font-weight: bold;
}

</style>