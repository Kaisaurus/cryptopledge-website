import React from 'react'
import { ResearchPageTemplate } from '../../templates/research-page'

const ResearchPagePreview = ({ entry, widgetFor }) => (
  <ResearchPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default ResearchPagePreview
