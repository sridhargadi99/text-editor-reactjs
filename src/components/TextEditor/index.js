import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  TextEditorContainer1,
  Heading,
  TextEditorImage,
  TextEditorContainer2,
  TextEditorSubContainer1,
  TextEditorSubContainerList,
  ButtonIcon,
  TextEditorSubContainer2,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textAreaInput: '',
    boldIcon: false,
    italicIcon: false,
    underlineIcon: false,
  }

  onClickBoldIcon = () => {
    const {boldIcon} = this.state
    this.setState({
      boldIcon: !boldIcon,
    })
  }

  onClickItalicIcon = () => {
    const {italicIcon} = this.state
    this.setState({
      italicIcon: !italicIcon,
    })
  }

  onClickUnderLineIcon = () => {
    const {underlineIcon} = this.state
    this.setState({
      underlineIcon: !underlineIcon,
    })
  }

  onChangeTextAreaContent = event =>
    this.setState({textAreaInput: event.target.value})

  render() {
    const {textAreaInput, boldIcon, italicIcon, underlineIcon} = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <TextEditorContainer1>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </TextEditorContainer1>
          <TextEditorContainer2>
            <TextEditorSubContainer1>
              <TextEditorSubContainerList>
                <ButtonIcon type="button" onClick={this.onClickBoldIcon}>
                  <VscBold
                    data-testid="bold"
                    color={boldIcon ? '#faff00' : '#f1f5f9'}
                  />
                </ButtonIcon>
              </TextEditorSubContainerList>
              <TextEditorSubContainerList>
                <ButtonIcon type="button" onClick={this.onClickItalicIcon}>
                  <GoItalic
                    data-testid="italic"
                    color={italicIcon ? '#faff00' : '#f1f5f9'}
                  />
                </ButtonIcon>
              </TextEditorSubContainerList>
              <TextEditorSubContainerList>
                <ButtonIcon
                  type="button"
                  onClick={this.onClickUnderLineIcon}
                  underlineIcon={underlineIcon}
                >
                  <AiOutlineUnderline
                    data-testid="underline"
                    color={underlineIcon ? '#faff00' : '#f1f5f9'}
                  />
                </ButtonIcon>
              </TextEditorSubContainerList>
            </TextEditorSubContainer1>
            <TextEditorSubContainer2
              type="text"
              onChange={this.onChangeTextAreaContent}
              value={textAreaInput}
              boldIcon={boldIcon}
              italicIcon={italicIcon}
              underlineIcon={underlineIcon}
            />
          </TextEditorContainer2>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
