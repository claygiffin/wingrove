/*
 *  This route handler serves to completely invalidate the project's cache. It
 *  can be useful to start from a clean slate in case of problems.
 */
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

import { truncateAssociationsTable } from '@/lib/datocms-database'
import { docsToPublic } from '@/lib/docs-to-public'

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
  if (
    request.headers.get('Webhook-Token') !==
    process.env.DATOCMS_CACHE_WEBHOOK_TOKEN
  ) {
    return NextResponse.json(
      {
        error:
          'You need to provide a secret token in the `Webhook-Token` header for this endpoint.',
      },
      { status: 401 }
    )
  }

  // Run script to download documents to public folder
  await docsToPublic().catch(console.error)

  revalidatePath('/', 'layout')

  await truncateAssociationsTable()

  return NextResponse.json({})
}
