import { defineConfig } from "tinacms";
import { HexaDocsSchema } from "hexatina";
import Tooltips from "./models/tooltips";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "9d222e91-5f09-4f98-8e4c-5042ce12693d", // Get this from tina.io
  token: "3654c615e81f6d2e461b1992bd9f990aa2e528b3", // Get this from tina.io
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
    collections: [
      ...HexaDocsSchema.collections,
      Tooltips
    ]
  }
});
