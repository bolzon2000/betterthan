/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function NSTextImageBlock(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="400px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,0)"
        top="0px"
        left="0px"
        width="320px"
        position="absolute"
        height="400px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Image
        width="290px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="25px"
        left="15px"
        height="150px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="200px"
        left="15px"
        width="285px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="119px"
        children="We all like Nikhil, but there are probably things we  like way better. Let’s find out!"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
