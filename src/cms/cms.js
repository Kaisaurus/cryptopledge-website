import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ResearchPagePreview from './preview-templates/ResearchPagePreview'
import PledgePagePreview from './preview-templates/PledgePagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('research', ResearchPagePreview)
CMS.registerPreviewTemplate('pledge', PledgePagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
