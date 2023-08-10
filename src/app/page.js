"use client";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  const reply = [
    {
    id =1
      userImagePath: '/profileImages/puppy.jpg', 
    username: 'หมาน้อย',
    replyText: "จริงค้าบบบบบบบบ", 
    likeNum: 0
  },
  {
    id=2
    userImagePath: '/profileImages/popcat.png', 
    username: 'Cat Meme',
    replyText: "ลิซ่าาาาาาา", 
    likeNum: 2
  }
  ]
  const comments = [
    {
      imagePath: '/profileImages/lisa.jpg',
      name:'Lisa',
      text:"จริงค่า",
      like: 399,
      reply:''
    },
    {
      imagePath: '/profileImages/charlibrown.jpg',
      name:'Charlie Brown',
      text:"บ้าไปแล้ว",
      reply:''
    } 
  ]
  


  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
      
      {comments.map((user) => (
        <Comment
        userImagePath={user.imagePath}
        username={user.name}
        commentText={user.text}
        likeNum={user.like}
        replies={user.reply}
        ></Comment>
      ))}
        {/* map-loop render Comment component here */}
    </div>
    </div>
  );
}
