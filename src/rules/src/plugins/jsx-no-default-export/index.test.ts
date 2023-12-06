import { RuleTester } from '@typescript-eslint/rule-tester'
import { rule, ruleName } from '.'

const ruleTester = new RuleTester()

ruleTester.run(ruleName, rule, {
  valid: [
    {
      code: `export const Button = () => {
        return <button>this is button</button>;
      };`,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  invalid: [
    {
      code: `const Button = () => {
        return <button>this is button</button>;
      };
      export default Button;`,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          messageId: ruleName,
        },
      ],
    },
  ],
})
