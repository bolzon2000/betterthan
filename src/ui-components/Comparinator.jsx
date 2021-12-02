/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Comparinator(props) {
  const { selectedGauge, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="420px"
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
        height="420px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Image
        width="57px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="292px"
        left="82px"
        height="49px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="354px"
        left="20px"
        width="280px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="34px"
        children="Is Nikhil Better Than"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Image
        width="52px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="292px"
        left="185px"
        height="46px"
        {...getOverrideProps(overrides, "View.Image[1]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="388px"
        left="20px"
        width="280px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="32px"
        children="Potatoes?"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Image
        width="280px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0px"
        left="20px"
        height="280px"
        {...getOverrideProps(overrides, "View.Image[2]")}
      ></Image>
    </View>
  );
}
