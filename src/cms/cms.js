import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ResearchPagePreview from './preview-templates/ResearchPagePreview'
import PledgePagePreview from './preview-templates/PledgePagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('research', ResearchPagePreview)
CMS.registerPreviewTemplate('pledge', PledgePagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
