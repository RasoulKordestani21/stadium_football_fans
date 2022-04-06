export default function getBaseUrl() {
  // return process.env.REACT_APP_DEVELOPMENT_BASE_URL;
  if (window.location.href.includes("localhost")) {
    return "";
  }
  return process.env.REACT_APP_BASE_URL;
}
