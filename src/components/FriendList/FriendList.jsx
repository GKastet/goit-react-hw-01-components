import PropTypes from "prop-types";
import { FriendListStyled } from "./FriendListStyles";


const FriendList = (props) =>{
    //console.log(props.friends);
    return(<FriendListStyled className="friend-list">
        {props.friends.map(({id, avatar, isOnline, name}) =>{
            //console.log('Props', friend.isOnline);
            return(<li className="item" key={id}>
            <span className="status">{isOnline ? '✔' : '✖'}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>)
        })}
  </FriendListStyled>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default FriendList;
