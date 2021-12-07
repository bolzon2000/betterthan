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
  const { comparisons, overrides: overridesProp, ...rest } = props;
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
        width="48px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="292px"
        left="82px"
        height="48px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="PT Sans"
        top="345px"
        left="20px"
        width="280px"
        fontSize="12px"
        lineHeight="14.0625px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="18px"
        children="Is Nikhil Better Than"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Image
        width="48px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="292px"
        left="185px"
        height="48px"
        {...getOverrideProps(overrides, "View.Image[1]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="center"
        display="flex"
        justifyContent="center"
        fontFamily="PT Sans"
        top="357px"
        left="20px"
        width="280px"
        fontSize="18px"
        lineHeight="21.09375px"
        position="absolute"
        fontWeight="700"
        direction="column"
        children={comparisons?.description}
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Image
        padding="0px 0px 0px 0px"
        top="0px"
        left="20px"
        src={comparisons?.itemURL}
        width="280px"
        position="absolute"
        height="280px"
        {...getOverrideProps(overrides, "View.Image[2]")}
      ></Image>
    </View>
  );
}
