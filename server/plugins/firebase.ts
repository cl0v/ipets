import { useFirestore} from "vuefire"
import { initializeApp } from "firebase-admin"

export default defineNitroPlugin((nitroApp) => {
    initializeApp()
  })

// export default defineNuxtPlugin(() => {
//     return {
//         provide: {
//             db: useFirestore()
//         }
//     }

// })