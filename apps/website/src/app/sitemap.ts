import { getBlogDataArray } from '@components/BlogPage/blogData';
import { getDocDataArray } from '@components/DocPage/docData';
import { getMultilingualUrls } from 'intlayer';
import type { MetadataRoute } from 'next';
import { PagesRoutes } from '@/Routes';

const sitemap = (): MetadataRoute.Sitemap => {
  const docs = getDocDataArray();
  const blob = getBlogDataArray();

  const docSitemap: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${doc.url}`,
    lastModified: doc.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        ...getMultilingualUrls(`${process.env.NEXT_PUBLIC_URL}${doc.url}`),
      },
    },
  }));

  const blogSitemap: MetadataRoute.Sitemap = blob.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_URL}${blog.url}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.5,
    alternates: {
      languages: {
        ...getMultilingualUrls(`${process.env.NEXT_PUBLIC_URL}${blog.url}`),
      },
    },
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Home}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Home}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Demo}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Demo}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Playground}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Playground}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Pricing}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Pricing}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Onboarding}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Onboarding}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Dashboard}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Dashboard}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Doc}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Doc}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.NotFound}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.NotFound}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_SignIn}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_SignIn}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_SignUp}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_SignUp}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_ResetPassword}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_ResetPassword}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_ChangePassword}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Auth_ChangePassword}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Doc_Search}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Doc_Search}`
          ),
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Blog_Search}`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
      alternates: {
        languages: {
          ...getMultilingualUrls(
            `${process.env.NEXT_PUBLIC_URL}${PagesRoutes.Blog_Search}`
          ),
        },
      },
    },
    ...docSitemap,
    ...blogSitemap,
  ];
};

export default sitemap;
