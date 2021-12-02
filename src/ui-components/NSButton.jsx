/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function NSButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        View: {
          width: "290px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          height: "50px",
        },
        "View.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(0,0,0,1)",
          textAlign: "left",
          display: "flex",
          label: "NEXT",
          justifyContent: "flex-start",
          fontFamily: "Roboto",
          top: "11px",
          left: "114px",
          fontSize: "24px",
          lineHeight: "28.125px",
          position: "absolute",
          fontWeight: "700",
          direction: "column",
        },
        "View.View[0]": {
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(239.0625,18.92578125,18.92578125,1)",
          top: "0px",
          left: "0px",
          width: "290px",
          position: "absolute",
          height: "50px",
        },
      },
      variantValues: { property1: "Next" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="290px"
      padding="0px 0px 0px 0px"
      position="relative"
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
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="11px"
        left="114px"
        fontSize="24px"
        lineHeight="28.125px"
        position="absolute"
        fontWeight="700"
        direction="column"
        children="NEXT"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
