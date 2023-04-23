import { defineConfig } from "tinacms";
import { HexaDocsSchema } from "hexatina";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "08301358-cbb0-4fb3-9afc-ac63f6588818", // Get this from tina.io
  token: "a7fc4ccbf98b778c9e41df480febee059bd177d9", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    ...HexaDocsSchema,
  }
});
