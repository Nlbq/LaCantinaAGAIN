import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button2 = styled(Link)`
    // background: ${({ primary }) => (primary ? 'transparent' : 'transparent')};
    background: transparent;
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 5px;
    height: 25px;
    color: #fff;
    border: 1px solid #fff;
    width: 125px;
    height: 35px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    // padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    // color: ${({primary}) => (primary ? '#fff' : '#fff')};
    // font-size: ${({ big }) => (big ? '16px' : '14px')};

    &:hover{
        //transform: translateY(-2px);
        transform: scale(1.1);
        background: #cd853f;
        border: none;
        
    }
`