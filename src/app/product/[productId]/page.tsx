export default async function  productDetails({
    params,
}: {
    params: { productId: string }
}) {
    const productId = (await params).productId;

    return (
        <div>
            <h1>Product Detalis {productId}</h1>
        </div>
    )
}

