import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CreditScore = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="7px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CreditScore;
