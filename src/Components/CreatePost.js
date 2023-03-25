import db  from '../firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useFormInput } from '../hooks';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault();

    const postRef = doc(collection(db,"posts"));

    await setDoc(postRef,{
        title : title.value,
        subTitle : subTitle.value,
        content : content.value,
        createdAt : new Date()
    });
    
    e.target.reset();
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle}/>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
