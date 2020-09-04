# Omise Challenge React

## Run Client

`npm run client`

## Run Server

`npm run server`

## Test

`npm run test`

### Snapshot Testing

This project is using [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)

## Issues

### Warning componentWillMount deprecate

This happen because redux provider use `componentWillMount` and `componentWillReceiveProps`

<https://github.com/reduxjs/react-redux/issues/1374>
