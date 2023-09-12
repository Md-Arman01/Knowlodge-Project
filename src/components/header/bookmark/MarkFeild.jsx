
import PropTypes from 'prop-types'

const MarkFeild = ({book}) => {
  return (
    <div>
            <h1 className='bg-[#FFFFFF] text-lg font-medium w-fit p-4 rounded-md mx-auto'>{book.title}</h1>
    </div>
  )
}

MarkFeild.propTypes = {
    book: PropTypes.object.isRequired,
}

export default MarkFeild