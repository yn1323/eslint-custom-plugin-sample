"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarnVariableNames = exports.ruleName = void 0;
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator(name => name);
exports.ruleName = 'unnecessary-variable-names';
exports.WarnVariableNames = createRule({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Warn particular keyword included variables',
        },
        messages: {
            [exports.ruleName]: 'Please change variable name',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    keywords: { type: 'array', items: { type: 'string' } },
                },
                additionalProperties: false,
            },
        ],
    },
    name: exports.ruleName,
    defaultOptions: [{ keywords: [] }],
    create(context) {
        const keywords = context.options[0].keywords;
        return {
            VariableDeclaration(node) {
                let variableName = '';
                if (node.declarations.length > 0 &&
                    node.declarations[0].id.type === 'Identifier' &&
                    node.declarations[0].id.name) {
                    variableName = node.declarations[0].id.name;
                }
                if (keywords.some(keyword => variableName.includes(keyword))) {
                    context.report({
                        node,
                        messageId: exports.ruleName,
                    });
                }
            },
        };
    },
});
