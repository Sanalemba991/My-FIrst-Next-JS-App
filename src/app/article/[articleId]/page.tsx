import Link from 'next/link';
import React from 'react';

export default function Page({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: 'en' | 'fr' };
}) {
  const { articleId } = params;
  const { lang } = searchParams;

  return (
    <div>
      <h1>Reading: {articleId}</h1>
      <p>Language: {lang || 'Not specified'}</p>
      <div>
        <Link href={`/article/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/article/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}