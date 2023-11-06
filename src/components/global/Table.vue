<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="(column, index) in columns" :key="index"
              :class="`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase`">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(item, itemIndex) in itemsTable" :key="itemIndex" @click="handleRowClick(item)"
            class="cursor-pointer">
            <td v-for="(column, columnIndex) in columns" :key="columnIndex"
              class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              {{ item[column as string | number] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center p-4">
      <div class="flex space-x-2">
        <button @click="prevPage" :disabled="currentPage === 1" :class="{ 'cursor-not-allowed': currentPage === 1 }"
          class="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200">
          Anterior
        </button>
        <div class="flex items-center text-gray-500">
          Página {{ currentPage }} de {{ totalPages }}
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          :class="{ 'cursor-not-allowed': currentPage === totalPages }"
          class="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-200">
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
type ArrayType = Array<{ [x: string]: string | number }>;
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    onClickItem: {
      type: Function as unknown as () => (item: { [x: string]: string | number }) => void,
      required: false,
      default: () => { },
    },
    onNext: {
      type: Function as unknown as () => () => void,
      required: false,
      default: () => { },
    },
    onPreve: {
      type: Function as unknown as () => () => void,
      required: false,
      default: () => { },
    },
    itemsTable: {
      type: Array as () => ArrayType,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentPage(): number {
      return this.currentPage;
    },
    totalPages(): number {
      return this.totalPages;
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.totalPages;
      const end = start + this.totalPages;
      return this.itemsTable.slice(start, end);
    },
  },
  methods: {
    prevPage() {
      this.onPreve()
    },
    nextPage() {
      this.onNext()
    },
    handleRowClick(_item: { [x: string]: string | number; }) {
      this.onClickItem(_item)
    },
  },
};
</script>
