# git-safe
[![npm version](https://badge.fury.io/js/@andreasonny83/git-safe.svg)](https://badge.fury.io/js/@andreasonny83/git-safe)
[![npm](https://img.shields.io/npm/dt/@andreasonny83/git-safe.svg)](https://www.npmjs.com/package/@andreasonny83/git-safe)
[![Known Vulnerabilities](https://snyk.io/test/github/andreasonny83/@andreasonny83/git-safe/badge.svg?targetFile=package.json)](https://snyk.io/test/github/andreasonny83/@andreasonny83/git-safe?targetFile=package.json)

> Always ask confirmation before executing a Git command

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

## License

MIT

---

Created with 🦄 by [andreasonny83](https://about.me/andreasonny83)