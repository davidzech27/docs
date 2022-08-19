import url from 'url'

import React, { useState } from 'react'

import Image from 'next/future/image'

export default function ImageBlock(props) {
  const { alt, src } = props

  const [imageURL] = useState(src)

  if (typeof src !== 'string') {
    return (
      <div className='mt-3'>
        <Image className='mx-auto' style={{ maxHeight: 600, width: 'auto' }} {...props} />

        {alt && <span className='block mt-1 mb-4 text-sm text-center text-secondary'>{alt}</span>}
      </div>
    )
  }

  const { height, width } = url.parse(src, true).query

  if (height && width) {
    return (
      <span className='block mt-3'>
        <Image {...props} className='max-h-[600px] mx-auto' height={height} layout='responsive' width={width} />
        {alt && <span className='block mt-1 mb-4 text-sm text-center text-secondary'>{alt}</span>}
      </span>
    )
  }

  return (
    <span className='block mt-3'>
      <img src={imageURL} alt={alt} className='max-h-[600px] mx-auto'></img>
      {alt && <span className='block mt-1 mb-4 text-sm text-center text-secondary'>{alt}</span>}
    </span>
  )
}
