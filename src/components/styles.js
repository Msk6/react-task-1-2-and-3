import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body{
      color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.backgroundColor};
      font-family: ${(props => props.theme.fontFamily)}
    }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Description = styled.h4`
    text-align: center;
    color: ${(props) => props.theme.secondryColor}
`;

export const BakeryImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

export const ListWrapper = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 100px;
    display: flex;
    align-content: center;
`;


export const ItemWrapper = styled.div`

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        height: 30%;
    }
    p{
        text-align: center;
        &.price{
          color: ${(props) => props.theme.secondryColor}
        }
    }
`;





export const styles = {
    text: {
      textAlign: "center", 
      fontFamily: "Open Sans"
    },
    bakeryImage: {
      display: "block", 
      marginLeft: "auto", 
      marginRight: "auto", 
      width: "90%"
      },
    itemImage: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "40%",
      height: "30%"
    },
  };

