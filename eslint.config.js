import baseConfig from "@abinnovision/eslint-config-base";
import typescriptConfig from "@abinnovision/eslint-config-typescript";

/** @type {import("@types/eslint").Linter.Config[]} */
export default [...baseConfig, ...typescriptConfig];
