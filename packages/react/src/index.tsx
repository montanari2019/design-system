import { colors } from "@ignite-mui/tokens";
import { styled } from "./styles";
// console.log(colors)


const Button = styled('button',{
    fontFamily: "$default",
    backgroundColor: "$ignite500",
    borderRadius: "$md",
    padding: "$4"
})
export function App() {
  return <Button>Olá Mundo</Button>;
}
