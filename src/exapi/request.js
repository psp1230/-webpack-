import 'jquery'

const request = (apiUrl, { baseURL, method, params, data, headers, dataType }) => {
  baseURL = baseURL || 'https://example.com'
  dataType = dataType || 'json'
  const url = baseURL + apiUrl

  return new Promise((resolve) => resolve($.ajax({
    url,
    method,
    dataType,
    params,
    data,
    headers,
    success: res => res,
    error: err => err
  })))
}

export default request