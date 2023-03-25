import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import db  from '../firebase';
import { collection, query, getDocs } from "firebase/firestore";

function Home() {

    const [posts,setPosts] = useState([]);

    const fetchAllPost = async () =>{
        const postsData = [];
        const postQuery = query(collection(db,"posts"));
        const querySnapshot = await getDocs(postQuery);
        await querySnapshot.forEach((doc)=>{
            postsData.push({
                id : doc.id,
                ...doc.data()
            });
        });
        return postsData;
    }

    useEffect(()=>{
        fetchAllPost()
            .then((postsData)=>{
                setPosts(postsData);
            })
    },[])

    return (
      <div className="home">
        <h1>Tech blogs</h1>
        <div id="blog-by">Ashish</div>
        {
            posts.map((post,index)=>{
                return(
                    <div className="post" key={`post-${index}`}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <h5>{post.subTitle}</h5>
                        <p>{post.content}</p>
                    </div>
                );
            })
        }
      </div>
    );
  }
  
  export default Home;