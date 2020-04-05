import styled from "styled-components"

const Button = styled.button`
  padding: 7px 25px 5px 25px;
  font-size: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 3px solid white;
  border-radius: 10px;
  font-family: "Baloo 2";
  font-weight: 800;
  cursor: pointer;
  background-color: white;
  color: #000;
  transition: background-color 50ms ease-in;

  &:hover {
    color: white;
    background-color: transparent;
  }

  ${props =>
    props.textColor &&
    `
    color: ${props.textColor};
  `}
`

export default Button
