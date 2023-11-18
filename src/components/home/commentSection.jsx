/* eslint-disable no-unused-vars */
import React  from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import Comment from "./comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/slices/postsSlice";
import { Link } from "react-router-dom";

export default function CommentSection() {

    const dispatch = useDispatch();

    const { postId } = useParams();

    const [newComment, setNewComment] = React.useState("");

    const currentUser = useSelector((state) => state.user.currentUser);

    const posts = useSelector((state) => state.posts.posts);

    const post = posts.find((p) => p.postId === postId);

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({ postId: postId, comment: newComment, currentUsername: currentUser.username }));
        setNewComment("");
    }

    return (
        <>
            <Header />
                <div className="relative flex flex-col justify-end mt-[4rem] md:mt-0 pb-[4rem] md:pb-0 min-h-full mx-auto w-full 480px:w-[480px] 480px:border-x-[0.5px] 480px:border-black">
                <Link to="/home"><button className="absolute top-0 right-0 m-[1rem] text-2xl font-semibold">x</button></Link> 
                <div>
                    {post?.comments?.map((comment, index) => (
                        <Comment key={index} username={comment.username} comment={comment.text} />
                    ))}
                </div>
                    <div>
                        <input
                            className="w-full h-[3rem] border-y-[0.5px] border-black rounded-none outline-none px-4"
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmit} className="w-full h-[3rem] bg-[#0095F6] text-white font-semibold text-lg">
                            Post
                        </button>
                    </div>
                </div>
            <Toolbar />
        </>
    );
}
