<script setup lang="ts">
  import {account} from "~/lib/appwrite";
  import {useAuthStore, useIsLoadingStore} from "~/store/auth.store";

  const isLoadingStore = useIsLoadingStore();
  const store = useAuthStore();
  const router = useRouter();

  onMounted(async () => {
    try {
      const user = await account.get();
    }catch (error) {
      await router.push('/login');
    }finally {
      isLoadingStore.set(false);
    }
  });
</script>

<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar />
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>