import PropTypes from "prop-types";
import { NameStyled, ProfileStyled, Stats, StatsNumber } from "./ProfileStyles";


const Profile = (props) =>{
    const {avatar, username, tag, location, stats} = props;    
    return <ProfileStyled className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <NameStyled className="name">{username}</NameStyled>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats>
    <li>
      <span className="label">Followers</span>
      <StatsNumber>{stats.followers}</StatsNumber>
    </li>
    <li>
      <span className="label">Views</span>
      <StatsNumber>{stats.views}</StatsNumber>
    </li>
    <li>
      <span className="label">Likes</span>
      <StatsNumber>{stats.likes}</StatsNumber>
    </li>
  </Stats>
</ProfileStyled>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}

export default Profile;