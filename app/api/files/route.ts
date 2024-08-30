import { NextResponse } from 'next/server';

interface MediaImageNode {
  id: string;
  createdAt: string;
  alt?: string;
  image: {
    originalSrc: string;
    width: number;
    height: number;
  };
}

export async function GET() {
  const fetchMediaImages = async (after: string | null = null) => {
    const query = `
      {
        files(first: 20, after: ${after ? `"${after}"` : null}) {
          edges {
            node {
              id
              createdAt
              alt
              ... on MediaImage {
                image {
                  originalSrc: url
                  width
                  height
                }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `;

    const response = await fetch(`https://${process.env.SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2023-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
      } as HeadersInit, // Explicitly cast the headers to HeadersInit
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (!data || !data.data || !data.data.files) {
      throw new Error('No media images found in the response.');
    }

    const mediaImages: MediaImageNode[] = data.data.files.edges.map((file: any) => file.node);

    return {
      mediaImages,
      hasNextPage: data.data.files.pageInfo.hasNextPage,
      endCursor: data.data.files.edges.length > 0 ? data.data.files.edges[data.data.files.edges.length - 1].cursor : null,
    };
  };

  try {
    let filteredImages: MediaImageNode[] = [];
    let hasNextPage = true;
    let endCursor = null;

    // Define a maximum number of relevant images to find before stopping
    const maxRelevantImages = 50;

    while (hasNextPage && filteredImages.length < maxRelevantImages) {
      const { mediaImages, hasNextPage: nextPage, endCursor: cursor } = await fetchMediaImages(endCursor);
      
      // Filter images to include only those with "slide" in the originalSrc URL
      const relevantImages = mediaImages.filter((image: MediaImageNode) => image.image.originalSrc.includes('slide'));
      filteredImages = [...filteredImages, ...relevantImages];

      hasNextPage = nextPage;
      endCursor = cursor;
    }

    return NextResponse.json(filteredImages);
  } catch (error) {
    console.error('Error fetching media images:', error);
    return NextResponse.json({ error: 'An error occurred while fetching media images.' }, { status: 500 });
  }
}
