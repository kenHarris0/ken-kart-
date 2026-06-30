'use client'
import React, { useContext, useEffect } from 'react'
import { Card,CardContent ,CardTitle,CardHeader} from './ui/card'
import { Button } from './ui/button'
import { UserContext } from '@/context/context'
import { createPayment } from '@/lib/actions/payment.action'
import Script from "next/script";

const Ordersummary = () => {

    const {cart}=useContext(UserContext)!
const totalAmount = Math.round(cart.reduce(
  (total, item) => total + item.product.offerPrice * item.quantity,
  0
))


const handleCheckout = async () => {
    try {
        const order = await createPayment(totalAmount);

        console.log(order);

        // Later you'll open Razorpay here

        const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    amount: order.amount,
    currency: order.currency,
    order_id: order.id,

    handler: async (response: any) => {
        console.log(response);
    },
};

const razorpay = new (window as any).Razorpay(options);
razorpay.open();

    } catch (err) {
        console.log(err);
    }
};

  return (
    <>
     <Script src="https://checkout.razorpay.com/v1/checkout.js" />

    
    <Card className="w-full border h-fit">
  <CardHeader className="border-b">
    <CardTitle className="text-xl">Order Summary</CardTitle>
  </CardHeader>

  <CardContent className="p-5 space-y-5">

    <div className="flex items-center justify-between border-b pb-4">
      <h2 className="text-muted-foreground">Subtotal</h2>
      <p className="font-semibold">${totalAmount || 0}</p>
    </div>

    <div className="flex justify-between gap-6 border-b pb-4">
      <h2 className="text-muted-foreground whitespace-nowrap">
        Shipping
      </h2>

      <p className="text-right text-sm text-muted-foreground">
        Free shipping. Shipping options will be updated during checkout.
      </p>
    </div>

    <div className="flex items-center justify-between border-b pb-4">
      <h2 className="text-lg font-semibold">Total</h2>
      <p className="text-lg font-bold">${totalAmount || 0}</p>
    </div>

    <Button size="lg" className="w-full" onClick={handleCheckout}>
      Checkout
    </Button>

  </CardContent>
</Card> 
</>
  )
}

export default Ordersummary
