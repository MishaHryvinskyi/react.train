import styled from '@emotion/styled';

export const Card = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 8px;
    border-radius: 4px;
`;

export const EventName = styled.h2`
margin-top: 0;
font-size: 14px;
line-height: 24px;
font-weight: 700;
letter-spacing: 0.5px;
text-transform: uppercase;
`;

export const Info = styled.p`
display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: black;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
`;

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff;
    
    background-color: ${props => {
        switch(props.eventType){
            case 'free':
                return 'green';
            case 'paid':
                return 'blue';
            case 'vip':
                return 'red';
                default: 
                return '#000';
        }
    }};
`;
// .icon {
//     display: block;
//     margin-right: 8px;
//     color:rgb(48, 46, 46);
// }


// .free {
//     background-color: green;
// }

// .paid {
//     background-color: blue;
// }

// .vip {
//     background-color: red;
// }