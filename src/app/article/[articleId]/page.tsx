"use client";
import { use } from 'react';
import Link from 'next/link';

export default function Page({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: 'en' | 'fr' };
}) {
  const articleId = params.articleId; // Directly use params.articleId
  const lang = searchParams.lang || "en"; // Directly assign the value without using use

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