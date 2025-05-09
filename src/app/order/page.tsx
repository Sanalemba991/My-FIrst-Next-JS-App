'use client'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter();
    const clikMe = () => {

        console.log('orderId')
        router.replace('/')
        
    };
    return (

        <>

            <h1>Order</h1>
            <button onClick={clikMe}>Order</button>
           
        </>

    );
}

export default page
