# Contributing to the IBM Watson Yeoman Generator

The Watson Yeoman Generator is allows you to get quickly up and running using the [Watson Design Guide](http://watsondesign.guide/) and is a child project of the Design Guide. Please refer to it for full contributing guidelines.

_**Heads Up!** We love open source, but the Watson Yeoman Generator and Watson Design Guide is unlikely to add new guidelines or features that are not in-line with the work we're doing or won't be used at IBM Watson. Inclusion is at the discretion of the Watson Design team. We really love to share, though, so hopefully that means we're still friends :blue_heart:_

## Submitting Issues

* Before creating a new issue, perform a [cursory search](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aissue+user%3Aibm-watson+) to see if a similar issue has already been submitted.
* Can create an issue [here](https://github.com/IBM-Watson/generator-watson/issues). Please include as many details as possible when filing an issue.
* Issue titles should be descriptive, explaining at the high level what it is about, and should be written in the same style as [Git commit messages](#git-commit-messages).
* Please include the version of the Design Guide being used or viewed
* Do not open a [pull request](#pull-requests) to resolve an issue without first receiving feedback from a `collaborator` or `owner` and having them agree on a solution forward.
* Include screenshots and animated GIFs whenever possible; they are immensely helpful.
* When submitting a browser bug, please include the browser, version, operating system, and operating system version.
* When submitting an update to or a new feature, pattern, guideline, etc… we prefer to see user research associated with the suggestion including testing methods, results, and sample size, whenever possible. This allows us to make more user-centered decisions and cut through assumptions and individual preferences.
* Issues that have a number of sub-items that need to be complete should use [task lists](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments) to track the sub-items in the main issue comment.


## Pull Requests

* **DO NOT ISSUE A PULL REQUEST WITHOUT FIRST [SUBMITTING AN ISSUE](#submitting-issues)**
* **ALL PULL REQUESTS MUST INCLUDE A [DEVELOPER CERTIFICATE OF ORIGIN](#developer-certificate-of-origin)**
* Pull requests should reference their related issues. If the pull request closes an issue, [please reference its closing from a commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/). Pull requests not referencing any issues will be closed.
* Pull request titles should be descriptive, explaining at the high level what it is doing, and should be written in the same style as [Git commit messages](#git-commit-messages).
* Update the [CHANGELOG](#maintaining-thechangelog) with the changes made by the pull request, making sure to use the proper [Emoji](#emoji-cheatsheet).
* Follow our JavaScript and CSS styleguides. We have linters set up to catch most of it.
* Ensure that [EditorConfig](http://editorconfig.org/) installed in the editor used to work on the site and that it is functioning properly.
* Do not squash or rebase commits when submitting a Pull Request. It makes it much harder to follow work and make incremental changes.
* Ensure no Emoji tags are used in the title of the Pull Request

### Developer Certificate of Origin

All contributions to the Watson Design Guideline must be accompanied by acknowledgment of, and agreement to, the [Developer Certificate of Origin](http://elinux.org/Developer_Certificate_Of_Origin), reproduced below. Acknowledgment of and agreement to the Developer Certificate of Origin _must_ be included in the comment section of each contribution and _must_ take the form of `DCO 1.1 Signed-off-by: {{Full Name}} <{{email address}}>` (without the `{}`). Contributions without this acknowledgment will be required to add it before being accepted. If a contributor is unable or unwilling to agree to the Developer Certificate of Origin, their contribution will not be included.

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
660 York Street, Suite 102,
San Francisco, CA 94110 USA

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

### Git Commit Messages

* Use the present tense (`"Add feature"` not `"Added Feature"`)
* Use the imperative mood (`"Move cursor to…"` not `"Moves cursor to…"`)
* Limit the first line to 72 characters or less
* Include relevant Emoji from our [Emoji cheatsheet](#emoji-cheatsheet)

### Branching Model

* Branches must be made off of the most current `master` branch from `git@github.com:IBM-Watson/generator-watson.git`
* Branch names should be descriptive, describing what is being done in that branch
* Pull requests must be made into our [watson](https://github.com/IBM-Watson/generator-watson/tree/master) branch.
* The following branch prefixes should be used when creating a new branch:
  * `hotfix/` - bug fixes that got through and need to be squashed
  * `release/` - for releases
  * `feature/` - update to or new feature

## Creating a New Version

Versioning is done through [SEMVER](http://semver.org/). When creating a new version, issue a [pull request](#pull-requests) from `develop` into `master` and create new release branch off of `master` with the version's name, and create a new tag with `v` prefixed with the version's name from that branch. 

For instance, when creating version `1.1.0`, start by merging `develop` into `master`, create a branch `release/1.1.0` from `master`, and create a tag `v1.1.0` from branch `release/1.1.0`.

### Maintaining the Changelog

The Changelog should have a list of changes made for each version. They should be organized so additions come first, changes come second, and deletions come third. Version numbers should be 2nd level headers with the `v` in front (like a tag) and the date of the version's most recent update should be underneath in italics.

Changelog messages do not need to cover each individual commit made, but rather should have individual summaries of the changes made. Changelog messages should be written in the same style as [Git commit messages](#git-commit-messages).

## Emoji Cheatsheet

When creating creating commits or updating the CHANGELOG, please **start** the commit message or update with one of the following applicable Emoji. Emoji should not be used at the start of issue or pull request titles.

* :art: `:art:` when improving the format/structure of the code
* :racehorse: `:racehorse:` when improving performance
* :memo: `:memo:` when writing long-form text (documentation, guidelines, principles, etc…)
* :bug: `:bug:` when fixing a bug
* :fire: `:fire:` when removing code or files
* :green_heart: `:green_heart:` when fixing the CI build
* :white_check_mark: `:white_check_mark:` when adding tests
* :lock: `:lock:` when dealing with security
* :arrow_up: `:arrow_up:` when upgrading dependencies
* :arrow_down: `:arrow_down:` when downgrading dependencies
* :shirt: `:shirt:` when removing linter warnings
* :shipit: `:shipit:` when creating a new release
