import React from 'react'
import { shallow } from 'enzyme'

import Footer from 'Footer'
import Dashboard from 'Dashboard'

import UIMainContent from './UIMainContent'

describe('UIMainContent', () => {
  const subject = (isShifted = false, classes = {}) => <UIMainContent isShifted={isShifted} classes={classes} />

  describe('when shallow rendered and NOT open', () => {
    const classes = { content: 'content', contentShift: 'contentShift' }
    const wrapper = shallow(subject(false, classes))

    it('has the expected selector', () => expect(wrapper.is('#main-content')).toBe(true))
    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toExist())
    it('renders Footer', () => expect(wrapper.find(Footer)).toExist())
    it('is an unshifted app bar', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(false)
    })
  })

  describe('when shallow rendered and opened', () => {
    const classes = { content: 'content', contentShift: 'contentShift' }
    const wrapper = shallow(subject(true, classes))

    it('is a shifted content section', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(true)
    })
  })
})