import test from 'ava'
import assert from './'

test('it should not throw', t => {
  assert(
    [{ a: { b: 1 }, c: 3 }, { a: { b: 2 }, d: 4 }],
    [{ a: { b: 2 } }, { a: { b: 1 } }]
  )
  t.pass()
})

test('it should throw', t => {
  const err = t.throws(() => {
    assert(
      [{ a: { b: 2 } }, { a: { b: 1 } }],
      [{ a: { b: 1 }, c: 3 }, { a: { b: 2 }, d: 4 }]
    )
  })
  t.is(err.message, 'item with index 0 was not matched in the tested array')
})
