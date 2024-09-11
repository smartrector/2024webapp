import React from "react";

function VisualComp() {
  return (
    <>
      <div className="visual">
        <div className="container mx-auto h-auto md:h-80 py-10 flex text-white items-center px-4 text-center md:text-left">
          <div>
            <h2 className="text-4xl mb-3">안녕하세요</h2>
            <p className="mb-3">
              현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신{" "}
            </p>
            <div className="px-4 py-2 bg-blue-200 inline-block rounded-md text-gray-900 hover:bg-blue-400 hover:text-white">
              PRODUCT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualComp;
