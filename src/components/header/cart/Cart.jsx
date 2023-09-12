import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Cart = ({ cart , markHandle, countHandle}) => {
  const {title, cover, author_img, author, posted_date, reading_time, hashtags } = cart;
  return (
    <div>
      <div className="  space-y-4 mb-5 border-b-2 pb-5 pt-2">
        <figure>
          <img
            src={cover}
            alt="Shoes"
          />
        </figure>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div>
                    <img className="rounded-full w-14 h-14" src={author_img} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">{author}</h1>
                    <p className="font-medium text-xs text-[#474747]">{posted_date}</p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <p className="font-medium text-sm text-[#474747]">{reading_time} min read </p>
                <button onClick={()=> markHandle(cart)}>
                <FaBookmark></FaBookmark>
                </button>
            </div>
        </div>
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p  className="font-medium text-xs text-[#474747]">
            {
                hashtags.map((hash, index) => <span className="mr-4" key={index}><a>#{hash}</a></span>)
            }
        </p>
            <a onClick={()=> countHandle(reading_time)} className="text-sm font-medium underline hover:cursor-pointer text-[#6047EC]">Mark as read</a>
            
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  markHandle: PropTypes.func.isRequired,
  countHandle: PropTypes.func.isRequired
};

export default Cart;
