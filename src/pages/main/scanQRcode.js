import { useState, useRef } from "react";
import MainLayout from "../../components/layout/mainLayout";
import clsx from "clsx";
import scanBg from "../../assets/images/scan.png";

import { toDataURL, setImageURL } from "qrcode";

import { QrReader } from "react-qr-reader";

const ScanQrCode = props => {
  const qrRef = useRef(null);
  const [generateTxt, setGenerateTxt] = useState("");
  const [qrLink, setQrLink] = useState();
  const [scanResultFile, setScanResultFile] = useState("");
  //   const [switchCamera, setSwitchCamera] = useState(false);

  //   let response;
  //   const getQrCode = async () => {
  //     response = await toDataURL(generateTxt);
  //     console.log(response);
  //     setQrLink(response);
  //   };

  //   const onScanFile = () => {
  //     qrRef.current.openImageDialog();
  //     // console.log("salam");
  //   };

  // const [qrImage, setQrImage] = useState();

  return (
    <MainLayout>
      <div
        className={clsx(
          `w-[216px] h-[216px] absolute top-[40%] left-[50%] translate-x-[-50%]
           translate-y-[-50%] shadow-2xl rounded-[14px] bg-white flex flex-col`
        )}
      >
        <QrReader
          ref={qrRef}
          constraints={{ facingMode: "environment" }}
          facingMode="user"
          scanDelay={2000}
          style={{ width: "100%" }}
          onResult={(result, error) => {
            if (!!result) {
              setScanResultFile(result?.text);
              console.log("this is result", result);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          legacyMode
        />
        <img src={scanBg} alt="scanbg" className={clsx("p-8 absolute")} />
        {/* <div className={clsx("w-[135px] h-[135px]  m-auto rounded-[14px] border-[2px] border-green-700 border-dashed")}>
          <hr />
        </div> */}
        <p>{scanResultFile}</p>
        <p className={"mt-12"}>.لطفا بارکد روی صندلی را اسکن کنید </p>
      </div>
    </MainLayout>
  );
};

export default ScanQrCode;
