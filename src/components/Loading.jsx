import loading from "../assets/loading.gif"
const Loading = () => {
  return (
    <div className='w-full h-full grid place-items-center'>
      <img className='max-w-[100px]' src={loading} alt="" />
    </div>
  )
}

export default Loading
