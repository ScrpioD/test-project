import { get,post } from "./http";

let prefix = "/api" //h5地址
export const sildeData = (params) => {
	return post(prefix + "/visual/view", params);
}