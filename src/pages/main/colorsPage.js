import ColorCardsComp from "../../components/colorCards/colorCards";
import MainLayout from "../../components/layout/mainLayout";
import clsx from "clsx";
import BottomNavigation from "../../components/bottomNavigation";
import { useLocation } from "react-router-dom";
import { instance } from "../../config/api";
import { useQuery } from "react-query";

import { convertTo1DArray, findPixelColorId } from "../../helper/imageManager";
import { baseColors } from "../../config/colors";

// import { BottomNavigation } from "";

const ColorsPage = props => {
  const imageId = useLocation().state.imageId;
  const { data } = useQuery("image-data", () =>
    instance.get("/api/peronData/scanQrCode")
  );

  return (
    <MainLayout colorsPage={true}>
      {console.log(
        data &&
          findPixelColorId(
            convertTo1DArray(JSON.parse(data?.data?.image)),
            +imageId
          ),
        imageId
      )}
      <div
        className={clsx(
          "flex  flex-row-reverse justify-center w-[100vw] h-[50vh]"
        )}
      >
        <div
          className={clsx(
            "w-[80%] relative flex h-[100%] justify-center items-center"
          )}
        >
          {baseColors.map((ele, index) => {
            console.log(index);
            return (
              <ColorCardsComp
                style={{
                  backgroundColor: ele.colorCode,
                  zIndex: `${index}`,
                  left: `${index * 20 - 20}px`,
                  color: ele.id === 9 ? "#000000" : "#ffffff"
                }}
                data={{
                  name: ele.name,
                  number: index + 1
                }}
                // data={{
                //   cardColor: "bg-" + ele.name
                //   // index: "z-[" + ele.id + "]"
                //   // zIndex: "z-[" + ele.id + "]"
                // }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3 className={clsx("mb-5")}>کارت شما کارت شماره 3 به رنگ آبی</h3>
        <p className={clsx("mb-2")}>کاربر عزیز</p>
        <p className={clsx("w-[80%] mx-auto")}>
          کارتی که تو باید بالا ببری کارت شماره 3 به رنگ آبی است. بعد از شنیدن
          اعلام شروع به مدت 1 دقیقه کارت رو بالای سرت ببر.میخواهیم تو بازه دقایق
          20 تا 30 حریف رو میخکوب کنیم منتظر باش
        </p>
      </div>
      <BottomNavigation />
    </MainLayout>
  );
};

export default ColorsPage;
