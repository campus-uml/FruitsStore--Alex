// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ywfeg1",
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
