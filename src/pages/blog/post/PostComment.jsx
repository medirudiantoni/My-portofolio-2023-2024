import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "../../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../../../firebase";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  collection,
  deleteDoc,
  arrayRemove,
  serverTimestamp
} from "firebase/firestore";
import CommentCard from "./CommentCard";

const PostComment = ({ postId }) => {
  const [isBlogPost, setIsBlogPost] = useState()
  const [isReactButton, setIsReactButton] = useState(false);
  const [isReaction, setIsReaction] = useState(false);
  const [isReactions, setIsReactions] = useState([]);
  const [isComment, setIsComment] = useState();
  const [isSignedIn, setIsSignedIn] = useState();
  const [isCommentData, setIsCommentData] = useState([]);
  const [isReplyText, setIsReplyText] = useState();
  const [toReply, setToReply] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(user);
      } else {
        setIsSignedIn();
      }
    });
  });

  useEffect(() => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId)
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setIsReactions(snapshot.data().reactions)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    const commentsCollectionRef = collection(docRef, "comments");

    const unsubscribe = onSnapshot(commentsCollectionRef, (snapshot) => {
      const commentsData = [];
      snapshot.forEach((doc) => {
        commentsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      let sortedCommentData = commentsData.sort((a, b) => b - a)
      setIsCommentData(sortedCommentData);
    });

    return () => unsubscribe();
  }, [postId]);

  const reactions = [
    { icon: "💖", length: 0, mean: "love" },
    { icon: "👍", length: 0, mean: "like" },
    { icon: "😁", length: 0, mean: "happy" },
    { icon: "🙅", length: 0, mean: "dislike" },
    { icon: "🤬", length: 0, mean: "angry" },
  ];

  const saveReactions = async (react) => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    if(isReactions === undefined){
      try {
        updateDoc(docRef, {
          reactions: arrayUnion(react)
        })
      } catch (error){
        console.log(error)
      }
    } else {
      const theReaction = isReactions.find(reaction => reaction.icon === react.icon);
      if(theReaction === undefined){
        try {
          updateDoc(docRef, {
            reactions: arrayUnion(react)
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        isReactions.map(reaction => {
          if(reaction.mean === react.mean){
            reaction.length = reaction.length + 1
          }
        });
    
        try {
          updateDoc(docRef, {
            reactions: isReactions
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
    setTimeout(() => {
      setIsReaction(false)
    }, 1000);
  }

  const saveComment = async (user, photo) => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    const commentsCollectionRef = collection(docRef, "comments");

    try {
      await addDoc(commentsCollectionRef, {
        date: new Date(),
        reaction: isReaction,
        comment: isComment,
        user: user,
        photo: photo,
        replies: []
      });
      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }

    setIsComment('');
  };

  const deleteCommentWithConfirmation = (commentId) => {
    const confirmation = window.confirm("Apakah Anda yakin ingin menghapus komentar ini?");
    if (confirmation) {
      deleteComment(commentId);
    } else {
      console.log("Hapus komentar dibatalkan.");
    }
  };

  const deleteComment = async (commentId) => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    const commentsCollectionRef = collection(docRef, 'comments');
    const commentDocRef = doc(commentsCollectionRef, commentId);
  
    try {
      await deleteDoc(commentDocRef);
      console.log("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  };

  const saveReply = async (commentId, user, photo, replyComment) => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    const commentsCollectionRef = collection(docRef, 'comments');
    const commentDocRef = doc(commentsCollectionRef, commentId);
  
    try {
      const newReply = {
        id: `${new Date()}`,
        comment: replyComment,
        user: user,
        photo: photo
      };
  
      await updateDoc(commentDocRef, {
        replies: arrayUnion(newReply)
      });
  
      console.log("Reply added successfully!");
    } catch (error) {
      console.error("Error adding reply: ", error);
    }
  };

  const deleteReplyWithConfirmation = (commentId, replyId) => {
    const confirm = window.confirm('delete your reply?');
    if(confirm){
      deleteReply(commentId, replyId)
    } else {
      console.log('delete is canceled')
    }
  }

  const deleteReply = async (commentId, replyId) => {
    const docRef = doc(db, "medirudiantoni2@gmail.com", postId);
    const commentsCollectionRef = collection(docRef, 'comments');
    const commentDocRef = doc(commentsCollectionRef, commentId);
  
    try {
      // Membaca data komentar
      const commentDoc = await getDoc(commentDocRef);
      const replies = commentDoc.data().replies || [];
  
      // Menghapus reply dengan replyId dari array replies
      const updatedReplies = replies.filter(reply => reply.id !== replyId);

      console.log({updatedReplies})
  
      // Menyimpan kembali data yang diperbarui
      await updateDoc(commentDocRef, {
        replies: updatedReplies
      }).then(res => console.log(res))
  
      console.log("Reply deleted successfully!");
    } catch (error) {
      console.error("Error deleting reply: ", error);
    }
  };

  const handleSignIn = (commentId, replyComment) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const docRef = doc(db, "medirudiantoni2@gmail.com", "comment visitors");
        console.log("sukses");
        const user = result.user.displayName;
        setIsSignedIn(result.user);
        if(toReply){
          saveReply(commentId, user, result.user.photoURL, replyComment)
        } else {
          saveComment(result.user.displayName, result.user.photoURL);
        }
        return setDoc(
          docRef,
          {
            [user]: {
              name: result.user.displayName,
              email: result.user.email,
              phone: result.user.phoneNumber,
              photoUrl: result.user.photoURL,
              signInFrom: postId,
            },
          },
          { merge: true }
        );
      })
      .then(() => {
        setToReply(false)
      })
      .catch((error) => {
        console.log(error);
        alert("gagal sign in");
      });
  };

  const onSubmitComment = () => {
    if (isSignedIn) {
      saveComment(isSignedIn.displayName, isSignedIn.photoURL);
    }
  };

  const onSubmitReply = (commentId, user, photo, replyComment) => {
    saveReply(commentId, user, photo, replyComment);
  };

  const getReplyText = (val) => {
    setIsReplyText(val);
  };

  return (
    <div className="w-full max-w-5xl relative"> 
      <div className="w-full mb-5">
        <p className="text-2xl sm:text-4xl font-semibold sm:leading-[8vh]">
          What do you think? <br />
          Comment below...
        </p>
      </div>
      <div className="w-full h-fit flex flex-wrap gap-5 items-center justify-between">
        <div
          onMouseEnter={() => setIsReactButton(true)}
          onMouseLeave={() => setIsReactButton(false)}
          className=" flex gap-2 w-full relative sm:justify-start sm:w-fit"
        >
          <button className="py-2 px-4 w-fit relative h-fit rounded-lg bg-slate-200 dark:bg-neutral-700 hover:bg-slate-300 dark:hover:bg-neutral-800 hover:scale-95 duration-100">
            Your reaction
          </button>
          <AnimatePresence mode="wait">
            {isReactButton && (
              <motion.div
                initial={{
                  y: 10,
                  opacity: 0,
                  scale: 0,
                  transformOrigin: "left",
                }}
                animate={{
                  y: 0,
                  opacity: 100,
                  scale: 1,
                  transformOrigin: "left",
                }}
                exit={{ y: 10, opacity: 0, scale: 0, transformOrigin: "left" }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="w-fit h-10 py-2 px-4 rounded-lg bg-slate-200 dark:bg-neutral-800 shadow-xl flex items-end gap-2 absolute left-0 lg:relative"
              >
                {reactions.map((react, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.1 + i / 50 }}
                      onClick={() => {
                        setIsReaction(react)
                        // setTimeout(() => {
                        //   setIsReaction()
                        // }, 2000);
                        saveReactions(react)
                        setIsReactButton(false)
                      }}
                      className="hover:text-4xl duration-100 cursor-pointer"
                    >
                      {react.icon}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-2xl p-1 flex gap-2 absolute left-0 bottom-1/2">
            <AnimatePresence>
              {isReaction && (
                <motion.div 
                initial={{y: 10, opacity: 1}}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'linear' }}
                className="relative">{isReaction.icon}</motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="py-2 px-4 rounded-lg bg-slate-200 dark:bg-negative shadow-xl relative flex gap-2 group cursor-pointer">
            {isReactions ? isReactions.length > 0 ? isReactions.map((reaction, i) => {
              return <p key={i}>{reaction.icon} {reaction.length + 1}</p>
            }) : <p>😁 0</p> : <p>😁 0</p>}
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-6 flex flex-col items-end justify-between gap-4">
        <textarea
          name="comment"
          id="comment"
          value={isComment}
          placeholder="let me know your thought 😁"
          cols="30"
          rows="5"
          onChange={(e) => setIsComment(e.target.value)}
          className="bg-slate-200 dark:bg-neutral-950 rounded-lg w-full py-2 px-4"
        ></textarea>
        <div className="flex flex-col gap-2 items-end group relative">
          <button
            onClick={isSignedIn ? onSubmitComment : handleSignIn}
            className="py-2 px-4 w-fit h-fit rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-900 active:scale-95 duration-100"
          >
            {isSignedIn
              ? `Send as ${isSignedIn.displayName}`
              : "Send"}
          </button>
          {isSignedIn && (
            <button
              onClick={handleSignIn}
              className="py-2 px-4 w-fit h-fit rounded-lg border-2 hidden lg:block hover:bg-slate-200 active:bg-slate-300 active:scale-95 duration-100 scale-0 group-hover:scale-100 origin-top absolute top-full"
            >
              or send with another google account
            </button>
          )}
        </div>
      </div>
      <div className="w-full mt-20 flex flex-col gap-4">
        <p className="text-xl font-semibold leading-[8vh]">Comments: {isCommentData.length}</p>
        <div className="comment-field w-full flex flex-col gap-4 text-sm lg:text-base">
          {isCommentData &&
            isCommentData.map((comment, i) => {
              return (
                <div key={i} className="flex flex-col items-end">
                  <CommentCard
                    commentId={comment.id}
                    postId={postId}
                    photoUrl={comment.photo}
                    commentator={comment.user}
                    comments={comment.comment}
                    date={comment.date}
                    onSetReplyStatus={() => setToReply(!toReply)}
                    replyText={(val) => getReplyText(val)}
                    onSubmitReply={isSignedIn ? () => onSubmitReply(comment.id, isSignedIn.displayName, isSignedIn.photoURL, isReplyText) : () => {
                      handleSignIn(comment.id, isReplyText)
                    }}
                    thisReplies={comment.replies}
                    isDelete={comment.user === isSignedIn.displayName ? true : false}
                    isDeleteReply={isSignedIn.displayName}
                    onDelete={() => deleteCommentWithConfirmation(comment.id)}
                    onDeleteReply={(val) => deleteReplyWithConfirmation(comment.id, val)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostComment;
