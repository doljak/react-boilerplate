import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import {renderIntoDocument} from 'react-addons-test-utils'

import App from './App'

let app = renderIntoDocument(<App/>)

describe('App',()=>{
	it('should exist', () => {
	  expect(App).toExist
	})
})



