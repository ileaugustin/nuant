import Progress from "../Progress";
import "./StatsRow.css";

type Props = {
  label: string;
  value: number;
}

function StatsRow(props: Props) {
  const { label, value } = props;
  return (
    <div className="stats-row">
      <div className="label">{label}</div>
      <div className="value">
        <Progress variant="determinate" value={value} />
      </div>
    </div>
  )
}

export default StatsRow;
