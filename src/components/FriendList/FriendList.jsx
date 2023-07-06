import PropTypes from "prop-types";
const FriendList = (props) =>{
    //console.log(props.friends);
    return(<ul className="friend-list">
        {props.friends.map(({id, avatar, isOnline, name}) =>{
            //console.log('Props', friend.isOnline);
            return(<li className="item" key={id}>
            <span className="status">{isOnline ? '✔' : '✖'}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>)
        })}
  </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.array,
    id: PropTypes.number,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string
}

export default FriendList;
