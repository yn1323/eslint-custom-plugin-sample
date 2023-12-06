"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsxNoDefaultExport = exports.ruleName = void 0;
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator(name => name);
exports.ruleName = 'jsx-no-default-export';
exports.JsxNoDefaultExport = createRule({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Prevent default export',
        },
        messages: {
            [exports.ruleName]: 'Component should use named export',
        },
        schema: [],
    },
    name: exports.ruleName,
    defaultOptions: [],
    create(context) {
        return {
            ExportDefaultDeclaration(node) {
                context.report({
                    node,
                    messageId: exports.ruleName,
                });
            },
        };
    },
});
