import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(name => name)
export const ruleName = 'jsx-no-default-export'
export const JsxNoDefaultExport = createRule({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prevent default export',
    },
    messages: {
      [ruleName]: 'Component should use named export',
    },
    schema: [],
  },
  name: ruleName,
  defaultOptions: [],
  create(context) {
    return {
      ExportDefaultDeclaration(node) {
        context.report({
          node,
          messageId: ruleName,
        })
      },
    }
  },
})
