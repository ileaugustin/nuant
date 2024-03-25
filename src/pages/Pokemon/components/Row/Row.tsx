import "./Row.css";

type Props = {
  label: string;
  value: string | number;
}

function Row(props: Props) {
  const { label, value } = props;
  return (
    <div className="info-row">
      <div className="label">{label}:</div>
      <div className="value">{value}</div>
    </div>
  )
}

export default Row;
