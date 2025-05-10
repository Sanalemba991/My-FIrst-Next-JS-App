import React from 'react'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h2>Blogs</h2>
    </div>
  )
}


