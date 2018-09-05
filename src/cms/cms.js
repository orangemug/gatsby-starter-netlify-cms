import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('pricing', AboutPagePreview)
CMS.registerPreviewTemplate('about', PricingPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
