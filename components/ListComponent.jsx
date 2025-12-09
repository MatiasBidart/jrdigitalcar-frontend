
const ListComponent = ({classes='', children, ...props}) => {
  return (
    <div className='w-full h-full flex items-center justify-center' {...props}>
            <li className={classes}>
                  {children.firstSlot}
                  {children.secondSlot}
            </li>
    </div>
  )
}

export default ListComponent