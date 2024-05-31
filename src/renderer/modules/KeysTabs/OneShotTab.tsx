import React from "react";
import Styled from "styled-components";

import { i18n } from "@Renderer/i18n";

import Callout from "@Renderer/components/molecules/Callout/Callout";
import Heading from "@Renderer/components/atoms/Heading";
import { ButtonConfig } from "../../component/Button";

const Styles = Styled.div`
display: flex;
flex-wrap: wrap;
height: inherit;
h4 {
    font-size: 16px;
    flex: 0 0 100%;
}
.cardButtons {
  margin-top: 8px;
}
.tabContentWrapper {
  width: 100%;
}
&.tabsOneShot {
  .cardButtons {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
  }
  .cardButtons + .cardButtons {
      margin-top: 2px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
  }
}
`;

interface OneShotTabProps {
  keyCode: any;
  isStandardView: boolean;
  onKeySelect: (keycode: number) => void;
}

const OneShotTab = ({keyCode, onKeySelect, isStandardView} : OneShotTabProps) => (
    <Styles className={`${isStandardView ? "standardViewTab" : ""} tabsOneShot`}>
        <div className="tabContentWrapper">
          {isStandardView ? (
            <>
              <Heading headingLevel={3} renderAs="h3">
                {i18n.editor.standardView.oneShot.title}
              </Heading>
              <Callout size="sm" className="mt-4">
                <p>{i18n.editor.standardView.callOut}</p>
              </Callout>
            </>
          ) : null}

          <div className="cardButtons">
            <Heading headingLevel={4} renderAs="h4">
              {i18n.editor.standardView.oneShot.titleModifiers}
            </Heading>
            <p className="description">{i18n.editor.standardView.oneShot.modifiersDescription}</p>
            <div className="groupButtons groupButtonsGrid">
              <div className="buttonsGrid">
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.leftControl}
                  onClick={() => onKeySelect(OneShotDeltaMod + 0)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 0 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.leftShift}
                  onClick={() => onKeySelect(OneShotDeltaMod + 1)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 1 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.leftAlt}
                  onClick={() => onKeySelect(OneShotDeltaMod + 2)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 2 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.leftOS}
                  onClick={() => onKeySelect(OneShotDeltaMod + 3)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 3 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.rightControl}
                  onClick={() => onKeySelect(OneShotDeltaMod + 4)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 4 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.rightShift}
                  onClick={() => onKeySelect(OneShotDeltaMod + 5)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 5 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.altGr}
                  onClick={() => onKeySelect(OneShotDeltaMod + 6)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 6 : false}
                />
                <ButtonConfig
                  buttonText={i18n.editor.standardView.oneShot.rightOS}
                  onClick={() => onKeySelect(OneShotDeltaMod + 7)}
                  selected={isStandardView ? keyCode === OneShotDeltaMod + 7 : false}
                />
              </div>
            </div>
          </div>
          <div className="cardButtons">
            <Heading headingLevel={4} renderAs="h4">
              {i18n.editor.standardView.oneShot.titleLayers}
            </Heading>
            <p className="description">{i18n.editor.standardView.oneShot.layersDescription}</p>
            <div className="groupButtons">
              <ButtonConfig
                buttonText="1"
                onClick={() => onKeySelect(OneShotDeltaLayer + 0)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 0 : false}
              />
              <ButtonConfig
                buttonText="2"
                onClick={() => onKeySelect(OneShotDeltaLayer + 1)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 1 : false}
              />
              <ButtonConfig
                buttonText="3"
                onClick={() => onKeySelect(OneShotDeltaLayer + 2)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 2 : false}
              />
              <ButtonConfig
                buttonText="4"
                onClick={() => onKeySelect(OneShotDeltaLayer + 3)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 3 : false}
              />
              <ButtonConfig
                buttonText="5"
                onClick={() => onKeySelect(OneShotDeltaLayer + 4)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 4 : false}
              />
              <ButtonConfig
                buttonText="6"
                onClick={() => onKeySelect(OneShotDeltaLayer + 5)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 5 : false}
              />
              <ButtonConfig
                buttonText="7"
                onClick={() => onKeySelect(OneShotDeltaLayer + 6)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 6 : false}
              />
              <ButtonConfig
                buttonText="8"
                onClick={() => onKeySelect(OneShotDeltaLayer + 7)}
                selected={isStandardView ? keyCode === OneShotDeltaLayer + 7 : false}
              />
              {/* <ButtonConfig
                buttonText="9"
                onClick={() => onKeySelect(OneShotDeltaLayer + 8)}
                selected={isStandardView ? (keyCode === OneShotDeltaLayer + 8 ? true : false) : false}
              />
              <ButtonConfig
                buttonText="10"
                onClick={() => onKeySelect(OneShotDeltaLayer + 9)}
                selected={isStandardView ? (keyCode === OneShotDeltaLayer + 9 ? true : false) : false}
              /> */}
            </div>
          </div>
        </div>
      </Styles>
  )

export default OneShotTab;
