const InfoBanner = () => {
    return (
      <div className="self-stretch bg-homeaccrediancom-nero flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-homeaccrediancom-royal-blue-15 flex flex-row items-center justify-center py-4 px-5 box-border max-w-full">
          <div className="flex flex-row items-center justify-start gap-[11px] max-w-full mq900:flex-wrap">
            <div className="relative leading-[28px] font-medium inline-block max-w-full">
              Navigate your ideal career path with tailored expert advice
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-2 text-center text-mid text-homeaccrediancom-royal-blue">
              <div className="flex flex-col items-center justify-start">
                <a className="[text-decoration:none] relative leading-[28px] capitalize font-medium text-[inherit] inline-block min-w-[123px]">
                  Contact Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoBanner;
  