import PropTypes from "prop-types";
import { StatisticsLi, StatisticsStyled } from "./StatisticsStyles";
const Statistics = (props) =>{
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }
    return(<StatisticsStyled>
        <h2 className="title">UPLOAD STATS</h2>
        <ul className="stat-list">
            {props.stats.map(data => {
                return(
                    <StatisticsLi key={data.id} color={getRandomHexColor()}>
                        <span className="label">{data.label}</span>
                        <span className="percentage">{data.percentage}%</span>
                    </StatisticsLi>
                )
            })}
        </ul>
    </StatisticsStyled>)
    
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,    
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Statistics;