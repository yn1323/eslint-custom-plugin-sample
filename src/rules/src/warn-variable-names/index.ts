import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(name => name)
export const ruleName = 'unnecessary-variable-names'
export const WarnVariableNames = createRule({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Warn particular keyword included variables',
    },
    messages: {
      [ruleName]: 'Please change variable name',
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
  name: ruleName,
  defaultOptions: [{ keywords: [] as string[] }],
  create(context) {
    const keywords = context.options[0].keywords

    return {
      VariableDeclaration(node) {
        let variableName = ''

        if (
          node.declarations.length > 0 &&
          node.declarations[0].id.type === 'Identifier' &&
          node.declarations[0].id.name
        ) {
          variableName = node.declarations[0].id.name
        }

        if (keywords.some(keyword => variableName.includes(keyword))) {
          context.report({
            node,
            messageId: ruleName,
          })
        }
      },
    }
  },
})
