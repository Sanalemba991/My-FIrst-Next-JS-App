import React from 'react'

export default async function page({
    params,
}:{
    params: Promise <{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        Product {productId} Review {reviewId}
      </h1>
    </div>
  )
}


