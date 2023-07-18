import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #ebe5ea;
`

export const DataCard = styled.section`

    width: 300px;
    height: auto;

    border: 1px solid black;

    background-color: #f3f3f3;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 25px;

        color: gray;
        border-bottom: 1px solid black;
    }

    ul{
        display: flex;

        list-style-type: none;

        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: calc(100%/4);
            padding: 10px;

            border-right: 1px solid black;
        
            &:last-child{
                border-right: none;
            }

            .percentage{
                margin-top: 5px;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
`