# Contributing


## Issue contributions

When opening new issues or commenting on existing issues make sure discussions
are related to concrete technical issues.


## Code contributions

This project has an open governance model for Turner developers and welcomes new
contributors.  Individuals making significant and valuable contributions may be
made _Collaborators_ and given commit-access to the project.  See the
[GOVERNANCE.md](./GOVERNANCE.md) document for more information about how this
works.

This document will guide you though the contribution process.


### Step 1: fork

Fork the project and check out your copy locally.

```shell
$ git clone git@github.com:TurnerBroadcasting/cnn-logger.git
$ cd cnn-logger
$ git remote add upstream git://github.com/TurnerBroadcasting/cnn-logger.git
```


#### Which branch?

For developing new features and bug fixes, the `master` branch should be pulled
and built upon.


### Step 2: Branch

Create a feature branch and start making changes:

```shell
$ git checkout -b my-feature-branch -t origin/master
```


### Step 3: Commit

Make sure git knows your _correct_ name and email address:

```shell
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@turner.com"
```

A commit log should describe what changed and why.  Follow these guidelines when
writing one:

Each commit message consists of a **header**, a **body** and a **footer**.  The
header has a special format that includes a **subsystem** and a **subject**:

```
<subsystem>: <short-description>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters.  Make sure in
commit messages you:

- use the imperative, present tense: "change" not "changed" nor "changes"

- don't capitalize first letter

- no dot (.) at the end

A good commit log can look something like this:

```text
subsystem: succinct description of the change

Body of commit message explaining things in more details and giving background
about the issue being fixed as needed.

The body can be several paragraphs.  Try to limit the line length to around 72
characters or so.

Fixes: #12
```


### Step 4: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```shell
$ git fetch upstream
$ git rebase upstream/master
```


### Step 5: Test

Bug fixes and features **should come with tests**.  Add your tests in the test/
directory.  Look at other tests to see how they should be structured.

Run all existing tests for the project.  See the project README.md for details
on how to run the tests.


### Step 6: Push

```shell
$ git push origin my-feature-branch
```

Go to https://github.com/yourusername/cnn-logger and select your feature branch.  Click
the 'Pull Request' button and fill out the form.

Pull requests are usually reviewed within a few days.  If there are comments to
address, apply your changes in a separate commit and push that to your feature
branch.  Post a comment in the pull request afterwards; GitHub does not send out
notifications when you add commits.
