import Link from 'next/link';
import React from 'react';

function Order() {
  return (
    <div>
      <Link href="/product">Product</Link>
      <br />
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/article/news-23?lang=en">English</Link>
      <br />
      <Link href="/article/news-23?lang=fr">French</Link>
    </div>
  );
}

export default Order;
