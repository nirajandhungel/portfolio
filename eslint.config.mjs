import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👇 Custom rule overrides here
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      // Turn unused vars into warnings
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": "off" // disable base JS rule (to avoid conflict)
    }
  }
];

export default eslintConfig;
