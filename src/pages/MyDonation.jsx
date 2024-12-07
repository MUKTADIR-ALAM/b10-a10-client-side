import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function MyDonation() {
  const donations = useLoaderData();
  console.log(donations);
  return (
    <div>MyDonation</div>
  )
}
