import {addYes, addNo } from "./actions"
import * as types from "./types"

describe('Survey Actions', () =>{
  it('addYes is an increment type', () =>{
    expect(addYes()).toEqual({type: types.incrementYes})
  })

  it('addNo is an increment type', () =>{
    expect(addNo()).toEqual({type: types.incrementNo})
  })
})
