<script setup lang="ts">
import type {ICard, IColumn} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import {convertCurrency} from "../lib/convertCurrency";
import dayjs from "dayjs";

useHead({
  title: 'CRM',
})

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const {data, isLoading, refetch} = useKanbanQuery()

</script>

<template>
  <div class="p-10">
    <h1 class="text-2xl font-bold mb-10">Nuxt 3 CRM</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <div>
            <UiCard class="mb-3" draggable="true" v-for="card in column.items" key:="card.id">
              <UiCardHeader role="button">{{ card.name }}</UiCardHeader>
              <UiCardDescription>{{ convertCurrency(card.price) }}</UiCardDescription>
              <UiCardContent>{{ card.companyName }}</UiCardContent>
              <UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>