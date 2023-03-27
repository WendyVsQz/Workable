import React, { useEffect, useState } from "react";
import { getFromStorage } from '../../utils/storage-utils';
import { CardComponent, EmptyCard } from '../card/card-component';
import './wish-list.css';

const WishList = () => {
  const BOOKMARK = "bookmarked";

  const [bookMarked, setBookMarked] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const temp = getFromStorage(BOOKMARK);
    if (temp) {
      setBookMarked(Object.entries(temp).map((job) => job[1]));
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <>
      <div className="wishlist-card ">
        {bookMarked && bookMarked.length > 0
          ? bookMarked.map((job) => <CardComponent job={job} showBookMark={true} setRefresh={setRefresh} />)
          : <EmptyCard label={"No Wishlist record"} />}
      </div>
    </>
  )
}
export default WishList;