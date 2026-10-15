import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tlzcb6d4',
    dataset: 'production'
  },
  deployment: {
    appId: 'sy1ocgm3nfwy0dgohgb0h2sx',
    autoUpdates: true,
  },
})
