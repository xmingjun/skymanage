import TIM from 'tim-js-sdk';
// import COS from "cos-js-sdk-v5";


const options = {
  SDKAppID: 1400463533 // 接入时需要将0替换为您的即时通信应用的 SDKAppID
};
// 创建 SDK 实例，TIM.create() 方法对于同一个 SDKAppID 只会返回同一份实例
const tim = TIM.create(options); // SDK 实例通常用 tim 表示
const TIMData = TIM
// 注册 COS SDK 插件
// tim.registerPlugin({'cos-js-sdk': COS});



/* eslint-disable require-jsdoc */
function genTestUserSig(userID) {
  const SDKAPPID = 1400463533;
  const EXPIRETIME = 604800;
  const SECRETKEY = 'c624ecc63285aac558699e458c2a5f57113c489f3a21bcac09c9129fbeddafaf';
 
  if (SDKAPPID === '' || SECRETKEY === '') {
    alert(
      '请先配置好您的账号信息： SDKAPPID 及 SECRETKEY ' +
        '\r\n\r\nPlease configure your SDKAPPID/SECRETKEY in js/debug/GenerateTestUserSig.js'
    );
  }
  const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
  const userSig = generator.genTestUserSig(userID);
  return {
    sdkAppId: SDKAPPID,
    userSig: userSig
  };
}

export default {
	tim,
	TIMData,
	genTestUserSig
}