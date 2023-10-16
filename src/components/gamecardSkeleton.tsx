import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GamecardSkeleton = () => {
  return (
    <Card
      width="100%"
      padding="10px"
      overflow="hidden"
      borderRadius={10}
      marginRight="10px"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamecardSkeleton;
