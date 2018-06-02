import React from 'react'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(['data', 'title'])}
    subtitle={entry.getIn(['data', 'subtitle'])}
    content={widgetFor('body')}
    card1={entry.getIn(['data', 'card1'])}
    card2={entry.getIn(['data', 'card2'])}
    card3={entry.getIn(['data', 'card3'])}
  />
)

export default HomePagePreview
