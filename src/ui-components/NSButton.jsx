/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function NSButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="290px"
      padding="0px 0px 0px 0px"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      height="50px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239.0625,18.92578125,18.92578125,1)"
        top="0px"
        left="0px"
        width="290px"
        position="absolute"
        height="50px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        display="flex"
        justifyContent="center"
        fontFamily="PT Sans"
        top="0px"
        left="0px"
        width="290px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="700"
        direction="column"
        height="50px"
        children="ButtonText"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
