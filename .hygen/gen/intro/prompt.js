// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
    validate: (answer /* string */) => {
      return answer !== '' ? true : '名前は必須項目です。入力してください。'
    }
  },
  {
    type: 'input',
    name: 'twitter',
    message: "What's your twitter account ID?"
  },
  {
    type: 'input',
    name: 'github',
    message: "What's your github account?"
  },
  {
    type: 'input',
    name: 'website',
    message: "What's your website URL?"
  }
]
