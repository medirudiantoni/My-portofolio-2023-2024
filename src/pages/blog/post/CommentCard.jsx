import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  query,
  deleteDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";

const CommentCard = ({
  commentId,
  postId,
  photoUrl,
  commentator,
  comments,
  date,
  replyText,
  onSubmitReply,
  thisReplies,
  onSetReplyStatus,
  isDelete,
  onDelete,
  isDeleteReply,
  onDeleteReply
}) => {
  const [isReply, setIsReply] = useState(false);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if(thisReplies){
      setReplies(thisReplies)
    }
  })

  const timeFormat = (date) => {
    const time = new Date(date);
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const dateNum = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    return `${formattedHours}:${formattedMinutes}, ${months[month]} ${dateNum}, ${year}`;
  };

  return (
    <div className="w-full p-2 pb-4 border-b rounded-xl relative">
      <div className="w-full h-fit flex gap-4 items-start">
        <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-400">
          <img
            src={
              photoUrl
                ? photoUrl
                : "https://source.unsplash.com/400x400?portrait"
            }
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold mt-0.5">
            {commentator ? commentator : "Unknown"}
          </p>
          <p className="my-4">
            {comments ? comments : "comment is not available"}
          </p>
          <div className="flex items-center gap-5 text-sm">
            <p className="font-semibold">
              {date ? timeFormat(date.toDate()) : null}
            </p>
            {/* <p>Agree 1 . Disagree 2 .</p> */}
            <div className="relative flex gap-2">
              <p
                onClick={() => {
                  setIsReply(!isReply);
                  onSetReplyStatus();
                }}
                className="hover:text-blue-600 active:text-blue-900 cursor-pointer"
              >
                Reply
              </p>
              <p>.</p>
              {isDelete && (
                <p
                  onClick={() => {
                    onDelete();
                  }}
                  className="hover:text-blue-600 active:text-blue-900 cursor-pointer"
                >
                  Delete
                </p>
              )}
            </div>
          </div>
          {isReply && (
            <motion.div
              initial={{ scale: 0, transformOrigin: "left top" }}
              animate={{ scale: 1, transformOrigin: "left top" }}
              className="w-full h-fit p-2 my-2 bg-slate-100 shadow-xl rounded-xl flex flex-col items-end gap-2"
            >
              <textarea
                name="comment"
                id="comment"
                placeholder="What's your reply"
                cols="2"
                rows="5"
                onChange={(e) => replyText(e.target.value)}
                className="bg-inherit rounded-lg w-full py-2 px-4 outline-none"
              ></textarea>
              <button
                onClick={() => {
                  onSubmitReply();
                  setIsReply(false);
                }}
                className="py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-900 active:scale-95 duration-100"
              >
                reply
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="w-full h-fit pl-11 pt-4">
        {replies.map((reply, i) => {
          return (
            <div key={i} className="w-full py-2 flex gap-3">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-400">
                <img
                  src={reply.photo}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold mt-0.5">{reply.user}</p>
                <p className="my-2">{reply.comment}</p>
                <div className="flex items-center gap-5 text-xs">
                  <p className="font-semibold">{timeFormat(date.toDate())}</p>
                  {reply.user === isDeleteReply ? <p onClick={() => onDeleteReply(reply.id)} className="hover:text-blue-500 active:text-blue-700 cursor-pointer">Delete</p> : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentCard;
