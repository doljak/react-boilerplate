import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import {renderIntoDocument} from 'react-addons-test-utils'

import Example from './Example'

let example = renderIntoDocument(<Example/>)

describe('Example',()=>{
	it('should exist', () => {
	  expect(Example).toExist
	})

	describe('Example Methods', () =>{
		it('make sum()', () => {
			expect(example.sum(1,2)).toBe(3)
		});
		it('sum() returns a number', () => {
			expect(example.sum(1,2)).toBe(3).toBeA('number')
		});
	})
})



