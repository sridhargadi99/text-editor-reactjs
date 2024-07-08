import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
  background-size: cover;
`
export const TextEditorContainer = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  background-color: #1b1c22;
  background-size: cover;
  border-radius: 10px;
  padding: 15px;
`
export const TextEditorContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
`
export const TextEditorContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background-color: #25262c;
  border-radius: 8px;
  border: 1px solid #334155;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: #f8fafc;
`

export const TextEditorImage = styled.img`
  height: 70%;
  width: 80%;
`
export const TextEditorSubContainer1 = styled.ul`
  display: flex;
  border-bottom: 1px solid #334155;
  height: 10%;
  padding-left: 5px;
`
export const TextEditorSubContainerList = styled.li`
  list-style-type: none;
`
export const ButtonIcon = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 27px;
  background-color: transparent;
`

export const TextEditorSubContainer2 = styled.textarea`
  height: 90%;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: ${props => (props.boldIcon ? 'bold' : 'normal')};
  font-style: ${props => (props.italicIcon ? 'italic ' : 'normal')};
  text-decoration: ${props => (props.underlineIcon ? 'underline' : 'normal')};
  color: #f1f5f9;
  padding-left: 15px;
`
