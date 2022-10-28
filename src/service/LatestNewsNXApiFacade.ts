// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import Global from "../utils/Global";
import Http from "../utils/HttpCommon";

class LatestNewsNXApiFacade {
  getBlog = async (pageNo: string) => {
    try {
      const res = await Http.get(`${Global.BlogPostApi + "&page=" + pageNo}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  getShortener = async (url: string) => {
    const res = await Http.get(`${Global.ShortenerApi + url}`);
    return res.data;
  };
}
export default new LatestNewsNXApiFacade();
