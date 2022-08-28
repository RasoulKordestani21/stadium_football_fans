import ColorCardsComp from "../../components/colorCards/colorCards";
import MainLayout from "../../components/layout/mainLayout";
import clsx from "clsx";
import BottomNavigation from "../../components/bottomNavigation";
// import { BottomNavigation } from "";

const ColorsPage = props => {
  return (
    <MainLayout colorsPage={true}>
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
          <ColorCardsComp
            data={{
              color: "bg-blue-500",
              name: "آبی",
              index: "z-[1]",
              number: 10,
              right: "right-[80px]"
            }}
          />
          <ColorCardsComp
            data={{
              color: "bg-orange-600",
              name: "قهوه ای",
              index: "z-[2]",
              number: 1,
              right: "right-[40px]"
            }}
          />
          <ColorCardsComp
            data={{
              color: "bg-green-500",
              name: "سبز",
              index: "z-[3]",
              number: 8,
              right: "right-0"
            }}
          />
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
