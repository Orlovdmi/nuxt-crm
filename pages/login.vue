<script setup lang="ts">
import {useIsLoadingStore} from "~/store/auth.store";
import {account} from "~/lib/appwrite";

useHead({
  title: 'Login',
})

const emailRef = ref('');
const passwordRef = ref('');
const nameRef = ref('');

const isLoadingStore = useIsLoadingStore();
const router = useRouter();

const login = async () => {
  isLoadingStore.set(true);
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value);
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-10">Login</h1>
      <form>
        <UiInput placeholder="name" type="text" class="mb-3" v-model="nameRef"/>
        <UiInput placeholder="email" type="email" class="mb-3" v-model="emailRef"/>
        <UiInput type="password" class="mb-3" v-model="passwordRef"/>
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button">Login</UiButton>
          <UiButton type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>