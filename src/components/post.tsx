
{/* ส่วนของเจ้าของ post */}

const Post = () => {

  return(
   
    <div className='space-y-2'>
      <div className='flex space-x-2 items-center'>
    <img className='w-12 h-12 rounded-full' src='https://images.dog.ceo/breeds/terrier-toy/n02087046_1792.jpg'></img>
    <span className='font-semibold text-lg text-white'>Suparida Silpasith 630610765</span>
    </div>

 
    <p className='text-white'>Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207</p>

   
    <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-300'>1M คน</p>
    </div>
    </div>

  )
}

export default Post