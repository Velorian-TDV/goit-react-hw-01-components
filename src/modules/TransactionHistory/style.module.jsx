import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    padding: 20px;

    background-color: #e5eaeb;
`

export const Table = styled.table`
    
    width: 700px;
    border: 1px solid black;

    thead{
        background-color: #64b8b8;
        color: white;

        tr{
            th{
                padding: 10px;
            }
        }
    }

    tbody{
        
        color: #464646;
        .type{
            padding-left: 50px;
            text-transform: capitalize;
        }

        tr{

            td{
                
                max-width: 75px;
                padding: 5px;

                &:nth-child(2n) {
                    text-align: center;
                }
                &:nth-child(3n) {
                    text-align: center;
                }

            }
            
            &:nth-child(even){
                background-color: #83a7e5;
            }
        }

    }

`