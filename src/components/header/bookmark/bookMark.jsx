import MarkFeild from "./MarkFeild";
import PropTypes from"prop-types"

const BookMark = ({mark , count}) => {
    return (
        <div className="w-1/3">
            <div className="flex justify-center my-5">
            <h1 className=" bg-[#f0edfe] w-full text-center px-7 py-4 rounded-md border border-[#6047EC] text-[#6047EC] text-base font-bold">Spent time on read : {count} min</h1>

            </div>

        <div className=" bg-[#f3f3f3] rounded-md text-center py-4 space-y-5">
            <h1 className="text-3xl font-bold">Bookmarked Blogs : {mark.length}</h1>
            {
                mark.map((book, index) => <MarkFeild key={index} book={book} count={count}></MarkFeild>)
            }
        </div>
        </div>
    );
};

BookMark.propTypes ={
    mark: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired
}

export default BookMark;