import React from 'react'
import CommentBox from '../components/CommentBox'

function AddComment() {
  return (
    <div>
        <div className='addComment m-2'>
            <textarea placeholder='Add a comment for shubham' className='round form-control'/>
        </div>
        <div className=' mt-3 mb-5 pb-5 mx-3'>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        <CommentBox/>
        </div>
    </div>
  )
}

export default AddComment