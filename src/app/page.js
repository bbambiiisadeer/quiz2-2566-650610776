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
        {/* Post Owner Example*/}
        <PostOwner
          ownerImagePath="/profileImages/profilepic.jpg"
          ownerName="Nunnapat Sirithanachokpaisan 650610776"
          likeNum="100"
          status="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        ></PostOwner>
      

        {/* Comment Example */}
        <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริงค่า"
          likeNum="399"
        ></Comment>

        {/* Reply Example */}
        <Reply
          userImagePath="/profileImages/puppy.jpg"
          username="หมาน้อย"
          replyText="จริงค้าบบบบบบบบ"
          
        ></Reply>
        <Reply
          userImagePath="/profileImages/popcat.png"
          username="Cat Meme"
          replyText="ลิซ่าาาาาาา"
          likeNum="2"
        ></Reply>
        
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
