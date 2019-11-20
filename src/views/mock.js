/* eslint-disable */
var Mock = require('mockjs')
Mock.setup({
  timeout: 1000
})

Mock.mock(/\/DataScreenHandler/, 'post', function (options) {
  // console.log(options.body)
  var body = JSON.parse(options.body)
  switch (body.method) {
    // 1.编辑品牌信息接口
    case 'H5.EditBrandInfo':
      return EditBrandInfo(body)
    // 2.查询品牌信息接口
    case 'H5.QueryBrandInfo':
      return QueryBrandInfo(body)
    // 3.编辑品牌资讯信息接口
    case 'H5.EditInformationInfo':
      return EditInformationInfo(body)
    // 4.查询品牌资讯信息接口
    case 'H5.QueryInformationInfo':
      return QueryInformationInfo(body)
    // 5.编辑产品信息接口
    case 'H5.EditProductInfo':
      return EditProductInfo(body)
    // 6.查询产品信息接口
    case 'H5.QueryProductInfo':
      return QueryProductInfo(body)
      default:
        return {
          "IsSuccess": true,
          "ErrCode": null,
          "ErrMessage": null,
          "AcitivityId": "e1a4c25a-3b5e-48da-a91c-dc3ddd29cae9",
          "ResponseData": {
            "Url": "http://admin.zhengpin.so/UploadFiles/d10e4cb2e4d7460a811823f40aaf814f.mp4"
          }
        }
  }
})
// 1.编辑品牌信息接口
function EditBrandInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "e1a4c25a-3b5e-48da-a91c-dc3ddd29cae9",
    "ResponseData": {
      "Status": "200",
      "Message": "提交成功",
      "Result": null
    }
  }
}
// 2.查询品牌信息接口
function QueryBrandInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "3ef4c7af-9446-4153-9603-5de41ba03164",
    "ResponseData": {
      "Status": "Success",
      "Message": null,
      "Result": {
        "BrandAptitudeList": [
          {
            "AttachmentUri": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
            "Sort":"0",
            "Title": "gg",
            "Url": "http://wxuat.zhengpin.so"
          }
        ],
        "OrgBannerList": [
          {
            "AttachmentUri": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
            "Title": "20171115",
            "Url": ""
          }
        ],
        "BrandVideo": "",
        "VideoID": "91d44304f4d348668f7b45d5d5d6b570",
        "BrandVideoMainImg": "",
        "BrandVideoTitle": "",
        "QRCode": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
        "Brandid": "68a3115b0da04885aa4265b45954e3f1",
        "Brand_Name": "中国家居正品查询平台",
        "Brand_Code": null,
        "Brand_Memo": "",
        "Brand_RegistrationCi": null,
        "Brand_RegistrationPerson": null,
        "Brand_RegistrationDate": null,
        "Brand_Remark": "",
        "Organizationid": null,
        "Parent_Brandid": null,
        "Factoryid": null,
        "Flag": null,
        "Maker": null,
        "Row_Create_Date": null,
        "Ver": null,
        "Auditflag": null,
        "AuditUser": null,
        "Auditdate": null,
        "AuditInfo": null,
        "Green_Grade": null,
        "Row_Updatetime": null,
        "Row_Updateuser": null,
        
      }
    }
  }
}
// 3.编辑品牌资讯信息接口
function EditInformationInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "e88dc514-216d-4fb8-bea1-f9fede37e895",
    "ResponseData": {
      "Status": "200",
      "Message": "提交成功",
      "Result": null
    }
  }
}
// 4.查询品牌资讯信息接口
function QueryInformationInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "d324d746-297f-4b9c-b6af-7b8208460487",
    "ResponseData": {
      "Status": "Success",
      "Message": null,
      "Result": {
        "ID": null,
        "Title": "天生爱睡 爽够了没",
        "SubTitle":"我是副标题",
        "Url": "http://mp.weixin.qq.com/s?__biz=MzAwOTAxMDE0NA==&mid=505044570&idx=1&sn=fdc61e7be8667e82abab850afc4a23ab&chksm=0088d0d537ff59c3a8103919e8e4c50f13e8072a3c6603efb3d69b008a4e04ddd5090b3fbcb2#rd",
        "CreateTime": "2017-09-16 14:20:56",
        "SourceType": 1,
        "IsApprove": "True",
        "SourceId": "CAB6081DDBFC40CEBD517653359845C9    ",
        "ApproveStatus": "True",
        "ImageUrl": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
        "Sort": 2,
        "IsShowMain":true,
        "SourceName": "klf0915",
        "ApproveRemark": "",
        "ApproveTime": "2017-09-22 11:41:46",
        "Content": "123",
        "IsHead": 1,
        "VideoUrl": "",
        "Likes": 0,
        "ReadNum": 0,
        "VideoTitle": null,
        "VideoMainImg": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg",
        "VideoType": null,
        "AttachmentID": null,
        "Flag": null,
        "VideoID": null
      }
    }
  }
}
// 5.编辑产品信息接口
function EditProductInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "4d7ddde2-fd8e-4c76-8d93-ee1c213aa27f",
    "ResponseData": {
      "Status": "200",
      "Message": "提交成功",
      "Result": null
    }
  }
}
// 6.查询产品信息接口
function QueryProductInfo(body) {
  console.log(body)
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "c2dd9bae-c2fe-4862-891f-0bc01aaac648",
    "ResponseData": {
      "Status": null,
      "Message": null,
      "Result": [
        {
          "Id": "77ed9c4007a042bfbe3b529d3ea81cad    ",
          "Title": "标准产品详情",
          "CreateId": "CAB6081DDBFC40CEBD517653359845C9    ",
          "CreateName": "klf1588",
          "CreateTime": "2017-09-21 18:52:06",
          "PicId": "45f51720716640189359b1eb9f047c92",
          "PicTitle": "卡路福温莎床垫",
          "PicContent": "<p><br/></p><p><img src=\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506009990740&di=e983a21d502c84a586f1f6795a3450ce&imgtype=0&src=http%3A%2F%2Fmi2.jia.com%2Fgroup1%2FM00%2F48%2FBC%2FCgooa1PXbGeNtGnDAAA7sIA10Xc871_500x500.jpg\"/></p><p>CALUFUL卡路福床垫专注于用科技缔造健康，将生态睡眠理念带入床垫之内，通过创新研究的负氧离子技术，将负氧离子融到床垫中。温莎床垫有一种让你“睡在森林里”的感觉，从而达到深度睡眠的理想境界。</p><p><br/></p><p><img src=\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506010008896&di=5edd5e51babb3237d50e784f07f0128d&imgtype=0&src=http%3A%2F%2Fwww.jxjtsc.com%2Fuserfiles%2Fimage%2F20160811%2F11142750e0b5ab963c6090.jpg\"/></p><p><span style=\"max-width: 100%; white-space: normal; widows: 1; font-family: 宋体; font-size: 14px; line-height: 21px; text-indent: 2em; word-wrap: break-word !important;\"><span style=\"font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; text-indent: 2em;\"><span style=\"text-decoration:underline;\"><span style=\"color:#c00000\">如果说什么家具对于我们最重要的话，小编觉得一定是床垫。人们常说，家有资产千万，睡不过三尺。床垫对于我们的日常生活的重要性是不可替代的，优秀床垫还有助于提高我们的睡眠质量。卡路福床垫怎么样呢？卡路福床垫是最知名的床垫品牌，设计符合人体条件，有助于您轻松入睡。</span></span></span></span></p><h2 style=\"padding-top: 15px; font-size: 16px; font-weight: bold; vertical-align: baseline; line-height: 18px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; white-space: normal; text-indent: 2em;\"><strong>卡路福床垫怎么样—卡路福床垫有什么优点</strong></h2><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>1、品牌优势</strong>。卡路福床垫一个蕴涵高雅与诗意的名字，它的意义早已超越了床垫的概念，是提升生活品质、释放生命能量的贴身伴侣。卡路福床垫每个细节均凝聚了二十多年专注的成就与才华，成为改善人类睡眠工程领域的佼佼者。&nbsp;</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>2、口碑良好</strong>。卡路福床垫多年来屡获殊荣，努力提升产品品质和价值，以客户睡眠质量百分之百满意为使命，注重市场声誉和口碑。卡路福床垫赢得了国内外客户的广泛信赖，建立了卓越的企业信誉。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>3、质量上乘</strong>。卡路福床垫选择当今国际最优的配置，每一个细微的环节，都保证了卡路福床垫的品质及其稳定性，为您提供健康、环保、绿色的安全睡眠。卡路福床垫出众的材质，可以让您拥有一种温暖、柔和的使用感觉，在身心宁静的状况下进入睡眠。</p><h2 style=\"padding-top: 15px; font-size: 16px; font-weight: bold; vertical-align: baseline; line-height: 18px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; white-space: normal; text-indent: 2em;\"><strong>卡路福床垫怎么样—卡路福床垫的保养小技巧</strong></h2><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>1、翻转使受力均匀</strong>。卡路福床垫开始使用后，第一年需每隔三个月做前后方向和上下面的翻转动作，让卡路福床垫每一部分受力均匀，增加床垫使用年限。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>2、保持空气流通</strong>。为确保卡路福床垫内材不受潮，并增加床垫的舒适度，床垫使用的房间中务必须保持空气流通。切记勿使用水清洗床垫，也不要在床上吸烟或将床垫置于靠近火焰处。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\"><strong>3、注意清洁方法</strong>。卡路福床垫床上用品清洗时，正常情况下会有不同程度的缩水，建议全部要干洗。此外棉制品易起皱，弹性稍逊，耐酸不耐碱，所以不宜在100以上的高温下长时间处理。需使用中性洗涤剂，不能用漂白剂，水温30以下为宜，晾干后以中温熨烫，折叠好存放于干燥处。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding-top: 10px; padding-bottom: 10px; color: rgb(102, 102, 102); font-family: &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, Verdana, 宋体; font-size: 14px; white-space: normal; text-indent: 2em;\">卡路福床垫怎么样就为您介绍到这里了，如果您还有什么疑问的话，不妨再多查找一些资料了解一下。卡路福床垫在床上用品市场上很火热，很受中高端消费者朋友们的青睐，选用的材质天然无污染，不论是青少年还是老年消费者都适合使用。此外，卡路福床垫还有多种设计类型，您可以针对自己喜欢的类型选购。</p><p><span style=\"max-width: 100%; color: rgb(62, 62, 62); white-space: normal; widows: 1; font-family: 宋体; font-size: 14px; line-height: 21px; text-indent: 2em; word-wrap: break-word !important;\"><br/></span><br/></p>",
          "ParameterId": "19b6aa2a544142b5910dc6eece1bb876",
          "ParameterTitle": "标准规格参数",
          "Parameters": "[{\"Key\":\"长度\",\"Value\":\"1800mm\"},{\"Key\":\"宽度\",\"Value\":\"900mm\"},{\"Key\":\"高度\",\"Value\":\"1000mm\"},{\"Key\":\"尺寸\",\"Value\":\"200x300m\"}]",
          "Status": 1,
          "AuditReason": "",
          "FileId": null,
          "FileTitle": null,
          "FilePath": null,
          "FileContent": null
        }
      ]
    }
  }
}
// 7.判断标题是否存在接口
function QueryProductTitle() {
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "f92ca2c1-5534-4896-9624-d701d9bf3089",
    "ResponseData": {
      "Status": "-100",
      "Message": "标题不存在",
      "Result": null
    }
  }
}
// 8.查询视频列表
function QueryVideo() {
  return {
    "IsSuccess": true,
    "ErrCode": null,
    "ErrMessage": null,
    "AcitivityId": "5e3b1040-8e7f-46f4-978f-95e0421d06c5",
    "ResponseData": {
      "Status": "200",
      "Message": "查询成功",
      "Result": [
        {
          "Title": "342342",
          "ATTACHMENTID": "2b57f216bf5a414ebfcedcacc157fb70",
          "ATTACHMENT_NO": 1256358,
          "ATTACHMENT_URI": "/UploadFiles/f425047a9a664f6e8dc20e26ff9d8589.mp4",
          "ATTACHMENT_OLDFILENAME": "f425047a9a664f6e8dc20e26ff9d8589.mp4",
          "ATTACHMENT_NEWFILENAME": "f425047a9a664f6e8dc20e26ff9d8589.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711161715585919",
          "ROW_CREATETIME": "2017-11-16 17:15:58",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "5555",
          "ATTACHMENTID": "c720b2202ba846bba290654f65ecdb6b",
          "ATTACHMENT_NO": 1256373,
          "ATTACHMENT_URI": "/UploadFiles/ab46662802274be7851188c98ad8e623.mp4",
          "ATTACHMENT_OLDFILENAME": "ab46662802274be7851188c98ad8e623.mp4",
          "ATTACHMENT_NEWFILENAME": "ab46662802274be7851188c98ad8e623.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711221013487447",
          "ROW_CREATETIME": "2017-11-22 10:13:48",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "卡路福视频",
          "ATTACHMENTID": "53d5aa37d6ec43029c3855fc0568460c",
          "ATTACHMENT_NO": 1256333,
          "ATTACHMENT_URI": "/UploadFiles/ec9661006d914f35b7a1577916b0c6b1.mp4",
          "ATTACHMENT_OLDFILENAME": "ec9661006d914f35b7a1577916b0c6b1.mp4",
          "ATTACHMENT_NEWFILENAME": "ec9661006d914f35b7a1577916b0c6b1.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711061001552304",
          "ROW_CREATETIME": "2017-11-06 10:01:55",
          "ROW_CREATEUSER": null,
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "1111",
          "ATTACHMENTID": "4fa4622170ee482981d4483a9cedf534",
          "ATTACHMENT_NO": 1256345,
          "ATTACHMENT_URI": "/UploadFiles/49d689788ae94d9eaef8d4e89c0a90e4.mp4",
          "ATTACHMENT_OLDFILENAME": "49d689788ae94d9eaef8d4e89c0a90e4.mp4",
          "ATTACHMENT_NEWFILENAME": "49d689788ae94d9eaef8d4e89c0a90e4.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711101708390137",
          "ROW_CREATETIME": "2017-11-10 17:08:39",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "555",
          "ATTACHMENTID": "3581b5ce4d6040fdb165df5439b4a41a",
          "ATTACHMENT_NO": 1256346,
          "ATTACHMENT_URI": "/UploadFiles/a7018df318124a9693aa3dc600cba796.mp4",
          "ATTACHMENT_OLDFILENAME": "a7018df318124a9693aa3dc600cba796.mp4",
          "ATTACHMENT_NEWFILENAME": "a7018df318124a9693aa3dc600cba796.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711101709466554",
          "ROW_CREATETIME": "2017-11-10 17:09:46",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "测试2",
          "ATTACHMENTID": "a26048f04ee74a939ad4e841f1e4ff81",
          "ATTACHMENT_NO": 1256362,
          "ATTACHMENT_URI": "/UploadFiles/f2ea44edfa1f4deab2a65a00f0e045e0.mp4",
          "ATTACHMENT_OLDFILENAME": "f2ea44edfa1f4deab2a65a00f0e045e0.mp4",
          "ATTACHMENT_NEWFILENAME": "f2ea44edfa1f4deab2a65a00f0e045e0.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711171549084509",
          "ROW_CREATETIME": "2017-11-17 15:49:08",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "3123123",
          "ATTACHMENTID": "ff40d122d0d741f0941aeab74f9a9cc3",
          "ATTACHMENT_NO": 1256332,
          "ATTACHMENT_URI": "/UploadFiles/04002a6ca9584fd4a11a448634894213.mp4",
          "ATTACHMENT_OLDFILENAME": "04002a6ca9584fd4a11a448634894213.mp4",
          "ATTACHMENT_NEWFILENAME": "04002a6ca9584fd4a11a448634894213.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711061001481168",
          "ROW_CREATETIME": "2017-11-06 10:01:48",
          "ROW_CREATEUSER": null,
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        },
        {
          "Title": "测试1",
          "ATTACHMENTID": "f232bef1a2bd45eab5bcd070fa3a619d",
          "ATTACHMENT_NO": 1256361,
          "ATTACHMENT_URI": "/UploadFiles/dc6aedfe6bdf46eab0c35d01f20bb268.mp4",
          "ATTACHMENT_OLDFILENAME": "dc6aedfe6bdf46eab0c35d01f20bb268.mp4",
          "ATTACHMENT_NEWFILENAME": "dc6aedfe6bdf46eab0c35d01f20bb268.mp4",
          "ATTACHMENT_MEMO": null,
          "FLAG": "1",
          "VER": "201711171548526949",
          "ROW_CREATETIME": "2017-11-17 15:48:52",
          "ROW_CREATEUSER": "516D85CB8339491EAE57C8777AF0E43B",
          "ROW_UPDATETIME": null,
          "ROW_UPDATEUSER": "516D85CB8339491EAE57C8777AF0E43B"
        }
      ]
    }
  }
}


