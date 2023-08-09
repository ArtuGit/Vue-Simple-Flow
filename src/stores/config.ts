import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('counter', () => {
  const appName = ref('Simple Flow')
  const appDescription = ref(
    'Simple Flow/Menu App. Can be used to make a POC or demo that your Front End works with your Back End or as a basis for a simple app.'
  )
  return { appName, appDescription }
})
