import React from 'react'
import { PledgePageTemplate } from '../../templates/pledge-page'

const PledgePagePreview = ({ entry, widgetFor }) => (
  <PledgePageTemplate
    title={entry.getIn(['data', 'title'])}
    organizations={entry.getIn(['data', 'organizations'])}
    content={widgetFor('body')}
  />
)

export default PledgePagePreview
