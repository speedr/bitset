# speedr-bitset

> Light BitSet implementation

## Install

```sh
$ npm install --save speedr-bitset
```

## Usage

```js
import BitSet from 'speedr-bitset'

let bs1 = new BitSet(64)
let bs2 = new BitSet(64)

bs1.set(3, true)
bs1.set(4, true)
bs1.set(5, true)

bs2.set(4, true)
bs2.set(5, true)

bs1.contains(bs2) // true
bs2.contains(bs1) // false

bs1.get(1) // false
bs1.get(3) // true

bs1.reset()
bs1.contains(bs2) // false
```

## License

MIT © Florent Cailhol
