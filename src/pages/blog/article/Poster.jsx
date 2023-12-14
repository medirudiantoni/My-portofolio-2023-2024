import React, { useEffect, useRef, useState } from "react";
import { storage } from "../../../config/firebase";
import { ref as strRef, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Poster = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = strRef(storage, "images/")
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = strRef(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(url => {
            setImageList(prev => [...prev, url])
        })
    })
  };

  useEffect(()=>{
    listAll(imageListRef).then(resp => {
        resp.items.forEach(item => {
            getDownloadURL(item).then(url => {
                setImageList(prev => [...prev, url])
            })
        })
    })
  }, [])
  return (
    <div className="w-screen min-h-screen flex py-32 justify-center">
      <div className="container p-5 border-2 rounded-lg">
        <div className="w-full">
          <label htmlFor="poster">Poster</label>
          <input
            type="file"
            className="w-full h-fit py-2 px-4 border-2 rounded-xl mt-2 mb-5 bg-slate-200"
            onChange={event => {
                setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <div className="w-full h-fit flex">
          <div
            className="w-fit h-fit py-2 px-4 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 active:bg-blue-900"
            onClick={uploadImage}
          >
            Set
          </div>
        </div>
        <div className="w-full h-fit p-5 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {imageList.map((url, i) => {
                return (
                    <div key={i} className="col-span-1 h-fit rounded-3xl overflow-hidden">
                        <img src={url} alt="image" className="w-full h-fit object-cover" />
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Poster;
