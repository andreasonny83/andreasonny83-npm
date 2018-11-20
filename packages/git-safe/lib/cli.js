const meow = require('meow');
const { prompt } = require('enquirer');
const shell = require('shelljs');
const chalk = require('chalk');

const operationQuestion = (command) => ({
  type: 'confirm',
  name: 'operation',
  message: `Are you sure you want to proceed with ${chalk.blue(command)} ?`
});

const cli = meow(
  `
  Usage
    $ git-refined <operation>
  Example
    $ git-refined push origin master -f
    $ git-refined pull origin master
    $ git-refined remote add upstream git@github.com:andreasonny83/git-refined.git
`);

const exitWithMessage = () =>
  console.log(chalk.yellow(`Don't worry! Nothing has been executed.`));

module.exports.cli = Promise.resolve().then(async () => {
  const args = process.argv;
  args.splice(0,2);

  if (cli.input.length === 0) {
    return cli.showHelp();
  }

  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }

  const command = args.join(' ');
  const confirm = await prompt(operationQuestion(`git ${command}`));

  return confirm.operation ? shell.exec(`git ${command}`).code : exitWithMessage();
});
