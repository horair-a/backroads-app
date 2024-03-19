
const Sociallink = ({href,icon,itemClass}) => {
  return (
    <li>
    <a href={href} 
    target="_blank" 
    className={itemClass}
    rel='nonreferrer'
    >
    <i className={icon}></i>
    </a>
  </li>
  )
}
export default Sociallink