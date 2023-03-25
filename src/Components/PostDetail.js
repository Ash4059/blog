import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db  from '../firebase';
import { doc, getDoc } from "firebase/firestore";

function PostDetail() {

    const [post,setPost] = useState({});
    const {postId} = useParams();

    const fetchPostById = async (postId) =>{
      let postsData = {};
      try {
        const docRef = doc(db,"posts",postId);
        const docSnap = await getDoc(docRef);
        postsData = docSnap.data();
      } catch (error) {
        console.log(error);
      }
      return postsData;
  }

    useEffect(()=>{
      fetchPostById(postId)
        .then((data)=>{
          setPost(data)
        })
    },[postId])

    return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <h3>{post.subTitle}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;
