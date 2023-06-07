import AxiosGet from '../util/apiGet';

const ApiKey = "ee764e4f853d88c4efeac1f15f738874";

const Headers = {"Authorization": `KakaoAK ${ApiKey}`};

const GetCoordinate = async (keyword) => {
    const EncodedKeyword = encodeURIComponent(keyword);
    let ApiUrl = `https://dapi.kakao.com/v2/local/search/address.json?page=1&size=10&query=${EncodedKeyword}&analyze_type=similar`;

    const apiresult = async () => {
        const apiResponse = await AxiosGet(ApiUrl, Headers);
        let point_x = apiResponse.documents[0].x;
        let point_y = apiResponse.documents[0].y;

        return {x: point_x, y: point_y}
    };

    const coordinate = await apiresult();

    return coordinate;

}

export default GetCoordinate;