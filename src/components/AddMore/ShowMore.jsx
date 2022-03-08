import './ShowMore.scss'

const ShowMore = ({ coinNum, setCoinNum }) => {
  return (
    <div className='showMore'>
      <button onClick={() => setCoinNum((coinNum += 10))}>Show More</button>
    </div>
  )
}

export default ShowMore
