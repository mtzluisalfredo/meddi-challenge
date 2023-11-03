<!-- components/DataTable.vue -->
<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="flex justify-between py-3 pl-2">
        <div class="relative max-w-xs">
          <input type="text" name="search"
            class="block w-full p-3 pl-10 text-gray-500 rounded-md focus:ring-blue-500 border-solid border-2 border-gray-300"
            placeholder="Buscar..." />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
type ArrayType = Array<{ [x: string]: string | number }>;
export default {
  props: {
    itemsTable: {
      type: Array as () => ArrayType,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    onClickItem: {
      type: Function as unknown as () => (item: { [x: string]: string | number }) => void,
      required: false,
      default: () => { },
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.itemsTable.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.itemsTable.slice(start, end);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.itemsTable.length) {
        this.currentPage++;
      }
    },
    handleRowClick(_item: { [x: string]: string | number; }) {
      this.onClickItem(_item)
    },
  },
};
</script>
