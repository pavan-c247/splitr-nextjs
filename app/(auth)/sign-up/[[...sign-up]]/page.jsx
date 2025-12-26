import { SignUp } from '@clerk/nextjs'
import React from 'react'
//optional catch all route because clerk introduces random things after sign up
// [folder] - Dynamic Route Segment
// [...folder] - Catch All Route Segment
// [[...folder]] - Optional Catch All Route Segment

// pages/shop/[...slug].js	/shop/a	{ slug: ['a'] }
// pages/shop/[...slug].js	/shop/a/b	{ slug: ['a', 'b'] }
// pages/shop/[...slug].js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }

// The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (/shop in the example above).

// Route	Example URL	params
// pages/shop/[[...slug]].js	/shop	{ slug: undefined }
// pages/shop/[[...slug]].js	/shop/a	{ slug: ['a'] }

const SignUpPage = () => {
  return (
    <SignUp/>
  )
}

export default SignUpPage