import { intlayerMiddleware } from 'next-intlayer/middleware';

export const middleware = intlayerMiddleware;

// Middleware can also be exported as a default:
// Example:
// export default multipleMiddlewares([intlayerMiddleware, queryMiddleware]);

// applies this middleware only to files in the app directory
export const config = {
  matcher:
    '/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)',
};
