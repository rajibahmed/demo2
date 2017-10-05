## Running locally

first terminal shell run webpack -
```sh
./bin/webpack-dev-server
```

second terminal shell run rails -
```sh
./bin/rails server
```


## WTF is this ?

This is a rails 5.1 app, using react with webpack. And also using
Ember 2.7.0 through the same webpack.


## Why am I doing this ?

We have a react component lib, we want to use it to share
style, ideas. But our ember-rails app was not communicating with the
react components properly.

## What have we achived ?

In this demo, you have  with

  * a react app and a ember app share the root page.
  * a react component is rendered through ember.

## Intents

  * We want to use HMR/Live reloading
  * We want to rails react webpack
  * We don't want to throw away huge ember app with tests
  * We want to load micro apps and share the page with ember
  * We want to share state between ember and react
