import React, { Component } from "react";
import Styled from "styled-components";
import { i18n } from "@Renderer/i18n";

import { IconArrowInBoxUp } from "@Renderer/components/atoms/Icons";
import Title from "../../component/Title";
import Callout from "../../component/Callout";
import { Select } from "../../component/Select";
import { RegularButton } from "../../component/Button";

const Styles = Styled.div`
display: flex;
flex-wrap: wrap;
height: inherit;
h4 {
    font-size: 16px;
    flex: 0 0 100%;
    width: 100%;
    margin-top: 24px;
}
.callOut {
    width: 100%;
    flex: 0 0 100%;
}
.w100 {
    width: 100%;
    flex: 0 0 100%;
}
.dropdown {
    max-width: 290px;
}
`;

class MacroTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  // update value when dropdown is changed
  changeSelected = selected => {
    this.setState({ selected: parseInt(selected, 10) });
  };

  changeSelectedStd = selected => {
    this.setState({ selected: parseInt(selected, 10) });
    this.props.onMacrosPress(parseInt(selected, 10) + 53852);
  };

  // sendMacro function to props onMacrosPress function to send macro to MacroCreator
  sendMacro = () => {
    this.props.onMacrosPress(parseInt(this.state.selected) + 53852);
  };

  render() {
    const { macros, selectedMacro, keyCode, isStandardView } = this.props;
    const { selected } = this.state;
    const macrosAux = macros.map((item, index) => {
      const macrosContainer = {};
      if (item.name === "") {
        macrosContainer.text = i18n.general.noname;
      } else {
        macrosContainer.text = item.name;
      }
      macrosContainer.value = index;
      macrosContainer.disabled = index === selectedMacro;
      return macrosContainer;
    });

    return (
      <Styles className={`${isStandardView ? "standardViewTab" : ""} tabsMacro`}>
        <div className="tabContentWrapper">
          {isStandardView ? (
            <>
              <Title text={i18n.editor.standardView.macros.title} headingLevel={3} />

              <Callout
                content={i18n.editor.standardView.macros.callOut}
                size="sm"
                className="w100"
                hasVideo
                media="MfTUvFrHLsE"
                videoTitle="13 Time-saving MACROS For Your Keyboard"
                videoDuration="5:24"
              />
            </>
          ) : (
            <Callout content={i18n.editor.macros.macroTab.callout} className="w100" size="sm" />
          )}
          <Title text={i18n.editor.macros.macroTab.label} headingLevel={4} />
          <div className="w100">
            <Select
              value={
                macrosAux.length > 0 && macrosAux[this.state.selected] !== undefined && macrosAux[this.state.selected].text
                  ? macrosAux[this.state.selected].value
                  : "Loading"
              }
              listElements={macrosAux}
              onSelect={isStandardView ? this.changeSelectedStd : this.changeSelected}
            />
          </div>
        </div>
        {!isStandardView ? (
          <div className="tabSaveButton">
            <RegularButton
              buttonText={i18n.editor.macros.textTabs.buttonText}
              styles="outline gradient"
              onClick={this.sendMacro}
              icoSVG={<IconArrowInBoxUp />}
              icoPosition="right"
            />
          </div>
        ) : null}
      </Styles>
    );
  }
}

export default MacroTab;
