import PropTypes from "prop-types";
import { StatisticsLi, StatisticsStyled } from "./StatisticsStyles";
const Statistics = (props) =>{
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      }
    return(<StatisticsStyled>
        <h2 className="title">Upload stats</h2>
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
    stats: PropTypes.array,
    id: PropTypes.string,    
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Statistics;