import { axiosInstance } from "./axios";
interface QRResponse {
  response: Response;
}

interface Response {
  client_id: string;
  challenge_url: string;
  request_id: string;
  interval: number;
  allowed_confirmations: Allowedconfirmation[];
  version: number;
}

interface Allowedconfirmation {
  confirmation_type: number;
}
export const qrFetcher = (url: string) =>
  axiosInstance
    .post<QRResponse>(url, {
      device_friendly_name: "webDevice",
      platform_type: "web",
      device_details: "This a is web",
    })
    .then((res) => res.data);
