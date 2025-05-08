import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.productId;

  return {
    title: `Product ${id}`,
  };
};

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

