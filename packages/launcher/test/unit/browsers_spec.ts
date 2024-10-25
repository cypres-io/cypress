import _ from 'lodash'
import { knownBrowsers } from '../../lib/known-browsers'
import { expect } from 'chai'
const snapshot = require('snap-shot-it')

describe('browsers', () => {
  it('returns the expected list of browsers', () => {
    snapshot(knownBrowsers)
  })

  // https://github.com/cypress-io/cypress/issues/6669
  it('exports multiline versionRegexes', () => {
    expect(_.every(knownBrowsers.map(({ versionRegex }) => {
      return versionRegex.multiline
    }))).to.be.true
  })
})
