import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ResearchPagePreview from './preview-templates/ResearchPagePreview'
import PledgePagePreview from './preview-templates/PledgePagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('research', ResearchPagePreview)
CMS.registerPreviewTemplate('pledge', PledgePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
