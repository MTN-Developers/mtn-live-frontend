"use client";
import RightSideCourseComp from "@/app/components/course/RightSideCourseComp";
import { getOne } from "@/services/server";
import { Spin, TabsProps } from "antd";
import React from "react";
import useSWR from "swr";
import { LoadingOutlined } from "@ant-design/icons";
import LeftSideCourseComp from "@/app/components/course/LeftSideCourseComp";
import Image from "next/image";
import strokGroup from "@/assets/images/Group 754.png";
import strokOne from "@/assets/images/Pattern.png";
import strokTwo from "@/assets/images/Pattern-1.png";
const items: TabsProps["items"] = [
  {
    key: "1",
    label: <span style={{ marginInline: 16 }}>عن الكورس</span>,
    children: (
      <div>
        <h2 className="text-[#007AFE] text-start font-[pnu] w-fit text-2xl font-bold leading-8 mt-8 ">
          عن الكورس
        </h2>
        <p className="w-full max-w-full mt-4 text-[#656565] text-right font-[pnu] text-base font-normal leading-[160%]">
          لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
          النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
          التطبيق لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
          مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
          التى يولدها التطبيق. لقد تم توليد هذا النص من ....{" "}
          <span className="text-blue-500 font-bold cursor-pointer">
            قرأة المزيد
          </span>
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: "عن المحاضر",
    children: (
      <div>
        <h2 className="text-[#007AFE] text-start font-[pnu] text-2xl font-bold leading-8 mt-8 tracking-[-0.24px]">
          عن المحاضرة
        </h2>
        <p className="w-[701px] mt-4 text-[#656565] text-right font-[pnu] text-base font-normal leading-[160%]">
          لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
          النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى أن
          تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
          الحروف التى يولدها التطبيق. لقد تم توليد هذا النص من ....{" "}
          <span className="text-blue-500 font-bold cursor-pointer">
            قرأة المزيد
          </span>
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: "أراء العملاء",
    children: (
      <div>
        <h2 className="text-[#007AFE] text-start font-[pnu] text-2xl font-bold leading-8 mt-8 tracking-[-0.24px]">
          أراء العملاء{" "}
        </h2>
        <p className="w-[701px] mt-4 text-[#656565] text-right font-[pnu] text-base font-normal leading-[160%]">
          لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
          النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
          التطبيق لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك النص أو
          العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى الحروف التى
          يولدها التطبيق. لقد تم توليد هذا النص من ....{" "}
          <span className="text-blue-500 font-bold cursor-pointer">
            قرأة المزيد
          </span>
        </p>
      </div>
    ),
  },
];
const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const {
    data: course,
    error,
    isLoading,
  } = useSWR<getCourse>(`/course/${id}`, getOne);
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="default" indicator={<LoadingOutlined spin />} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Error: {error?.message}</p>
      </div>
    );
  }

  return (
    <div className="flex gap-7 flex-wrap w-full relative mt-6">
      <Image
        src={strokGroup}
        alt="stroke"
        width={800}
        height={800}
        className="fixed z-10 top-0 pointer-events-none right-0 w-[900px]"
      />
      <Image
        src={strokOne}
        alt="stroke"
        width={800}
        height={800}
        className="fixed z-10 top-40 pointer-events-none  left-[268px] w-[180px]"
      />
      <Image
        src={strokTwo}
        alt="stroke"
        width={800}
        height={800}
        className="fixed top-12 z-10 pointer-events-none left-[176px] w-[180px]"
      />
      <RightSideCourseComp course={course?.data as SubscribedCourse} />{" "}
      <LeftSideCourseComp
        course={course?.data as SubscribedCourse}
        items={items}
        onChange={() => {
          console.log("changed");
        }}
      />
    </div>
  );
};

export default Page;
