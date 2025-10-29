function InfoTitle({subtitle, text}) {
    return (
      <div>
        <h3 class="text-lg text-[#0D121C] font-medium leading-6">
          {subtitle}
        </h3>
        <span class="text-sm text-[#4F6E94] font-normal">
          {text}
        </span>
      </div>
    );
}

export default InfoTitle
