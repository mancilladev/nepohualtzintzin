'use strict'
import Nepohualtzintzin from '../model'

describe('Nepohualtzintzin', function () {
  let model = Nepohualtzintzin()

  beforeEach(function () {
    model = Nepohualtzintzin()
  })

  it('Returns an object', function () {
    let model = Nepohualtzintzin()
    expect(model).toBeInstanceOf(Object)
  })

  it('Toogles on top', function () {
    model.toogleAt({bar: 'top', row: 1, col: 2})
    expect(model._getTopMatrix()).toEqual([
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, true, false, false, false, false, false, false, false ],
      [ false, false, true, false, false, false, false, false, false, false ]
    ])

    model.toogleOnTopMatrixAt({row: 1, col: 2})
    expect(model._getTopMatrix()).toEqual([
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, true, false, false, false, false, false, false, false ]
    ])

    model.toogleAt({bar: 'top', row: 0, col: 2})
    expect(model._getTopMatrix()).toEqual([
      [ false, false, true, false, false, false, false, false, false, false ],
      [ false, false, true, false, false, false, false, false, false, false ],
      [ false, false, true, false, false, false, false, false, false, false ]
    ])
  })

  it('Toogles on bottom', function () {
    model.toogleAt({bar: 'bottom', row: 1, col: 5})
    expect(model._getBottomMatrix()).toEqual([
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ]
    ])

    model.toogleOnBottomMatrixAt({row: 2, col: 5})
    expect(model._getBottomMatrix()).toEqual([
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ]
    ])

    model.toogleOnBottomMatrixAt({row: 1, col: 5})
    expect(model._getBottomMatrix()).toEqual([
      [ false, false, false, false, false, true, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ],
      [ false, false, false, false, false, false, false, false, false, false ]
    ])
  })

  it('Calculates 0', function () {
    expect(model.getValue()).toBe(0)
  })

  it('Calculates 4', function () {
    model.toogleAt({bar: 'bottom', row: 3, col: 9})

    expect(model.getValue()).toBe(4)
  })

  it('Calculates 102', function () {
    model.toogleAt({bar: 'bottom', row: 1, col: 9})
    model.toogleAt({bar: 'top', row: 2, col: 8})

    expect(model.getValue()).toBe(102)
  })

  it('Calculates 6820', function () {
    model.toogleAt({bar: 'bottom', row: 1, col: 9})
    model.toogleAt({bar: 'bottom', row: 0, col: 8})
    model.toogleAt({bar: 'top', row: 0, col: 7})
    model.toogleAt({bar: 'bottom', row: 1, col: 7})

    expect(model.getValue()).toBe(6822)
  })

  it('Calculates 1683502', function () {
    model.toogleAt({bar: 'bottom', row: 1, col: 9})
    model.toogleAt({bar: 'top', row: 0, col: 8})
    model.toogleAt({bar: 'top', row: 2, col: 7})
    model.toogleAt({bar: 'bottom', row: 2, col: 7})
    model.toogleAt({bar: 'top', row: 1, col: 6})
    model.toogleAt({bar: 'top', row: 1, col: 5})

    expect(model.getValue()).toBe(1683502)
  })

  it('Calculates 26050', function () {
    model.toogleAt({bar: 'top', row: 1, col: 9})
    model.toogleAt({bar: 'bottom', row: 1, col: 8})
    model.toogleAt({bar: 'top', row: 2, col: 7})
    model.toogleAt({bar: 'bottom', row: 2, col: 6})

    expect(model.getValue()).toBe(26050)
  })

  it('Calculates 384000000', function () {
    model.toogleAt({bar: 'top', row: 2, col: 3})
    model.toogleAt({bar: 'bottom', row: 0, col: 3})

    expect(model.getValue()).toBe(384000000)
  })

  it('Gets the state at location', function () {
    model.toogleAt({bar: 'top', row: 1, col: 7})

    expect(model.getStateAt({bar: 'top', row: 0, col: 7})).toBe(false)
    expect(model.getStateAt({bar: 'top', row: 1, col: 7})).toBe(true)
    expect(model.getStateAt({bar: 'top', row: 2, col: 7})).toBe(true)
    expect(model.getStateAt({bar: 'bottom', row: 0, col: 7})).toBe(false)
  })

  it('Set the value and generates the state', function () {
    model.setValue(1)
    expect(model.getValue()).toBe(1)

    model.setValue(102)
    expect(model.getValue()).toBe(102)

    model.setValue(150)
    expect(model.getValue()).toBe(150)

    model.setValue(160)
    expect(model.getValue()).toBe(160)

    model.setValue(653)
    expect(model.getValue()).toBe(653)

    model.setValue(27241)
    expect(model.getValue()).toBe(27241)

    model.setValue(383062010)
    expect(model.getValue()).toBe(383062010)

    model.setValue(-2)
    expect(model.getValue()).toBe(0)

    model.setValue(999999999999999)
    expect(model.getValue()).toBe(10239999999999)
  })

  it('Gets the number of colums', function () {
    expect(model.getCols).toBeInstanceOf(Function)
  })
})
