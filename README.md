This is a super-rudimentary utility to generate a ghostty (https://ghostty.org/)
terminal colors theme, from an exported iterm2 (https://iterm2.com/) profile
color scheme.

To use it, do something like this (I use `yarn` and `bun`, but `npm` and `node`
should work fine as well):
```
$ mkdir -p ~/.config/ghostty/themes # not needed if it already exists
$ yarn install
$ bun convertcolors.js samples/Pastels.itermcolors > ~/.config/ghostty/themes/Pastels
```
