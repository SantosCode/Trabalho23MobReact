import React, {ReactElement} from "react";
import {
  BasicContainer,
  TouchableContainer,
  TextContainer,
  TrailingContainer,
  PrimaryTrailingText,
  LeadingContainer,
  TrailingIconAndTextContainer,
  SecondaryTrailingText,
  TrailingTextContainer,
} from "src/components/list-item/list-item.native.styles";
import {
  ListItemTrailingTypes,
  ListItemLeadingTypes,
  Props,
  ContainerType,
} from "src/components/list-item/types";
import {Divider} from "src/components/divider/divider.native";
import {LeadingIcon} from "src/components/list-item/icons/leading-icon.native";
import {TrailingIcon} from "src/components/list-item/icons/trailing-icon.native";
import {PrimaryContent} from "src/components/list-item/components/primary-content.native";
import {SecondaryContent} from "src/components/list-item/components/secondary-content.native";
import {TertiaryContent} from "src/components/list-item/components/tertiary-content.native";

export const renderLeading = ({
  leadingType,
  leadingIconName,
  leadingIconColor,
  leadingContainerProps,
}: Props): ReactElement | null => {
  if (leadingType === undefined) {
    return null;
  }

  let child: ReactElement | null = null;

  if (
    leadingType === ListItemLeadingTypes.icon ||
    leadingType === ListItemLeadingTypes.smallIcon
  ) {
    child = (
      <LeadingIcon
        iconColor={leadingIconColor}
        type={leadingType}
        leadingIconName={leadingIconName}
      />
    );
  }

  return (
    <LeadingContainer {...leadingContainerProps}>{child}</LeadingContainer>
  );
};

export const renderPrimaryTrailingText = ({
  trailingText,
  trailingTextProps,
}: Props): ReactElement => (
  <PrimaryTrailingText {...trailingTextProps}>
    {trailingText}
  </PrimaryTrailingText>
);

export const renderSecondaryTrailingText = ({
  secondaryTrailingText,
  secondaryTrailingTextProps,
}: Props): ReactElement | null => {
  if (secondaryTrailingText === undefined) return null;

  return (
    <SecondaryTrailingText {...secondaryTrailingTextProps}>
      {secondaryTrailingText}
    </SecondaryTrailingText>
  );
};

export const renderTrailingTexts = (
  props: Props,
  withMargin?: boolean,
): ReactElement => (
  <TrailingTextContainer withMargin={withMargin}>
    {renderSecondaryTrailingText(props)}
    {renderPrimaryTrailingText(props)}
  </TrailingTextContainer>
);

export const renderTrailing = ({
  trailingType,
  trailingIconName,
  trailingIconColor,
  trailingContainerProps,
  ...props
}: Props): ReactElement | null => {
  if (trailingType === undefined) {
    return null;
  }

  let child: ReactElement | null = null;

  if (trailingType === ListItemTrailingTypes.text) {
    child = renderTrailingTexts(props);
  }

  if (trailingType === ListItemTrailingTypes.icon) {
    child = (
      <TrailingIcon
        iconColor={trailingIconColor}
        trailingIconName={trailingIconName}
      />
    );
  }

  if (trailingType === ListItemTrailingTypes.textAndIcon) {
    child = (
      <TrailingIconAndTextContainer>
        {renderTrailingTexts(props, true)}
        <TrailingIcon
          iconColor={trailingIconColor}
          trailingIconName={trailingIconName}
        />
      </TrailingIconAndTextContainer>
    );
  }

  return (
    <TrailingContainer {...trailingContainerProps}>{child}</TrailingContainer>
  );
};

export const ListItem = (props: Props): ReactElement => {
  const {
    primaryText,
    secondaryText,
    tertiaryText,
    onPress,
    hasDivider = false,
    tertiaryContentTagProps,
    trailingTagProps,
    style,
    containerProps,
    textContainerProps,
    leadingType,
    primaryTextProps,
    secondaryTextProps,
    tertiaryTextProps,
  } = props;

  const Container: ContainerType =
    onPress === undefined ? BasicContainer : TouchableContainer;

  return (
    <>
      <Container
        onPress={onPress}
        hasLeading={leadingType !== undefined}
        style={style}
        {...containerProps}>
        {renderLeading(props)}
        <TextContainer {...textContainerProps}>
          <PrimaryContent
            text={primaryText}
            textProps={primaryTextProps}
            tagProps={trailingTagProps}
          />
          <SecondaryContent
            text={secondaryText}
            textProps={secondaryTextProps}
          />
          <TertiaryContent
            text={tertiaryText}
            tagProps={tertiaryContentTagProps}
            textProps={tertiaryTextProps}
          />
        </TextContainer>
        {renderTrailing(props)}
      </Container>
      {hasDivider && <Divider />}
    </>
  );
};
