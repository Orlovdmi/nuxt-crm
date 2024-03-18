<script setup lang="ts">
import type {ICard, IColumn} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import {convertCurrency} from "~/lib/convertCurrency";
import dayjs from "dayjs";
import {useMutation} from "@tanstack/vue-query";
import {DB} from "~/lib/appwrite";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";

useHead({
  title: 'CRM',
})

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const {data, isLoading, refetch} = useKanbanQuery()

type TypeMutationVariables = {
  docId: string
  status: string
}

const { mutate } = useMutation({
  mutationKey: ['move card'],
  mutationFn: ({docId, status}: TypeMutationVariables) => {
    return DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {status});
  },
  onSuccess: () => {
    refetch()
  }
})

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card
  sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
  event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
  if(dragCardRef.value && sourceColumnRef.value) {
    mutate({docId: dragCardRef.value.id, status: targetColumn.id})
  }
}
</script>

<template>
  <div class="p-10">
    <h1 class="text-2xl font-bold mb-10">Nuxt 3 CRM</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div class="min-h-screen" v-for="(column) in data" @dragover="handleDragOver" @drop="() => handleDrop(column)">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <div>
            <KanbanCreateDeal refetch="refetch" :status="column.id" />
            <UiCard class="mb-3" draggable="true" v-for="card in column.items" key:="card.id" @dragstart="() => handleDragStart(card, column)">
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