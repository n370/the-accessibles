## Test results

```shell
> a11y-theme-builder@1.0.0 test
> ts-node src/test.ts

getDocNames = []
getDoc = {
  statusCode: 404,
  error: 'Not Found',
  message: `document '"abc"' was not found`
}
createDoc = { id: 'abc', themedata: '123', color: { primary: 'red' } }
createDoc = {
  statusCode: 502,
  error: 'Bad Gateway',
  message: 'document already exists'
}
getDoc = { id: 'abc', themedata: '123', color: { primary: 'red' } }
createDoc = { id: 'def', themedata: '456', color: { primary: 'blue' } }
getDoc = { id: 'def', themedata: '456', color: { primary: 'blue' } }
getDocNames = [ 'abc', 'def' ]
updateDoc = true
getDoc = { themedata: '4567', color: { primary: 'green' }, id: 'def' }
updateDoc = {
  themedata: '4567',
  color: { primary: 'brown', secondary: 'black' },
  id: 'def'
}
getDoc = { color: { primary: 'brown', secondary: 'black' } }
getDoc = { color: { primary: 'brown' } }
deleteDoc = { id: 'abc', themedata: '123', color: { primary: 'red' } }
getDoc = {
  statusCode: 404,
  error: 'Not Found',
  message: `document '"abc"' was not found`
}
getDocNames = [ 'def' ]
postDoc = {
  statusCode: 501,
  error: 'Not Implemented',
  message: 'Not Implemented'
}
deleteDoc = {
  themedata: '4567',
  color: { primary: 'brown', secondary: 'black' },
  id: 'def'
}
getDoc = {
  statusCode: 404,
  error: 'Not Found',
  message: `document '"def"' was not found`
}
getDocNames = []
>>> PASSED <<<
```