import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #dbeff5;
`

export const UserCard = styled.div`
    
    width: 300px;
    height: 400px;

    border: 1px solid black;
    background-color: #cfdce9;

    .description{
        position: relative;
        height: 70%;
        padding: 10px;

        img{
            width: 200px;
            height: 200px;

            display: block;
            margin: auto;

            border: .1px solid black;
            border-radius: 50%;

            background-color: #f3f3f3;
        }

        .name{
            font-size: 24px;
            color: black;
            font-weight: bold;
        }

        p{
            text-align: center;
            margin-top: 5px;
            color: gray;
        }
    }

    .stats{
        display: flex;
        position: relative;

        height: calc(30% - 30px);
        margin-top: 30px;

        list-style-type: none;

        li{
            display: flex;
            flex-direction: column;
            
            width: calc(100%/3);

            border: 1px solid black;
            border-bottom: none;
            border-left: none;
            text-align: center;
            background-color: #b9dbf4;

            &:last-child{
                border-right: none;
            }

            span{
                display: flex;
                justify-content: center;
                flex-grow: 1;
                
                &:nth-child(1){
                    align-items: end;
                }
                &:nth-child(2){
                    align-items: start;
                    font-weight: bold;
                }
            }
        }
    }
`