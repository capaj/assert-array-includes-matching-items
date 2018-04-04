# assert-array-includes-matching-items

just a helpful assert with nice output which I was lacking in jest/chai/jasmine

```javascript
import assertArrayIncludesMatchingItems from 'assert-array-includes-matching-items'

assertArrayIncludesMatchingItems(someArray, arrayOfItemsToFind)
```

if the assertion fails, this is logged:
![output](output.jpg?raw=true 'When assertion fails')
