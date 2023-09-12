import { styled } from "../../styles";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallBack = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  objectFit: "cover",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  borderRadius: "inherit",

  svg: {
    width: "$6",
    color: "$gray100",
    height: "$6",
  },
});
