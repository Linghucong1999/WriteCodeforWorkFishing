let arrCookie = [
    "BAIDU_SSP_lcr=https://cn.bing.com/",
    "uuid_tt_dd=10_30706508000-1698817769319-628994",
    "UserName=cheaphotel",
    "UserNick=cheaphotel",
    "AU=967",
    "UN=cheaphotel",
    "BT=1698903676234",
    "p_uid=U010000",
    "Hm_up_6bcd52f51e9b3dce32bec4a3997715ac=%7B%22islogin%22%3A%7B%22value%22%3A%221%22%2C%22scope%22%3A1%7D%2C%22isonline%22%3A%7B%22value%22%3A%221%22%2C%22scope%22%3A1%7D%2C%22isvip%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%2C%22uid_%22%3A%7B%22value%22%3A%22cheaphotel%22%2C%22scope%22%3A1%7D%7D",
    "log_Id_pv=120",
    "log_Id_view=2975",
    "log_Id_click=42",
    "cheaphotelcomment_new=1622556066000",
    "c_first_ref=cn.bing.com",
    "c_segment=2",
    "Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1701226499,1701325270,1701673759,1702258927",
    "log_Id_click=43",
    "log_Id_pv=121",
    "log_Id_view=2976",
    "SidecHatdocDescBoxNum=true",
    "creative_btn_mp=3",
    "dc_session_id=10_1702622843218.857593",
    "firstDie=1",
    "dc_sid=7066363f9200a0bd8968f389d911099a",
    "c_first_page=https%3A//blog.csdn.net/qq_39138295/article/details/89888787",
    "__gads=ID=7db9a86e9de6bae4-2292a95a3de50060:T=1698817799:RT=1702625914:S=ALNI_MZylL8gMLTJD-8M39t2Eq9L0jw_cA",
    "__gpi=UID=00000c7d9eb9e16d:T=1698817799:RT=1702625914:S=ALNI_MbBnGdAObu0J6v8O2tSqzbayLzluw",
    "c_dsid=11_1702626099063.287489",
    "c_pref=https%3A//cn.bing.com/",
    "c_ref=https%3A//blog.csdn.net/qq_39138295/article/details/89888787",
    "c_page_id=default",
    "Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1702626102",
    "dc_tos=s5p6sw"
]

function cookieFind(arrCookie, name) {
   
    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split("=");
        if (arr[0] === name) {
            return arr[1];
        }
    }
    return null;
}

console.log(cookieFind(arrCookie, "x-csrf-token"))