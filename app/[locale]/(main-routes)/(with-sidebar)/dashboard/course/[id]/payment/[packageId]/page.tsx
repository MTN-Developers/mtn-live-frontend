"use client";
import PaymentForm from "@/app/components/payment/PaymentForm";
import NotFoundComponent from "@/app/components/shared/NotFound";
import { getOne } from "@/services/server";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import PaymentInvoice from "@/app/components/payment/PaymentInvoice";
import { Course_package, getPackage } from "@/types/packages";
interface PromoCode {
  code: string;
  discount_percentage: number;
}
const Page = ({
  params,
}: {
  params: {
    packageId: string;
    id: string;
  };
}) => {
  const { id, packageId } = params;
  const [promoCodeList, setPromoCodeList] = React.useState<PromoCode[]>([]);
  const { data, isLoading } = useSWR<getPackage>(
    `/package/${packageId}`,
    getOne
  );

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin indicator={<LoadingOutlined />} />
      </div>
    );
  }

  if (!data?.data && isLoading == false) {
    return <NotFoundComponent />;
  }

  if (isLoading == false && data?.data == undefined) {
    return <NotFoundComponent />;
  }
  if (isLoading == false && data?.data?.course_id != id) {
    return <NotFoundComponent />;
  }
  return (
    <div className="size-full flex-wrap px-4 py-10 lg:p-0 gap-0 flex justify-between h-full bg-white rounded-lg shadow-md">
      <div className="w-full lg:w-1/2 h-[600px]  lg:flex relative">
        <div
          className="absolute w-full"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
          }}
        >
          <PaymentInvoice
            packageData={data?.data as Course_package}
            promoCodeList={promoCodeList}
            setPromoCodeList={setPromoCodeList}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 py-[28px]">
        <div className="w-[540px] min-h-full h-fit p-4 max-w-full flex justify-center flex-col">
          <div className="flex flex-col gap-4">
            <Image
              src={"/images/mtn-live.svg"}
              width={150}
              height={150}
              className="mb-4"
              alt="MTN Live"
            />

            <p className="text-[32px] items-center gap-2 lg:text-4xl font-['Cairo'] font-medium leading-[normal] tracking-[0.72px]">
              ادفع الأن
            </p>

            <p className="w-fit flex items-center gap-2 max-w-full text-[#8D93A1] font-['Cairo'] text-xs font-normal leading-[150%] tracking-[0.24px]">
              قم بادخال بياناتك واستمتع بتجربه مستخدم ممتازه
            </p>
          </div>

          <PaymentForm
            promoCodeList={promoCodeList}
            Package={data?.data as Course_package}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
