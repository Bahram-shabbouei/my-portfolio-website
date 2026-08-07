// eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

// Directories that should be completely excluded from linting.
const IGNORED_DIRECTORIES = ["dist", "node_modules"];

// File extensions that should be linted with the React/TS rule set.
const LINTED_FILE_PATTERNS = ["**/*.{js,jsx,mjs,cjs,ts,tsx}"];

export default [
  {
    ignores: IGNORED_DIRECTORIES,
  },
  ...tseslint.configs.recommended, // Standard rules for TypeScript
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Allows browser globals like `document`
        ...globals.node, // Allows Node.js globals like `process`
      },
    },
  },
  {
    files: LINTED_FILE_PATTERNS,
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      // Not needed with the new JSX transform (Vite default) —
      // React does not need to be in scope to use JSX.
      "react/react-in-jsx-scope": "off",

      // Not needed because TypeScript already handles type checking
      // for component props; PropTypes would be redundant.
      "react/prop-types": "off",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
  },
];
