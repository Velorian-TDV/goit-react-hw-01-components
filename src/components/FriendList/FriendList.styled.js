import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #e4f3ed;
`

export const Friends = styled.ul`
    list-style-type: none;

    background-color: #f3f3f3;
    
    li{
        display: flex;
        align-items: center;

        min-width: 200px;
        padding: 5px 10px;

        border: 1px solid black;

        &:nth-child(even){
            border-top: none;
            border-bottom: none;
        }

        p{
            margin-left: 15px;
        }

        img{
            margin-left: 5px;
        }

        [data-status="true"] {
            width: 15px;
            height: 15px;
            background-color: green;
            border-radius: 50%;
        }

        [data-status="false"] {
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
        }
    }

`