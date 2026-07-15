import NotFound from '../not-found'

// Static target for Apache's ErrorDocument 404 (see public/.htaccess).
export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default NotFound
