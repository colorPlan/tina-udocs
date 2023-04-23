import { defineConfig } from "tinacms";
import { HexaDocsSchema } from "hexatina";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bbcec792-d4b1-40af-a076-4347ddbd9b69",
  token: "80971379dbb04de04c18f36d130ddcb2d48885e8",
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
