import React from "react";
import { Select } from "antd";
//@ts-ignore
import { useCountries } from "use-react-countries";
import { Controller } from "react-hook-form";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CountrySelect = ({
  control,
  name,
  error,
}: {
  control: any;
  name: string;
  error: string;
}) => {
  const { countries } = useCountries();
  const t = useTranslations("CountrySelect");
  const EditedCountries = React.useMemo(() => {
    const filteredCountries = countries.filter(
      (country: any) => country.name != "Western Sahara"
    );
    return filteredCountries;
  }, [countries]);
  return (
    <div className="w-full h-full">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            className="!h-[55px] w-full !bg-transparent border rounded-lg border-[#8d8a8a] !focus:bg-transparent"
            showSearch
            allowClear
            value={field.value}
            onChange={(value) => field.onChange(value)}
            placeholder={t("SelectCountry")}
            optionFilterProp="labelText"
            filterOption={(input, option) =>
              option?.labelText?.toLowerCase().includes(input.toLowerCase())
            }
            options={EditedCountries.map((country: any) => ({
              value: country.name,
              labelText: `${country.name} (${country.countryCallingCode})`,
              label: (
                <div className="flex items-center">
                  <Image
                    src={country.flags.png}
                    alt={country.name}
                    className="mx-2"
                    width={20}
                    height={20}
                  />
                  {country.name} ({country.countryCallingCode})
                </div>
              ),
            }))}
          />
        )}
      />
      {error && <p className="text-red-500 text-[14px]">{error}</p>}
    </div>
  );
};

export default CountrySelect;
