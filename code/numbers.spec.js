const { one, two } = require('./numbers')

test('one returns number on', () => {
    expect(one()).toMatchSnapshot()
})

test('two returns number two', () => {
    expect(two()).toMatchSnapshot()
})