// 编辑品牌信息
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.EditBrandInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"ORGANIZATIONID": "92230BC5DEFC4E5FA0286B7CB0ED6324","BrandRemark": "13122139536","VideoTitel": "潮流1号品牌申请加入","VideoMainImg": "110","VideoUrl": "ahao","VideoID": "E22B3C136A01492D9A3F2525158BC5E3","VideoType": "2019","QRCodeURL": "hello world","BrandBannerList":[{ "Title": "20","AttachmentUri": "2019","Url": "20"},{ "Title": "2019","AttachmentUri": "2019","Url": "2019"}] , "OrgAptitudeList":[{ "Title": "2019","AttachmentUri": "2019Att","Url": "2019URL"},{ "Title": "2019","AttachmentUri": "20Att","Url": "20URL"}]}
// 查询品牌内容
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.QueryBrandInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"Brandid":"68a3115b0da04885aa4265b45954e3f1","FactoryId":"000003","CatagoryCode":"92000388"}
// 编辑品牌资讯
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.EditInformationInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"ID":"0247e74813f84fe6a59251896d01a54c","Title": "天宫一号","Url": "www.baidu.com","CreateTime": "","SourceType": "110","IsApprove": "0","SourceId": "C647BE920EED42FAB12522DDC926343F","ApproveStatus": "0","ImageUrl": "image-url","Sort": "0","SourceName": "source-name","ApproveRemark": "Remark","Content": "hello Content","IsHead": "1","VideoUrl": "www.youku.com","likes": "2","readnum": "3","VideoTitle": "视频标题","VideoMainImg": "视频主图URL","VideoType": "视频类型"}
// 查询品牌资讯
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.QueryInformationInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"Id":"6b2e79703ada40e99049ffbc1dbc5572 ","FactoryId":"000003","CatagoryCode":"92000388"}
// 编辑产品信息
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.EditProductInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"ID":"bd2aa754c5a64b049e376355a484804e","Title":"潮流1号","PicId":"13122139536","FileId":"fbbecb42633c401b8143c8f8c8298d78","ParameterId":"672fcd456c144814b004a88efc8cfa1e","PicName": "ahao","Status": "2019","AuditReason": "hello world","FileTitle": "hello world","FilePath": "hello world","Content": "hello world","GroupName": "hello world","ParamtersTitle": "hello world","Parameters": "hello world","CreateId": "hello world","CreateName": "hello world","CreateTime": "hello world"}
// 查询产品信息
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.QueryProductInfo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"id":"77ed9c4007a042bfbe3b529d3ea81cad"}
// 判断产品标题是否存在
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.QueryProductTitle
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"Title":"标准产品详情","id":"CAB6081DDBFC40CEBD517653359845C9"}
// 查询视频
// app_key:644F026929AB4AEDB6F7E2F3CDE1DE11
// access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPQXV0aC1Kd3QiLCJleHAiOjE1NDQyNTMwNjQsImFwcElkIjoiQWxhZGRpbiIsImFwcFNlY3JldCI6Im9wZW4gc2VzYW1lIiwiZXhwaXJlc19pbiI6ODY0MDAsIk9wZW5JZCI6IjE5YWU0NzIzLWM1YWQtNDhhZi04M2I5LWE0NTRmMThlNzY2YyJ9.vuEr_iQZ9UZnNJcdbiiyYJ700niUln6g_OoY_omgT3s
// method:H5.QueryVideo
// v:1.0
// sign:453047e0d1cac56d46c3bd91aedd5ee2
// format:json
// BizParams:{"OrganizationId":"CAB6081DDBFC40CEBD517653359845C9"}
