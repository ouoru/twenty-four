import { CSSProperties, useMemo } from "react";

const styles: Record<string, CSSProperties> = {
  container: {
    height: 80,
    width: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  suit: {},
  value: {},
  selected: {
    backgroundColor: "red"
  },
  notSelected: {
    backgroundColor: "blue"
  }
};

type PlayingCardProps = {
  suit: "spade" | "heart" | "diamond" | "club";
  value: number;
  selected: boolean;
};

const PlayingCard = ({ suit, value, selected }: PlayingCardProps) => {
  const cardStyle = useMemo(
    () => ({
      ...styles.container,
      ...(selected ? styles.selected : styles.notSelected)
    }),
    [selected]
  );

  return (
    <div style={cardStyle}>
      <div style={styles.suit}>{suit}</div>
      <div style={styles.value}>{value}</div>
    </div>
  );
};

export default PlayingCard;
