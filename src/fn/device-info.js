const isMobile = 
  navigator.userAgent.match(/Android/i) || 
  navigator.userAgent.match(/iPhone/i) 
  ? true 
  : false;

const device = {
  isMobile,
}

export default device;
