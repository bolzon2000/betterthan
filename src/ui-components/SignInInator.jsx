/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SignInInator(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="24px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="PT Sans"
        top="4px"
        left="252px"
        width="48px"
        fontSize="12px"
        lineHeight="14.0625px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="20px"
        children="Sign Out"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="PT Sans"
        top="4px"
        left="20px"
        width="74px"
        fontSize="12px"
        lineHeight="14.0625px"
        position="absolute"
        paddingLeft="20px"
        fontWeight="400"
        direction="column"
        height="20px"
        children="Welcome Back"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="PT Sans"
        top="4px"
        left="98px"
        width="163px"
        fontSize="12px"
        lineHeight="14.0625px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="20px"
        children="default"
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
    </View>
  );
}
