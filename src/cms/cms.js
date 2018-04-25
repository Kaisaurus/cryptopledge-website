import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import PledgePagePreview from './preview-templates/PledgePagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('pledge', PledgePagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
