export default class BitSet {
  constructor(size = 32) {
    this.bits = new Uint32Array(Math.ceil(size / 32))
  }

  get(index) {
    let i = index / 32 | 0
    let n = index % 32
    return this.bits[i] & (1 << n) != 0
  }

  set(index, value) {
    let i = index / 32 | 0
    let n = index % 32
    if (value) {
      this.bits[i] |= 1 << n
    } else {
      this.bits[i] &= ~(1 << n)
    }
  }

  reset() {
    for (let i = this.bits.length; i--;) {
      this.bits[i] = 0
    }
  }

  contains(other) {
    for (let i = this.bits.length; i--;) {
      if ((this.bits[i] & other.bits[i]) != other.bits[i]) return false
    }

    return true
  }
}
