// eslint.config.js (KORRIGIERTE VERSION)
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist", "node_modules"], // Ignoriert diese Ordner
  },
  ...tseslint.configs.recommended, // Standard-Regeln für TypeScript
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Erlaubt Browser-Variablen wie `document`
        ...globals.node,    // Erlaubt Node.js-Variablen wie `process`
      },
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect", // Erkennt die React-Version automatisch
      },
    },
  },
];