import { Platform } from "react-native";
import { ApiClient } from "./ApiClient";

const baseUrl =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

export const api = new ApiClient({
  baseUrl: baseUrl,
  timeoutMs: 1000 * 60 * 5, // 5 minutes
});
