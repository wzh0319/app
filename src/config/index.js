
const env = import.meta.env.MODE
const ENVCONFIG = {
  dev: {
    baseApi: "",
    mockApi:""
  },
  test: {
    baseApi: "",
    mockApi:""
  },
  prod: {
    baseApi: "",
    mockApi:""
  }
}
export default {
  env,
  mock: true,
  ...ENVCONFIG[env]
}