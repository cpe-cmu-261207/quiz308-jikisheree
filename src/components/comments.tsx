import Reply from "./replies"
const Comment = () => {
    
  return(

    <div>
    <div className='flex p-2 items-start space-x-2'>
    <img className='w-10 w-10 rounded-full' src="/profileImages/lisa.jpg"></img>
    <div className='bg-gray-500 rounded-lg p-2'>
      <p className='font-semibold text-white'>Lisa</p>
      <p className='text-white'>จริงค่า</p>

      <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-300'>999 คน</p>
      </div>
    </div>
  </div>
   <Reply></Reply>
   <Reply></Reply>
  </div>
  )
}

export default Comment