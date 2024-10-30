const rest_api_key = "a87c5485c788a8a30b03b139d3818495";
const redirect_url = "http://localhost:5173/member/kakao";
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";

export const getKakoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_url}&response_type=code`;
  return kakaoURL;
};
