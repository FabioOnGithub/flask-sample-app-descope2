const projectId = "P2UFtkOPBYUU9qKofYYR77EnA1rl"
const sdk = Descope({ projectId: projectId, persistTokens: true, autoRefresh: true })
const sessionToken = sdk.getSessionToken()
