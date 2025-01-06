import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
interface Props {
  children: string;
  placeholder: ReactNode;
  limit: number;
}
const ExpandableText = ({ children, limit, placeholder }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded
    ? children
    : children.substring(0, limit) + placeholder;
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorPalette="yellow"
        ml={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
