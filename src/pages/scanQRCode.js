// @flow
import * as React from "react";
import { useState } from "react";
import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo/logo";
import styled from "styled-components";

import Button from "../components/button/button";
import Input from "../components/Input/input";
import axios from "axios";

import { toDataURL, setImageURL } from "qrcode";

const FormComp = styled.form`
  background-image: linear-gradient(180deg, aqua, #c886c8);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:800px
  min-width:400px;
  width:50vw;
  margin:auto
`;

const ScanQRCode = () => {
  const navigate = useNavigate();
  //   console.log(useNavigate());
  const [generateTxt, setGenerateTxt] = useState("");
  const [qrLink, setQrLink] = useState();
  // const [qrImage, setQrImage] = useState();
  let response;
  const getQrCode = async () => {
    response = await toDataURL(generateTxt);
    console.log(response);
    setQrLink(response);
  };

  const [chairNumber, setChairNumber] = useState();
  return (
    <MainLayout backPath={"/"}>
      <Logo>اسکن صفحه مورد نظر</Logo>
      <FormComp>
        <Input
          labelText={"شماره صفحه را وارد کنید"}
          onChange={e => {
            setChairNumber(e.target.value);
          }}
          type="number"
        />
        <Button
          onClick={() => {
            navigate("/displayPageNumber", { state: { chairNumber } });
          }}
        >
          یافتن شماره ماسک
        </Button>

        <Input
          labelText={"متن مورد نظر را وارد کنید."}
          onChange={e => {
            setGenerateTxt(e.target.value);
          }}
          type="text"
        />
        <Button onClick={getQrCode}> دریافت کد </Button>
        <p style={{ backgroundColor: "white" }}>{qrLink}</p>
        <a href={qrLink} download>
          <img src={qrLink} alt={qrLink} />
        </a>
      </FormComp>
    </MainLayout>
  );
};

export default ScanQRCode;
