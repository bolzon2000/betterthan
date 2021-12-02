/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function NSheader(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="57px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0)"
        top="0px"
        left="0px"
        width="320px"
        position="absolute"
        height="57px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="16px"
        left="15px"
        width="260px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="700"
        direction="column"
        height="26px"
        children="BetterThanNikhilinator"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Image
        width="27px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="17px"
        left="277px"
        height="25px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
    </View>
  );
}
