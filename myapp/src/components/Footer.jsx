import React from 'react'
import { Instagram , Facebook, Twitter, Pinterest,Room ,Phone,Mail} from '@mui/icons-material';
import  styled from 'styled-components';
import{mobile} from '../responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}

`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`

`;
const Description = styled.p`
    margin:20px 0px;

`;
const SocialContainer = styled.div`
    display:flex ;
 
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;  
    background-color : #${props =>props.color};
    margin:3px;
    display  :flex ;
    align-items:center;
    justify-content:center;
`;


const Center = styled.div`
    flex:1;
    padding :20px;
    ${mobile({display:"hidden"})}

`;

const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
 margin:0;
 padding:0;
 list-style:none; 
 display  :flex ;
 flex-wrap:wrap;
`
const ListItem = styled.li`
 width:50%;
 margin-bottom:30px;
 
`
const Right = styled.div`
    flex:1;
    padding :20px;
    ${mobile({backgroundColor:"#fff8f8"})}
    
`;

const ContactItem = styled.div`
    margin-bottom :20px;
    display:flex ;
    align-items:center;
`;
const Payment = styled.img`
   width:50%;
`;

export const Footer = () => {
    return (
        <Container> 
            <Left>
                <Logo>SHOPPING NOW</Logo>
                <Description>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
                 </Description>   
                 <SocialContainer>
                     <SocialIcon color ="3B5999">
                        <Facebook/>
                     </SocialIcon  >
                     <SocialIcon color ="E4405F">
                        <Instagram/>
                     </SocialIcon>
                     <SocialIcon color ="55ACEE">
                        <Twitter/>
                     </SocialIcon>
                     <SocialIcon color ="E60023">
                        <Pinterest/>
                     </SocialIcon>
                 </SocialContainer>
            </Left>
            <Center>
                <Title> Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style = { {marginRight : "10px"} } />
                     622 Cario Path , Middle East Egypt 98336
                </ContactItem>
                <ContactItem><Phone style = { {marginRight : "10px"} }/>
                   +1 234 56 78
                </ContactItem>
                <ContactItem><Mail style = { {marginRight : "10px"} }/>
                    contact@shoppingnow.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

            </Right>
        </Container>
    )
}
export default Footer;