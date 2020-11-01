const devBaseURL = "http://183.63.251.142:8877" // 开发环境
const proBaseURL = "http://183.63.251.142:8877" // 生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL
export const TIMEOUT = 50000