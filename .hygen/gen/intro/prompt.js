// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: '登録したいお名前を入力してください。',
    validate: (answer /* string */) => {
      return answer !== '' ? true : '名前は必須項目です。入力してください。'
    }
  },
  {
    type: 'input',
    name: 'twitter',
    message: 'twitterアカウントのIDを入力してください。'
  },
  {
    type: 'input',
    name: 'github',
    message: 'githubアカウント名を入力してください。'
  },
  {
    type: 'input',
    name: 'website',
    message: 'websiteのURLを入力してください。'
  }
]
