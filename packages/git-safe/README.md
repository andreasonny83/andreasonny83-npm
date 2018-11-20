# git-safe
[![npm version](https://badge.fury.io/js/%40andreasonny83%2Fgit-safe.svg)](https://badge.fury.io/js/%40andreasonny83%2Fgit-safe)
[![npm](https://img.shields.io/npm/dt/@andreasonny83/git-safe.svg)](https://www.npmjs.com/package/@andreasonny83/git-safe)
[![Known Vulnerabilities](https://snyk.io/test/npm/@andreasonny83/git-safe/badge.svg?targetFile=package.json)](https://snyk.io/test/npm/@andreasonny83/git-safe?targetFile=package.json)

> Always ask confirmation before executing a Git command

<img src="https://raw.githubusercontent.com/andreasonny83/andreasonny83/master/packages/git-safe/doc/git-safe.gif" width="700">

## Table of Contents

- [git-safe](#git-safe)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Want to replace git with git-safe](#want-to-replace-git-with-git-safe)
  - [License](#license)

## Install

```sh
$ npm i -g @andreasonny83/git-safe
```

## Usage

```sh
$ git-safe <git_command>
```

**Examples**

```sh
$ git-safe push origin master -f

? Are you sure you want to proceed with git push origin master -f ? (y/N) › false
Don't worry! Nothing has been executed.
```

## Want to replace git with git-safe

It might be annoying to having to type `git-safe` all the time. So, you can easily configure your shell
to alias `git` to `git-safe` so you can just forget about git-safe and have it automatically implemented with
all your Git commands.

For doing that, just add an alias to your `.bashrc` or `.zshrc` file in your root:

```sh
alias git='git-safe'
```

Now open a new terminal and run any Git command

```sh
$ git push origin master
Are you sure you want to proceed with git push origin master ? (y/N) · false
```

That's it!

## License

MIT

---

Created with 🦄 by [andreasonny83](https://about.me/andreasonny83)
