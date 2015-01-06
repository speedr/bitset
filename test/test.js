import assert from 'assert'
import BitSet from '..'

function assertBitsEqual(bs, bits) {
  let s = ''
  for (let i = 0; i < bs.size; i++) {
    s += bs.get(i) ? 1 : 0
  }

  assert.equal(s, bits)
}

describe('BitSet', function() {
  it('should work with short bit sets', function() {
    let bs = new BitSet(4)
    assertBitsEqual(bs, '0000')

    bs.set(0, true)
    bs.set(1, true)
    assertBitsEqual(bs, '1100')

    bs.set(0, false)
    assertBitsEqual(bs, '0100')

    let other = new BitSet(bs.size)
    other.set(1, true)
    assert.ok(bs.contains(other))

    other.set(2, true)
    assert.ok(!bs.contains(other))

    bs.reset()
    assertBitsEqual(bs, '0000')
  })
  it('should work with large bit sets', function() {
    let bs = new BitSet(40)
    assertBitsEqual(bs, '0000000000000000000000000000000000000000')

    bs.set(12, true)
    bs.set(26, true)
    bs.set(36, true)
    bs.set(38, true)
    assertBitsEqual(bs, '0000000000001000000000000010000000001010')

    bs.set(36, false)
    assertBitsEqual(bs, '0000000000001000000000000010000000000010')

    let other = new BitSet(bs.size)
    other.set(26, true)
    other.set(38, true)
    assert.ok(bs.contains(other))

    other.set(2, true)
    assert.ok(!bs.contains(other))

    bs.reset()
    assertBitsEqual(bs, '0000000000000000000000000000000000000000')
  })
})
