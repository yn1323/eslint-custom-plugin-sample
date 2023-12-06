import { RuleTester } from '@typescript-eslint/rule-tester'
import { WarnVariableNames, ruleName } from '.'

const ruleTester = new RuleTester()

const options = [{ keywords: ['trim', 'temp'] }]

ruleTester.run(ruleName, WarnVariableNames, {
  valid: [
    {
      code: `let filteredValue = something.filter(e => e !== 3);
      let filteredValue2 = something.filter(e => e !== 3)
      `,
      options,
    },
    {
      code: `const filteredValue = something.filter(e => e !== 3)`,
      options,
    },
  ],
  invalid: [
    {
      code: `let trimmedValue = something.filter(e => e !== 3)`,
      options,
      errors: [
        {
          messageId: ruleName,
        },
      ],
    },
    {
      code: `const trimmedValue = something.filter(e => e !== 3)`,
      options,
      errors: [
        {
          messageId: ruleName,
        },
      ],
    },
    {
      code: `const tempValue = 300`,
      options,
      errors: [
        {
          messageId: ruleName,
        },
      ],
    },
  ],
})
