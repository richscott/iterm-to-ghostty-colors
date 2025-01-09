This is a super-rudimentary utility to generate a ghostty
terminal colors configuration, from an iterm2 color scheme
dump.

To run (I use `yarn` and `bun`, but `npm` and `node` should work
fine as well):
```
$ yarn install
$ bun convertcolors.js samples/Pastels.itermcolors
```
The generated color spec will be rendered to stdout.
