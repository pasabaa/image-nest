import React from 'react'

export const Card = ({image, type}) => {
return (
<>

  <a className='overflow-hidden card-hover' rel='noopener norefferrer' target={'_blank'} href={image.pageURL}>
    <img 
      width={350} 
      height={197} 
      src={type == 'image_type' ? image.webformatURL : `https://i.vimeocdn.com/video/${image.picture_id}_1920x1080.jpg`} 
      alt={image.user}
      title={image.user}
      className='object-cover h-48 rounded' 
      loading='lazy' />
  </a>

</>
)
}